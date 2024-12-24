import { Locator, Page } from '@playwright/test';

const mainPageUrl = 'https://epicbet.com/en/';

export class MainPage {
  readonly url = mainPageUrl;
  readonly page: Page;
  readonly allowCookies: Locator;
  readonly header: Locator;
  readonly logo: Locator;
  readonly sportsButton: Locator;
  readonly casinoButton: Locator;
  readonly liveCasinoButton: Locator;
  readonly roadmapButton: Locator;
  readonly promotionsButton: Locator;
  readonly languageButton: Locator;
  readonly loginButton: Locator;
  readonly signupButton: Locator;
  readonly menuButton: Locator;
  readonly searchButton: Locator;
  readonly searchContainer: Locator;
  readonly searchContainerCasinoButton: Locator;
  readonly searchContainerSearchInput: Locator;
  readonly searchContainerSearchResults: Locator;
  readonly authPopUp: Locator;
  readonly authEmailButton: Locator;
  readonly authEmailInput: Locator;
  readonly authPasswordInput: Locator;
  readonly authLoginButton: Locator;
  readonly authAlert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allowCookies = page.getByRole('button', { name: 'Allow all' });
    this.header = page.getByTestId('header');
    this.logo = page.locator('._1hmm2mz5');
    this.sportsButton = page.getByTestId('sport-button');
    this.casinoButton = page.getByTestId('casino-button');
    this.liveCasinoButton = page.getByTestId('live-casino-button');
    this.roadmapButton = page.getByTestId('roadmap-button');
    this.promotionsButton = page.getByRole('link', { name: 'Promotions' });
    this.languageButton = page.getByTestId('language-button');
    this.loginButton = page.getByTestId('login-button');
    this.signupButton = page.getByTestId('signup-button');
    this.menuButton = page.getByTestId('menu-button');
    this.searchButton = page.getByTestId('search-button');
    this.searchContainer = page.getByTestId('search-container');
    this.searchContainerCasinoButton = page.getByRole('button', {
      name: 'Casino',
    });
    this.searchContainerSearchInput = page.getByTestId('search-input');
    this.searchContainerSearchResults = page.getByTestId('casino-game-card');
    this.authPopUp = page.getByTestId('auth-modal');
    this.authEmailButton = page.getByTestId('email-option-button');
    this.authEmailInput = page.getByTestId('email-input');
    this.authPasswordInput = page.getByTestId('password-input');
    this.authLoginButton = page.getByTestId('auth-login-button');
    this.authAlert = page.getByTestId('auth-alert');
  }

  async openMainPage() {
    await this.page.goto(this.url);
    await this.allowCookies.click();
  }
}
