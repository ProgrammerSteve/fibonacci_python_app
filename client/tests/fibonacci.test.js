const { test, expect } = require('@playwright/test');

test('Calculate Fibonacci', async ({ page }) => {
    await page.goto('http://localhost:5000');
    await page.fill('#numberInput', '10');
    await page.click('button');
    await page.waitForTimeout(1000);
    const result = await page.textContent('#result');
    expect(result).toBe(`Fibonacci(10) = 55`);
});