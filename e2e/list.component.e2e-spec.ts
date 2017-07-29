import { browser, element, by } from 'protractor';

describe('List', () => {

  beforeEach(async () => {
    return await browser.get('/');
  });

  it('should have "Leanne Graham" with address as first entry in list of users', () => {
    expect(element.all(by.css('app-list ul li')).first().getText()).toContain('Leanne Graham (Bret)');
    expect(element.all(by.css('app-list ul li')).first().getText()).toContain('Kulas Light Apt. 556');
    expect(element.all(by.css('app-list ul li')).first().getText()).toContain('Gwenborough 92998-3874');
  });

  it('should have "Ervin Howell (Antonette)" in list of users', () => {
    expect(element(by.css('app-list ul')).getText()).toContain('Ervin Howell (Antonette)');
  });

  it('should have 10 entries in user list', () => {
    expect(element.all(by.css('app-list ul li')).count()).toEqual(10);
  });

  it('should not have selected class', () => {
    expect(element.all(by.css('app-list ul li.selected')).count()).toEqual(0);
  });

  it('should have selected class after clicked', () => {
    element.all(by.css('app-list ul li')).first().click();
    browser.waitForAngular();
    expect(element.all(by.css('app-list ul li')).first().getAttribute('class')).toContain('selected');
  });

  it('should redirect to user data for the first user', () => {
    element.all(by.css('app-list ul li')).first().click();
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toContain('/show/1');
  });

  it('should redirect to user data for the last user', () => {
    element.all(by.css('app-list ul li')).last().click();
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toContain('/show/10');
  });
});
