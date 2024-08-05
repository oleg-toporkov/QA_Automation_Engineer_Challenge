import {Page} from "playwright";
import {HeaderComponent} from "../component/headerComponent";
import {NavigationComponent} from "../component/navigationComponent";
import {step} from "../helpers";

export class MainPage {
    public readonly header: HeaderComponent;
    public readonly navigation: NavigationComponent;
    private readonly page: Page;
    private readonly contentContainerLocator: string = 'css=[class=columns-container]';
    private readonly popularTabLocator: string = 'xpath=//a[@class="homefeatured"]//..';


    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderComponent(this.page);
        this.navigation = new NavigationComponent(this.page);
    }

    public async waitForContentToBeLoaded(): Promise<any> {
        await step('Wait for main page content to bew loaded', this.page);
        return this.page.waitForSelector(this.contentContainerLocator);
    }

    public async getPopularTabState(): Promise<string | null> {
        await step('Get "Popular" tab state', this.page);
        return this.page.getAttribute(this.popularTabLocator, 'class');
    }
}