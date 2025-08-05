import CartModules from "../../modules/CartModules";
import NavbarModules from "../../modules/NavbarModules";
import ProductsPage from "./ProductsPage";


class CartPage {
    constructor () {
        this.cart = new CartModules();
        this.navbar = new NavbarModules();
        this.product = new ProductsPage();
    }

    deleteAllItemsFromCart() {
        cy.get('body').then(($body) => {
            const $deleteButtons = $body.find('.cart_quantity_delete');
            if ($deleteButtons.length > 0) {
            // Hacer clic en el primero
                cy.wrap($deleteButtons[0]).click();
                // Esperar a que el DOM se actualice y luego repetir
                cy.wait(500); 
                deleteAllItemsFromCart();
            } else {
                cy.contains('Cart is empty!').should('be.visible');
                this.navbar.homeLink.click();
            }
        });
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