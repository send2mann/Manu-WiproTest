class GooglePage extends HomePage  {
  
  get searchInput()   { return browser.element('#lst-ib'); }
  get firstLink()     { return browser.element('#rso > div:nth-child(1)'); }
  get personalBankingButton() { return browser.element('ul.login-button-list > li:nth-child(1) > a'); }
  get businessBankingButton() { return browser.element('ul.login-button-list > li:nth-child(2) > a'); }

  open () {
      super.open('https://google.com')
      browser.pause(1000);
  }

  enterText (item) {
    this.searchInput.clearElement();
    this.searchInput.setValue(item);
    this.searchInput.submit();
  }

  isSearched () {
    this.resultsList.waitForVisible(1000);
    return this.resultsList.isVisible();
  }

  clickLink(){
    this.firstLink.clickLink();
  }

  personalBankButton(){
    this.personalBankingButton.clickLink();
  }

}

module.exports = new GooglePage();