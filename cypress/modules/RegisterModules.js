class RegisterModules { 
    get registerWelcomeTitle () {
        return cy.get(':nth-child(1) > b')
    }
    get nameInput () {
        return cy.get('[data-qa="name"]')
    }

    get emailInput () {
        return cy.get('[data-qa="email"]')
    }
    get maleRadioButton () {
        return cy.get('#id_gender1')
    }

    get femaleRadioButton () {
        return cy.get('#id_gender2')
    }

    get passwordInput () {
        return cy.get('[data-qa="password"]')
    }

    get dropdownDays () {
        return cy.get('[data-qa="days"]').select('4')
    }

    get dropdownMonths () {
        return cy.get('[data-qa="months"]').select('August')
    }

    get dropdownYears () {
        return cy.get('[data-qa="years"]').select('1998')
    }

    get firstNameInput () {
        return cy.get('[data-qa="first_name"]')
    }

    get lastNameInput () {
        return cy.get('[data-qa="last_name"]')
    }

    get companyInput () {
        return cy.get('[data-qa="company"]')
    }

    get addressInput () {
        return cy.get('[data-qa="address"]')
    }

    get dropdownCountry () {
        return cy.get('[data-qa="country"]').select('Canada')
    }

    get stateInput() {
        return cy.get('[data-qa="state"]')
    }

    get cityInput() {
        return cy.get('[data-qa="city"]')
    }

    get zipcodeInput() {
        return cy.get('[data-qa="zipcode"]')
    }

    get mobileNumberInput() {
        return cy.get('[data-qa="mobile_number"]')
    }

    get createAccountButton() {
        return cy.get('[data-qa="create-account"]')
    }

}

export default RegisterModules;