/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { password, portal_Url, userName } from "../../config";


//#elementLocators 

let globalAdd = '#globalAdd'
let addQuote = '#add-quote'


class HomePage {

   
 add_Menu(){
     cy.get(globalAdd).click()

 }
 
 add_Quote(){
    cy.get(addQuote).click()
 }
 
   
}

export default new HomePage;

