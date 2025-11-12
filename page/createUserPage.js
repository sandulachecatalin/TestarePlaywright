// page/createUserPage.js
class CreateUserPage {
  constructor() {
    this.selectors = {
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
  }

  async visit(page) {
    await page.goto('https://automationteststore.com/', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle'); // ensures page fully loaded
  }

  async goToLoginOrRegister(page) {
    await page.waitForSelector(this.selectors.loginOrRegisterBtn, { state: 'visible', timeout: 10000 });
    await page.click(this.selectors.loginOrRegisterBtn);
  }

  async clickContinueNewCustomer(page) {
    await page.waitForSelector(this.selectors.continueNewCustomerBtn, { state: 'visible', timeout: 10000 });
    await page.click(this.selectors.continueNewCustomerBtn);
  }

  async fillRegistrationForm(page, username, email, password) {
    await page.fill(this.selectors.firstNameInput, 'Test');
    await page.fill(this.selectors.lastNameInput, 'User');
    await page.fill(this.selectors.emailInput, email);
    await page.fill(this.selectors.telephoneInput, '123456789');
    await page.fill(this.selectors.addressInput, 'Test Street 123');
    await page.fill(this.selectors.cityInput, 'TestCity');
    await page.selectOption(this.selectors.zoneSelect, { label: 'Aberdeen' });
    await page.fill(this.selectors.postcodeInput, '12345');
    await page.selectOption(this.selectors.countrySelect, { label: 'United Kingdom' });
    await page.fill(this.selectors.usernameInput, username);
    await page.fill(this.selectors.passwordInput, password);
    await page.fill(this.selectors.confirmPasswordInput, password);
    await page.check(this.selectors.agreeCheckbox);
  }

  async submitForm(page) {
    await page.click(this.selectors.continueBtn);
  }
}

// ✅ Export as an instance of the class
export default new CreateUserPage();



// de scos partea cu page si inlocui cu this.selector.x.click
