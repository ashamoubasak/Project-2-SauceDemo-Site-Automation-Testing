import Authenticate from '../pages/authenticate.js';
import {test, expect} from '@playwright/test';

test.describe.configure({ mode: 'serial' });
test.describe("SauceDemo authenitacation verification with locked_out_user username",()=>{
     let page, context, authenticate ;

     test.beforeAll(async({browser}) =>{

        context = await browser.newContext();
        page = await context.newPage();
        authenticate = new Authenticate(page);

        await page.goto("/");
     });
    
     test("Locked_out_user should not be Login Successfully", async ()  => 
    {
        await authenticate.login("locked_out_user","secret_sauce");
        await authenticate.clickLoginButton ();
        const expectedError = 'Epic sadface: Sorry, this user has been locked out.';

        const errorLocator = await authenticate.getErrorMessageLocator(expectedError);
        await expect(errorLocator).toHaveText(expectedError);
   
    });
});