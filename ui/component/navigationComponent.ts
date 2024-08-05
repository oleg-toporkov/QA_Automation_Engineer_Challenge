import {Page} from "playwright";
import {step} from "../helpers";

export class NavigationComponent {

    private readonly page: Page;

    private readonly logoLocator: string = 'css=[class="logo img-responsive"]';
    private readonly menuLocator: string = 'xpath=//div[@id="block_top_menu"]/ul/li/a';
    private readonly dressesMenuLocator: string = 'xpath=//div[@id="block_top_menu"]/ul/li/a[@title="Dresses"]'; // TODO ugly ;(

    constructor(page: Page) {
        this.page = page;
    }

    public async clickLogo(): Promise<void> {
        await step('Click logo', this.page);
        return this.page.click(this.logoLocator);
    }

    public async getAllMenusText(): Promise<Array<string | null>> {
        await step('Get menus text', this.page);
        return this.page.$$eval(this.menuLocator, elements => elements.map(element => element.textContent));
    }

    public async clickDressesMenu(): Promise<void> {
        await step('Click dresses menu', this.page);
        return this.page.click(this.dressesMenuLocator, {force: true});
    }

}