import ProductsModules from '../../modules/ProductsModules';
import 'cypress-real-events/support';

class ProductsPage {
    constructor () {
        this.product = new ProductsModules();
    }
    addProductToCart(productElement) {
        productElement.realHover();
        productElement.contains('Add to cart').click({ force: true });
    }

    verifyAddedModal() {
        this.product.addedMessage.should('be.visible');
        this.product.viewCartLink.should('be.visible');
    }


    
    clickViewCart() {
        this.product.viewCartLink.click();
    }       

    clickContinueShopping() {
        this.product.continueShoppingButton.click();
    }

}   

export default  ProductsPage;