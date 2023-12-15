import { drawListOfToDos } from "./dom-manipulation";

export function todoItem(title, description='', dueDate = 'false', dueTime = 'false', priority='low', done = "false") {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.dueTime = dueTime;
    this.priority = priority;
    this.done = done;
    return {
        title,
        description,
        dueDate,
        dueTime,
        priority,
        done,
    }
}
