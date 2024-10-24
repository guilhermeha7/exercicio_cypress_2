/// <reference types="cypress"/>

describe('Funcionalidade: Cadastro', () => {
  beforeEach(() => {
    cy.setCookie('ebacStoreVersion','v2', { domain: 'lojaebac.ebaconline.art.br'} )
    cy.visit('/')
  });
  
  it('Deve criar conta com sucesso', () => {
    
  });
});