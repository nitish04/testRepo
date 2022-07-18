/// <reference types="cypress" />
/// <reference types="cypress-xpath" />



//#elementLocators 

let add_Customername = "//input[@placeholder='Search or create customer']"
let orderNo = "//input[@name='orderNo']"
let inputSalesOrderBillingAddress= '[data-testid="inputSalesOrderBillingAddress"] > .MuiFormLabel-root'
let bill_to_click = "(//*[@class='sc-jrsJWt dJdFwe'])[1]"
let firstName_Input = "//input[@name='firstName']"
let lastName_Input ="//input[@name='lastName']"
let company_Input = "//input[@name='company']"
let add_Line1_Input = "//input[@name='line1']"
let add_Line2_Input = "//input[@name='line2']"
let city_Input = "//input[@name='city']"
let state_input = "//input[@name='state']"
let zip_Input = "//input[@name='zip']"
let country_Input ="//input[@name='country']"
let submit_button ='[data-testid="submitButton"]'
let ship_to_add_Input = '[data-testid="address-field-same"]'
let add_Item_Input ="(//*[@class='ag-react-container'])[1]"
let quick_Item_Input ='.quickAddItemUom > .MuiInputBase-root > .MuiInputBase-input'
let submit_item_Button ='.MuiDialogActions-root > .MuiButton-contained'
let entry_status ='[data-testid="menuButton-entityStatus"]'
let confirmed_Status ='[data-testid="menuListItem-entityStatus-confirmed"]'
let sales_order_label = '#salesLink > .MuiTab-wrapper'
let order_by_filter_Input ='[data-testid="orderNoFilterInput"]'
let deliverSome_label ='[data-testid="deliverSome"]'
let batch_status_label ="(//span[@class='MuiButton-label'])[7]"
let batch_status_all_label ='.MuiList-root > :nth-child(2)'
let not_shipped_label= '(//*[contains(text(),"Not shipped")])[1]'
let packed_all_label ='[data-testid="packAll"]'
let continue_button ="//span[contains(text(),'Continue anyway')]"
let include_all_button='[data-testid="reducedQuantitiesNoticeBtnShowFullQty"]'
let deliver_selected_button ='[data-testid="fulfillmentModalSubmit"]'
let done_button  ="(//*[contains(text(),'Done')])[1]"
let delivery_status_label ='[data-testid="agGridColoredCell"]'
let packed_status_label ="//*[@class='ag-react-container']//*[contains(text(),'Packed')]"
let deliverAll_label ='[data-testid="deliverAll"]'



class SalesPage {

    
    add_CustomerName(prams: { customer_Name: string; }){
        cy.xpath(add_Customername,{timeout:5000})
        .type(prams.customer_Name)
        .focus()
        .type('{downarrow}')
        .type('{enter}')

    }

    create_OrderNo(prams: { orderID: any; }){
        cy.xpath(orderNo).clear().type(prams.orderID)
    }


    enter_bill_to_add(_prams:any){
        cy.xpath(add_Customername,{timeout:5000}).click()
        cy.get(inputSalesOrderBillingAddress).should('contain','Bill to')
        cy.xpath(bill_to_click).click()
    
        cy.xpath(firstName_Input).type(_prams.firstName)
        cy.xpath(lastName_Input).type(_prams.lastName)
        cy.xpath(company_Input).type(_prams.company)
        cy.xpath(add_Line1_Input).type(_prams.add_line1)
        cy.xpath(add_Line2_Input).type(_prams.add_line2)
        cy.xpath(city_Input).type(_prams.city)
        cy.xpath(state_input).type(_prams.state)
        cy.xpath(zip_Input).type(_prams.zip)
        cy.xpath(country_Input).type(_prams.country)
        cy.get(submit_button).click()
    }
    
    enter_ship_to_add(_prams:any){
 
        cy.get(ship_to_add_Input).should('be.visible').click()
 
        cy.xpath(firstName_Input).type(_prams.firstName)
        cy.xpath(lastName_Input).type(_prams.lastName)
        cy.xpath(company_Input).type(_prams.company)
        cy.xpath(add_Line1_Input).type(_prams.add_line1)
        cy.xpath(add_Line2_Input).type(_prams.add_line2)
        cy.xpath(city_Input).type(_prams.city)
        cy.xpath(state_input).type(_prams.state)
        cy.xpath(zip_Input).type(_prams.zip)
        cy.xpath(country_Input).type(_prams.country)
        cy.get(submit_button).click()
    }
    
    add_item(prams: {item_Name:string; }){
        cy.xpath(add_Item_Input,{timeout:5000})
        .should('be.visible')
        .type(prams.item_Name)
        // cy.get('.MuiGrid-zeroMinWidth')
        // .focus()
        // .type('{downarrow}')
        cy.xpath(add_Item_Input,{timeout:5000})
      //  .focus()
        .type('{downarrow}')
        .type('{enter}')
        cy.get(quick_Item_Input)
        .type('1')
        cy.get(quick_Item_Input)
        .type('{downarrow}')
        .type('{enter}')
        cy.get(submit_item_Button).click()
    }
  

    click_on_entry_status(){
        cy.get(entry_status,{timeout:15000}).click()
    }
   
    confirmed_status_click(){
        cy.get(confirmed_Status,{timeout:5000}).click()
    }

    // mark_orderAs_delivered(){
    //     cy.get('#salesLink > .MuiTab-wrapper').click()
    // }

   click_on_sales_order(){
    cy.get(sales_order_label,{timeout:5000}).click()
   }

    filter_salesOrder_by_orderID(prams: { orderID: any; }){
        cy.get(order_by_filter_Input).clear().type(prams.orderID)
    }
    mark_orderAs_deliver_some_Sales(){
    cy.get(deliverSome_label,{timeout:5000}).should('be.visible').click()
    }

    mark_production_order_as_in_Batch(){
        cy.xpath(batch_status_label,{timeout:5000}).should('be.visible').click()
       // cy.get('.MuiList-root > [tabindex="0"]',{timeout:5000}).click()
        cy.get(batch_status_all_label,{timeout:5000}).should('be.visible').click()
       // cy.get('.MuiDialogActions-root > .MuiButton-contained > .MuiButton-label',{timeout:15000}).click()
    }

    click_on_delivery_Sales(){
        cy.xpath(not_shipped_label,{timeout:5000}).click()
        
    }

    click_on_pack_all(){
        cy.get(packed_all_label,{timeout:5000}).should('be.visible').click()
        cy.xpath(continue_button).click()
    }
    click_on_include_all(){
    cy.get(include_all_button,{timeout:5000}).click()
    }

    click_on_deliver_selected(){
        cy.get(deliver_selected_button,{timeout:5000}).click()
    }

    verify_order_delivered(prams: { orderID: any; }){
        cy.xpath(done_button,{timeout:10000}).should('be.visible').click()
        cy.get(order_by_filter_Input,{timeout:10000})
        .should('be.visible')
        .clear({force: true})
        .type(prams.orderID,{force: true})
        cy.get(delivery_status_label,{timeout:10000}).should('contain','Delivered')
    }

    verifydelivery_pack_status(){
        cy.xpath(packed_status_label,{timeout:10000})
        .should('contain','Packed')
    }

    change_Status_from_packed_to_deliverAll(){
        cy.xpath(packed_status_label,{timeout:10000}).click()
        cy.get(deliverAll_label).click()

    }

}

export default new SalesPage;

