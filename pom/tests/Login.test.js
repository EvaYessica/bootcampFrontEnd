import {Selector, t} from 'testcafe'
import LoginPages from '../pages/LoginPages'
import {CREDENTIALS, URLS} from '../data/Constants'
import ActionPages from '../pages/ActionPages'
import { STANDARD_USER, WRONG_USERNAME, WRONG_PASSWORD, NULL_CREDENTIALS } from '../data/Roles'

fixture('Login feature test')
    .page `${URLS.LOGIN_URL}`

test.meta('type','smoke')('As a user, I should be able to log in successfully by providing valid credentials', async t => {
    await t.useRole(STANDARD_USER)
    await t.expect(ActionPages.leftMenu.exists).ok()
})

test('As a user, I will get an error message when log in by providing wrong username', async t => {
    await t.useRole(WRONG_USERNAME)
    await t.expect(ActionPages.userErrorMessage.exists).ok()
})

test('As a user, I will get an error message when log in by providing wrong password', async t => {
    await t.useRole(WRONG_PASSWORD)
    await t.expect(ActionPages.userErrorMessage.exists).ok()
})

test('As a user, I will get an error message when log in by providing null credentials', async t => {
    await t.useRole(NULL_CREDENTIALS)
    await t.expect(ActionPages.blankErrorMessage.exists).ok()
})

