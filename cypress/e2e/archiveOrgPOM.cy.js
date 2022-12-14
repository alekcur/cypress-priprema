/// <reference types="Cypress"/>
import { loginPage } from "../page_objects/loginPOM";
import { archiveOrg } from "../page_objects/archiveOrgPOM";
import { addOrganization } from "../page_objects/addOrganizationPOM";

describe("login test", () => {
    beforeEach("visit vivifyscrum app", () => {
        cy.visit("https://cypress.vivifyscrum-stage.com/");
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


    it("create new organization", () => {
    let name = "QA";  
        cy.get(".vs-c-my-organization").eq(-2).click();
        cy.get("input[type = 'text']").type(name)
        cy.get('[name="next_btn"]').click();
        cy.get('[name="next_btn"]').click();
    });

    it.only("archive organization", () => {
        cy.get('a[href="/organizations/23733/boards"]').first().click();
        cy.get('.vs-c-modal__body').find('button').last().click();
        cy.get(".vs-l-project__menu").find('li').last().click();
        cy.get(".vs-c-settings-section-form").eq(-2).find('button').click();
        cy.get(".vs-c-modal__footer").find("button").last().click();
    });

});