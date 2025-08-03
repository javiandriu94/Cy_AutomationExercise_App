import ProductsModules from '../../modules/ProductsModules';
import 'cypress-real-events/support';

class ProductsPage {
    constructor () {
        this.product = new ProductsModules();
        this.cartItems = [];
    }
    clearCart() {
        this.cartItems = [];
        Cypress.env('cartItems', []);
    }
    
    addProductToCart() {
        const featuredProducts = this.product.featuredProducts;
        featuredProducts.forEach((product, index) => {
            product.then($item => {
                cy.wrap($item).realHover();
                  const productName = $item.find('.productinfo p').first().text().trim();

                const existingItem = this.cartItems.find(item => item.name === productName);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    this.cartItems.push({ name: productName, quantity: 1 });
                }

                cy.wrap($item).contains('Add to cart').click({ force: true });

                this.verifyAddedModal()

                if (index === featuredProducts.length - 1) {
                    Cypress.env('cartItems', this.cartItems);
                    this.clickViewCart();
                } else {
                    this.clickContinueShopping();
                }
            })
        })
    }

    
    verifyAddedModal() {
        this.product.addedMessage.should('be.visible');
        this.product.viewCartLink.should('be.visible');
        this.product.continueShoppingButton.should('be.visible');
    }


    
    clickViewCart() {
        this.product.viewCartLink.click();
    }       

    clickContinueShopping() {
        this.product.continueShoppingButton.click();
    }

}   

export default  ProductsPage;