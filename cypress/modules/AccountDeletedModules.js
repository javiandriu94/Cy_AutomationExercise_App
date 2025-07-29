class AccountDeletedModules {

    get accountDeletedMessage() {
        return cy.get('[data-qa="account-deleted"]')
    }


}

export default AccountDeletedModules;