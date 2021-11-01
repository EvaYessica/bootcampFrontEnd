import {Selector, t } from 'testcafe'

class LoginPage{
    constructor(){
        this.usernameInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('button[class="submit_btn ist_button ist_button_red sel_login"]')
        this.showLogin =Selector('a[href="/users/showlogin"]')
    }

    async submitLoginForm(username, password){
        await t.click(this.showLogin)
        if(username !=null && password != null){
            await t.typeText(this.usernameInput, username)
            await t.typeText(this.passwordInput, password)
        }
            await t.click(this.loginButton)
            await t.wait(1500)
    }
}

export default new LoginPage
