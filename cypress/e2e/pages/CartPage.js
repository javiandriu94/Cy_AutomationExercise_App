import CartModules from "../../modules/CartModules";
import NavbarModules from "../../modules/NavbarModules";
import ProductsPage from "./ProductsPage";


class CartPage {
    constructor () {
        this.cart = new CartModules();
        this.navbar = new NavbarModules();
        this.product = new ProductsPage();
    }

    

    verifyShoppingCartBreadcrumb() {
        this.cart.shoppingCartBredcrumb.should('be.visible');
    }

    validateCartItemsInTable() {
    cy.then(() => {
        const cartItems = Cypress.env('cartItems');
        expect(cartItems, 'cartItems está definido').to.exist;

        cy.wrap(cartItems).each((expectedItem) => {
            cy.get('tr').contains('td', expectedItem.name).parents('tr').within(() => {
                cy.get('td').eq(1).should('contain.text', expectedItem.name);

                cy.get('td').eq(3).invoke('text').then(actualQuantityText => {
                    const actualQuantity = parseInt(actualQuantityText.trim());
                    expect(actualQuantity).to.eq(expectedItem.quantity);
                });
            });
        });
    });
}

    clickProceedToCheckout (){
        this.cart.proceedToCheckoutButton.should('be.visible');
        this.cart.proceedToCheckoutButton.click();
    };

    



}

export default CartPage;