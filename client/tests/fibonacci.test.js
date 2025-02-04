const { test, expect } = require('@playwright/test');

test('Calculate Fibonacci', async ({ page }) => {
    await page.goto('http://localhost:5000');
    await page.fill('#numberInput', '10');
    await page.click('button');
    await page.waitForTimeout(500);
    const result = await page.textContent('#result');
    expect(result).toBe(`Fibonacci(10) = 55`);
});

test('Empty Input', async ({ page }) => {
    await page.goto('http://localhost:5000');
    await page.fill('#numberInput', '');
    await page.click('button');
    await page.waitForTimeout(500);
    const result = await page.textContent('#result');
    expect(result).toBe(`Please enter a number`);
});

test('negative number Input', async ({ page }) => {
    await page.goto('http://localhost:5000');
    await page.fill('#numberInput', '-1');
    await page.click('button');
    await page.waitForTimeout(500);
    const result = await page.textContent('#result');
    expect(result).toBe(`Please enter a non-negative integer`);
});

test('test enter key press listener', async ({ page }) => {
    await page.goto('http://localhost:5000');
    await page.fill('#numberInput', '1');
    await page.press('#numberInput', 'Enter');
    await page.waitForTimeout(500);
    const result = await page.textContent('#result');
    expect(result).toBe(`Fibonacci(1) = 1`);
});