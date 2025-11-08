
import MenuRelatedObject from "../locators/menuRelatedObjects";

export default class MenuOpenning {

    constructor(page) {

        this.page = page;
        this.locator = new MenuRelatedObject(page);
    }
    async resetAppStateFull () {

        await this.locator.hamburgerMenuBtn.click();
        await this.locator.resetAppStore.click();
        
    }

    async clickCloseMenuBtn () {

        await this.locator.closeMenuBtn.click();
     }

    async clickLogoutBtn () {

        await this.locator.logoutButton.click();
    }

};