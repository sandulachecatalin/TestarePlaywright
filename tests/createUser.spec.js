import { test, expect } from '@playwright/test';
import createUserPage from '../page/createUserPage.js';
import { faker } from '@faker-js/faker';

test('create a new user account and save to a file', async ({ page }) => {
  const username = faker.internet.username();
  const email = faker.internet.email();
  const password = 'Password123!';

  await createUserPage.visit(page);
  await createUserPage.goToLoginOrRegister(page);
  await createUserPage.clickContinueNewCustomer(page);
  await createUserPage.fillRegistrationForm(page, username, email, password);
  await createUserPage.submitForm(page);

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