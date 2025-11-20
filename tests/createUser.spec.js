import { test, expect } from '@playwright/test';
import createUserPage from '../page/createUserPage.js';
import fs from 'fs';

test('create a user using environment variables', async ({ page }) => {
  // Generate test data
  const password = "Pass123!";
  const username = `user${Date.now()}`;
  const email = `${username}@example.com`;

  // Save created user data to a file for use in other tests
  const userData = { username, email, password };
  fs.writeFileSync('createdUser.json', JSON.stringify(userData, null, 2));

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