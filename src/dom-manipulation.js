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


function drawListOfProjects(project) {
    
}

// const form = document.getElementById('addToDoForm');
// form.addEventListener('submit', getFormData);

// function getFormData(event) {
//     event.preventDefault();
//     const podatkiTabele = new FormData(event.target);
//     const test = {};
//     //test = Object.fromEntries(podatkiTabele.entries());
//     podatkiTabele.forEach((value, key) => (test[key] = value));
//     console.log(test);
// }



let form = document.getElementById('addToDoForm');
form.addEventListener('submit', callbackFunction);
                      
function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    
    myFormData.forEach(element => {
        console.log(element);
    });
    console.log(myFormData);
    //const formDataObj = Object.fromEntries(myFormData.entries());
    //console.log(myFormData.get('newTodo'));
}

let addNewProjectForm = document.getElementById('addProjectForm');
addNewProjectForm.addEventListener('submit', addProjectFunction);

function addProjectFunction(event) {
    event.preventDefault();
    
}