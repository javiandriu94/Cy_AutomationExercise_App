import CheckoutModules from "../../modules/CheckoutModules";

class CheckoutPage {
    constructor() {
        this.checkout = new CheckoutModules();
    }

    verifyCheckoutBreadcrumb() {
        this.checkout.checkoutBreadcrumb.should('be.visible');
        
    }

    addComentToCheckout() {
        this.checkout.checkoutComment.should('be.visible');
        this.checkout.checkoutComment.type('This is a test comment for the checkout process.');
    }

    clickPlaceOrderButton() {
        this.checkout.placeOrderButton.should('be.visible');
        this.checkout.placeOrderButton.click();
    }
}

export default CheckoutPage;