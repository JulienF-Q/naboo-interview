import { defineConfig,devices  } from '@playwright/test'

import dotenv from 'dotenv';
dotenv.config({path : 'e2e/.env'});

export default defineConfig({
  testDir: './tests',
  use : {
    testIdAttribute : 'data-testid'

  },
  projects: [
    { name: 'setup', 
      testMatch: /.*\.setup\.ts/ 
    },
    {
      name: 'app_chromium',
      testMatch: '**/*.spec.ts',
      use: {
        baseURL: process.env.BASE_URL,
        viewport: { width: 1920, height: 1080 },
        ignoreHTTPSErrors: true,
        bypassCSP: true,
        browserName: 'chromium',
      },
      dependencies: ['setup'],
    },
    {
      name: 'app_firefox',
      testMatch: '**/*.spec.ts',
      use: {
        baseURL: process.env.BASE_URL,
        viewport: { width: 1920, height: 1080 },
        ignoreHTTPSErrors: true,
        bypassCSP: true,
        browserName: 'firefox',
      },
    },
    {
      name: 'app_webkit',
      testMatch: '**/*.spec.ts',
      use: {
        baseURL: process.env.BASE_URL,
        viewport: { width: 1920, height: 1080 },
        ignoreHTTPSErrors: true,
        bypassCSP: true,
        browserName: 'webkit',
      },
    },
       {
      name: 'app_android',
      testMatch: '**/*.spec.ts',
      use: {
        baseURL: process.env.BASE_URL,
        ignoreHTTPSErrors: true,
        bypassCSP: true,
        browserName: 'chromium',
        ...devices['Galaxy S24'],
      },
    },
  ],
})
