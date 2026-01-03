import { test, expect } from '@playwright/test';

test.describe('Login', () => {

  test('User can login with valid credentials', async ({ page }) => {
    // Arrange
    await page.goto('https://practice.expandtesting.com/login');

    // Act
    await page.locator('#username').fill('practice');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('button[type="submit"]').click();

    // Assert
    await expect(page.locator('.alert-success')).toBeVisible();
    await expect(page).toHaveURL(/.*secure/);
  });

});
