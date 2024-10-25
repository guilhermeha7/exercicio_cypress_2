class EnderecoEntregaPages {
 
    adicionarNovoEndereco(nome, numeroTelefone, rua, cidade, estado, cep) {
        cy.get('[style="color: rgb(0, 0, 0); font-family: Montserrat-Medium; margin-left: 10px;"]').click() //Clique em Add New Address
        cy.get('.r-1d7mnkm > :nth-child(1) > .css-175oi2r > .css-11aywtz').type(nome) //Digite o nome
        cy.get(':nth-child(2) > .css-175oi2r > .css-11aywtz').type(numeroTelefone) //Digite o numero
        cy.get(':nth-child(3) > .css-175oi2r > .css-11aywtz').type(rua) //Digite o endereço da entrega
        cy.get(':nth-child(4) > .css-175oi2r > .css-11aywtz').type(cidade) //Digite a cidade da entrega
        cy.get(':nth-child(5) > .css-175oi2r > .css-11aywtz').type(estado) //Digite o estado da entrega
        cy.get(':nth-child(6) > .css-175oi2r > .css-11aywtz').type(cep) //Digite o cep da entrega
        cy.get('[data-testid="save"]').click() //Clique em Save
    }

    selecionarEnderecoCriado() {
        let ultimoEnderecoCriado;
        
        cy.get('.css-175oi2r.r-1i6wzkk.r-lrvibr.r-1loqt21.r-1otgn73.r-14lw9ot.r-1wtj0ep.r-1d7mnkm.r-ubg91z').its('length').then((quantidade)=>{
            ultimoEnderecoCriado = quantidade
            cy.log(ultimoEnderecoCriado)
            cy.get('.css-175oi2r.r-1i6wzkk.r-lrvibr.r-1loqt21.r-1otgn73.r-14lw9ot.r-1wtj0ep.r-1d7mnkm.r-ubg91z').eq(ultimoEnderecoCriado).click() //Selecione o Novo Endereço Criado
        })
    }

}

export default new EnderecoEntregaPages()