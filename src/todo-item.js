import { drawListOfToDos } from "./dom-manipulation";

export class todoItem {
  constructor(title, description, dueDate, dueTime, priority, done = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.dueTime = dueTime;
    this.priority = priority;
    this.done = done;
  }

  setAsDone() {
    this.done = !this.done;
    console.log(this.done);
  }
}
