import { defineSupportCode } from 'cucumber';
import googlePage from '../pageObjects/googlePage';
import lloydsPage from '../pageObjects/lloydsPage';

defineSupportCode(function({ When }) {
 
  When(/^I search for "([^"]*)" in the search box$/, function(arg1) {
    googlePage.enterText(arg1);
  });

  When(/^I click on the first link$/, function() {
    googlePage.clickLink();
  }); 

  When(/^I click on the Personal internet banking$/, function() {
    lloydsPage.personalBankButton();
  }); 

  When(/^I click on the Business internet banking$/, function() {
    lloydsPage.businessBankButton();
  }); 

});