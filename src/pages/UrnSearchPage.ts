import { Page } from "@playwright/test";


export class UrnSearchPage {

    constructor(private page: Page) {}

    private locators = {
        queryInput: '#query',
        searchButton: '#search',
        notFoundError: '#not-found',
        noResults: '#no-results-search-term'
    };

    async searchURN(text: string) {
        await this.page.locator(this.locators.queryInput).fill(text);
        await this.page.locator(this.locators.searchButton).click();
    }

    async notFoundErrorVisible() : Promise<boolean> {
        return await this.page.locator(this.locators.notFoundError).isVisible();

    }

    async noResults() : Promise<boolean> {
         return await this.page.locator(this.locators.noResults).isVisible();
        
    }
    
}