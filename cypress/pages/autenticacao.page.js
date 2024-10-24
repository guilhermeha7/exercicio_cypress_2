class AutenticacaoPage {
 
    get #signUp() {
        return cy.get('[data-testid="signUp"]')
    }

    clicarEmSignUp() {
        this.#signUp.click()
    }

}

export default new AutenticacaoPage()