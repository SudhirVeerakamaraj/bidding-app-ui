import { BiddingAppUiPage } from './app.po';

describe('bidding-app-ui App', function() {
  let page: BiddingAppUiPage;

  beforeEach(() => {
    page = new BiddingAppUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
