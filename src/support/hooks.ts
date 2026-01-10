import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { CustomWorld } from './world';
import { Browser, chromium } from '@playwright/test';
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(20 * 1000);

let browser: Browser;

BeforeAll(async function () {

    browser = await chromium.launch({ headless: false,slowMo:500});
});

Before(async function (this: CustomWorld) {
    this.context = await browser.newContext({viewport:{ width: 1920, height: 1080 }});
    this.page = await this.context.newPage();
});

After(async function (this: CustomWorld) {
    await this.page.close();
    await this.context.close();
});

AfterAll(async function () {
    await browser.close();

});
