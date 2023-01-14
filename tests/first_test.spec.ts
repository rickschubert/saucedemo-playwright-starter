import { test } from "@playwright/test"
import { Login } from "../page-objects/Login"
import { ProductsPage } from "../page-objects/ProductsPage"

test("Saucedemo.com Playwright Starter", async ({ page }) => {
    const login = new Login(page)
    await login.visit()
    await login.login()

    const productsPage = new ProductsPage(page)
    await page.pause()
})
