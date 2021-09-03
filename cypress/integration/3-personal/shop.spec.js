/// <reference types="cypress" />

const dresses = [
    {quantity: 3, color: 'Pink', size: 'M'},
    {quantity: 7, color: 'Beige', size: 'L'}
]

describe('Test for shop', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php');
    })
    it(`Should add to cart`, () => {
        cy.get('[title="Women"]:eq(0)').parent().trigger('mouseover')
        cy.get('.submenu-container').invoke('show')
        cy.get('[title="Evening Dresses"]:eq(0)').invoke('show').click()
        cy.get('img[title="Printed Dress"').click()
        cy.get('button[type="submit"]').contains('Add to cart').click()
        cy.get('span.continue').click()
        dresses.forEach(dress => {
            cy.get('#quantity_wanted').clear()
            cy.get('#quantity_wanted').type(dress.quantity);
            cy.get(`[name=${dress.color}]`).click();
            cy.get(`[name='group_1']`).select(dress.size);
            cy.get('button[type="submit"]').contains('Add to cart').click()
            cy.get('span.continue').click()
        })
        cy.get('[title="View my shopping cart"]').click()
        cy.get('[title="Subtract"]:eq(0)').click();
        cy.get('[title="Subtract"]:eq(1)').click();
        cy.get('[title="Subtract"]:eq(2)').click();
    })
});