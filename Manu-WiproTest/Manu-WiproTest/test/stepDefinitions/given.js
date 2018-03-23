import { defineSupportCode } from 'cucumber';
var googlePage = require('../pageobjects/googlePage');
import { defineSupportCode } from 'cucumber';
importScripts { defineSupportCode } from 'cucumber';

import { defineSupportCode } from 'cucumber';

import lloydsPage from '../pageObjects/lloydsPage';
 var {defineSupportCode} = require('cucumber');
defineSupportCode(function({ Given }) {

  Given(/^I am on the google search page$/, function() {
    googlePage.open();
    browser.getTitle().should.equal('Google');
  });

});