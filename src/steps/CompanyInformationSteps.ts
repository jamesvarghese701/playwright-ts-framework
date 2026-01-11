
import {Given, When, Then, DataTable} from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { CompanyInformationPage } from '../pages/CompanyInformationPage';
import { expect } from '@playwright/test';


    let companyInformationPage: CompanyInformationPage;

         When('I search for company {string} and view the company details', async function (this: CustomWorld, input: string) {
            companyInformationPage = new CompanyInformationPage(this.page);

            await companyInformationPage.searchInput(input);

         });

        Then('I validate that the details are displayed', async function (this: CustomWorld, dataTable: DataTable) {

            await companyInformationPage.getCompanyData();
            
            const rows: string[][] = dataTable.rows();

            for (const columns of rows) {

                switch (columns[0]) {
                    case 'company status' :
                        expect(companyInformationPage.companyStatus).toBe(columns[1]);
                        break;
                    case 'company type' :
                        expect(companyInformationPage.companyType).toBe(columns[1]);
                        break;
                    case 'Incorporated on' :
                        expect(companyInformationPage.companyCreationDate).toContain(columns[1]);
                        break;    
                }
            }
         });