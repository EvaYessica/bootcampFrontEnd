import {Selector, t} from 'testcafe'
import { TASK } from '../data/Constants'

class ActionPage{
    constructor(){
        //Login selectors
        this.userErrorMessage = Selector('.error_msg').withText('Wrong email or password.')
        this.blankErrorMessage = Selector('.error_msg').withText('Invalid email address.')
        
        //Task selectors
        this.leftMenu = Selector('span[class="item_content"]').withText('Today')
        this.addTask = Selector('button[class="plus_add_button"]').withText('Add task')
        this.nameTask = Selector('div[class="notranslate public-DraftEditor-content"]')
        this.descriptionInput = Selector('div[class="task_editor__input_fields"]')
        this.addTaskButton = Selector('button[type="submit"]').withText('Add task')
        this.inboxLeftMenu = Selector('span[class="item_content"]').withText('Inbox')
        this.inboxTasks = Selector('div[class="project_view project_editor_instance current_editor"]')
        this.dateTomorrowButton = Selector('div[class="scheduler-suggestions-item-label"]').withText('Tomorrow')
        this.dateTodayButton = Selector('div[class="scheduler-suggestions-item-label"]').withText('Today')
        this.dueSelector = Selector('button[class="item_due_selector icon_pill"]')
        this.tasklist = Selector('ul[class="items"]')
        this.taskOptions = Selector('button[class="item_action item_actions_more"]')
        this.taskDelete = Selector('div[class="icon_menu_item__content"]').withText('Delete task')
        this.taskDeleteButton = Selector('button[class="ist_button ist_button_red"]').withText('Delete')
        
        //Project selectors
        this.addProject = Selector('button[class="adder_icon"]')
        this.nameProjectInput = Selector('input[id="edit_project_modal_field_name"]')
        this.colorOptions = Selector('button[aria-labelledby="edit_project_modal_field_color_label"]')
        this.colorSalmon = Selector('span[class="color_dropdown_select__name"]').withText('Salmon')
        this.addFavorites = Selector('div[class="reactist_switch"]')
        this.addProjectButton = Selector('button[class="ist_button ist_button_red"]').withText('Add')
        this.verifyProject = Selector('div[class="reactist collapse collapse--entered"]')
    }

    async createTask(taskname, duedate){
        await t.click(this.inboxLeftMenu)
        if(taskname == "Bootcamp_Task_1" || taskname == TASK.TASK_NAME_TODAY || taskname == TASK.TASK_NAME_TOMORROW)
            await t.click(this.addTask)
        await t.typeText(this.nameTask, taskname)
        await t.typeText(this.descriptionInput, TASK.TASK_DESCRIPTION)
        if (duedate == TASK.TASK_DUEDATE_TODAY){
            await t.click(this.dueSelector)
            await t.click(this.dateTodayButton)
            await t.click(this.addTaskButton)
        }
        else if (duedate == TASK.TASK_DUEDATE_TOMORROW){
                await t.click(this.dueSelector)
                await t.click(this.dateTomorrowButton)
                await t.click(this.addTaskButton)
        }
    }

    async deleteTask(){
        await t.click(this.inboxLeftMenu)
        await t.click(this.tasklist)
        await t.click(this.taskOptions)
        await t.click(this.taskDelete)
        await t.click(this.taskDeleteButton)
    }

    async createProject(projectname){
        await t.click(this.addProject)
        await t.typeText(this.nameProjectInput, projectname)
        await t.click(this.colorOptions)
        await t.click(this.colorSalmon)
        await t.click(this.addFavorites)
        await t.click(this.addProjectButton)
    }
}

export default new ActionPage