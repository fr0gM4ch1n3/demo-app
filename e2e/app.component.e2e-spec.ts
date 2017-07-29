import { browser, element, by } from 'protractor';

describe('App', () => {
  beforeEach(async () => {
    return await browser.get('/');
  });
});
