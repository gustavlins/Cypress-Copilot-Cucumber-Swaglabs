import 'cypress-dark';
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("i am on the login page", () => {
    cy.visit("https://www.saucedemo.com/");
});

When("i set only password and click login", () => {
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
});

Then("i see username required message", () => {
    cy.get("[data-test='error']")
        .should("be.visible")
        .and("contain", "Epic sadface: Username is required");
});

When("i set only username and click login", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#login-button").click();
});

Then("i see password required message", () => {
    cy.get("[data-test='error']")
        .should("be.visible")
        .and("contain", "Epic sadface: Password is required");
});
