import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CreateAccountPage from "../../e2e/pages/CreateAccountPage.js";
import NewUserSignUpPage from "../../e2e/pages/NewUserSignUpPage.js";
import NavbarModules from "../../modules/NavbarModules.js";


const createAccount = new CreateAccountPage();
const newUserSignUp = new NewUserSignUpPage()
const navbar = new NavbarModules()

let userData;

before(() => {
  cy.fixture("userData").then((data) => {
    userData = data.user;
  });
});

Given("the user is on the homepage", () => {
  cy.visit("/");
});

When("the user navigates to the registration form", () => {
    navbar.signup_login_link.click()
    newUserSignUp.accessToSignUp(userData)
    newUserSignUp.clickSignUpButton()

     const email = newUserSignUp.getEmail();
      createAccount.setEmail(email);

      cy.location('pathname').should('include', '/signup');
});

When("fills the registration form with valid data", () => {
   createAccount.verifyRegisterTitle();
   createAccount.verifyDataRegistered(userData)
   createAccount.fillRegisterForm(userData);
   createAccount.submitForm()
   
});

Then("the user should see the message {string}", () => {
    cy.location('pathname').should('include', '/account_created');
    createAccount.verifySuccessMessage()
});

