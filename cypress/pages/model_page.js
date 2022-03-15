class _modelPage {

    commentInput = "#comment"
    submitComment = "Vote!"
    successMessage = "Thank you for your vote!"

    visit(){
        cy.visit('/model/c4u1mqnarscc72is00ng%7Cc4u1mqnarscc72is00sg')
    }

    writeCommentAndSubmit(){
        cy.get(this.commentInput).type("Fantastic!")
        cy.contains(this.submitComment).click()
    }

}

export const modelPage = new _modelPage()