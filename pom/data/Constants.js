import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    //LOGIN_URL: 'https://todoist.com/users/showlogin/'
    LOGIN_URL: 'https://todoist.com/'
}


export const CREDENTIALS = {
    STANDARD_USER: {
        USERNAME: process.env.STANDARD_USER_USERNAME,
        PASSWORD: process.env.STANDARD_USER_PASSWORD,
        WRONG_USERNAME: process.env.STANDARD_USER_WRONG_USERNAME,
        WRONG_PASSWORD: process.env.STANDARD_USER_WRONG_PASSWORD
    }
}

export const PROJECT = {
    PROJECT_NAME: "Bootcamp_Project"
}

export const TASK = {
    TASK_NAME_TODAY: "Bootcamp_Task_Today",
    TASK_NAME_TOMORROW: "Bootcamp_Task_Tomorrow",
    TASK_NAME_MULTIPLE: "Bootcamp_Task_",
    TASK_DUEDATE_TODAY: "Today",
    TASK_DUEDATE_TOMORROW: "Tomorrow",
    TASK_DESCRIPTION: "This is a test to create a testcafe task"
}

export const NEGATIVE_LOGIN_USERS = {
    STANDARD_USER_WRONG_USERNAME: "my@email.com",
    STANDARD_USER_WRONG_PASSWORD: "my_password"
}