/// <reference types="cypress"/>
import HomePage from '../pages/home.page'
import AutenticacaoPage from '../pages/autenticacao.page'

Cypress.Commands.add('login', (email, senha) => {
    HomePage.abrirMenu('Account')
    AutenticacaoPage.fazerLogin(email,senha)
})

Cypress.Commands.add('comprarProduto', (idProduto, nome, numero, endereco, cidade, estado, cep) => {   
    //Para funcionar é preciso já ter um endereço cadastrado.
    let ultimoEnderecoCriado;
    
    cy.get('[data-testid="__CAROUSEL_ITEM_0_READY__"] > .r-1kihuf0 > .r-1jnx3et > .r-13w96dm > [data-testid="banner"]').click() //Clique em Start Shopping
    cy.get('[data-testid="productDetails"]').eq(idProduto).click() //Clique em um produto
    cy.get('[data-testid="addToCart"]').click() //Clique em Add To Cart
    cy.get('[style="justify-content: space-between; flex-grow: 1;"] > :nth-child(1) > .r-1wtj0ep > .r-1i6wzkk').click() //Clique em Change
    cy.get('[style="color: rgb(0, 0, 0); font-family: Montserrat-Medium; margin-left: 10px;"]').click() //Clique em Add New Adress
    cy.get('.r-1d7mnkm > :nth-child(1) > .css-175oi2r > .css-11aywtz').type(nome) //Digite o nome
    cy.get(':nth-child(2) > .css-175oi2r > .css-11aywtz').type(numero) //Digite o numero
    cy.get(':nth-child(3) > .css-175oi2r > .css-11aywtz').type(endereco) //Digite o endereço da entrega
    cy.get(':nth-child(4) > .css-175oi2r > .css-11aywtz').type(cidade) //Digite a cidade da entrega
    cy.get(':nth-child(5) > .css-175oi2r > .css-11aywtz').type(estado) //Digite o estado da entrega
    cy.get(':nth-child(6) > .css-175oi2r > .css-11aywtz').type(cep) //Digite o cep da entrega
    cy.get('[data-testid="save"]').click() //Clique em Save
    cy.get('.css-175oi2r.r-1i6wzkk.r-lrvibr.r-1loqt21.r-1otgn73.r-14lw9ot.r-1wtj0ep.r-1d7mnkm.r-ubg91z').its('length').then((quantidade)=>{
        ultimoEnderecoCriado = quantidade
        cy.log(ultimoEnderecoCriado)
        cy.get('.css-175oi2r.r-1i6wzkk.r-lrvibr.r-1loqt21.r-1otgn73.r-14lw9ot.r-1wtj0ep.r-1d7mnkm.r-ubg91z').eq(ultimoEnderecoCriado).click() //Selecione o Novo Endereço Criado
        cy.get('[data-testid="selectAddressOrContinueToPayment"]').click() //Clicar em Continue to payment
        cy.get('[data-testid="completeCheckout"]').click() //Clicar em Completar Checkout
    })
})