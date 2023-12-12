todoList = document.getElementById("todoList");

export function drawListOfToDos(toDoArray) {
    
    //<input type="checkbox"></input>
    toDoArray.forEach(toDoItem => {
        console.log(toDoItem);
        let newElem = document.createElement('li');
        newElem.innerHTML = "<input type='checkbox'></input>";
        newElem.innerHTML += toDoItem.title;
        //newElem.innerHTML += description;
        todoList.appendChild(newElem);
    });
    //console.table(toDoArray);
}