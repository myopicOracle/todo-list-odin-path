const outerContainer = document.querySelector("#outer-container");
const panelContainer = document.querySelector("#panel-container");
const contentContainer = document.querySelector("#content-container");

const buttonAddProject = document.createElement("button");
const buttonAddList = document.createElement("button");
const buttonAddItem = document.createElement("button");

const projectTitle = document.createElement("div");
const projectDetail = document.createElement("div");
const listTitle = document.createElement("div");
const listDetail = document.createElement("div");

const formContainer = document.createElement("div");
const formName = document.createElement("input");
const formDetails = document.createElement("input");
const formDueDate = document.createElement("input");
const formPriority = document.createElement("input");
const formButton = document.createElement("button");

const projectArray = [];

// --- exports below this line ---
export default function defaultOnPageLoad() {
  // if in global scope, causes els to be overwritten
  const sampleList = document.createElement("div");
  const sampleItem = document.createElement("div");

  const quadrantOne = document.createElement("div");
  const quadrantTwo = document.createElement("div");
  const quadrantThree = document.createElement("div");
  const quadrantFour = document.createElement("div");

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

  // Add sample project details and action buttons to Left Panel
  panelContainer.appendChild(deleteProjectButton);

  projectTitle.setAttribute("class", "inputs projectTitle");
  projectTitle.textContent = "projectTitle";
  panelContainer.appendChild(projectTitle);

  projectDetail.setAttribute("class", "inputs projectDetail");
  projectDetail.textContent = "projectDetail";
  panelContainer.appendChild(projectDetail);

  formContainer.setAttribute("class", "form container");
  panelContainer.appendChild(formContainer);

  addPanelButtons();

  // Create sample list and item
  sampleList.setAttribute("class", "list wrapper sample");
  sampleItem.setAttribute("class", "item wrapper sample");
  listTitle.setAttribute("class", "inputs listTitle");
  listDetail.setAttribute("class", "inputs listDetail");

  listTitle.textContent = "listTitle";
  listDetail.textContent = "listDetail";

  quadrantOne.setAttribute("class", "quadrantOne quadrant");
  quadrantTwo.setAttribute("class", "quadrantTwo quadrant");
  quadrantThree.setAttribute("class", "quadrantThree quadrant");
  quadrantFour.setAttribute("class", "quadrantFour quadrant");
  deleteItemButton.setAttribute("class", "item button delete");

  quadrantOne.textContent = "One";
  quadrantTwo.textContent = "Two";
  quadrantThree.textContent = "Three";
  quadrantFour.textContent = "Four";
  deleteItemButton.textContent = "X";

  sampleItem.appendChild(quadrantOne);
  sampleItem.appendChild(quadrantTwo);
  sampleItem.appendChild(quadrantThree);
  sampleItem.appendChild(quadrantFour);
  sampleItem.appendChild(deleteItemButton);

  // Add completed list to right-hand content box
  const projectContainer = document.createElement("div");
  projectContainer.setAttribute("class", "project-container project-1");
  contentContainer.appendChild(projectContainer);

  sampleList.appendChild(deleteListButton);
  sampleList.appendChild(listTitle);
  sampleList.appendChild(listDetail);
  sampleList.appendChild(sampleItem);

  buttonAddItem.setAttribute("class", "buttonAddItem item button add");
  sampleList.style.cssText = "position: relative;";
  buttonAddItem.style.cssText = "position: absolute; right: 5px; bottom: 5px; color: white; background-color: darkred; font-family: monospace; font-size: 16px; font-weight: 700; width: 40%; height: 30px; margin: 0 auto; border: 2px solid purple; border-radius: 10px;";
  buttonAddItem.textContent = "+Item";
  sampleList.appendChild(buttonAddItem);

  projectContainer.appendChild(sampleList);
}

export const addPanelButtons = function () {
  buttonAddProject.setAttribute("class", "buttonAddProject project button add");
  buttonAddList.setAttribute("class", "buttonAddList list button add");

  buttonAddProject.textContent = "Add Project";
  buttonAddList.textContent = "Add List";

  panelContainer.appendChild(buttonAddProject);
  panelContainer.appendChild(buttonAddList);
};

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
  buttonAddItem,
  projectArray,
};