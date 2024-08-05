import {attachment} from "allure-js-commons";
import {v4} from "uuid";
import {Page} from "playwright";


export async function getScreenshot(page: Page): Promise<Buffer> {
    return await page.screenshot({fullPage: true, path: `target/${v4()}.png`});
}

export async function step(name: string, page: Page) {
    return attachment(name, await getScreenshot(page), 'image/png');
}