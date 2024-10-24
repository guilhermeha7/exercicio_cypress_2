class CadastroPage {

    get #campoPrimeiroNome() { return cy.get('[data-testid="firstName"]') }
    get #campoSobrenome() { return cy.get('[data-testid="lastName"]') }
    get #campoNumeroTelefone() { return cy.get('[data-testid="phone"]') }
    get #campoEmail() { return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]') }
    get #campoSenha() { return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]') }
    get #campoConfirmarSenha() { return cy.get('[data-testid="repassword"]') }
    get #botaoCreate() { return cy.get('[data-testid="create"]') }

    preencherCadastro(primeiroNome, sobrenome, numero, email, senha) {
        this.#campoPrimeiroNome.type(primeiroNome)
        this.#campoSobrenome.type(sobrenome)
        this.#campoNumeroTelefone.type(numero)
        this.#campoEmail.type(email)
        this.#campoSenha.type(senha)
        this.#campoConfirmarSenha.type(senha)
        this.#botaoCreate.click()
    }


}

export default new CadastroPage()