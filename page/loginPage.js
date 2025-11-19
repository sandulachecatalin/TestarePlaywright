// page/loginPage.js
class LoginPage {
  constructor(page) {
    this.page = page;
    this.selectors = {
      usernameInput: '#loginFrm_loginname',
      passwordInput: '#loginFrm_password',
      loginButton: 'button[title="Login"]',
      myAccountText: 'text=My Account'
    };
  }

  async goToLoginPage() {
    await this.page.goto('https://automationteststore.com/index.php?rt=account/login', { waitUntil: 'networkidle', timeout: 60000 });
  }

  async fillForm(username, password) {
    await this.page.fill(this.selectors.usernameInput, username);
    await this.page.fill(this.selectors.passwordInput, password);
  }

  async submit() {
    await this.page.click(this.selectors.loginButton);
    const myAccount = this.page.locator(this.selectors.myAccountText);
    await myAccount.waitFor({ state: 'visible', timeout: 15000 });
  }
}

export default LoginPage;
