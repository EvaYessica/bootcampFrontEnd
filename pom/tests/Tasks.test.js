import {t} from 'testcafe'
import createTask from '../pages/ActionPage'
import {URLS, TASK} from '../data/Constants'
import ActionPage from '../pages/ActionPage'
import { STANDARD_USER,  } from '../data/Roles'

fixture('Login feature test')
.page `${URLS.LOGIN_URL}`
.beforeEach(async t => {
    await t.useRole(STANDARD_USER)
})
.afterEach(async t => {
    await t.wait(3000)
})

test.meta('type','smoke')('As a user, I should be able to create a task with Today as the due date successfully', async t => {
    //await t.useRole(STANDARD_USER)
    await ActionPage.createTask(TASK.TASK_NAME_TODAY, TASK.TASK_DUEDATE_TODAY)
    await t .expect(ActionPage.inboxTasks.innerText).contains(TASK.TASK_NAME_TODAY)
})

test('As a user, I should be able to create a task with Tomorrow as the due date successfully', async t => {
    //await t.useRole(STANDARD_USER)
    await ActionPage.createTask(TASK.TASK_NAME_TOMORROW, TASK.TASK_DUEDATE_TOMORROW)
    await t .expect(ActionPage.inboxTasks.innerText).contains(TASK.TASK_NAME_TOMORROW)
})

test('As a user, I should be able to create multiple tasks with Today as the due date successfully', async t => {
    //await t.useRole(STANDARD_USER)
    for (let i=1; i<=10; i++){
        let name = TASK.TASK_NAME_MULTIPLE+i
        await ActionPage.createTask(name, TASK.TASK_DUEDATE_TODAY)
        await t .expect(ActionPage.inboxTasks.innerText).contains(name)
    }
})

test.meta('type','smoke')('As a user, I should be able to delete every task created after your tests successfully', async t => {
    //await t.useRole(STANDARD_USER)
    for (let i=1; i<=12; i++){
        await ActionPage.deleteTask()
    }
    await t.expect(ActionPage.tasklist.exists).notOk
})
