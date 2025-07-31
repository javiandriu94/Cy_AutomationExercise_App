class NavbarModules {

    get signup_login_link() {
        return cy.get('a[href="/login"]').contains('Signup / Login')
    }

     get cartLink () {
        return cy.get('.shop-menu > .nav > :nth-child(3) > a')
        
    }

    get logoutLink () {
        return cy.get('.shop-menu > .nav > :nth-child(4) > a')
        
    }

    get deleteAccountLink () {
        return cy.get('.shop-menu > .nav > :nth-child(5) > a')
    }

    get loggedInUserName() {
        return cy.get(':nth-child(10) > a')

    }
}

export default NavbarModules;