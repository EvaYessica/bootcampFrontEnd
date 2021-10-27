import ActionPages from '../pages/ActionPages'
import {CREDENTIALS, URLS, PROJECT} from '../data/Constants'
import { STANDARD_USER } from '../data/Roles'

fixture('Login feature test')
.page `${URLS.LOGIN_URL}`
.beforeEach(async t => {
    await t.useRole(STANDARD_USER)
})

test('As a user, I should be able to create a new project, choose any color you like and add it to favorites successfully', async t => {
    //await t.useRole(STANDARD_USER)
    await ActionPages.createProject(PROJECT.PROJECT_NAME)
    await t .expect(ActionPages.verifyProject.innerText).contains(PROJECT.PROJECT_NAME)
})

