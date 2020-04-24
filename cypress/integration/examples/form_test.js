import { v4 as uuid } from 'uuid'


const first_name = uuid().slice(0, 5)
const topping1 = 'mushrooms'
const sizeStatus1 = 'medium'
const sizeStatus2  = 'large'
const sauceStatus1 = 'tomatobased'
const sauceStatus2 = 'buffalochicken'

describe('form', () => {
    it('can navigate to the site', () => {
        cy.visit('')
        cy.url().should('include', 'localhost')
    })

    it('can submit a user (Info)', () => {
        cy.get('[data-cy_firstname_input="firstname_input"]')
            .type(first_name)
            .should('have.value', first_name)

        cy.get('select[name="pizza_size"]')
            .select(sizeStatus1)
            .should('have.value', sizeStatus1)
            .select(sizeStatus2)
            .should('have.value', sizeStatus2)

        cy.get('select[name="pizza_sauce"]')
            .select(sauceStatus1)
            .should('have.value', sauceStatus1)
            .select(sauceStatus2)
            .should('have.value', sauceStatus2)

        cy.get(`input[name="${topping1}"]`)
            .check()
            .should('have.checked')
    
          cy.contains('submit')
            .click()

        
        cy.get('.user-container')
        .contains(first_name)
        .next().contains('medium: medium')
        .next().contains('tomatobased: tomatobased')
    })
})

