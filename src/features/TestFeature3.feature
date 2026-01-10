# TASK3: Create tests from the acceptance criteria

#  Navigate to the AWRS UI(https://www.tax.service.gov.uk/check-the-awrs-register)
#  Search for a URN XXAW 000 0044 5456
#  Not found page is returned
#  search for XXAA 000 0044 5444
#  Invalid page is returned
@regression
Feature: URN

Scenario: Search using valid format URN,
    Given I go to url 'https://www.tax.service.gov.uk/check-the-awrs-register'
    And I search for URN 'XXAW 000 0044 5456'
    Then a not found error is returned

Scenario: Search for invalid
    Given I go to url 'https://www.tax.service.gov.uk/check-the-awrs-register'
    And I search for URN 'XXAA 000 0044 5444'
    Then Invalid page is returned