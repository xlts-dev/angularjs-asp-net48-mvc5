export class TestDirectivePage {
  page;
  jqueryVersion;

  constructor(page) {
    this.page = page;
    this.jqueryVersion = page.getByTestId('jquery-version');
  }
}
