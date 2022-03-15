import { describe } from "mocha";
import { homePage } from "../pages/home_page";

describe('Login tests', () => {

    beforeEach(() => {
        homePage.visit()
    })

    
    it('can successfully login a standard user', () =>{

        // Mock responses
        cy.intercept({
            method: 'POST',
            url: '/prod/oauth/token'
        }, 
        {fixture: 'oauth/post_token.json' }).as('loginUser')

        cy.intercept({
            method: 'GET',
            url: '/prod/users/current'
        }, 
        {fixture: 'users/get_current.json' }).as('getUser')
       

        // Submit form
        homePage.loginUser("validUsername", "validPassword")
        cy.wait('@loginUser')
        cy.wait('@getUser')


        // User should be logged in
        cy.contains('Hi, John')
        cy.contains('Profile')
        cy.contains('Logout')
    
    })

})