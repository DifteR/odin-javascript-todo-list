function project(title, description) {
    this.title = title;
    this.description = description;
    this.toDoItems = new Array();

    function addToDoItem(item) {
        toDoItems.push(item);
    }
    return {
        title, 
        description,
    }
}