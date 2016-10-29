import { TestRepoPage } from './app.po';

describe('test-repo App', function() {
  let page: TestRepoPage;

  beforeEach(() => {
    page = new TestRepoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
