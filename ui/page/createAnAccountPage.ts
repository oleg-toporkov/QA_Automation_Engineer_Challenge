import {Page} from "playwright";
import {HeaderComponent} from "../component/headerComponent";
import {step} from "../helpers";

export class CreateAnAccountPage {
    public readonly header: HeaderComponent;
    private readonly page: Page;
    private readonly mrTitleRadioButtonLocator: string = 'css=[id="uniform-id_gender1"]';
    private readonly mrsTitleRadioButtonLocator: string = 'css=[id="uniform-id_gender2"]';
    private readonly firstNameInputFieldLocator: string = 'css=[id="customer_firstname"]';
    private readonly lastNameInputFieldLocator: string = 'css=[id="customer_lastname"]';
    private readonly passwordInputFieldLocator: string = 'css=[id="passwd"]';
    private readonly registerButtonLocator: string = 'css=[id="submitAccount"]';

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderComponent(this.page);
    }

    public async selectMr(): Promise<void> {
        await step('Select Mr', this.page);
        return this.page.click(this.mrTitleRadioButtonLocator);
    }

    public async selectMrs(): Promise<void> {
        await step('Select Mrs', this.page);
        return this.page.click(this.mrsTitleRadioButtonLocator);
    }

    public async typeFirstName(text: string): Promise<void> {
        await step('Type first name', this.page);
        return this.page.fill(this.firstNameInputFieldLocator, text);
    }

    public async typeLastName(text: string): Promise<void> {
        await step('Type last name', this.page);
        return this.page.fill(this.lastNameInputFieldLocator, text);
    }

    public async typePassword(text: string): Promise<void> {
        await step('Type password', this.page);
        return this.page.fill(this.passwordInputFieldLocator, text);
    }

    public async clickRegister(): Promise<void> {
        await step('Click register', this.page);
        return this.page.click(this.registerButtonLocator);
    }

}