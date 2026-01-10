import { Given, When, Then} from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { GoToPage } from '../pages/GoToPage';
import { CustomWorld } from '../support/world';

       
   let goToPage: GoToPage;

         Given('I go to url {string}', async function (this: CustomWorld, url: string) {
            goToPage = new GoToPage(this.page);
            await goToPage.navigate(url);
         });
       
       
         Then('I should be on the {string} page', async function (this: CustomWorld, expectedTitle: string) {
            await expect(this.page).toHaveTitle(new RegExp(expectedTitle), {timeout:100});
         });
       

         Then('I select the {string} link', async function (this: CustomWorld, link: string) {
            await this.page.getByRole('link', { name: link }).click();
         });
       
         Then('I click the Start now button', async function (this: CustomWorld) {
            await goToPage.startNow();

         });
       


       
       
      