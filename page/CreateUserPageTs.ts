import { Page } from '@playwright/test';

export class CreateUserPageTs {
  readonly page: Page;
  readonly selectors = {
    loginOrRegisterBtn: 'a[href*="account/login"]',
    continueNewCustomerBtn: '#accountFrm fieldset .btn',
    firstNameInput: '#AccountFrm_firstname',
    lastNameInput: '#AccountFrm_lastname',
    emailInput: '#AccountFrm_email',
    telephoneInput: '#AccountFrm_telephone',
    addressInput: '#AccountFrm_address_1',
    cityInput: '#AccountFrm_city',
    zoneSelect: '#AccountFrm_zone_id',
    postcodeInput: '#AccountFrm_postcode',
    countrySelect: '#AccountFrm_country_id',
    usernameInput: '#AccountFrm_loginname',
    passwordInput: '#AccountFrm_password',
    confirmPasswordInput: '#AccountFrm_confirm',
    agreeCheckbox: '#AccountFrm_agree',
    continueBtn: 'button[title="Continue"]',
    successMessage: 'text=Your Account Has Been Created!'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto('https://automationteststore.com/', {
      waitUntil: 'domcontentloaded'
    });
    await this.page.waitForLoadState('networkidle');
  }

  async goToLoginOrRegister() {
    await this.page.waitForSelector(this.selectors.loginOrRegisterBtn, { state: 'visible', timeout: 10000 });
    await this.page.click(this.selectors.loginOrRegisterBtn);
  }

  async clickContinueNewCustomer() {
    await this.page.waitForSelector(this.selectors.continueNewCustomerBtn, { state: 'visible', timeout: 10000 });
    await this.page.click(this.selectors.continueNewCustomerBtn);
  }

  async fillRegistrationForm(username: string, email: string, password: string) {
    await this.page.fill(this.selectors.firstNameInput, 'Test');
    await this.page.fill(this.selectors.lastNameInput, 'User');
    await this.page.fill(this.selectors.emailInput, email);
    await this.page.fill(this.selectors.telephoneInput, '123456789');
    await this.page.fill(this.selectors.addressInput, 'Test Street 123');
    await this.page.fill(this.selectors.cityInput, 'TestCity');
    await this.page.fill(this.selectors.postcodeInput, '12345');

    await this.page.selectOption(this.selectors.countrySelect, { label: 'United Kingdom' });
    await this.page.fill(this.selectors.usernameInput, username);
    await this.page.fill(this.selectors.passwordInput, password);
    await this.page.fill(this.selectors.confirmPasswordInput, password);
    await this.page.selectOption(this.selectors.zoneSelect, { label: 'Aberdeen' });
    await this.page.check(this.selectors.agreeCheckbox);
  }

  async submitForm() {
    await this.page.click(this.selectors.continueBtn);
  }
}
