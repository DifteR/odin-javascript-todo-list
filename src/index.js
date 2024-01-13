import { todoItem } from "./todo-item";
import { project } from "./project";
import { drawListOfToDos } from "./dom-manipulation";

export let projectsArray = [];

projectsArray.push(new project("bla", "bla"));

projectsArray[0].addToDoItem(new todoItem("Task 1", "Description for Task 1", "2023-01-01", "12:00 PM", "high"));
projectsArray[0].addToDoItem(new todoItem("Task 2", "Description for Task 2", "2023-01-02", "3:00 PM", "medium"));
projectsArray[0].addToDoItem(new todoItem("Task 3", "Description for Task 3", "2023-01-03", "5:00 PM", "low"));
projectsArray[0].addToDoItem(new todoItem("Task 4", "Description for Task 4", "2023-01-04", "9:00 AM", "high"));
projectsArray[0].addToDoItem(new todoItem("Task 5", "Description for Task 5", "2023-01-05", "2:00 PM", "medium"));
projectsArray[0].addToDoItem(new todoItem("Task 6", "Description for Task 6", "2023-01-06", "4:30 PM", "low"));
projectsArray[0].addToDoItem(new todoItem("Task 7", "Description for Task 7", "2023-01-07", "10:00 AM", "high"));
projectsArray[0].addToDoItem(new todoItem("Task 8", "Description for Task 8", "2023-01-08", "1:30 PM", "medium"));
projectsArray[0].addToDoItem(new todoItem("Task 9", "Description for Task 9", "2023-01-09", "6:00 PM", "low"));
projectsArray[0].addToDoItem(new todoItem("Task 10", "Description for Task 10", "2023-01-10", "8:45 AM", "high"));

drawListOfToDos(projectsArray[0].toDoItems);
