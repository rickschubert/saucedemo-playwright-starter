import { Page } from "@playwright/test"

export class ProductsPage {

    private page: Page

    constructor(page) {
        this.page = page
    }
}
