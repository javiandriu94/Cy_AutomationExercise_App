class CartModules {

    get shoppingCartBredcrumb() {
        return cy.get('.active').contains('Shopping Cart');
    }

    get proceedToCheckoutButton() {
        return cy.get('.col-sm-6 > .btn').contains('Proceed To Checkout');
    }

    get cartInfoTable() {
        return cy.get('#cart_info_table');
    }

    get cartQuatityDeleteButton() {
        return cy.get('.cart_quantity_delete');
    }
}

export default CartModules;