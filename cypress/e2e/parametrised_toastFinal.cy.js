/// <reference types="cypress"/>

describe.only('Multiple tests', () => {

    beforeEach(()=>{
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Modal & Overlays"]').click()
    cy.get('[title="Toastr"]').click();
    })

  const testData = {
    position: {
      top_right: '#nb-option-24',
      top_left: '#nb-option-25',
      bottom_right: '#nb-option-27',
      bottom_left: '#nb-option-26'
  },
    title: 'Test Data for title field',
    content: 'Test Data for content field',
    time: '900000',
    type: {
      success:'#nb-option-33',
      warning:'#nb-option-35',
      info:'#nb-option-34',
      danger:'#nb-option-36'
}

  }
  const expectedResult =  {
      icon: {
        success:'g [data-name="checkmark"]',
        warning:'g [data-name="alert-triangle"]',
        info:'g [data-name="question-mark"]',
        danger:'g [data-name="flash"]'
      },

      title: 'Test Data for title field',
      content: 'Test Data for content field',
      color: {
        success:'rgb(96, 175, 32)',
        warning:'rgb(255, 159, 5)',
        info:'rgb(4, 149, 238)',
        danger:'rgb(176, 0, 32)'
      },
      position: {
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px'
    }
      }


 

const successToastCheck = (testData, expectetResult) => 
  
  function () {
    cy.get('.row > :nth-child(1) > :nth-child(1) > .mat-ripple > .select-button').click()
    cy.get(`${testData.position.top_left}`).click()
    cy.get('[name="title"]').clear().type(`${testData.title}`).should('have.value', `${testData.title}`)
    cy.get('[name="content"]').clear().type(`${testData.content}`).should('have.value', `${testData.content}`)
    cy.get('[name="timeout"]').clear().type(`${testData.time}`).should('have.value', `${testData.time}`)
    cy.get(':nth-child(2) > .form-group > .mat-ripple > .select-button').click()
    cy.get(`${testData.type.success}`).click()
    // Клік на кнопку 
    cy.get('.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click()
    // перевірка в тоаст данних які були введені в поля Title та Content
    cy.get('[ng-reflect-toast="[object Object]"]').should('contain',expectedResult.title, expectedResult.content)
    // перевірка кольору тоасту
    cy.get('[ng-reflect-toast="[object Object]"]').should('have.css', 'background-color').and('eq', `${expectedResult.color.success}`)  
    cy.get('[ng-reflect-toast="[object Object]"]').find(`${expectedResult.icon.success}`).should('exist')
    cy.get('.toastr-overlay-container.cdk-global-overlay-wrapper')
      .should('have.css', 'top', expectetResult.position.top) 
      .should('have.css', 'left', expectetResult.position.left) 
}
 
const infoToastCheck = (testData, expectetResult) => 
  
function () {
  cy.get('.row > :nth-child(1) > :nth-child(1) > .mat-ripple > .select-button').click()
  cy.get(`${testData.position.top_right}`).click()
  cy.get('[name="title"]').clear().type(`${testData.title}`).should('have.value', `${testData.title}`)
  cy.get('[name="content"]').clear().type(`${testData.content}`).should('have.value', `${testData.content}`)
  cy.get('[name="timeout"]').clear().type(`${testData.time}`).should('have.value', `${testData.time}`)
  cy.get(':nth-child(2) > .form-group > .mat-ripple > .select-button').click()
  cy.get(`${testData.type.info}`).click()
  // Клік на кнопку 
  cy.get('.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click()
  // перевірка в тоаст данних які були введені в поля Title та Content
  cy.get('[ng-reflect-toast="[object Object]"]').should('contain',expectedResult.title, expectedResult.content)
  // перевірка кольору тоасту
  cy.get('[ng-reflect-toast="[object Object]"]').should('have.css', 'background-color').and('eq', `${expectedResult.color.info}`)  
  cy.get('[ng-reflect-toast="[object Object]"]').find(`${expectedResult.icon.info}`).should('exist')
  cy.get('.toastr-overlay-container.cdk-global-overlay-wrapper')
    .should('have.css', 'top', expectetResult.position.top) 
    .should('have.css', 'left', expectetResult.position.right) 
}

const warningToastCheck = (testData, expectetResult) => 
  
function () {
  cy.get('.row > :nth-child(1) > :nth-child(1) > .mat-ripple > .select-button').click()
  cy.get(`${testData.position.bottom_left}`).click()
  cy.get('[name="title"]').clear().type(`${testData.title}`).should('have.value', `${testData.title}`)
  cy.get('[name="content"]').clear().type(`${testData.content}`).should('have.value', `${testData.content}`)
  cy.get('[name="timeout"]').clear().type(`${testData.time}`).should('have.value', `${testData.time}`)
  cy.get(':nth-child(2) > .form-group > .mat-ripple > .select-button').click()
  cy.get(`${testData.type.warning}`).click()
  // Клік на кнопку 
  cy.get('.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click()
  // перевірка в тоаст данних які були введені в поля Title та Content
  cy.get('[ng-reflect-toast="[object Object]"]').should('contain',expectedResult.title, expectedResult.content)
  // перевірка кольору тоасту
  cy.get('[ng-reflect-toast="[object Object]"]').should('have.css', 'background-color').and('eq', `${expectedResult.color.warning}`)  
  cy.get('[ng-reflect-toast="[object Object]"]').find(`${expectedResult.icon.warning}`).should('exist')
  cy.get('.toastr-overlay-container.cdk-global-overlay-wrapper')
    .should('have.css', 'top', expectetResult.position.bottom) 
    .should('have.css', 'left', expectetResult.position.left) 
}

const dangerToastCheck = (testData, expectetResult) => 
  
function () {
  cy.get('.row > :nth-child(1) > :nth-child(1) > .mat-ripple > .select-button').click()
  cy.get(`${testData.position.bottom_right}`).click()
  cy.get('[name="title"]').clear().type(`${testData.title}`).should('have.value', `${testData.title}`)
  cy.get('[name="content"]').clear().type(`${testData.content}`).should('have.value', `${testData.content}`)
  cy.get('[name="timeout"]').clear().type(`${testData.time}`).should('have.value', `${testData.time}`)
  cy.get(':nth-child(2) > .form-group > .mat-ripple > .select-button').click()
  cy.get(`${testData.type.danger}`).click()
  // Клік на кнопку 
  cy.get('.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click()
  // перевірка в тоаст данних які були введені в поля Title та Content
  cy.get('[ng-reflect-toast="[object Object]"]').should('contain',expectedResult.title, expectedResult.content)
  // перевірка кольору тоасту
  cy.get('[ng-reflect-toast="[object Object]"]').should('have.css', 'background-color').and('eq', `${expectedResult.color.danger}`)  
  cy.get('[ng-reflect-toast="[object Object]"]').find(`${expectedResult.icon.danger}`).should('exist')
  cy.get('.toastr-overlay-container.cdk-global-overlay-wrapper')
    .should('have.css', 'top', expectetResult.position.bottom) 
    .should('have.css', 'left', expectetResult.position.right) 
}
  
it(`Top-right info toast`, infoToastCheck(testData, expectedResult));

it(`Top-left success toast`, successToastCheck(testData, expectedResult));

it(`Bottom-left Warning toast`, warningToastCheck(testData, expectedResult));

it(`Bottom-right Danger toast`, dangerToastCheck(testData, expectedResult));


  })
  