import puppeteer from 'pptr';

const browser = await puppeteer.launch({
	executablePath: '/usr/bin/google-chrome',
});

console.log('Generating page screenshots...');

const page = await browser.newPage();

await page.goto('https://gutenfries.deno.dev');

await page.setViewport({ width: 1080, height: 720 });
await page.screenshot({ path: 'static/images/screenshots/screenshot-desktop-light.png' });
// click the theme button, and wait for the the theme to change (300ms)
await page.click('.theme-mode');
await page.waitForTimeout(500);
await page.screenshot({ path: 'static/images/screenshots/screenshot-desktop-dark.png' });
await page.click('.theme-mode');
await page.waitForTimeout(500);

await page.setViewport({ width: 375, height: 667 }); // iPhone 7
await page.screenshot({ path: 'static/images/screenshots/screenshot-mobile-1-light.png' });
await page.click('.theme-mode');
await page.waitForTimeout(500);
await page.screenshot({ path: 'static/images/screenshots/screenshot-mobile-1-dark.png' });
await page.click('.theme-mode');
await page.waitForTimeout(500);

await page.setViewport({ width: 390, height: 844 }); // iPhone 14
await page.screenshot({ path: 'static/images/screenshots/screenshot-mobile-2-light.png' });
await page.click('.theme-mode');
await page.waitForTimeout(500);
await page.screenshot({ path: 'static/images/screenshots/screenshot-mobile-2-dark.png' });
await page.click('.theme-mode');

await browser.close();
