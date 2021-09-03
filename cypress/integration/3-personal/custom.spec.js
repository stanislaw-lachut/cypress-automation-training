/// <reference types="cypress" />

describe('Custom tests', () => {
    beforeEach(() => {
        cy.visit('https://pl.wikipedia.org/');
        cy.get('#searchInput').clear();
    })

    it('Should click upon text selector', () => {
        cy.findAllByText('Geografia').click()
    })

    /** łączenie selektorów */

    it('Should click upon + selector', () => {
        cy.get('li + li:eq(0)').click()
    })
    it('Should click upon ~ selector', () => {
        cy.get('li ~ li:eq(0)').click()
    })
    /** Sam selektor klasy to za mało */
    it.skip('Should click upon pseudoselector', () => {
        cy.get('.vector-menu-content-list > li:first-child').click()
    })
    /**Czym się różni nth-child od eq ? */
    it('Should click upon nth-child selector', () => {
        cy.get('#p-navigation .vector-menu-content-list > li:nth-child(3)').click()
    })
    /** eq znajduje index dziecka o danym tagu, a nth-child tag,
     *  które jest kolejnym dzieckiem, niekoniecznie wśród tych samych tagów */
    it('Should click upon eq selector', () => {
        cy.get('#p-navigation .vector-menu-content-list > li:eq(3)').click()
    })
    it('Should click upon id selector', () => {
        cy.get('#p-navigation .vector-menu-content-list > li:last-child').click()
    })

    it('wiki test', function() {
        cy.get('#n-pierwsze-kroki > a').click();
    });
})