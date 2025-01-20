import _deleteElement from "./_delete.js";
import { contentContainer } from "./global_scope.js";

let projectCounter = 1;
let listCounter = 0;
let itemCounter = 0;

export default function _appendInputsToDisplay(e) {
  const inputsContainer = document.createElement("div");
  const quadrantOne = document.createElement("div");
  const quadrantTwo = document.createElement("div");
  const quadrantThree = document.createElement("div");
  const quadrantFour = document.createElement("div");

  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.setAttribute("class", "project button delete");
  deleteProjectButton.textContent = "Delete Project";
  deleteProjectButton.addEventListener("click", _deleteElement);

  const deleteListButton = document.createElement("button");
  deleteListButton.setAttribute("class", "list button delete");
  deleteListButton.textContent = "Delete List";
  deleteListButton.addEventListener("click", _deleteElement);

  const deleteItemButton = document.createElement("button");
  deleteItemButton.setAttribute("class", "item button delete");
  deleteItemButton.textContent = "X";
  deleteItemButton.addEventListener("click", _deleteElement);

  const nameInput = document.querySelector(".name").value;
  quadrantOne.textContent = nameInput;

  if (e.target.classList.contains("project")) {
    projectCounter += 1;
    let identifier = `project-${projectCounter}`;
    inputsContainer.setAttribute("class", `project ${identifier}`);

    inputsContainer.appendChild(deleteProjectButton);

    const dueDateInput = document.querySelector(".dueDate").value;
    quadrantThree.textContent = dueDateInput;

    quadrantOne.setAttribute("class", "quadrantOne projectTitle");
    quadrantThree.setAttribute("class", "quadrantThree projectDueDate");
    inputsContainer.appendChild(quadrantOne);
    inputsContainer.appendChild(quadrantThree);

    contentContainer.appendChild(inputsContainer);
  }

  if (e.target.classList.contains("list")) {
    listCounter += 1;
    let identifier = `list-${listCounter}`;
    inputsContainer.setAttribute("class", `list ${identifier}`);

    inputsContainer.appendChild(deleteListButton);

    const priorityInput = document.querySelector(".priority").value;
    quadrantFour.textContent = priorityInput;

    quadrantOne.setAttribute("class", "inputs listTitle");
    quadrantFour.setAttribute("class", "inputs listPriority");
    inputsContainer.appendChild(quadrantOne);
    inputsContainer.appendChild(quadrantFour);

    let parentContainer = document.querySelector(`.project-${projectCounter}`);
    parentContainer.appendChild(inputsContainer);
  }

  if (e.target.classList.contains("item")) {
    itemCounter += 1;
    let identifier = `item-${itemCounter}`;
    inputsContainer.setAttribute("class", `item wrapper ${identifier}`);

    const detailsInput = document.querySelector(".details").value;
    quadrantTwo.textContent = detailsInput;
    const dueDateInput = document.querySelector(".dueDate").value;
    quadrantThree.textContent = dueDateInput;
    const priorityInput = document.querySelector(".priority").value;
    quadrantFour.textContent = priorityInput;

    quadrantOne.setAttribute("class", "quadrantOne quadrant");
    quadrantTwo.setAttribute("class", "quadrantTwo quadrant");
    quadrantThree.setAttribute("class", "quadrantThree quadrant");
    quadrantFour.setAttribute("class", "quadrantFour quadrant");
    inputsContainer.appendChild(quadrantOne);
    inputsContainer.appendChild(quadrantTwo);
    inputsContainer.appendChild(quadrantThree);
    inputsContainer.appendChild(quadrantFour);

    inputsContainer.appendChild(deleteItemButton);
    e.target.parentElement.appendChild(inputsContainer);

  }

  // OLD CODE: when 'add item' button in panel instead of on list
  //   if (document.querySelector(`.list-${listCounter}`)) {
  //     let parentContainer = document.querySelector(`.list-${listCounter}`);
  //     parentContainer.appendChild(inputsContainer);
  //   } else alert("You must create a list first!");
  // }

  console.log("END OF _appendInputsToDisplay()");
}