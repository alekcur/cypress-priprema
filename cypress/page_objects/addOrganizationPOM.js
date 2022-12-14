class AddOrganization {

    get addNewOrganization() {
        return cy.get("vs-c-my-organization vs-c-my-organization--add-new not-sortable").click();
            
    }

}

export const addOrganization = new AddOrganization();