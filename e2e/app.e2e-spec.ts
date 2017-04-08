import { TestMaterialPage } from './app.po';

describe('test-material App', () => {
  let page: TestMaterialPage;

  beforeEach(() => {
    page = new TestMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
