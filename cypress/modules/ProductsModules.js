class ProductsModules {

    get featuredProduct1() {
        return cy.get('.features_items .product-image-wrapper ').eq(0)
    }

    get featuredProduct5() {
        return cy.get('.features_items .product-image-wrapper ').eq(4)
    }

    get featuredProduct9() {
        return cy.get('.features_items .product-image-wrapper ').eq(9)
    }

    get continueShoppingButton() {
        return cy.get('.btn-success').contains('Continue Shopping');
    }

    get addedMessage() {
        return cy.get('#cartModal .modal-header .modal-title').contains('Added!');
    }

    get viewCartLink() {
        return cy.get('[href="/view_cart"]').contains('View Cart');
    }
}
export default ProductsModules;