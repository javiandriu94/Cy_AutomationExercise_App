import NavbarModules from "../../modules/NavbarModules";


class LoggedUserPage {
    constructor() {
        this.navbar = new NavbarModules();
    }

    logoutUser() {
        this.navbar.logoutLink.should('be.visible');
        this.navbar.logoutLink.click();
    }

    verifyLoggedInUserName(data) {
        this.navbar.loggedInUserName.should('be.visible');
        this.navbar.loggedInUserName.should('contain', data.name);
    }
   
}

export default LoggedUserPage;