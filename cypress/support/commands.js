/// <reference types="cypress"/>
import HomePage from '../pages/home.page'
import AutenticacaoPage from '../pages/autenticacao.page'
import ProdutosPage from '../pages/produtos.page'
import ProdutoEscolhidoPage from '../pages/produtoEscolhido.page'
import CarrinhoPage from '../pages/carrinho.page'
import EnderecoEntregaPages from '../pages/enderecoEntrega.page'

Cypress.Commands.add('login', (email, senha) => {
    HomePage.abrirMenu('Account')
    AutenticacaoPage.fazerLogin(email,senha)
})

Cypress.Commands.add('comprarProduto', (idProduto, nome, numeroTelefone, rua, cidade, estado, cep) => {   
    //Obs: Para o teste funcionar é preciso já ter um endereço cadastrado na conta.
    HomePage.clicarEmStartShopping()
    ProdutosPage.escolherProduto(idProduto)
    ProdutoEscolhidoPage.adicionarAoCarrinho()
    CarrinhoPage.clicarEmChange()
    EnderecoEntregaPages.adicionarNovoEndereco(nome, numeroTelefone, rua, cidade, estado, cep)
    EnderecoEntregaPages.selecionarEnderecoCriado()
    CarrinhoPage.completarCompra()
})