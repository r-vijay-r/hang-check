import { HangCheckPage } from './app.po';

describe('hang-check App', function() {
  let page: HangCheckPage;

  beforeEach(() => {
    page = new HangCheckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
