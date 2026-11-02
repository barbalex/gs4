// bumps the version in package.json, then builds and deploys to production.
// usage: npm run deploy [patch|minor|major] (default: patch)
import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const type = process.argv[2] ?? 'patch'
if (!['patch', 'minor', 'major'].includes(type)) {
  console.error(`unknown bump type "${type}" — use patch, minor or major`)
  process.exit(1)
}

// bump the version in package.json
const pkgFile = path.join(
  path.dirname(path.dirname(fileURLToPath(import.meta.url))),
  'package.json',
)
const pkg = JSON.parse(readFileSync(pkgFile, 'utf8'))
const parts = pkg.version.split('.').map(Number)
if (type === 'major') {
  parts[0]++
  parts[1] = 0
  parts[2] = 0
} else if (type === 'minor') {
  parts[1]++
  parts[2] = 0
} else {
  parts[2]++
}
pkg.version = parts.join('.')
writeFileSync(pkgFile, JSON.stringify(pkg, null, 2) + '\n')
console.log(`version to deploy: ${pkg.version}`)

// build and deploy
for (const [cmd, args] of [
  ['vercel', ['build', '--prod']],
  ['vercel', ['deploy', '--prebuilt', '--prod']],
]) {
  console.log(`$ ${cmd} ${args.join(' ')}`)
  execFileSync(cmd, args, { stdio: 'inherit' })
}
