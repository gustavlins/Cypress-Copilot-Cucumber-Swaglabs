import 'cypress-dark';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given("i am on the login page", () => {
    cy.visit("https://www.saucedemo.com/");
});

When("i set an unregistered email and password", () => {
    cy.get("#user-name").type("unregistered_user");
    cy.get("#password").type("wrong_password");
    cy.get("#login-button").click();
});

Then("i have an unsuccessful login", () => {
    cy.get("[data-test='error']").should("be.visible").and("contain", "Epic sadface: Username and password do not match any user in this service");
});