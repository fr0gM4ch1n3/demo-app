import { browser, element, by } from 'protractor';

describe('Show (first user)', () => {
  beforeEach(async () => {
    return await browser.get('/show/1');
  });

  it('should have "quidem molestiae enim" in list of albums from the first user', () => {
    expect(element.all(by.css('app-show ul li')).first().getText()).toContain('quidem molestiae enim');
  });

  it('should have "sunt qui excepturi placeat culpa" in list of albums', () => {
    expect(element(by.css('app-show ul')).getText()).toContain('sunt qui excepturi placeat culpa');
  });

  it('should have 10 entries in album list', () => {
    expect(element.all(by.css('app-show ul li')).count()).toEqual(10);
  });

  it('should not have selected class', () => {
    expect(element.all(by.css('app-show ul li.selected')).count()).toEqual(0);
  });

  it('should have selected class after clicked', () => {
    element.all(by.css('app-show ul li')).first().click();
    browser.waitForAngular();
    expect(element.all(by.css('app-show ul li')).first().getAttribute('class')).toContain('selected');
  });

  it('should redirect to photos from the first album', () => {
    element.all(by.css('app-show ul li')).first().click();
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toContain('/show/1/1');
  });

  it('should redirect to photos from the last album', () => {
    element.all(by.css('app-show ul li')).last().click();
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toContain('/show/1/10');
  });
});

describe('Show (last user)', () => {
  beforeEach(async () => {
    return await browser.get('/show/10');
  });

  it('should have "repellendus praesentium debitis officiis" in list of albums from the last user', () => {
    expect(element.all(by.css('app-show ul li')).first().getText()).toContain('repellendus praesentium debitis officiis');
  });

  it('should have "incidunt et et eligendi assumenda soluta quia recusandae" in list of albums', () => {
    expect(element(by.css('app-show ul')).getText()).toContain('incidunt et et eligendi assumenda soluta quia recusandae');
  });

  it('should have 10 entries in album list', () => {
    expect(element.all(by.css('app-show ul li')).count()).toEqual(10);
  });

  it('should not have selected class', () => {
    expect(element.all(by.css('app-show ul li.selected')).count()).toEqual(0);
  });

  it('should have selected class after clicked', () => {
    element.all(by.css('app-show ul li')).first().click();
    browser.waitForAngular();
    expect(element.all(by.css('app-show ul li')).first().getAttribute('class')).toContain('selected');
  });

  it('should redirect to photos from the first album', () => {
    element.all(by.css('app-show ul li')).first().click();
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toContain('/show/10/91');
  });

  it('should redirect to photos from the last album', () => {
    element.all(by.css('app-show ul li')).last().click();
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toContain('/show/10/100');
  });
});
