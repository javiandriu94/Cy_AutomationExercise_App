Feature: User Authentication

  
  Scenario: User registers successfully with valid data
    Given the user is on the homepage
    When the user navigates to the registration form
    And fills the registration form with valid data
    Then the user should see the message "Account Created!"

  Scenario: User can log in with valid credentials
    Given the user is on the homepage
    When the user enter valid credentials
    Then the user should be redirected to the home page