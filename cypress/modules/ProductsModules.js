class ProductsModules {

    get featuredProducts() {
        return [0, 4, 9].map(index => cy.get('.features_items .product-image-wrapper ').eq(index));
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