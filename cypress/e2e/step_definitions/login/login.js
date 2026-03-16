import 'cypress-dark';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given("i am on the login page", () => {
    cy.visit("https://www.saucedemo.com/");
});

When("i set a registered email and password", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
});

Then("i have a successful login", () => {
    cy.url().should("include", "/inventory.html");
});