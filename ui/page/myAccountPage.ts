import {Page} from "playwright";
import {HeaderComponent} from "../component/headerComponent";
import {step} from "../helpers";

export class MyAccountPage {
    public readonly header: HeaderComponent;
    private readonly page: Page;
    private readonly pageHeadingLocator: string = 'css=[class="page-heading"]';
    private readonly registerSuccessLocator: string = 'css=[class="alert alert-success"]';

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderComponent(this.page);
    }

    public async getPageHeader(): Promise<string | null> {
        await step('Get page header', this.page);
        return this.page.textContent(this.pageHeadingLocator);
    }

    public async waitForPageToBeLoaded(): Promise<any> {
        return this.page.waitForSelector(this.registerSuccessLocator);
    }

}