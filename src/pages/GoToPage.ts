import { Locator, Page } from '@playwright/test'

export class GoToPage {

    private getStart!: Locator;

    constructor(private page: Page) {
        this.getStart = page.locator("#get-started > a");
     }

    async navigate(url: string) {
        await this.page.goto(url, {waitUntil: 'domcontentloaded'});
    }

    async startNow() {
        await this.getStart.click();
    }

}