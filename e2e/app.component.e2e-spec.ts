import { browser, element, by } from 'protractor';

describe('App', () => {
  beforeEach(async () => {
    return await browser.get('/');
  });

  it('should have the users list', () => {
    expect(element(by.css('app-list')).isPresent()).toBeTruthy();
  });
});
