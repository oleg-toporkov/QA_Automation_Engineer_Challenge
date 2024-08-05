import {Page} from "playwright";
import {step} from "../helpers";

export class HeaderComponent {
    private readonly page: Page;

    private readonly signInButtonLocator: string = 'css=.login';
    private readonly accountNameLocator: string = 'css=[class="account"]';

    constructor(page: Page) {
        this.page = page;
    }

    public async clickSignInButton(): Promise<void> {
        await step('Click sign in', this.page);
        return this.page.click(this.signInButtonLocator);
    }

    public async getAccountName(): Promise<string | null> {
        await step('Get account name', this.page);
        return this.page.textContent(this.accountNameLocator);
    }
}