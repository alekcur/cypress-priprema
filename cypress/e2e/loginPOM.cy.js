/// <reference types="Cypress"/>

import { loginPage } from "../page_objects/loginPOM";

describe("login test", () => {
  before("visit vivifyscrum app", () => {
      cy.visit("https://cypress.vivifyscrum-stage.com/");
  });

it.only("login with valid credentials", () => {
  cy.intercept(
    "POST",
    "https://cypress-api.vivifyscrum-stage.com/api/v2/login"
  ).as("successfullLogin");

  loginPage.login(Cypress.env("userEmail"), Cypress.env("userPass"));
  cy.wait("@successfullLogin").then(interception => {
    console.log("INTERCEPTION", interception);
    expect(interception.response.statusCode).eq(200);
  });
  cy.url().should("not.include", "/login");
});

  });
