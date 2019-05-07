import { RuneUtilitiesPage } from './app.po';

describe('rune-utilities App', function() {
  let page: RuneUtilitiesPage;

  beforeEach(() => {
    page = new RuneUtilitiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
