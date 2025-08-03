import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import NavbarModules from "../../modules/NavbarModules";
import CartPage from "../../e2e/pages/CartPage.js";
import LoggedUserPage from "../../e2e/pages/LoggedUserPage.js";
import LoginModules from "../../modules/LoginModules.js";
import ProductsPage from "../../e2e/pages/ProductsPage.js";
import CheckoutPage from "../../e2e/pages/CheckoutPage.js";
import PaymentPage from "../../e2e/pages/PaymentPage.js";

const navbar = new NavbarModules();
const cart = new CartPage();
const logged = new LoggedUserPage();
const login = new LoginModules();
const productPage = new ProductsPage();
const checkout = new CheckoutPage(); 
const payment = new PaymentPage();


before(() => {
  cy.fixture("userLogin").then((data) => {
    userLogged = data.user;
  });  
  
  cy.fixture("userData").then((data) => {
    userData = data.user;
  });    

  cy.fixture("creditCardData").then((data) => {
    cardData = data.card;
  });    
});

before(() => {
    cy.visit("/");
    navbar.signup_login_link.click();
    login.emailLoginInput.type(userLogged.email);
    login.passwordLoginInput.type(userLogged.password);
    login.loginButton.click();
    logged.verifyLoggedInUserName(userData);
});

Given("the user adds a product to the cart", () => {
  productPage.addProductToCart()
  cy.location('pathname').should('include', '/view_cart');
  cart.verifyShoppingCartBreadcrumb();
  cart.validateCartItemsInTable();
  cart.clickProceedToCheckout();
  

});

When("checkouts the product in the cart", () => {
    cy.location('pathname').should('include', '/checkout');
    checkout.verifyCheckoutBreadcrumb();
    checkout.addComentToCheckout();
    checkout.clickPlaceOrderButton();    
    

});

And("pays for the product with a valid credit card", () => {
    cy.location('pathname').should('include', '/payment');
    payment.verifyPaymentBreadcrumb();
    payment.fillPaymentForm(cardData);
    payment.clickPayAndConfirmOrderButton();
    payment.verifySuccessMessage(message);
})

Then("the payment should be successful", () => {
    cy.location('pathname').should('include', '/payment_done');
    payment.verifyConratulationsMessage();
    payment.clickContinueButton();
    navbar.logoutLink.click();
});