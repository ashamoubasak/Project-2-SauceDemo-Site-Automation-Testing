
export default class MenuRelatedObject  {

    constructor(page) {
        this.page = page;
        this.hamburgerMenuBtn = this.page.locator("//button[@id='react-burger-menu-btn']");
        this.resetAppStore = this.page.locator("//a[@id='reset_sidebar_link']");
        this.closeMenuBtn = this.page.locator("//button[@id='react-burger-cross-btn']");
        this.logoutButton = this.page.locator("//a[@id='logout_sidebar_link']");


}
};