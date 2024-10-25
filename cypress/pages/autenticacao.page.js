class AutenticacaoPage {
 
    get #btnSignUp() { return cy.get('[data-testid="signUp"]') }
    get #campoEmail() { return cy.get('[data-testid="email"]') }
    get #campoSenha() { return cy.get('[data-testid="password"]') }
    get #btnLogin() { return cy.get('[data-testid="btnLogin"]') }

    clicarEmSignUp() {
        this.#btnSignUp.click()
    }

    fazerLogin(email, senha) {
        this.#campoEmail.type(email)
        this.#campoSenha.type(senha)
        this.#btnLogin.click()
    } 


}

export default new AutenticacaoPage()