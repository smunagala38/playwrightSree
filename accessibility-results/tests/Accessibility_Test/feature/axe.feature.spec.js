// Generated from: tests\Accessibility_Test\feature\axe.feature
import { test } from "playwright-bdd";

test.describe('Accessibility Testing', () => {

  test.beforeEach('Background: Navigate to home page', async ({ Given, baseURL, page }, testInfo) => { if (testInfo.error) return;
    await Given('I navigate to the ecommerce homepage', null, { baseURL, page }); 
  });
  
  test('Main Header accessibility validation', { tag: ['@axe-core'] }, async ({ When, Then, page }) => { 
    await When('I scan the main header section for accessibility issues', null, { page }); 
    await Then('there should be no accessibility violations'); 
  });

  test('Navigation Header accessibility validation', { tag: ['@axe-core'] }, async ({ When, Then, page }) => { 
    await When('I scan the navigation header section for accessibility issues', null, { page }); 
    await Then('there should be no accessibility violations'); 
  });

  test('Footer accessibility validation', { tag: ['@axe-core'] }, async ({ When, Then, page }) => { 
    await When('I scan the footer section for accessibility issues', null, { page }); 
    await Then('there should be no accessibility violations'); 
  });

  test.describe('Accessibility scan for important "<pages>"', () => {

    test('Accessibility scan for important "/"', { tag: ['@axe-core'] }, async ({ Given, When, Then, baseURL, page }) => { 
      await Given('I navigate ecommerce  to "/"', null, { baseURL, page }); 
      await When('I scan the main content for accessibility issues', null, { page }); 
      await Then('there should be no accessibility violations'); 
    });

    test('Accessibility scan for important "/index.php?route=product/special"', { tag: ['@axe-core'] }, async ({ Given, When, Then, baseURL, page }) => { 
      await Given('I navigate ecommerce  to "/index.php?route=product/special"', null, { baseURL, page }); 
      await When('I scan the main content for accessibility issues', null, { page }); 
      await Then('there should be no accessibility violations'); 
    });

    test('Accessibility scan for important "/index.php?route=extension/maza/blog/home"', { tag: ['@axe-core'] }, async ({ Given, When, Then, baseURL, page }) => { 
      await Given('I navigate ecommerce  to "/index.php?route=extension/maza/blog/home"', null, { baseURL, page }); 
      await When('I scan the main content for accessibility issues', null, { page }); 
      await Then('there should be no accessibility violations'); 
    });

    test('Accessibility scan for important "/index.php?route=account/login"', { tag: ['@axe-core'] }, async ({ Given, When, Then, baseURL, page }) => { 
      await Given('I navigate ecommerce  to "/index.php?route=account/login"', null, { baseURL, page }); 
      await When('I scan the main content for accessibility issues', null, { page }); 
      await Then('there should be no accessibility violations'); 
    });

    test('Accessibility scan for important "/index.php?route=account/register"', { tag: ['@axe-core'] }, async ({ Given, When, Then, baseURL, page }) => { 
      await Given('I navigate ecommerce  to "/index.php?route=account/register"', null, { baseURL, page }); 
      await When('I scan the main content for accessibility issues', null, { page }); 
      await Then('there should be no accessibility violations'); 
    });

    test('Accessibility scan for important "/index.php?route=product/category&path=20"', { tag: ['@axe-core'] }, async ({ Given, When, Then, baseURL, page }) => { 
      await Given('I navigate ecommerce  to "/index.php?route=product/category&path=20"', null, { baseURL, page }); 
      await When('I scan the main content for accessibility issues', null, { page }); 
      await Then('there should be no accessibility violations'); 
    });

    test('Accessibility scan for important "/index.php?route=product/product&product_id=40"', { tag: ['@axe-core'] }, async ({ Given, When, Then, baseURL, page }) => { 
      await Given('I navigate ecommerce  to "/index.php?route=product/product&product_id=40"', null, { baseURL, page }); 
      await When('I scan the main content for accessibility issues', null, { page }); 
      await Then('there should be no accessibility violations'); 
    });

    test('Accessibility scan for important "/index.php?route=checkout/cart"', { tag: ['@axe-core'] }, async ({ Given, When, Then, baseURL, page }) => { 
      await Given('I navigate ecommerce  to "/index.php?route=checkout/cart"', null, { baseURL, page }); 
      await When('I scan the main content for accessibility issues', null, { page }); 
      await Then('there should be no accessibility violations'); 
    });

    test('Accessibility scan for important "/index.php?route=checkout/checkout"', { tag: ['@axe-core'] }, async ({ Given, When, Then, baseURL, page }) => { 
      await Given('I navigate ecommerce  to "/index.php?route=checkout/checkout"', null, { baseURL, page }); 
      await When('I scan the main content for accessibility issues', null, { page }); 
      await Then('there should be no accessibility violations'); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Accessibility_Test\\feature\\axe.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":13,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the ecommerce homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I scan the main header section for accessibility issues","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":17,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the ecommerce homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I scan the navigation header section for accessibility issues","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":21,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the ecommerce homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When I scan the footer section for accessibility issues","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":37,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the ecommerce homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given I navigate ecommerce  to \"/\"","stepMatchArguments":[{"group":{"start":25,"value":"\"/\"","children":[{"start":26,"value":"/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When I scan the main content for accessibility issues","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
  {"pwTestLine":33,"pickleLine":38,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the ecommerce homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given I navigate ecommerce  to \"/index.php?route=product/special\"","stepMatchArguments":[{"group":{"start":25,"value":"\"/index.php?route=product/special\"","children":[{"start":26,"value":"/index.php?route=product/special","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When I scan the main content for accessibility issues","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":39,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the ecommerce homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given I navigate ecommerce  to \"/index.php?route=extension/maza/blog/home\"","stepMatchArguments":[{"group":{"start":25,"value":"\"/index.php?route=extension/maza/blog/home\"","children":[{"start":26,"value":"/index.php?route=extension/maza/blog/home","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When I scan the main content for accessibility issues","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":40,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the ecommerce homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given I navigate ecommerce  to \"/index.php?route=account/login\"","stepMatchArguments":[{"group":{"start":25,"value":"\"/index.php?route=account/login\"","children":[{"start":26,"value":"/index.php?route=account/login","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When I scan the main content for accessibility issues","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
  {"pwTestLine":51,"pickleLine":41,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the ecommerce homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given I navigate ecommerce  to \"/index.php?route=account/register\"","stepMatchArguments":[{"group":{"start":25,"value":"\"/index.php?route=account/register\"","children":[{"start":26,"value":"/index.php?route=account/register","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":53,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When I scan the main content for accessibility issues","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
  {"pwTestLine":57,"pickleLine":42,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the ecommerce homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given I navigate ecommerce  to \"/index.php?route=product/category&path=20\"","stepMatchArguments":[{"group":{"start":25,"value":"\"/index.php?route=product/category&path=20\"","children":[{"start":26,"value":"/index.php?route=product/category&path=20","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":59,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When I scan the main content for accessibility issues","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
  {"pwTestLine":63,"pickleLine":43,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the ecommerce homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given I navigate ecommerce  to \"/index.php?route=product/product&product_id=40\"","stepMatchArguments":[{"group":{"start":25,"value":"\"/index.php?route=product/product&product_id=40\"","children":[{"start":26,"value":"/index.php?route=product/product&product_id=40","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":65,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When I scan the main content for accessibility issues","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
  {"pwTestLine":69,"pickleLine":44,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the ecommerce homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given I navigate ecommerce  to \"/index.php?route=checkout/cart\"","stepMatchArguments":[{"group":{"start":25,"value":"\"/index.php?route=checkout/cart\"","children":[{"start":26,"value":"/index.php?route=checkout/cart","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":71,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When I scan the main content for accessibility issues","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
  {"pwTestLine":75,"pickleLine":45,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the ecommerce homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given I navigate ecommerce  to \"/index.php?route=checkout/checkout\"","stepMatchArguments":[{"group":{"start":25,"value":"\"/index.php?route=checkout/checkout\"","children":[{"start":26,"value":"/index.php?route=checkout/checkout","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":77,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When I scan the main content for accessibility issues","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
]; // bdd-data-end