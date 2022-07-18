/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { password, portal_Url, userName } from "../../config";




//#elementLocators 

let email_InputField = "//input[@type='email']";
let password_InputField = "//input[@type='password']";
let logIn_Button = ".auth0-lock-submit";
let dashboard_Txt = "//button[@id='demoDataDelete']";


class LoginPage {

    launchUrl(){
        cy.visit(portal_Url)
    }

    loginToPortal(){
                 
        cy.xpath(email_InputField,{timeout:5000}).type(userName)
        cy.xpath(password_InputField).type(password)
        cy.intercept('GET', ' /api/salesOrderOpenLists/*').as('salesOrderOpenLists')
        cy.get(logIn_Button).click()
        cy.wait('@salesOrderOpenLists',{timeout:15000}).then((interception) => {
            })
        cy.xpath(dashboard_Txt).should('contain', 'Demo data')
  
   }
   
}

export default new LoginPage;

