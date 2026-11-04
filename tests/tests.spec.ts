import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto(`/`)
  await expect(page).toHaveTitle(/Gabriel Software/)
})

test('Home link', async ({ page }) => {
  await page.goto(`/leitbild`)
  await page.getByRole('link', { name: 'Gabriel Software' }).click()
  await expect(page).toHaveURL('/')
})

test('Leitbild link', async ({ page }) => {
  await page.goto(`/`)
  await page.getByRole('link', { name: 'Leitbild' }).click()
  // exact match, no trailing slash: the sw precache manifest lists
  // pages slash-less and serves its 404 fallback otherwise
  await expect(page).toHaveURL(/\/leitbild$/)
})

test('Projekte link', async ({ page }) => {
  await page.goto(`/`)
  await page.getByRole('link', { name: 'Projekte' }).click()
  await expect(page).toHaveURL(/\/projekte$/)
})

test('Technologien link', async ({ page }) => {
  await page.goto(`/`)
  await page.getByRole('link', { name: 'Technologien' }).click()
  await expect(page).toHaveURL(/\/technologien$/)
})

test('Kontakt link', async ({ page }) => {
  await page.goto(`/`)
  await page.getByRole('link', { name: 'Kontakt' }).click()
  await expect(page).toHaveURL(/\/kontakt$/)
})

test('theme toggle cycles modes in the navbar', async ({ page }) => {
  await page.goto(`/`)
  const themeToggle = page.locator('.navbar > .theme-toggle')
  await expect(themeToggle).toBeVisible()
  await expect(themeToggle).toHaveAccessibleName('Darstellung: wie System')
  await themeToggle.click()
  await expect(page.locator('html')).toHaveAttribute('data-theme-mode', 'light')
  await expect(themeToggle).toHaveAccessibleName('Darstellung: hell')
  await themeToggle.click()
  await expect(page.locator('html')).toHaveAttribute('data-theme-mode', 'dark')
  await expect(themeToggle).toHaveAccessibleName('Darstellung: dunkel')
})

test('theme toggle folds into the hamburger menu on narrow viewports', async ({
  page,
}) => {
  await page.setViewportSize({ width: 360, height: 800 })
  await page.goto(`/`)
  await expect(page.locator('.nav-menu .theme-toggle')).toBeAttached()
  await page.getByRole('button', { name: 'Menü öffnen' }).click()
  const themeToggle = page.locator('.nav-menu .theme-toggle')
  await expect(themeToggle).toBeVisible()
  // clicking cycles the mode without closing the menu
  await themeToggle.click()
  await expect(page.locator('html')).toHaveAttribute('data-theme-mode', 'light')
  await expect(themeToggle).toHaveAccessibleName('Darstellung: hell')
  await expect(page.locator('.nav-menu')).toBeVisible()
  // widening the viewport moves the theme toggle back into the navbar
  await page.setViewportSize({ width: 1280, height: 800 })
  await expect(page.locator('.navbar > .theme-toggle')).toBeVisible()
  await expect(page.locator('.nav-menu .theme-toggle')).toHaveCount(0)
})

test('Projekte sidenav mediterranean-migration', async ({ page }) => {
  await page.goto(`/projekte`)
  await page.getByRole('link', { name: 'mediterranean- migration.com' }).click()
  await expect(
    page.getByRole('heading', { name: 'mediterranean-migration.com' }),
  ).toBeInViewport()
})

test('Projekte sidenav arteigenschaften', async ({ page }) => {
  await page.goto(`/projekte`)
  await page.getByRole('link', { name: 'arteigenschaften.ch' }).click()
  await expect(
    page.getByRole('heading', { name: 'arteigenschaften.ch' }),
  ).toBeInViewport()
})

test('Projekte sidenav apflora', async ({ page }) => {
  await page.goto(`/projekte`)
  await page.getByRole('link', { name: 'apflora.ch' }).click()
  await expect(
    page.getByRole('heading', { name: 'apflora.ch' }),
  ).toBeInViewport()
})

test('Projekte sidenav AWEL-Indikatoren', async ({ page }) => {
  await page.goto(`/projekte`)
  await page.getByRole('link', { name: 'AWEL-Indikatoren' }).click()
  await expect(
    page.getByRole('heading', { name: 'AWEL-Indikatoren' }),
  ).toBeInViewport()
})

test('Projekte sidenav vermehrung', async ({ page }) => {
  await page.goto(`/projekte`)
  await page.getByRole('link', { name: 'vermehrung.ch' }).click()
  await expect(
    page.getByRole('heading', { name: 'vermehrung.ch' }),
  ).toBeInViewport()
})

test('Projekte sidenav AWEL-Personal', async ({ page }) => {
  await page.goto(`/projekte`)
  await page.getByRole('link', { name: 'AWEL-Personal' }).click()
  await expect(
    page.getByRole('heading', { name: 'AWEL-Personal' }),
  ).toBeInViewport()
})

test('Projekte sidenav Kapla', async ({ page }) => {
  await page.goto(`/projekte`)
  await page.getByRole('link', { name: 'Kapla' }).click()
  await expect(page.getByRole('heading', { name: 'Kapla' })).toBeInViewport()
})
