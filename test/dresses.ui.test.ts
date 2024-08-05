import {faker} from '@faker-js/faker'
import * as playwright from 'playwright'
import {Browser, Page} from 'playwright'
import {v4} from "uuid"
import {AuthenticationPage} from "../ui/page/authenticationPage"
import {CreateAnAccountPage} from "../ui/page/createAnAccountPage"
import {MainPage} from "../ui/page/mainPage"
import {MyAccountPage} from "../ui/page/myAccountPage"
import {DressesPage} from "../ui/page/dressesPage"
import {config} from "../config/config"

describe('Automationpractice web site', () => {

    const email = `oleg+${v4()}@toporkov.com`

    let authenticationPage: AuthenticationPage
    let createAnAccountPage: CreateAnAccountPage
    let mainPage: MainPage
    let myAccountPage: MyAccountPage
    let dressesPage: DressesPage

    let page: Page
    let browser: Browser

    beforeAll(async () => {
        // TODO something might be reusable, move to common place
        // @ts-ignore
        browser = await playwright[config.ui.browser].launch()
        const context = await browser.newContext()
        page = await context.newPage()

        authenticationPage = new AuthenticationPage(page)
        createAnAccountPage = new CreateAnAccountPage(page)
        mainPage = new MainPage(page)
        myAccountPage = new MyAccountPage(page)
        dressesPage = new DressesPage(page)
    })

    beforeEach(async () => {
        await page.goto(config.ui.url)
    })


    it('should register new user', async () => {
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()

        await mainPage.header.clickSignInButton()

        await authenticationPage.typeEmailAddress(email)
        await authenticationPage.clickCreateAnAccount()

        await createAnAccountPage.selectMrs()
        await createAnAccountPage.typeFirstName(firstName)
        await createAnAccountPage.typeLastName(lastName)
        await createAnAccountPage.typePassword(faker.internet.password())
        await createAnAccountPage.clickRegister()

        await myAccountPage.waitForPageToBeLoaded()

        const header = await myAccountPage.getPageHeader()
        expect(header).toBe('My account')

        const userName = await myAccountPage.header.getAccountName()
        expect(userName).toBe(`${firstName} ${lastName}`)
    })

    it('should open home page by clicking logo', async () => {
        // TODO might be a good idea to use specific user for that to be tests independent
        await mainPage.navigation.clickLogo()

        await mainPage.waitForContentToBeLoaded()
        const menus = await mainPage.navigation.getAllMenusText()
        expect(menus).toStrictEqual(['Women', 'Dresses', 'T-shirts', 'Blog'])

        const popularTabState = await mainPage.getPopularTabState()
        expect(popularTabState).toBe('active')
    })

    it('should open dresses page', async () => {
        await mainPage.navigation.clickDressesMenu()

        await dressesPage.waitProductGridToBeLoaded()

        const selectedCheckboxesCount = await dressesPage.getSelectedCheckboxesCount()
        expect(selectedCheckboxesCount).toBe(0)
    })

    it('should open dresses in list view', async () => {
        await mainPage.navigation.clickDressesMenu()

        await dressesPage.clickListView()
        await dressesPage.waitProductListToBeLoaded()

        const prices = await dressesPage.getAllPrices()
        expect(prices.length).toBe(5) // TODO might be data depending

        for (let price of prices) {
            expect(price).toBeDefined()
        }
    })

    it('should filter dresses', async () => {
        await mainPage.navigation.clickDressesMenu()

        await dressesPage.clickFilterBySummerDresses()
        await dressesPage.waitForSpinnerToDisappear()

        const dressNames = await dressesPage.getAllDressNames()
        expect(dressNames.length).toBeGreaterThan(0)

        for (const name of dressNames) {
            expect(name).toContain('Dress')
        }
    })

    afterAll(async () => {
        await page.close()
        await browser.close()
    })

})