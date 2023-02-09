export class IndexPage {
  page;
  title;
  constructor(page) {
    this.page = page;
    this.title = page.getByTestId('title');
  }
}
