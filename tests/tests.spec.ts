import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto(`/`)

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Gabriel Software/)
})

test('Leitbild link', async ({ page }) => {
  await page.goto(`/`)
  await page.getByRole('link', { name: 'Leitbild' }).click()
  await expect(page).toHaveURL(/.*leitbild/)
})

test('Projekte link', async ({ page }) => {
  await page.goto(`/`)
  await page.getByRole('link', { name: 'Projekte' }).click()
  await expect(page).toHaveURL(/.*projekte/)
})

test('Technologien link', async ({ page }) => {
  await page.goto(`/`)
  await page.getByRole('link', { name: 'Technologien' }).click()
  await expect(page).toHaveURL(/.*technologien/)
})

test('Kontakt link', async ({ page }) => {
  await page.goto(`/`)
  await page.getByRole('link', { name: 'Kontakt' }).click()
  await expect(page).toHaveURL(/.*kontakt/)
})

test('Projekte sidenav mediterranean-migration', async ({ page }) => {
  await page.goto(`/projekte`)
  await page.getByRole('link', { name: 'mediterranean- migration.com' }).click()
  await expect(
    page.getByRole('link', { name: 'mediterranean-migration.com' }),
  ).toBeVisible()
})

test('Projekte sidenav arteigenschaften', async ({ page }) => {
  await page.goto(`/projekte`)
  await page.getByRole('link', { name: 'arteigenschaften.ch' }).click()
  await expect(
    page.getByRole('heading', { name: 'arteigenschaften.ch' }),
  ).toBeVisible()
})

test('Projekte sidenav apflora', async ({ page }) => {
  await page.goto(`/projekte`)
  await page.getByRole('link', { name: 'apflora.ch' }).click()
  await expect(page.getByRole('heading', { name: 'apflora.ch' })).toBeVisible()
})

test('Projekte sidenav AWEL-Indikatoren', async ({ page }) => {
  await page.goto(`/projekte`)
  await page.getByRole('link', { name: 'AWEL-Indikatoren' }).click()
  await expect(
    page.getByRole('heading', { name: 'AWEL-Indikatoren' }),
  ).toBeVisible()
})

test('Projekte sidenav vermehrung', async ({ page }) => {
  await page.goto(`/projekte`)
  await page.getByRole('link', { name: 'vermehrung.ch' }).click()
  await expect(
    page.getByRole('heading', { name: 'vermehrung.ch' }),
  ).toBeVisible()
})

test('Projekte sidenav AWEL-Personal', async ({ page }) => {
  await page.goto(`/projekte`)
  await page.getByRole('link', { name: 'AWEL-Personal' }).click()
  await expect(
    page.getByRole('heading', { name: 'AWEL-Personal' }),
  ).toBeVisible()
})

test('Projekte sidenav Kapla', async ({ page }) => {
  await page.goto(`/projekte`)
  await page.getByRole('link', { name: 'Kapla' }).click()
  await expect(page.getByRole('heading', { name: 'Kapla' })).toBeVisible()
})
