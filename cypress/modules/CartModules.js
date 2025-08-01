class CartModules {

    get shoppingCartBredcrumb() {
        return cy.get('.shop-menu > .nav > :nth-child(3) > a').contains('Shopping Cart');
    }
    
    get proceedToCheckoutButton() {
        return cy.get('.btn.btn-default.check_out').contains('Proceed To Checkout');
    }

    get cartInfoTable() {
        return cy.get('#cart_info_table');
    }

    get cartQuatityDeleteButton() {
        return cy.get('.cart_quantity_delete');
    }
}

export default CartModules;