/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Carrinho', () => {
    beforeEach(() => {
        cy.setCookie('ebacStoreVersion','v2', { domain: 'lojaebac.ebaconline.art.br'} )
        cy.visit('/')
    });
    
    it('Deve realizar uma compra com sucesso', () => {
        cy.login('teste@testes.com.br','teste123')
        cy.comprarProduto(6, 'Francisco', 20987654321, 'Rua Evaristo Costa', 'Manaus', 'Amazonas', 18350400)
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .css-175oi2r').should('contain','Order Success')
    });
});