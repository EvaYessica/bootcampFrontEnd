import {Selector, t} from 'testcafe'
//import LoginPage from '../pages/LoginPage'
import {CREDENTIALS, NEGATIVE_LOGIN_USERS, URLS} from '../data/Constants'
import ActionPage from '../pages/ActionPage'
import LoginPage from '../pages/LoginPage'
import { STANDARD_USER, WRONG_USERNAME, WRONG_PASSWORD, NULL_CREDENTIALS } from '../data/Roles'

fixture('Login feature test')
    .page `${URLS.LOGIN_URL}`

test.meta('type','smoke')('As a user, I should be able to log in successfully by providing valid credentials', async t => {
    await t.useRole(STANDARD_USER)
    await t.expect(ActionPage.leftMenu.exists).ok()
})

test('As a user, I will get an error message when log in by providing wrong username', async t => {
    await LoginPage.submitLoginForm(NEGATIVE_LOGIN_USERS.STANDARD_USER_WRONG_USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.expect(ActionPage.userErrorMessage.exists).ok()
})

test('As a user, I will get an error message when log in by providing wrong password', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, NEGATIVE_LOGIN_USERS.STANDARD_USER_WRONG_PASSWORD)
    await t.expect(ActionPage.userErrorMessage.exists).ok()
})

test('As a user, I will get an error message when log in by providing null credentials', async t => {
    await LoginPage.submitLoginForm(null, null)
    await t.expect(ActionPage.blankErrorMessage.exists).ok()
})

