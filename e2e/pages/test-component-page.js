export class TestComponentPage {
  page;
  angularjsVersion;

  constructor(page) {
    this.page = page;
    this.angularjsVersion = page.getByTestId('angularjs-version');
  }
}
