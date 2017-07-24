import { GooglechartPage } from './app.po';

describe('googlechart App', () => {
  let page: GooglechartPage;

  beforeEach(() => {
    page = new GooglechartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
