import { Given, When, Then, And  } from 'cypress-cucumber-preprocessor/steps'

  Given('User is at the login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
  })

  When('User enters username as {string} and password as {string}', (username, password) => {
    cy.get('#txtUsername').type(username)
    cy.get('#txtPassword').type(password)
  })

  And('User clicks on login button', () => {
    cy.get('#btnLogin').click()
  })

  And('Some shit is going to be happened', () => {})

  Then('User is able to successfully login to the Website', () => {
    cy.get('#welcome').should('be.visible', {timeout: 10000})
  })
