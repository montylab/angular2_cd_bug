import { UnoPage } from './app.po';

describe('uno App', () => {
  let page: UnoPage;

  beforeEach(() => {
    page = new UnoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
