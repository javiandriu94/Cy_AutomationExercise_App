import SignUpModules from '../../modules/SignUpModules.js';

class NewUserSignUpPage {
    constructor() {
      this.signUp = new SignUpModules();
      this.randomEmail = `user${Math.floor(Math.random() * 1000)}@example.com`;
    }

    accessToSignUp(data) {
      this.signUp.nameInput.type(data.name);
      this.signUp.emailInput.type(this.randomEmail, { parseSpecialCharSequences: false });
    }

    clickSignUpButton() {
      this.signUp.signupButton.click();
    }

    getEmail() {
      return this.randomEmail;
    }
}

export default NewUserSignUpPage;





