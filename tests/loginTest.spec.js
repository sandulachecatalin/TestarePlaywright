// tests/loginTest.spec.js
import { test, expect } from '@playwright/test';
import LoginPage from '../page/loginPage.js';
import fs from 'fs';

test('login using credentials created by createUser test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // citim credentialele generate anterior
  const data = JSON.parse(fs.readFileSync('tests/fixtures/user.json', 'utf-8'));
  const username = data.username;
  const password = data.password;

  await loginPage.goToLoginPage();
  await loginPage.fillForm(username, password);
  await loginPage.submit();

  await expect(page.locator(loginPage.selectors.myAccountText)).toBeVisible({ timeout: 15000 });
});
