import katanaHomePage from "../support/page-objects/katana.home.page"
import katanaLoginPage from "../support/page-objects/katana.login.page"
import katanaSalesPage from "../support/page-objects/katana.sales.page"


var randomOrderID =Math.floor(10000 + Math.random() * 90000)

 var maninFlow= {
   prams:{
    customer_Name : 'Nitish',
    item_Name: 'Test1',
    orderID:randomOrderID,

  billTo_add :{
    firstName: 'TestName',
    lastName: 'TestLastName',
    company: 'testCompany',
    add_line1: 'test_add_line1',
    add_line2: 'test_add_line2',
    city: 'Tallinn',
    state: 'test',
    zip: '31213',
    country: 'Estonia'
  },
  shipTo_add :{
    firstName: 'TestName',
    lastName: 'TestLastName',
    company: 'testCompany',
    add_line1: 'test_add_line3',
    add_line2: 'test_add_line4',
    city: 'Tallinn',
    state: 'test',
    zip: '43232',
    country: 'Estonia'
  }
   }
  
 }

it("Create new Sale request: and Production Status as 'Make in batch' ", function(){

  katanaLoginPage.launchUrl()
  katanaLoginPage.loginToPortal()
  katanaHomePage.add_Menu()
  katanaHomePage.add_Quote()
  katanaSalesPage.add_CustomerName(maninFlow.prams)
  katanaSalesPage.create_OrderNo(maninFlow.prams)
  katanaSalesPage.enter_bill_to_add(maninFlow.prams.billTo_add)
  katanaSalesPage.enter_ship_to_add(maninFlow.prams.shipTo_add)
  katanaSalesPage.add_item(maninFlow.prams)
  katanaSalesPage.click_on_entry_status()
  katanaSalesPage.confirmed_status_click()
  katanaSalesPage.click_on_sales_order()
  katanaSalesPage.filter_salesOrder_by_orderID(maninFlow.prams)
  katanaSalesPage.mark_production_order_as_in_Batch()



})

