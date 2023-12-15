// export function project(title2, description) {
//     this.title = title2;
//     this.description = description;
//     this.toDoItems = [];

//     function addToDoItem(item) {
//         this.toDoItems.push(item);
//     }
//     return {
//         addToDoItem
//     }
// }

export class project{
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.toDoItems = []; 
    }
    addToDoItem(item) {
        this.toDoItems.push(item);
    };
}
