import { AmoAppPage } from './app.po';

describe('amo-app App', () => {
  let page: AmoAppPage;

  beforeEach(() => {
    page = new AmoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
