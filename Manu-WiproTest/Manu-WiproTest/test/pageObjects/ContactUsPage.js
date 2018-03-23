var { config } = require('../../wdio.conf');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var assert = require('chai').assert;
var expect = require('chai').expect;

var Utils = require('../utils/Utils');
var utils = new Utils();


const option1 = "//div[@class='title-wrapper']/h3[contains(text(),'I want to call Lloyds Bank')]";
const option2 = "//div[@class='title-wrapper']/h3[contains(text(),'My card is lost or stolen')]";
const option3 = "//div[@class='title-wrapper']/h3[contains(text(),'noticed suspicious activity')]";
const option4 = "//div[@class='title-wrapper']/h3[contains(text(),'Ask a question')]";
const option5 = "//div[@class='title-wrapper']/h3[contains(text(),'Self Service')]";
const option6 = "//div[@class='title-wrapper']/h3[contains(text(),'Make a complaint')]";

const expectedTitle = "Lloyds Bank - Contact Information - Phone Numbers, Branch Info & More";


class ContactUsPage {

assertContactUsPageTitle(){	
		 
		 utils.assertTitle(expectedTitle);

		}

assertPageElements(){
		
		assert.isTrue(browser.isVisible(option1));
		assert.isTrue(browser.isVisible(option2));
		assert.isTrue(browser.isVisible(option3));
		assert.isTrue(browser.isVisible(option4));
		assert.isTrue(browser.isVisible(option5));
		assert.isTrue(browser.isVisible(option6));

}
}
module.exports =  ContactUsPage;