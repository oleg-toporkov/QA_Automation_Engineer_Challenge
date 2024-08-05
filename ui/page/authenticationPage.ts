import {Page} from "playwright";
import {HeaderComponent} from "../component/headerComponent";
import {step} from "../helpers";

export class AuthenticationPage {
    public readonly header: HeaderComponent;
    private readonly page: Page;
    private readonly emailAddressInputFieldLocator: string = 'css=[id="email_create"]';
    private readonly createAnAccountButtonLocator: string = 'css=[id="SubmitCreate"]';

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderComponent(this.page);
    }

    public async clickCreateAnAccount(): Promise<void> {
        await step('Click create account', this.page);
        return this.page.click(this.createAnAccountButtonLocator);
    }

    public async typeEmailAddress(email: string): Promise<void> {
        await step('Type email address', this.page);
        return this.page.fill(this.emailAddressInputFieldLocator, email);
    }
}