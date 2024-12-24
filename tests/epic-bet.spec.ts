import { test, expect } from '@playwright/test';
import { MainPage } from './pages/main-page';
import { faker } from '@faker-js/faker/locale/en';

const searchTerm = 'Roulette';
const fakeEmail = faker.internet.email();
const fakePassword = faker.internet.password();
const routeToMock = '**/auth/public/self-service/login**';

let mainPage: MainPage;

test.beforeEach(async ({ page }) => {
  mainPage = new MainPage(page);
  await mainPage.openMainPage();
});

test.describe('EpicBet main page tests', () => {
  test('Header and elements on it are visible on main page', async () => {
    await expect.soft(mainPage.header).toBeVisible();
    await expect.soft(mainPage.logo).toBeVisible();
    await expect.soft(mainPage.sportsButton).toBeVisible();
    await expect.soft(mainPage.casinoButton).toBeVisible();
    await expect.soft(mainPage.liveCasinoButton).toBeVisible();
    await expect.soft(mainPage.roadmapButton).toBeVisible();
    await expect.soft(mainPage.promotionsButton).toBeVisible();
    await expect.soft(mainPage.languageButton).toBeVisible();
    await expect.soft(mainPage.loginButton).toBeVisible();
    await expect.soft(mainPage.signupButton).toBeVisible();
    await expect.soft(mainPage.menuButton).toBeVisible();
  });

  test('Verify that search returns at least 1 result', async () => {
    const searchBar = mainPage.searchButton;
    await searchBar.click();
    expect.soft(mainPage.searchContainer).toBeVisible();
    await mainPage.searchContainerCasinoButton.click();
    await mainPage.searchContainerSearchInput.fill(searchTerm);
    const searchResults = mainPage.searchContainerSearchResults;
    const resultCount = await searchResults.count();
    expect.soft(resultCount).toBeGreaterThan(0);
  });

  test('Verify that login with invalid credentials will show alert', async () => {
    await mainPage.loginButton.click();
    await expect.soft(mainPage.authPopUp).toBeVisible();
    await mainPage.authEmailButton.click();
    await mainPage.authEmailInput.fill(fakeEmail);
    await mainPage.authPasswordInput.fill(fakePassword);
    await mainPage.authLoginButton.click();
    await expect.soft(mainPage.authAlert).toBeVisible();
  });

  test('Verify that login with valid credentials will return jwt', async ({
    page,
  }) => {
    await page.route(routeToMock, async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          token: 'mocked-jwt-token',
        }),
      });
    });
    await mainPage.loginButton.click();
    await expect.soft(mainPage.authPopUp).toBeVisible();
    await mainPage.authEmailButton.click();
    await mainPage.authEmailInput.fill(fakeEmail);
    await mainPage.authPasswordInput.fill(fakePassword);
    await mainPage.authLoginButton.click();
    const response = await page.waitForResponse(routeToMock);
    const responseBody = await response.json();
    expect.soft(responseBody.success).toBe(true);
    expect.soft(responseBody.token).toBe('mocked-jwt-token');
  });
});
