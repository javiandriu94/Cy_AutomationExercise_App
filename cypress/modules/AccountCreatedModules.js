class AccountCreatedModules {

    get accountCreatedMessage() {
        return cy.get('[data-qa="account-created"]')
    }

    get continueButton() {
        return cy.get('[data-qa="continue-button"]')
    }


}

export default AccountCreatedModules;
