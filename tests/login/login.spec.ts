import { test, expect } from '@playwright/test';
import { LoginPage } from '../../core/pages/login.page';

const invalidLoginCases = [
  {
    description: 'invalid password',
    username: 'practice',
    password: 'WrongPassword',
  },
  {
    description: 'empty password',
    username: 'practice',
    password: '',
  },
  {
    description: 'empty username',
    username: '',
    password: 'SuperSecretPassword!',
  },
];

test.describe('Login', () => {

  test('User can login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Arrange
    await loginPage.navigate();

    // Act
    await loginPage.login('practice', 'SuperSecretPassword!');

    // Assert
    await expect(loginPage.successAlert).toBeVisible();
    await expect(page).toHaveURL(/.*secure/);
  });


  invalidLoginCases.forEach(({ description, username, password }) => {
  test(`User cannot login with ${description}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Arrange
    await loginPage.navigate();

    // Act
    await loginPage.login(username, password);

    // Assert
    await expect(loginPage.errorAlert).toBeVisible();
    await expect(page).toHaveURL(/.*login/);
  });
});


});
