class SignUpModules {
   get nameInput () {
    return cy.get('[data-qa="signup-name"]')
    }
    get emailInput () {
        return cy.get('[data-qa="signup-email"]')
    }
    get signupButton () {
        return cy.get('[data-qa="signup-button"]')
    }
}

export default SignUpModules;