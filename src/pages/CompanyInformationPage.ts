import {Locator, Page} from '@playwright/test';


export class CompanyInformationPage  {

    constructor(private page: Page) {}
   
    companyStatus!: string;
    companyType!: string;
    companyCreationDate!: string;


    private locators = {
        searchInput : '#site-search-text',
        searchSubmit: '#search-submit',
        companyStatusData: '#company-status',
        companyTypeData: '#company-type',
        companyCreationDate: '#company-creation-date'
    };

    async searchInput(input: string){
        await this.page.locator(this.locators.searchInput).fill(input);
        await this.page.locator(this.locators.searchSubmit).click();
    }

    async getCompanyData() : Promise<void> {

        this.companyStatus = (await this.page.locator(this.locators.companyStatusData).innerText()).trim();
        this.companyType = (await this.page.locator(this.locators.companyTypeData).innerText()).trim();
        this.companyCreationDate = (await this.page.locator(this.locators.companyCreationDate).innerText()).trim();


    } 

}