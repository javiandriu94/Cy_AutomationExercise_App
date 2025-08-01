import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import NavbarModules from "../../modules/NavbarModules";
import CartModules from "../../modules/CartModules.js";
import CartPage from "../../e2e/pages/CartPage.js";
import LoggedUserPage from "../../e2e/pages/LoggedUserPage.js";
import LoginModules from "../../modules/LoginModules.js";
import ProductsPage from "../../e2e/pages/ProductsPage.js";
import ProductsModules from "../../modules/ProductsModules.js";

const navbar = new NavbarModules();
const cart = new CartPage();
const logged = new LoggedUserPage();
const login = new LoginModules();
const productPage = new ProductsPage();
const product = new ProductsModules();

let userLogged;

before(() => {
  cy.fixture("userLogin").then((data) => {
    userLogged = data.user;
  });  
  
  cy.fixture("userData").then((data) => {
    userData = data.user;
  });    
});

Given("the user adds the product to the cart", () => {
  cy.visit("/");
  navbar.signup_login_link.click();
  login.emailLoginInput.type(userLogged.email);
  login.passwordLoginInput.type(userLogged.password);
  login.loginButton.click();
  logged.verifyLoggedInUserName(userData);
  productPage.addProductToCart(product.featuredProduct1);
  productPage.addProductToCart(product.featuredProduct5);
  productPage.addProductToCart(product.featuredProduct9);
  productPage.verifyAddedModal();


});

When("the user navigates to the shopping cart", () => {
  navbar.shoppingCartLink.click();
});