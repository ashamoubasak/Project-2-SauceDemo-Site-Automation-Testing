 


export default class AuthenticateObject {

    constructor(page) {
        this.page = page;
        this.userNameInput = this.page.locator("//input[@id='user-name']");
        this.passwordField = this.page.locator("//input[@id='password']");
        this.logInButton = this.page.locator("//input[@id='login-button']");
        this.errorMsgCloseButton = this.page.locator("//button[@class='error-button']");
    }

    errMessage(errorMessage) {

        return this.page.locator(`//h3[text()='${errorMessage}']`);
    }
};