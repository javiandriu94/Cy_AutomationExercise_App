import LoginModules from "../../modules/LoginModules";


class LoginPage {
    constructor() {
        this.login = new LoginModules();
    }

    fillLoginForm() {
        const email = Cypress.env('userEmail');
        const password = Cypress.env('userPassword');

        expect(email, 'email should not be null or undefined').to.be.a('string');
        expect(password, 'password should not be null or undefined').to.be.a('string');

        this.login.emailLoginInput.type(email, { parseSpecialCharSequences: false });
        this.login.passwordLoginInput.type(password);
    }

    submitLogin() {
        this.login.loginButton.click();
        this.login.logo
    }
}

export default LoginPage;