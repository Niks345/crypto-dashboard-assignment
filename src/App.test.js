/**
 * @jest-environment puppeteer
 */

describe("Assignment Webpage Tests", () => {
  const URL = "http://localhost:8080/index.html"; // Change if needed

  beforeAll(async () => {
    await page.goto(URL);
  });

  test("Page title should contain 'Assignment' or similar", async () => {
    const title = await page.title();
    expect(title.toLowerCase()).toMatch(/assignment|table|dashboard/);
  });

  test("Table should render with rows", async () => {
    await page.waitForSelector("table");
    const rows = await page.$$eval("tbody tr", (rows) => rows.length);
    expect(rows).toBeGreaterThan(0);
  });

  test("Search should filter table rows", async () => {
    await page.type("#searchInput", "john", { delay: 100 });
    await page.waitForTimeout(500);
    const visibleRows = await page.$$eval("tbody tr", (rows) =>
      rows.filter((r) => r.offsetParent !== null).length
    );
    expect(visibleRows).toBeGreaterThan(0);
  });

  test("Pagination should work correctly", async () => {
    await page.waitForSelector(".pagination");
    const nextButton = await page.$(".pagination button.next");
    expect(nextButton).not.toBeNull();

    await nextButton.click();
    await page.waitForTimeout(500);

    const currentPage = await page.$eval(".pagination .active", (el) => el.textContent.trim());
    expect(Number(currentPage)).toBe(2);
  });

  test("Theme toggle should switch dark mode", async () => {
    const bodyBefore = await page.$eval("body", (el) =>
      window.getComputedStyle(el).backgroundColor
    );
    await page.click("#themeToggle");
    await page.waitForTimeout(500);
    const bodyAfter = await page.$eval("body", (el) =>
      window.getComputedStyle(el).backgroundColor
    );
    expect(bodyBefore).not.toBe(bodyAfter);
  });
});
