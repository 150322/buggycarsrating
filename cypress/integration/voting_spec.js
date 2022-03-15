import { describe } from "mocha";
import { modelPage } from "../pages/model_page";

describe('Voting tests', () => {

    
    it('can successfully submit a vote', () =>{

        // Mock responses
        cy.intercept({
            method: 'POST',
            url: 'prod/models/c4u1mqnarscc72is00ng%7Cc4u1mqnarscc72is00sg/vote'
            
        }, 
        {}).as('submitVote')

        cy.intercept({
            method: 'GET',
            url: '/prod/models/c4u1mqnarscc72is00ng%7Cc4u1mqnarscc72is00sg'
        }, 
        {fixture: 'models/alpha/get_model.json' }).as('getModel')

        cy.intercept({
            method: 'GET',
            url: '/prod/users/current'
        }, 
        {fixture: 'users/get_current.json' }).as('getUser')

        // Load page as if logged in
        cy.setLocalStorage('token','userAuthToken')

        modelPage.visit()
        cy.wait('@getModel')

        // Prepare mock to respond with "voted"
        cy.intercept({
            method: 'GET',
            url: '/prod/models/c4u1mqnarscc72is00ng%7Cc4u1mqnarscc72is00sg'
        }, 
        {fixture: 'models/alpha/get_modelVoted.json' }).as('getModelVoted')

        // Submit form
        modelPage.writeCommentAndSubmit()

        // User should be registered
        cy.wait('@submitVote')
        cy.contains(modelPage.successMessage)
    })

})