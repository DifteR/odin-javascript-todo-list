import { project } from "./project";
import { projectsArray } from "./index.js";

todoList = document.getElementById("todoList");

export function drawListOfToDos(toDoArray) {  
    todoList.innerHTML = ("");  
    toDoArray.forEach(toDoItem => {
        console.log(toDoItem);
        let newElem = document.createElement('li');
        newElem.innerHTML = "<input type='checkbox'></input>";
        newElem.innerHTML += toDoItem.title;
        todoList.appendChild(newElem);
    });
}

export function testFunction() {
    console.log('here')
}

export function drawListOfProjects(projectsArray) {
    projectsList = document.getElementById('projectsList');
    projectsList.innerText = "";
    projectsArray.forEach(project => {
        console.log(project);
        let newProject = document.createElement('button');
        newProject.addEventListener("click", function bla(){drawListOfToDos(project.toDoItems);})
        //newProject.setAttribute('onclick', function bla(){console.log('test');});
        //newProject.setAttribute('class', 'projectElement');
        newProject.innerHTML = `${project.title} ..... ${project.description}`;
        projectsList.appendChild(newProject);
        console.log(project.toDoItems);
    });
}

//let projectButtons = getElementsByClassName('projectElement');
let form = document.getElementById('addToDoForm');
form.addEventListener('submit', callbackFunction);
                      
function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    
    myFormData.forEach(element => {
        console.log(element);
    });
    console.log(myFormData);
    const formDataObj = Object.fromEntries(myFormData.entries());
}

let addNewProjectForm = document.getElementById('addProjectForm');
addNewProjectForm.addEventListener('submit', addProjectFunction);


function addProjectFunction(event) {
    event.preventDefault();
    const projectFormData = new FormData(event.target);
    projectsArray.push(new project(projectFormData.get('newProjectName'), projectFormData.get('newProjectDescription')));
    drawListOfProjects(projectsArray);
    console.log(projectsArray);
}