class PaymentModules {

    get paymentBreadcrumb() {
        return cy.get('.active').contains('Payment');
    }

      get inputCardName () {
        return cy.get('[data-qa="name-on-card"]');  // revisa si es realmente este selector para nombre en tarjeta
    }

    get inputCardNumber () {
        return cy.get('[data-qa="card-number"]');
    }

    get inputCVC () {
        return cy.get('[data-qa="cvc"]');
    }

    get inputExpiryMonth () {
        return cy.get('[data-qa="expiry-month"]');
    }

    get inputExpiryYear () {
        return cy.get('[data-qa="expiry-year"]');  
    }

    get payAndConfirmButton () {
        return cy.get('[data-qa="pay-button"]');
    }
    

    get continueButton() {
        return cy.get('[data-qa="continue-button"]');
    }

    get congratulationMessage() {
        return cy.get('.col-sm-9 > p').contains('Congratulations! Your order has been confirmed!');
    }


}

export default PaymentModules;