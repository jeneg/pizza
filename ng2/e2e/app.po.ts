import { browser, by, element } from 'protractor';

export class Ng2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pi-root h1')).getText();
  }
}
