import { test, expect } from '@playwright/test';
import { LoginPage } from '../../core/pages/login.page';

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

});
