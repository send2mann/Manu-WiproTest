class lloydsPage extends HomePage  {
  
  get personalBankingButton() { return browser.element('ul.login-button-list > li:nth-child(1) > a'); }
  get businessBankingButton() { return browser.element('ul.login-button-list > li:nth-child(2) > a'); }

  personalBankButton(){
    this.personalBankingButton.click();
  }

  businessBankButton(){
    this.businessBankingButton.click();
  }

}

export default new lloydsPage();