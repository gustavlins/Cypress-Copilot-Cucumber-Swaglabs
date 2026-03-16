Feature: Missing Login Fields
	As a user
	I want to validate required login fields
	So that I know when username or password is missing

Scenario: Login field is empty
	Given i am on the login page
	When i set only password and click login
	Then i see username required message

Scenario: Password field is empty
	Given i am on the login page
	When i set only username and click login
	Then i see password required message