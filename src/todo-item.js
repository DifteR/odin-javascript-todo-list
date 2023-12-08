export function todoItem(title, description='', dueDate = 'false', dueTime = 'false', priority='low') {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.dueTime = dueTime;
    this.priority = priority;
    this.done = false;
    return {
        title, 
        description,
        dueDate,
        dueTime,
        priority
    }
}
