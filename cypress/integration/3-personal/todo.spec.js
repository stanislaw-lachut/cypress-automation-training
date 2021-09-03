/// <reference types="cypress" />

describe('Custom tests', () => {
    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/react/#/');
        cy.get('header.header > input.new-todo').clear();
    })

    it('adds todos properly', () => {
        ['bring out the trash', 'clean the kitchen', 'mow the grass'].map(item => {
            cy.get('header.header > input.new-todo').type(`${item}{enter}`);
        })
        cy.get('ul.todo-list > li').should('have.length', 3)
        cy.get('ul.todo-list > li:eq(1) button.destroy').invoke('show').click()
        cy.get('ul.todo-list > li:eq(1) [type="checkbox"]').click()
        cy.get('ul.filters').next('button.clear-completed').click()
        cy.get('ul.todo-list > li').should('have.length', 1)
    });
})