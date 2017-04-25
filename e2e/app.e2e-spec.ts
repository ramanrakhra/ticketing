import { WorkangularPage } from './app.po';

describe('workangular App', () => {
  let page: WorkangularPage;

  beforeEach(() => {
    page = new WorkangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
