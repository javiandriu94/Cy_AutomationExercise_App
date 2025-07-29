Feature: User login

Scenario: User can log in with valid credentials
  Given the user is on the homepage
  When the user enter valid credentials
  Then the user should be redirected to the home page
  