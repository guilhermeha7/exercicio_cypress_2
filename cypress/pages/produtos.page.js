class ProdutosPage {

    escolherProduto(id) {
        cy.get('[data-testid="productDetails"]').eq(id).click()
    }

}

export default new ProdutosPage()