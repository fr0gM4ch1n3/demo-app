import { browser, element, by } from 'protractor';

describe('Album (first user, first album)', () => {
  beforeEach(async () => {
    return await browser.get('/show/1/1');
  });

  it('should have "accusamus beatae ad facilis cum similique qui sunt" in list of albums from the first user', () => {
    expect(element.all(by.css('app-album .photo-grid>*>h4')).first().getAttribute('innerHTML'))
    .toContain('accusamus beatae ad facilis cum similique qui sunt');
  });

  it('should have 50 photos', () => {
    expect(element.all(by.css('app-album .photo-grid>*')).count()).toEqual(50);
  });
});

describe('Album (last user, last album)', () => {
  beforeEach(async () => {
    return await browser.get('/show/10/100');
  });

  it('should have "ut maxime reiciendis veritatis" in list of albums from the first user', () => {
    expect(element.all(by.css('app-album .photo-grid h4')).first().getAttribute('innerHTML')).toContain('ut maxime reiciendis veritatis');
  });

  it('should have 50 entries in album list', () => {
    expect(element.all(by.css('app-album .photo-grid>*')).count()).toEqual(50);
  });
});
