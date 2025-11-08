
export default class ProductPageObjects {
    constructor(page) {

        this.page = page;
        this.productNamesList = this.page.locator("//div[contains(@class, 'inventory_item_name')]");
        this.productPricesList = this.page.locator("//div[contains(@class, 'inventory_item_price')]");
        this.addToCartButtonsList = this.page.locator("//button[contains(@class, 'btn_inventory')]");
        this.shoppingCartLink = this.page.locator("//a[@class='shopping_cart_link']");
        this.filterDropdown = this.page.locator("//select[@class='product_sort_container']");
        

    }

    productNames(prodname) {

        return this.page.locator(`//div[@class='inventory_item_name' and contains(text(), '${prodname}')]`);

    }

    pricesOfProducts(prodPrices) {

        return this.page.locator(`//div[@class='inventory_item_price' and  contains(text(), '${prodPrices}')]`);
    }

    getAddToCartButtonByName(name) {
        return this.page.getByRole('button', { name });
   }






};