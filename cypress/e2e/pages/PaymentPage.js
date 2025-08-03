import PaymentModules from '../modules/PaymentModules';

class PaymentPage {
    constructor() {
        this.payment = new PaymentModules();
    }

    verifyPaymentBreadcrumb() {
        this.payment.paymentBreadcrumb.should('be.visible');
    }

    fillPaymentForm() {
        const cardData = Cypress.env('card');

        expect(cardData.cardName, 'card name should not be null or undefined').to.be.a('string');
        expect(cardData.cardNumber, 'card number should not be null or undefined').to.be.a('string');
        expect(cardData.expiryMonth, 'expiry month should not be null or undefined').to.be.a('string');
        expect(cardData.expiryYear, 'expiry year should not be null or undefined').to.be.a('string');
        expect(cardData.cvc, 'cvc should not be null or undefined').to.be.a('string');

        this.payment.inputCardName.type(cardData.cardName);
        this.payment.inputCardNumber.type(cardData.number);
        this.payment.inputExpiryMonth.type(cardData.expiryMonth);
        this.payment.inputExpiryYear.type(cardData.expiryYear);
        this.payment.inputCVC.type(cardData.cvc);
    }

    submitPayment() {
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