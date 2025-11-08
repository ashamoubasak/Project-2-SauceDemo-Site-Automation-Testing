
export default class CheckoutObject {

    constructor(page) {

        this.page = page;
        this.checkoutButton = this.page.locator("//button[@id='checkout']");
        this.firstNameInput = this.page.locator("//input[@id='first-name']");
        this.lastNameInput = this.page.locator("//input[@id='last-name']");
        this.zipCodeInput = this.page.locator("//input[@id='postal-code']");
        this.continueButton = this.page.locator("//input[@id='continue']");
        this.checkoutItemNames = this.page.locator("//div[@class='inventory_item_name']");
        this.checkoutItemPrices = this.page.locator("//div[@class='inventory_item_price']");
        this.totalPriceLabel = this.page.locator("//div[@class='summary_total_label']");
        this.subtotalPricelabel = this.page.locator("//div[@class='summary_subtotal_label']");
        this.priceTaxLabel = this.page.locator("//div[@class='summary_tax_label']");
        this.finishButton = this.page.locator("//button[@id='finish']");
        this.orderConfirmationMsg = this.page.locator("//h2[@class='complete-header']");
        

}
};