class _registrationPage {

    userNameField = '#username'
    firstNameField = '#firstName'
    lastNameField = '#lastName'
    passwordField = '#password'
    confirmPasswordField = '#confirmPassword'
    submitRegistrationButton = '.my-form button[type="submit"]'

    visit(){
        cy.visit('/register')
    }

    registerUser(){
        cy.get(this.userNameField).type("JohnSmith")
        cy.get(this.firstNameField).type("John")
        cy.get(this.lastNameField).type("Smith")
        cy.get(this.passwordField).type("Password123!")
        cy.get(this.confirmPasswordField).type("Password123!")
        cy.get(this.submitRegistrationButton).click()
    }

}

export const registrationPage = new _registrationPage()