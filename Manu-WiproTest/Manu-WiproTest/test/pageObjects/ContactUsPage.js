let { config } = require('../../wdio.conf');
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let assert = require('chai').assert;
let expect = require('chai').expect;
const expectedTitleText = "Lloyds Bank - Contact Information - Phone Numbers, Branch Info & More";

const selection1 = "//div[@class='title-wrapper']/h3[contains(text(),'I want to call Lloyds Bank')]";
const selection2 = "//div[@class='title-wrapper']/h3[contains(text(),'My card is lost or stolen')]";
const selection3 = "//div[@class='title-wrapper']/h3[contains(text(),'noticed suspicious activity')]";
const selection4 = "//div[@class='title-wrapper']/h3[contains(text(),'Ask a question')]";
const selection5 = "//div[@class='title-wrapper']/h3[contains(text(),'Self Service')]";
const selection6 = "//div[@class='title-wrapper']/h3[contains(text(),'Make a complaint')]";

class ContactUsPage {

assertContactUsPageTitle(){
		 utils.assertTitle(expectedTitleText);
		}

assertSelections(){
		assert.isTrue(browser.isVisible(selection1));
		assert.isTrue(browser.isVisible(selection2));
		assert.isTrue(browser.isVisible(selection3));
		assert.isTrue(browser.isVisible(selection4));
		assert.isTrue(browser.isVisible(selection5));
		assert.isTrue(browser.isVisible(selection6));
}
}
module.exports =  ContactUsPage;
