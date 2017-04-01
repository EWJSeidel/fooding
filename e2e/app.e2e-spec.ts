import { FoodingPage } from './app.po';

describe('fooding App', () => {
  let page: FoodingPage;

  beforeEach(() => {
    page = new FoodingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
