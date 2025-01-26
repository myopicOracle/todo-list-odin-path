const outerContainer = document.querySelector("#outer-container");
const panelContainer = document.querySelector("#panel-container");
const contentContainer = document.querySelector("#content-container");

const buttonAddProject = document.createElement("button");
const buttonAddList = document.createElement("button");

const projectTitle = document.createElement("div");
const projectDetail = document.createElement("div");
const listTitle = document.createElement("div");
const listDetail = document.createElement("div");

const formContainer = document.createElement("div");
const formName = document.createElement("input");
const formDetails = document.createElement("input");
const formDueDate = document.createElement("input");
const formPriority = document.createElement("div");
const formButton = document.createElement("button");

const projectArray = [];

let currentProject;
let currentList;
let currentItem;

// --- exports below this line ---
export default function renderNewProject() {

  const titleContainer = document.createElement('div')
  const projectDirectory = document.createElement('div')
  const buttonContainer = document.createElement('div')

  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.setAttribute("class", "project button delete");
  deleteProjectButton.textContent = "Delete Project";
  deleteProjectButton.addEventListener("click", () => {
    document.querySelector(".project-container").remove();
  });

  const deleteListButton = document.createElement("button");
  deleteListButton.setAttribute("class", "list button delete");
  deleteListButton.textContent = "Delete List";
  deleteListButton.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });

  const deleteItemButton = document.createElement("button");
  deleteItemButton.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });

  // Set panel els attributes and inner content  
  projectTitle.textContent = "My To-Do List";
  projectDetail.textContent = "Add a list!";
  buttonAddProject.textContent = "Add Project";
  buttonAddList.textContent = "Add List";

  projectTitle.setAttribute("class", "inputs projectTitle");
  projectDetail.setAttribute("class", "inputs projectDetail");
  formContainer.setAttribute("class", "form container");
  buttonAddProject.setAttribute("class", "buttonAddProject project button add");
  buttonAddList.setAttribute("class", "buttonAddList list button add");
  buttonContainer.setAttribute("class", "button-container");

  // Append individual els to their sub-containers
  titleContainer.appendChild(projectTitle);
  titleContainer.appendChild(projectDetail);
  buttonContainer.appendChild(buttonAddProject);
  buttonContainer.appendChild(buttonAddList);

  // Append sub-containers to main left-panel container
  panelContainer.appendChild(deleteProjectButton);
  panelContainer.appendChild(titleContainer);
  panelContainer.appendChild(projectDirectory);
  panelContainer.appendChild(formContainer);
  panelContainer.appendChild(buttonContainer);

  // Now done with left panel, move to right content box
  const projectContainer = document.createElement("div");
  projectContainer.setAttribute("class", "project-container project-1");
  contentContainer.appendChild(projectContainer);
}

export {
  outerContainer,
  panelContainer,
  contentContainer,
  projectTitle,
  projectDetail,
  listTitle,
  listDetail,
  formContainer,
  formName,
  formDetails,
  formDueDate,
  formPriority,
  formButton,
  buttonAddProject,
  buttonAddList,
  projectArray,
};