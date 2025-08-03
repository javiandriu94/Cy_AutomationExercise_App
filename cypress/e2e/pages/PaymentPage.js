import PaymentModules from "../../modules/PaymentModules.js";

class PaymentPage {
    constructor() {
        this.payment = new PaymentModules();
    }

    verifyPaymentBreadcrumb() {
        this.payment.paymentBreadcrumb.should('be.visible');
    }

    fillPaymentForm(cardData) {
        this.payment.inputCardName.should('be.visible');
        this.payment.inputCardNumber.should('be.visible');
        this.payment.inputExpiryMonth.should('be.visible');
        this.payment.inputExpiryYear.should('be.visible');
        this.payment.inputCVC.should('be.visible');
        this.payment.inputCardName.type(cardData.cardName);
        this.payment.inputCardNumber.type(cardData.cardNumber);
        this.payment.inputExpiryMonth.type(cardData.expiryMonth);
        this.payment.inputExpiryYear.type(cardData.expiryYear);
        this.payment.inputCVC.type(cardData.cvc);
        
    }

    submitPayment() {
        this.payment.payAndConfirmButton.should('be.visible');
        this.payment.payAndConfirmButton.click();
    }

    verifySuccessMessage() {
        this.payment.successMessage.should('be.visible');
        this.payment.successMessage.should('contain', 'Your order has been placed successfully!');
    }

    verifyConratulationsMessage() {
        this.payment.congratulationMessage.should('be.visible');
        this.payment.congratulationMessage.should('contain', 'Congratulations! Your order has been confirmed!');
    }

    clickContinueButton() {
        this.payment.continueButton.click();
    }
}


export default PaymentPage;