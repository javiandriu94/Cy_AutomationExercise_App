class PaymountModules {

    get inputCardName () {
        return cy.get('[data-qa="name-on-card"]');
    }

     get inputCardNumber () {
        return cy.get('[data-qa="card-number"]');
    }

     get inputCVC () {
        return cy.get('[data-qa="cvc"]');
    }

    get inputExpiration () {
        return cy.get('[data-qa="expiry-month"]');
    }

    get inputYear () {
        return cy.get('[data-qa="expiry_year"]');
    }

    get payAndConfirmButton () {
        return cy.get('[data-qa="pay-button"]');
    }
    
    get successMessage() {
        return cy.get('.alert-success');
    }


}

export default PaymountModules;