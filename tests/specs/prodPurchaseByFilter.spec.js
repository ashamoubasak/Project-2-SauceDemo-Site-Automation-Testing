
import { test, expect } from '@playwright/test';

import MenuOpenning from '../pages/menuOpenning';
import ProductAdding from '../pages/productAdding';
import CheckoutProcess from '../pages/checkoutProcess';
import Authenticate from '../pages/authenticate';

import data from "../../resources/testData.json";


let selectedProductNames = [];
let selectedProductPrices = [];

test.describe.configure({ mode: 'serial' });
test.describe("Random Product Checkout Flow Verification from SauceDemo site", () => { 

    let page, context, authenticate, addingProduct, openingMenu, checkout;

    test.beforeAll( async ({browser}) => {
    
            context = await browser.newContext();
            page = await context.newPage();
    
            authenticate = new Authenticate(page);
            addingProduct = new ProductAdding(page);
            openingMenu = new MenuOpenning(page);
            checkout = new CheckoutProcess(page);
    
            await page.goto("/");
    
    
        });

        test("Successfully Login with 'performance_glitch_user' user_name ", async () => {

        await authenticate.login ("performance_glitch_user", "secret_sauce");
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


         });

         test("Reset App State from the HamBurger Menu ", async () => {

        await openingMenu.resetAppStateFull ();
        await openingMenu.clickCloseMenuBtn();

         });

         test("Filter Products Z to A and Selecting the First Product", async () => {

            await addingProduct.clickZtoAFilter();
            const productName = await addingProduct.locator.productNamesList.nth(0).innerText();
            const priceText = await addingProduct.locator.productPricesList.nth(0).innerText();
            const productPrice = parseFloat(priceText.replace('$', ''));

            selectedProductNames.push(productName);
            selectedProductPrices.push(productPrice);

            await addingProduct.locator.addToCartButtonsList.nth(0).click();
            await addingProduct.locator.shoppingCartLink.click();


         });

         test("Fillup Checkout Form and Successfully Verify the Checkout Details", async () => {
        
         await checkout.clickCheckoutButton();
         await checkout.enterFirstName (data.firstName);
         await checkout.enterLastName (data.lastName);
         await checkout.enterZipCode (data.zipCode);
         await checkout.clickContinueButton();

         const { productNames, itemTax, total } = await checkout.checkoutDetails();

        for (const name of selectedProductNames) {
           await expect(productNames).toContain(name);
        }

        const expectedSubtotal = selectedProductPrices.reduce((a, b) => a + b, 0);
        const expectedTotal = expectedSubtotal + itemTax;
        await expect(total).toBeCloseTo(expectedTotal, 2);

         });

         test("Successfully Finish the Checkout Process and Verify the Order Confirmation Message", async ()=> {

        await checkout.clickFinishBtn();
        await expect(checkout.locator.orderConfirmationMsg).toHaveText("Thank you for your order!");

         });

    test("Reset the App State and Logout from the SauceDemo Site", async () => {
        
        await openingMenu.resetAppStateFull ();
        await openingMenu.clickLogoutBtn();
        await expect(page).toHaveURL('/');
    });

});