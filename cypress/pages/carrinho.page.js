class CarrinhoPage {
    clicarEmChange() {
        cy.get('[style="justify-content: space-between; flex-grow: 1;"] > :nth-child(1) > .r-1wtj0ep > .r-1i6wzkk').click()
    }

    completarCompra() {
        cy.get('[data-testid="selectAddressOrContinueToPayment"]').click() //Clicar em Continue to payment
        cy.get('[data-testid="completeCheckout"]').click() //Clicar em Completar Checkout
    }
}

export default new CarrinhoPage()