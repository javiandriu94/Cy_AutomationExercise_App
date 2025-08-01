Feature: User buys products and checks out

  Scenario: User buys a product and checks out successfully
    Given the user adds the product to the cart
    When check out the product
    Then the user should see the message "Order Placed!" 
    And be redirected to the order confirmation page

