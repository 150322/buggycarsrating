import { describe } from "mocha";
import { registrationPage } from "../pages/registration_page";

describe('Registration tests', () => {

    
    it('can successfully register a new user', () =>{

        // Mock responses
        cy.intercept({
            method: 'POST',
            url: '/prod/users'
        }, 
        {}).as('registerAccount')

        registrationPage.visit()

        // Submit form
        registrationPage.registerUser()

        // User should be registered
        cy.wait('@registerAccount')
        cy.contains("Registration is successful")
    })

})