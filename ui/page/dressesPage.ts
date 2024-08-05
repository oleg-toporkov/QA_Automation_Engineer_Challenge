import {Page} from "playwright";
import {step} from "../helpers";

export class DressesPage {

    private readonly page: Page;

    private readonly checkedCheckboxLocator: string = 'xpath=//span[@data-children-count and @class="checked"]';
    private readonly productGridViewLocator: string = 'css=[class="product_list grid row"]';
    private readonly productListViewLocator: string = 'css=[class="product_list row list"]';
    private readonly listViewButtonLocator: string = 'css=[id=list]';
    private readonly dressPriceLocator: string = 'xpath=//div[contains(@class, "right-block")]//span[@class="price product-price"]';
    private readonly summerDressesFilterLocator: string = 'css=[id="layered_category_11"]';
    private readonly spinnerLocator: string = 'xpath=//ul[@class="product_list row list"]//img[contains(@src, "loader")]';
    private readonly dressNameLocator: string = 'css=[class="product_list row list"] [class="product-name"]';


    constructor(page: Page) {
        this.page = page;
    }

    public async getSelectedCheckboxesCount(): Promise<number> {
        await step('Get selected filters', this.page);
        return this.page.$$eval(this.checkedCheckboxLocator, elements => elements.length);
    }

    public async waitProductGridToBeLoaded(): Promise<any> {
        await step('Wait product grid to be loaded', this.page);
        return this.page.waitForSelector(this.productGridViewLocator);
    }

    public async waitProductListToBeLoaded(): Promise<any> {
        await step('Wait product list to be loaded', this.page);
        return this.page.waitForSelector(this.productListViewLocator);
    }

    public async clickListView(): Promise<void> {
        await step('Click list view', this.page);
        return this.page.click(this.listViewButtonLocator);
    }

    public async getAllPrices(): Promise<Array<string | undefined>> {
        await step('Get dress prices', this.page);
        return this.page.$$eval(this.dressPriceLocator, elements => elements.map(element => element.textContent?.trim()));
    }

    public async clickFilterBySummerDresses(): Promise<void> {
        await step('Click filter by summer dresses', this.page);
        return this.page.click(this.summerDressesFilterLocator);
    }

    public async waitForSpinnerToDisappear(): Promise<any> {
        await step('Wait for spinner to disappear', this.page);
        return this.page.waitForSelector(this.spinnerLocator, {state: 'detached'});
    }

    public async getAllDressNames(): Promise<Array<string | null>> {
        await step('Get dress names', this.page);
        const locator = this.page.locator(this.dressNameLocator);
        return await locator.evaluateAll( elements => elements.map(element => element.textContent));
    }

}