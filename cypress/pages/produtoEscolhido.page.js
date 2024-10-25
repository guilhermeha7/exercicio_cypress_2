class ProdutoEscolhidoPage {

    adicionarAoCarrinho() {
        cy.get('[data-testid="addToCart"]').click()
    }

}

export default new ProdutoEscolhidoPage()