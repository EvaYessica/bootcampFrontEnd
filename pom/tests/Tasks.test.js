import {t} from 'testcafe'
import createTask from '../pages/ActionPages'
import {URLS, TASK} from '../data/Constants'
import ActionPages from '../pages/ActionPages'
import { STANDARD_USER,  } from '../data/Roles'

fixture('Login feature test')
.page `${URLS.LOGIN_URL}`
.beforeEach(async t => {
    await t.useRole(STANDARD_USER)
})
.afterEach(async t => {
    await t.wait(3000)
})

test('As a user, I should be able to create a task with Today as the due date successfully', async t => {
    //await t.useRole(STANDARD_USER)
    await ActionPages.createTask(TASK.TASK_NAME_TODAY, TASK.TASK_DUEDATE_TODAY)
    await t .expect(ActionPages.inboxTasks.innerText).contains(TASK.TASK_NAME_TODAY)
})

test('As a user, I should be able to create a task with Tomorrow as the due date successfully', async t => {
    //await t.useRole(STANDARD_USER)
    await ActionPages.createTask(TASK.TASK_NAME_TOMORROW, TASK.TASK_DUEDATE_TOMORROW)
    await t .expect(ActionPages.inboxTasks.innerText).contains(TASK.TASK_NAME_TOMORROW)
})

test('As a user, I should be able to create multiple tasks with Today as the due date successfully', async t => {
    //await t.useRole(STANDARD_USER)
    for (let i=1; i<=10; i++){
        let name = TASK.TASK_NAME_MULTIPLE+i
        await ActionPages.createTask(name, TASK.TASK_DUEDATE_TODAY)
        await t .expect(ActionPages.inboxTasks.innerText).contains(name)
    }
})

test('As a user, I should be able to delete every task created after your tests successfully', async t => {
    //await t.useRole(STANDARD_USER)
    for (let i=1; i<=12; i++){
        await ActionPages.deleteTask()
    }
    await t.expect(ActionPages.tasklist.exists).notOk
})
