class NavbarModules {

    get signup_login_link() {
        return cy.get('a[href="/login"]').contains('Signup / Login')
    }

    get logoutLink () {
        return cy.get('.shop-menu > .nav > :nth-child(4) > a')
        
    }

    get deleteAccountLink () {
        return cy.get('.shop-menu > .nav > :nth-child(5) > a')
    }


}

export default NavbarModules;