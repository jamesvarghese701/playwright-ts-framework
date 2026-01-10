@regression
Feature: A user validates company details are correct

# TASK2: debug this test and resolve any issues you come across

 @test2
 Scenario: Visit a page and check the page title
   Given I go to url 'https://www.gov.uk/government/organisations/companies-house'
   Then I should be on the 'Companies House - GOV.UK' page
   And I select the 'Find company information' link
   Then I should be on the 'Get information about a company - GOV.UK' page
   And I click the Start now button
   Then I should be on the 'Find and update company information - GOV.UK' page
   When I search for company 'GREGGS PLC' and view the company details
   And I select the 'GREGGS PLC' link
   Then I validate that the details are displayed
     | Input           | Value                  |
     | Company status  | Active                 |
     | Company type    | Public limited Company |
     | Incorporated on | 29 December 1951       |

# incorp date should be wrong - 29 December 1952 , and remove And I select the 'GREGGS PLC' link

