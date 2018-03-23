@Lloyds
Feature: Performing Google search for Lloyds

    As a user I want to search for Halifax website on Google

Background:
        Given I am on the google search page 
        And I search for "Lloyds Bank UK" in the search box
        And I should see a list of search results
        When I click on the first link
        And Lloyds home page should be displayed

@personalBanking
Scenario:
        When I click on the Personal internet banking
        Then personal internet banking log on page should be displayed

@businessBanking
Scenario:
        When I click on the Business internet banking
        Then business internet banking log on page should be displayed