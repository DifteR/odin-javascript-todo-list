export function project(title, description) {
    this.title = title;
    this.description = description;
    let toDoItems = new Array;

    function addToDoItem(item) {
        toDoItems.push(item);
    }
    return {
        addToDoItem,
        toDoItems
    }
}