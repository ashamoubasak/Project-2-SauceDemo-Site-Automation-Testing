

import AuthenticateObject from "../locators/authenticateObjects";

export default class Authenticate {

    constructor(page) {

        this.page = page;
        this.locator = new AuthenticateObject(page);
}

async enterUserName (username){

    await this.locator.userNameInput.fill(username);
}

async enterPassword (password){

    await this.locator.passwordField.fill(password);
}

async clickLoginButton () {

    await this.locator.logInButton.click();
}


async getErrorMessageLocator(expectedMessage) {
    return this.locator.errMessage(expectedMessage); // return Locator, not text
}
    



async login(username, password) {

    await this.enterUserName (username);
    await this.enterPassword (password);
    await this.clickLoginButton ();
}
};