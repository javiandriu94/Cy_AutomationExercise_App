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

    addProductToCart(indices = [0, 4, 9], currentIndex = 0) {
        if (currentIndex >= indices.length) {
            // Guardar en variable de entorno para otros steps si lo necesitas
            Cypress.env('cartItems', this.cartItems);
            this.clickViewCart();
            return;
        }

        // Asegura que los productos están renderizados
        cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 9)
            .then($products => {
            const $item = $products.eq(indices[currentIndex]);

            cy.wrap($item).scrollIntoView().realHover();

            cy.wrap($item).find('.productinfo p').first().invoke('text').then(productName => {
                const name = productName.trim();

                // Almacena producto en el carrito de la clase
                const existingItem = this.cartItems.find(item => item.name === name);
                if (existingItem) {
                existingItem.quantity += 1;
                } else {
                this.cartItems.push({ name, quantity: 1 });
                }

                // Click en botón "Add to cart"
                cy.wrap($item).contains('Add to cart').click({ force: true });

                // Verifica modal
                this.verifyAddedModal();

                if (currentIndex < indices.length - 1) {
                this.clickContinueShopping();
                cy.wait(500); // Espera para evitar que el modal interfiera
                }

                // Llama recursivamente al siguiente producto
                cy.then(() => {
                this.addProductToCart(indices, currentIndex + 1);
                });
            });
            });
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