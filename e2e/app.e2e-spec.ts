import { Myproj5Page } from './app.po';

describe('myproj5 App', function() {
  let page: Myproj5Page;

  beforeEach(() => {
    page = new Myproj5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
