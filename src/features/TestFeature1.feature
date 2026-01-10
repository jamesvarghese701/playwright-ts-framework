Feature: A user can successfully find a company on the companies house website

  # TASK1: Implement the steps for the test

  Scenario: Visit a page and check the page title
    Given I go to url 'https://www.gov.uk/government/organisations/companies-house'
    Then I should be on the 'Companies House - GOV.UK' page
    And I select the 'Find company information' link
    Then I should be on the 'Get information about a company - GOV.UK' page
    And I click the Start now button
    Then I should be on the 'Find and update company information - GOV.UK' page
    When I search for company 'GREGGS PLC' and view the company details
    And I select the 'GREGGS PLC' link
    Then I should be on the 'GREGGS PLC overview - Find and update company information - GOV.UK' page