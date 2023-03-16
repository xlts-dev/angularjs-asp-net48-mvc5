import { expect, test } from '@playwright/test';
import { IndexPage } from '../pages/index-page';
import { TestComponentPage } from '../pages/test-component-page';
import { TestDirectivePage } from '../pages/test-directive-page';

test.describe('angularjs-asp-net48-mvc5 app', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('Index', async ({ page }) => {
    const indexPage = new IndexPage(page);

    await expect(indexPage.title).toHaveText('XLTS for AngularJS with .NET Framework');
  });

  test('TestComponent', async ({ page }) => {
    const testComponentPage = new TestComponentPage(page);

    await expect(testComponentPage.angularjsVersion).toHaveText('AngularJS Version: 1.8.2');
  });

  test('TestDirective', async ({ page }) => {
    const testDirective = new TestDirectivePage(page);

    await expect(testDirective.jqueryVersion).toHaveText('jQuery Version: 3.6.0');
  });
});
