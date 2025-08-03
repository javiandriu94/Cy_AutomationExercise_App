class CheckoutModules {
    get checkoutBreadcrumb() {
        return cy.get('.active').contains('Checkout');
    }

    get addressDetailsTitle() {
        return cy.get('.heading').contains('Address Details');
    }

    get yourDeliveryAddress() {
        return cy.get('.page-subheading'),contains('Your Delivery Address');
    }

    get deliveryAddressFullNameInformation() {
        return cy.get('#address_delivery > li > :nth-child(1)');
    }

     get deliveryAddressName () {
        return cy.get('#address_delivery > li > :nth-child(3)');
    }

    get deliveryAddressCountryName () {
        return cy.get('#address_delivery > li > :nth-child(6)');
    }

     get deliveryAddressPhone () {
        return cy.get('#address_delivery > li > :nth-child(7)');
    }

    get yourBillingAddress() {
        return cy.get('.page-subheading').contains('Your Billing Address');
    }

    get addressInformation() {
        return cy.get('.step-one > h2').contains('Address Information');
    }

    get checkoutComment () {
        return cy.get('#ordermsg > textarea');
    }

    get placeOrderButton() {
        return cy.get('[href="/payment"]').contains('Place Order');
    }
}

export default CheckoutModules;