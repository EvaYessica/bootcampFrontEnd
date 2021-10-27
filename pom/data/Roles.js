import { Role } from 'testcafe'
import {URLS, CREDENTIALS, NEGATIVE_LOGIN_USERS} from './Constants'
import loginpage from '../pages/LoginPages'

export const STANDARD_USER = Role(URLS.LOGIN_URL, async t => {
    await loginpage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
}, { preserveUrl:true })

export const WRONG_USERNAME = Role(URLS.LOGIN_URL, async t => {
    await loginpage.submitLoginForm(NEGATIVE_LOGIN_USERS.STANDARD_USER_WRONG_USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
}, { preserveUrl:true })

export const WRONG_PASSWORD = Role(URLS.LOGIN_URL, async t => {
    await loginpage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, NEGATIVE_LOGIN_USERS.STANDARD_USER_WRONG_PASSWORD)
}, { preserveUrl:true })

export const NULL_CREDENTIALS = Role(URLS.LOGIN_URL, async t => {
    await loginpage.submitLoginForm(null, null)
}, { preserveUrl:true })