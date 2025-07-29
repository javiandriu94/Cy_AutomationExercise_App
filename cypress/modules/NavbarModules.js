class NavbarModules {

    get signup_login_link() {
        return cy.get('a[href="/login"]').contains('Signup / Login')
    }


}

export default NavbarModules;