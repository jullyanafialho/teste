const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

describe('Module - Add Item', () => {
  test('should output name and quantity', () => {
    const text = generateText('Pão', 2);
    expect(text).toBe('Produto: Pão - Quantidade: 2');
  });

  test('should generate a valid text output', () => {
    const text = checkAndGenerate('Pão', 2);
    expect(text).toBe('Produto: Pão - Quantidade: 2');
  });
})
  
test('should create an element with text and correct class', async () => {
  const browser = await puppeteer.launch({
    headless: true,
    slowMo: 80,
    args: ['--window-size=1920,1080']
  });
  const page = await browser.newPage();
  await page.goto(
    'file:///Users/jullyana.pinheiro/EscaleOSTelco/js-testing-introduction/index.html'
  );
  await page.click('input#name');
  await page.type('input#name', 'Feijão');
  await page.click('input#qtd');
  await page.type('input#qtd', '1');
  await page.click('#btnAddItem');
  const finalText = await page.$eval('.item-list', el => el.textContent);
  expect(finalText).toBe('Produto: Feijão - Quantidade: 1');
}, 10000);

//UnitOfWork_StateUnderTest_ExpectedBehavior
