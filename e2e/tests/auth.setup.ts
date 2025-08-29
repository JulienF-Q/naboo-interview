import { test as setup, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const authFile = path.join(__dirname, '/.auth/user.json');
/**
 * Sets the authentication to the account that will be uses across the e2e test
 */
setup('authenticate', async ({ page }) => {
    await page.goto(process.env.BASE_URL + '/signin')
    await page.getByPlaceholder('your@email.com').fill(process.env.TEST_USER!) // email input
    await page.getByPlaceholder('*****').fill(process.env.TEST_PASSWORD!) // password input 
    await page.locator('.mantine-1wpc1xj.mantine-Button-inner').click() // Validate button click 
    await page.waitForURL(process.env.BASE_URL!)
    await page.hover('.tabler-icon')
    await expect(page.locator('[href="/signin"]')).not.toBeVisible();
     await page.context().storageState({ path: authFile });
    
})