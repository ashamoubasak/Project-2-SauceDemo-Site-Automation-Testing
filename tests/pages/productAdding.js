

  import ProductPageObjects from "../locators/productPageObjects";

  export default class ProductAdding {
      constructor(page) {

         this.page = page;
          this.locator = new ProductPageObjects(page);
      }


      async clickZtoAFilter() {

         await this.locator.filterDropdown.click();
         await this.locator.filterDropdown.selectOption('za');
      }

      async selectRandomProducts(count) {

    
          const totalProducts = await this.locator.productNamesList.count();
          const selectedProdIndexes = new Set();

          while (selectedProdIndexes.size < count) {
             selectedProdIndexes.add(Math.floor(Math.random() * totalProducts));
          }

          const selectedProdNames = [];
          const selectedProdPrices = [];
          for (const index of selectedProdIndexes) {
              const name = await this.locator.productNamesList.nth(index).innerText();
              const priceText = await this.locator.productPricesList.nth(index).innerText();
              const price = parseFloat(priceText.replace("$", ""));

           

              selectedProdNames.push(name);
              selectedProdPrices.push(price);

              await this.locator.addToCartButtonsList.nth(index).click();

       }

       await this.locator.shoppingCartLink.click();

          return { selectedProdNames, selectedProdPrices };


  }
  };


