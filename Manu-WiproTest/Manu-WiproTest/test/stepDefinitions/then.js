import { defineSupportCode } from 'cucumber';
import googlePage from '../pageobjects/googlePage';
import lloydsPage from '../pageObjects/lloydsPage';

defineSupportCode(function({ Then }) {

  Then(/^I should see a list of search results$/, function() {
   googlePage.isSearched().should.be.true;
  });

  Then(/^Halifax home page should be displayed$/, function() {
    browser.getTitle().should.equal('Halifax UK | Bank Accounts, Savings, Loans & Mortgages');
   });

  Then(/^Lloyds home page should be displayed$/, function() {
    browser.getTitle().should.equal('Lloyds Bank - Personal Banking, Personal Finances & Bank Accounts');
   });

   Then(/^personal internet banking log on page should be displayed$/, function() {
    browser.getTitle().should.equal('Lloyds Bank - Welcome to Internet Banking');
   });

   Then(/^business internet banking log on page should be displayed$/, function() {
    browser.getTitle().should.equal('Lloyds Bank - Welcome to Online for Business');
   });

});