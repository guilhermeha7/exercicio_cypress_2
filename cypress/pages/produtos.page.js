class ProdutosPage {

    escolherProduto(id) {
        cy.get('[data-testid="productDetails"]').eq(id).click()
        cy.get('.css-175oi2r.r-1i6wzkk.r-lrvibr.r-1loqt21.r-1otgn73[data-testid="productDetails"]')


    }

}

export default new ProdutosPage()