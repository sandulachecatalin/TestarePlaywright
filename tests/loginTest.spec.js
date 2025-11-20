// tests/loginTest.spec.js
import { test, expect } from '@playwright/test';
import LoginPage from '../page/loginPage.js';
import fs from 'fs';

test('login using credentials created by createUser test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Read user data from JSON file created by createUser.spec.js   
  const userData = JSON.parse(fs.readFileSync('createdUser.json', 'utf-8'));
  const username = userData.username;
  const password = userData.password;
  console.log(`Logging in with username: ${username} and password: ${password}`);
  
  await loginPage.goToLoginPage();
  await loginPage.fillForm(username, password);
  await loginPage.submit();

  await expect(page.locator(loginPage.selectors.myAccountText)).toContainText('My Account', { timeout: 15000 });
});
