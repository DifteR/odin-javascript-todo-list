export class project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.toDoItems = [];
  }

  addToDoItem(item) {
    this.toDoItems.push(item);
  }
}
