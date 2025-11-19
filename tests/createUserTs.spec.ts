import { test, expect, Page } from '@playwright/test';
import { CreateUserPageTs } from '../page/CreateUserPageTs';
import dotenv from 'dotenv';

// Încarcă variabilele din .env
dotenv.config();

test('create a user using environment variables or generated values', async ({ page }: { page: Page }) => {
  const userPage = new CreateUserPageTs(page);

  // Folosim valorile din .env sau generăm dacă sunt goale
  const username = process.env.USERNAME && process.env.USERNAME.trim() !== ''
    ? process.env.USERNAME
    : `user${Date.now()}`;

  const email = process.env.EMAIL && process.env.EMAIL.trim() !== ''
    ? process.env.EMAIL
    : `${username}@test.com`;

  const password = process.env.PASSWORD?.replace(/'/g, '') || 'DefaultPass123!';

  await userPage.visit();
  await userPage.goToLoginOrRegister();
  await userPage.clickContinueNewCustomer();
  await userPage.fillRegistrationForm(username, email, password);
  await userPage.submitForm();

  await expect(page.locator(userPage.selectors.successMessage)).toBeVisible();
});
