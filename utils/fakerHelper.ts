import { faker } from '@faker-js/faker';

export const generateUserData = () => {
  const username = faker.internet.userName();
  const email = faker.internet.email();
  const password = 'Password123!';
  return { username, email, password };
};
