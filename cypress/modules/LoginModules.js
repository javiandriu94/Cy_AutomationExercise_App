class LoginModules {

    get emailLoginInput () {
        return cy.get('[data-qa="login-email"]')
    }

    get passwordLoginInput () {
        return cy.get('[data-qa="login-password"]')
    }

    get loginButton () {
        return cy.get('[data-qa="login-button"]')
    }

    

   

}
export default LoginModules;