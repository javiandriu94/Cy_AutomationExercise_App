import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CreateAccountPage from "../../e2e/pages/CreateAccountPage.js";
import NewUserSignUpPage from "../../e2e/pages/NewUserSignUpPage.js";
import LoginPage from "../../e2e/pages/LoginPage.js";
import NavbarModules from "../../modules/NavbarModules.js";
import LoggedUserPage from "../../e2e/pages/LoggedUserPage.js";


const createAccount = new CreateAccountPage();
const newUserSignUp = new NewUserSignUpPage()
const login = new LoginPage();
const navbar = new NavbarModules()
const logged = new LoggedUserPage()

let userData;

before(() => {
  cy.fixture("userData").then((data) => {
    userData = data.user;
  });
});

Given("the user is on the homepage", () => {
  cy.visit("/");
  navbar.signup_login_link.click()
});

When("the user navigates to the registration form", () => {
    
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


When("the user enter valid credentials", () => {
    login.fillLoginForm();
    login.submitLogin();
})

Then("the user should be redirected to the home page", () => {
  cy.location('pathname').should('include', '/');
  navbar.deleteAccountLink .should('be.visible');
  logged.verifyLoggedInUserName(userData);
  logged.logoutUser();
  
  
})
