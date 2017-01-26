import { IdontwannapayPage } from './app.po';

describe('idontwannapay App', function() {
  let page: IdontwannapayPage;

  beforeEach(() => {
    page = new IdontwannapayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
