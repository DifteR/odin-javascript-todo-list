import { project } from "./project";
import { projectsArray } from "./index";

const toggleProjectsList = document.getElementById('toggleProjectsList');
const todoList = document.getElementById("todoListUl");
const doneList = document.getElementById("doneListUl");
const form = document.getElementById("addToDoForm");
const projectsList = document.getElementById("projectsList");
form.addEventListener("submit", callbackFunction);
toggleProjectsList.addEventListener('click', toggleProjects)

export function drawListOfToDos(toDoArray) {
  todoList.innerHTML = "";
  toDoArray.forEach((toDoItem) => {
    if (toDoItem.done == false) {
      console.log(toDoItem);
      let newElem = document.createElement("li");
      newElem.innerHTML = "<input type='checkbox'></input>";
      newElem.innerHTML += toDoItem.title;
      newElem.addEventListener("click", function bla() {
        toDoItem.setAsDone();
        drawListOfToDos(toDoArray);
        drawListOfDoneToDos(toDoArray);
        console.log(toDoItem);
      });
      todoList.appendChild(newElem);
    }
  });
}

export function drawListOfDoneToDos(toDoArray) {
  doneList.innerHTML = "";
  toDoArray.forEach((toDoItem) => {
    if (toDoItem.done == true) {
      let newElem = document.createElement("li");
      newElem.innerHTML = "<input type='checkbox'></input>";
      newElem.innerHTML += toDoItem.title;
      newElem.addEventListener("click", function bla() {
        toDoItem.setAsDone();
        drawListOfToDos(toDoArray);
        drawListOfDoneToDos(toDoArray);
      });
      doneList.appendChild(newElem);
    }
  });
}

export function drawListOfProjects(projectsArray) {
  projectsList.innerText = "";
  projectsArray.forEach((project) => {
    let newProject = document.createElement("button");
    newProject.addEventListener("click", function bla() {
      drawListOfToDos(project.toDoItems);
    });
    //newProject.setAttribute('onclick', function bla(){console.log('test');});
    //newProject.setAttribute('class', 'projectElement');
    newProject.innerHTML = `${project.title} ..... ${project.description}`;
    projectsList.appendChild(newProject);
  });
}

//let projectButtons = getElementsByClassName('projectElement');

function toggleProjects(event) {
  if (projectsList.className === 'collapsed') {
    projectsList.classList.remove("collapsed");
  }
  else{
    projectsList.setAttribute('class', 'collapsed');
  }
  
}

function callbackFunction(event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);

  myFormData.forEach((element) => {
  });
  const formDataObj = Object.fromEntries(myFormData.entries());
}

let addNewProjectForm = document.getElementById("addProjectForm");
addNewProjectForm.addEventListener("submit", addProjectFunction);

function addProjectFunction(event) {
  event.preventDefault();
  const projectFormData = new FormData(event.target);
  projectsArray.push(
    new project(
      projectFormData.get("newProjectName"),
      projectFormData.get("newProjectDescription")
    )
  );
  drawListOfProjects(projectsArray);
  console.log(projectsArray);
}

//projectsArray.onload = drawListOfProjects(projectsArray);
