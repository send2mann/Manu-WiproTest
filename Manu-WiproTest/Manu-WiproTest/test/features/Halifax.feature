@Halifax
Feature: Performing Google search for Halifax

    As a user I want to search for Halifax website on Google

Scenario:
        Given I am on the google search page 
        And I search for "Halifax Bank UK" in the search box
        And I should see a list of search results
        When I click on the first link
        Then Halifax home page should be displayed