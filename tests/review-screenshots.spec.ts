import { test, type Page } from "@playwright/test";

const routes = [
  { name: "home", path: "/" },
  { name: "handbook", path: "/handbook" },
  { name: "contact", path: "/contact" },
];

async function shoot(
  page: Page,
  routePath: string,
  outPath: string,
  theme: "light" | "dark",
) {
  await page.goto(routePath);
  await page.evaluate((t: string) => {
    try {
      localStorage.setItem("theme", t);
    } catch {}
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(t);
    document.documentElement.style.colorScheme = t;
  }, theme);
  await page.goto(routePath);
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(1200);
  await page.screenshot({ path: outPath, fullPage: true });
}

for (const r of routes) {
  test(`shot desktop dark ${r.name}`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await shoot(page, r.path, `screenshots/desktop-dark-${r.name}.png`, "dark");
  });

  test(`shot desktop light ${r.name}`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await shoot(
      page,
      r.path,
      `screenshots/desktop-light-${r.name}.png`,
      "light",
    );
  });

  test(`shot mobile dark ${r.name}`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await shoot(page, r.path, `screenshots/mobile-dark-${r.name}.png`, "dark");
  });
}

test("shot handbook sections desktop dark", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/handbook");
  await page.evaluate(() => {
    try {
      localStorage.setItem("theme", "dark");
    } catch {}
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  });
  await page.goto("/handbook");
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(1000);
  for (const id of ["toolkit", "skills", "projects", "journey"]) {
    const el = page.locator(`#${id}`);
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await el.screenshot({ path: `screenshots/section-${id}.png` });
  }
});
