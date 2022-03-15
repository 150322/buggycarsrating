class _homePage {
    
    registerButton = 'a[href="/register"]'
    loginButton = 'Login'
    submitRegistrationButton = "button[type='submit']"
    passwordField = 'input[name="password'
    userNameField = 'input[name="login"]'

    visit(){
        cy.visit('/')
    }

    loginUser(username, password){
        cy.get(this.userNameField).type(username)
        cy.get(this.passwordField).type(password)
        cy.contains(this.loginButton).click()
    }
}

export const homePage = new _homePage()