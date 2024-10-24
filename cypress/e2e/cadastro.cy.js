/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import HomePage from '../pages/home.page'
import AutenticacaoPage from '../pages/autenticacao.page'
import CadastroPage from '../pages/cadastro.page';

describe('Funcionalidade: Cadastro', () => {
  beforeEach(() => {
    cy.setCookie('ebacStoreVersion','v2', { domain: 'lojaebac.ebaconline.art.br'} )
    cy.visit('/')
  });
  
  it('Deve criar conta com sucesso', () => {
    let email = faker.internet.email()
    HomePage.abrirMenu('Account')
    AutenticacaoPage.clicarEmSignUp()
    CadastroPage.preencherCadastro('Joaquim','Ferreira',44942132455,email,'teste123')
    HomePage.abrirMenu('Account')
    cy.get('[data-testid="CustomerName"]').should('exist')
  });
});