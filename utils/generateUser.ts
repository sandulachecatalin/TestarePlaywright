export const generateRandomUser = () => {
  const timestamp = Date.now();
  const username = `user${timestamp}`;
  const email = `${username}@test.com`;
  const password = 'Password123!';
  return { username, email, password };
};
