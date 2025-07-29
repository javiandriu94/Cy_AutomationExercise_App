import RegisterModules from '../../modules/RegisterModules.js'
import SignUpModules from '../../modules/SignUpModules.js';
import AccountCreatedModules from '../../modules/AccountCreatedModules.js'

class CreateAccountPage {
    constructor () {
        this.register = new RegisterModules();
        this.signUp = new SignUpModules();
        this.createdAccount = new AccountCreatedModules();
        this.generatedEmail = null; // será seteado más tarde
    }

  setEmail(email) {
    this.generatedEmail = email;
  }

  verifyRegisterTitle() {
    this.register.registerWelcomeTitle.should('contain', "Enter Account Information");
  }

  verifyDataRegistered(data){
    this.register.nameInput.should('have.value', data.name);
    this.register.emailInput.should('have.value', this.generatedEmail); // usar correo seteado
  }

    fillRegisterForm (data) {
            this.register.maleRadioButton.check();
            this.register.passwordInput.type(data.password);
            this.register.dropdownDays;
            this.register.dropdownMonths;
            this.register.dropdownYears;
            this.register.firstNameInput.type(data.firstName);
            this.register.lastNameInput.type(data.lastName);
            this.register.companyInput.type(data.company);
            this.register.addressInput.type(data.address);
            this.register.dropdownCountry;
            this.register.stateInput.type(data.state);
            this.register.cityInput.type(data.city);
            this.register.zipcodeInput.type(data.zipcode);
            this.register.mobileNumberInput.type(data.mobileNumber);
    }

    submitForm() {
        this.register.createAccountButton.click();
    }

    verifySuccessMessage() {
        this.createdAccount.accountCreatedMessage.contains("Account Created!").should("be.visible");
        this.createdAccount.continueButton.click();
    }
}

export default CreateAccountPage;