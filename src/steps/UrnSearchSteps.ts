import { Given, When, Then } from '@cucumber/cucumber';
import { UrnSearchPage } from '../pages/UrnSearchPage';
import { CustomWorld } from '../support/world';
import { assert } from 'node:console';
import { Assert } from 'node:assert';
import { expect } from '@playwright/test';


    let urnSearchPage: UrnSearchPage;

         Then('I search for URN {string}', async function (this: CustomWorld, urn: string) {
            urnSearchPage = new UrnSearchPage(this.page);
            await urnSearchPage.searchURN(urn);
         });
       
        Then('a not found error is returned', async function (this: CustomWorld,) {
            expect(await urnSearchPage.notFoundErrorVisible()).toBeTruthy();
         });
       
         Then('Invalid page is returned', async function (this: CustomWorld,) {
            expect(await urnSearchPage.noResults()).toBeTruthy();
         });