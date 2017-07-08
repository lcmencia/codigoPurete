import { Hackathon2017Page } from './app.po';

describe('hackathon2017 App', () => {
  let page: Hackathon2017Page;

  beforeEach(() => {
    page = new Hackathon2017Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
