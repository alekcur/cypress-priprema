class LoginPage {
    get emailInputField() {
        return cy.get('input[type="email"]');
    }

    get passwordInputField() {
        return cy.get('input[type="password"]');
    }


    get submitButton() {
        return cy.get("button").first();
    }

    login(email, password) {
        this.emailInputField.type(email);
        this.passwordInputField.type(password);
        this.submitButton.click();
    }
}

export const loginPage = new LoginPage();