import { test, expect } from '@playwright/test';
import createUserPage from '../page/createUserPage.js';

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

test('create a user using environment variables', async ({ page }) => {
  const prefix = process.env.USER_PREFIX || "user";
  const domain = process.env.USER_DOMAIN || "example.com";
  const password = process.env.USER_PASSWORD || "DefaultPass123!";

  const uniquePart = Date.now();

  const username = `${prefix}${uniquePart}`;
  const email = `${username}@${domain}`;

  await createUserPage.visit(page);
  await createUserPage.goToLoginOrRegister();
  await createUserPage.clickContinueNewCustomer();
  await createUserPage.fillRegistrationForm(username, email, password);
  await createUserPage.submitForm();

  await expect(page.locator(createUserPage.selectors.successMessage)).toBeVisible();
});



  // Save created user data to a file
  // const userData = { username, email, password };
  // fs.writeFileSync('createdUser.json', JSON.stringify(userData, null, 2));

// environment variables in loc de file system -> de facut
// npm install
// de rulat
// de creat obiectul paginii? obiect pe baza clasei: 
// de facut si testul de login
// eventual de schimbat in typescript
// de pus intr-un repository - pe GitHub