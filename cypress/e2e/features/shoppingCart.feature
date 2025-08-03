Feature: User buys products and checks out

  Scenario: User adds products to the shopping cart successfully
    Given the user adds a product to the cart
    When checkouts the product in the cart
    And pays for the product with a valid credit card
    Then the payment should be successful
   
