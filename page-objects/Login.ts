import { Page } from "@playwright/test"

export class Login {
    private page: Page

    constructor(page) {
        this.page = page
    }

    visit = async () => {
        await this.page.goto("/")
    }

    login = async () => {
        await this.page.fill('#user-name', 'standard_user')
        await this.page.fill('#password', 'secret_sauce')
        await this.page.click('#login-button')
    }
}
