import RegisterModules from '../../modules/RegisterModules.js'
import SignUpModules from '../../modules/SignUpModules.js';
import AccountCreatedModules from '../../modules/AccountCreatedModules.js'
import generatePassword from '../../support/utils/generatePassword.js';

class CreateAccountPage {
    constructor () {
        this.register = new RegisterModules();
        this.signUp = new SignUpModules();
        this.createdAccount = new AccountCreatedModules();
        this.generatedEmail = null; // será seteado más tarde
        this.password = generatePassword(10);
    }

    setEmail(email) {
        this.generatedEmail = email;
    }

    verifyRegisterTitle() {
        this.register.registerWelcomeTitle.should('contain', "Enter Account Information");
        this.register.maleRadioButton.click();
    }

    verifyDataRegistered(data) {
        this.register.nameInput.should('have.value', data.name);
        this.register.emailInput.should('have.value', this.generatedEmail); // usar correo seteado
    }

    fillRegisterForm(data) {
        this.register.passwordInput.type(this.password);
        this.register.dropdownDays.select('10');
        this.register.dropdownMonths.select('March');
        this.register.dropdownYears.select('1995');
        this.register.firstNameInput.type(data.firstName);
        this.register.lastNameInput.type(data.lastName);
        this.register.companyInput.type(data.company);
        this.register.addressInput.type(data.address);
        this.register.dropdownCountry.select('Canada');
        this.register.stateInput.type(data.state);
        this.register.cityInput.type(data.city);
        this.register.zipcodeInput.type(data.zipcode);
        this.register.mobileNumberInput.type(data.mobileNumber);
    }

    submitForm() {
        this.register.createAccountButton.click();
        // Guardar en entorno de Cypress
        Cypress.env('userEmail', this.generatedEmail);
        Cypress.env('userPassword', this.password);
    }

    verifySuccessMessage() {
        this.createdAccount.accountCreatedMessage.contains("Account Created!").should("be.visible");
        this.createdAccount.continueButton.click();
    }
}

export default CreateAccountPage;