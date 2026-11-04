import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { test } from 'node:test'
import assert from 'node:assert/strict'

// The service worker precaches every page under its exact, slash-less
// URL ('/leitbild', not '/leitbild/') and its navigateFallback ('/404')
// answers any navigation that misses the precache — even while online.
// A link whose URL isn't in the manifest therefore renders the 404 page
// instead of the target. This asserts that every internal link in the
// built pages resolves to a precached URL.

const dist = 'dist'

// subresources don't navigate; only page links must match the manifest
const assetExtensions =
  /\.(webp|png|jpe?g|gif|svg|ico|css|js|mjs|json|xml|txt|pdf|woff2?|webmanifest)$/i

const collectHtmlFiles = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    return statSync(path).isDirectory()
      ? collectHtmlFiles(path)
      : path.endsWith('.html')
        ? [path]
        : []
  })

// vite-pwa injects the manifest into sw.js as {url:`leitbild`,revision:`…`}
const extractPrecacheUrls = () => {
  const sw = readFileSync(join(dist, 'sw.js'), 'utf8')
  return new Set(
    [...sw.matchAll(/url:`([^`]+)`/g)].map(([, url]) =>
      url.startsWith('/') ? url : `/${url}`,
    ),
  )
}

const extractInternalLinks = (htmlFiles) => {
  const links = new Map() // url -> [file, …] for actionable failures
  for (const file of htmlFiles) {
    const html = readFileSync(file, 'utf8')
    for (const match of html.matchAll(/<a\b[^>]*\shref="([^"]*)"/g)) {
      const href = match[1]
      if (!href.startsWith('/') || href.startsWith('//')) continue
      const url = href.replace(/[?#].*$/, '')
      if (assetExtensions.test(url)) continue
      if (!links.has(url)) links.set(url, [])
      links.get(url).push(file)
    }
  }
  return links
}

const htmlFiles = collectHtmlFiles(dist)
const precacheUrls = extractPrecacheUrls()

test('every internal link resolves to a precached url', () => {
  const links = extractInternalLinks(htmlFiles)
  assert.ok(links.size > 0, 'no internal links found — did the build run?')
  const unresolved = [...links].filter(([url]) => !precacheUrls.has(url))
  for (const [url, files] of unresolved) {
    assert.fail(
      `${url} (linked from ${files.map((f) => relative(dist, f)).join(', ')}) ` +
        'is not in the sw precache manifest; the service worker would serve ' +
        'the 404 fallback for it. Links and precache urls must match exactly, ' +
        `including the trailing slash ('/leitbild' is precached, '/leitbild/' is not).`,
    )
  }
})

test('every built page is precached', () => {
  const pages = htmlFiles
    .filter((file) => file.endsWith('index.html'))
    .map((file) => `/${relative(dist, join(file, '..')).replaceAll('\\', '/')}`)
  for (const page of pages) {
    assert.ok(
      precacheUrls.has(page === '/.' ? '/' : page),
      `${page} was built but is not in the sw precache manifest`,
    )
  }
})
