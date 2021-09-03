/// <reference types="cypress" />

describe('Todo tests', () => {
    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/react/#/');
        cy.get('header.header > input.new-todo').clear();
    })

    const list = ['get out trash', 'mow the grass', 'clean the kitchen']
    it('adds todos properly', () => {
        list.map(item => {
            cy.get('header.header > input.new-todo').type(`${item.name}{enter}`)
        })
        cy.get('ul.todo-list > li').should('have.length', 3)
        cy.get('ul.todo-list > li:eq(1) button.destroy').invoke('show').click()
        cy.get('ul.todo-list > li').should('have.length', 2)
        cy.get('ul.todo-list > li:first-child input.toggle').click()
        cy.get('button.clear-completed').click()
        cy.get('ul.todo-list > li').should('have.length', 1);
    })
})
