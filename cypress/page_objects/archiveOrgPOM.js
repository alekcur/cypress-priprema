class ArchiveOrg {

    get addNewOrganization() {
        return cy.get('a[href="/organizations/23733/boards"]').click();
            
    }

}

export const archiveOrg = new ArchiveOrg();