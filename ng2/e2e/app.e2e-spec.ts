import { Ng2Page } from './app.po';

describe('ng2 App', () => {
  let page: Ng2Page;

  beforeEach(() => {
    page = new Ng2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to pi!!'))
      .then(done, done.fail);
  });
});
