/// <reference types="cypress" />

const testCases = [
    {
        query: 'Panda_wielka',
        text: 'Panda wielka'
    },
    {
        query: 'Pies_domowy',
        text: 'Pies domowy'
    },
    {
        query: 'Kangur_olbrzymi',
        text: 'Kangur olbrzymi'
    },
    {
        query: 'Koala_australijski',
        text: 'Koala australijski'
    },
]


describe('Custom tests', () => {
    beforeEach(() => {
        cy.visit('https://pl.wikipedia.org/');
        cy.get('#searchInput').clear();
    })
    testCases.forEach(test => {
        it(`Should find ${test.query}`, () => {
            cy.get('#searchInput').type(`${test.text}{enter}`);
            // cy.get('.suggestions-result > span.highlight').should('contain.text', test.text).click();
            cy.get('#firstHeading').should('contain.text', test.text);
            cy.location('pathname').should('include', test.query);
        })
    })

    it('Should click upon text selector', () => {
        cy.findAllByText('Geografia').click();
        cy.location('pathname').should('include', 'Portal:Geografia');
    })
    it('Should navigate properly', () => {
        cy.get('#p-lang li.interwiki-en > .interlanguage-link-target').click();
        cy.get('#mp-welcome').should('contain.text', 'Welcome to')
        cy.location('hostname').should('include', 'en.');
    })
});