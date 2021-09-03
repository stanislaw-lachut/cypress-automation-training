/// <reference types="cypress" />

describe('Selectors test', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php');
    })
    it(`Should select siblings via general sibling selectors`, () => {
        cy.get('div.product-image-container ~ div')
        // a tag immediately after div
        cy.get('#homefeatured > li:first-child .product-image-container > div + a').invoke('show')
        // a tag that has a tag as a sibling
        cy.get('#homefeatured > li:first-child .product-image-container > a ~ a').invoke('show').click()
    })
});
