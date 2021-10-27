import {Selector, t } from 'testcafe'

class LoginPages{
    constructor(){
        this.usernameInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('button[class="submit_btn ist_button ist_button_red sel_login"]')
        this.showLogin =Selector('a[href="/users/showlogin"]')
    }

    async submitLoginForm(username, password){
    await t
    .click(this.showLogin)
    .typeText(this.usernameInput, username)
    .typeText(this.passwordInput, password)
    .click(this.loginButton)
    }
}

export default new LoginPages
