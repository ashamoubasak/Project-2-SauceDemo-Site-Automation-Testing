

import CheckoutObject from '../locators/checkoutObjects.js';





export default class CheckoutProcess { 

    constructor(page) {

        this.page = page;
        this.locator = new CheckoutObject(page);
    }

   


     async clickCheckoutButton () {

         await this.locator.checkoutButton.click();
     }

     async enterFirstName (firstname) {

       
         await this.locator.firstNameInput.fill(firstname);
     }

     async enterLastName (lastname) {
        
        
         await this.locator.lastNameInput.fill(lastname);
     }

     async enterZipCode (zipcode) {

        
         await this.locator.zipCodeInput.fill(zipcode);
     }

     async clickContinueButton () {

         await this.locator.continueButton.click();
     }

    
    
    async checkoutDetails() {
        const count = await this.locator.checkoutItemNames.count();
        const productNames = [];
        const productPrices = [];

        for (let i = 0; i < count; i++) {
            const itemName = await this.locator.checkoutItemNames.nth(i).innerText();
            const itemPriceText = await this.locator.checkoutItemPrices.nth(i).innerText(); 
            const itemPrice = parseFloat(itemPriceText.split('$')[1]);
            productNames.push(itemName);
            productPrices.push(itemPrice);
        }
        await this.locator.priceTaxLabel.waitFor({ state: 'visible' });
        const itemTaxText = await this.locator.priceTaxLabel.innerText(); 
        const itemTax = parseFloat(itemTaxText.split('$')[1]);

        await this.locator.totalPriceLabel.waitFor({ state: 'visible' });
        const totalText = await this.locator.totalPriceLabel.innerText(); 
        const total = parseFloat(totalText.split('$')[1]);
        return { productNames, productPrices, itemTax, total };
    
    }

    async clickFinishBtn() {
        await this.locator.finishButton.click();
    }

    async confirmationMessage() {
        return await this.locator.orderConfirmationMsg.innerText();
    }
};