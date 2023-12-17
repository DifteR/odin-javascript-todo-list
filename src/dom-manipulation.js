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
const form = document.getElementById('addToDoForm');
form.addEventListener('submit', getFormData);

function getFormData(event) {
    event.preventDefault();
    const podatkiTabele = new FormData(event.target);
    console.log(FormData);
}