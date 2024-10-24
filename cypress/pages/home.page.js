class HomePage {
 
    abrirMenu(menu) {
        cy.get(`[href="/Tab/${menu}"]`).click()
    }  

}

export default new HomePage()