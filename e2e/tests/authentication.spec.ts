import { test, expect } from '@playwright/test'

test.describe('Init', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })
  
  test.afterEach(async ({ page }) => {
    await page.close()
  })

  test('should see header', async ({ page }) => {

    await expect(page.getByTestId(`header`)).toBeVisible()
  })

  test('should connect',async({page})=>{
    await page.goto('/')
    await page.hover('.tabler-icon')
    await expect(page.locator('[href="/signin"]')).not.toBeVisible();
    
  })

})
