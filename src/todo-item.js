export function todoItem(title, description='', dueDate = 'false', priority='low', dueTime = 'false') {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.dueTime = dueTime;
    this.priority = priority;
    return {
        title, 
        description,
        dueDate
    }
}
