import _deleteElement from "./_delete.js";
import _showForm from "./_showForm.js";
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

  const buttonAddItem = document.createElement("button");
  buttonAddItem.setAttribute("class", "buttonAddItem item button add");
  buttonAddItem.style.cssText += "position: absolute; right: 5px; bottom: 5px; color: white; background-color: magenta; font-family: monospace; font-size: 16px; font-weight: 700; width: 40%; height: 30px; margin: 0 auto; border: 2px solid purple; border-radius: 10px;";
  buttonAddItem.textContent = "+Item";
  buttonAddItem.addEventListener("click", _showForm);

  const nameInput = document.querySelector(".name").value;
  quadrantOne.textContent = nameInput;

  // test
  console.log("response from: _appendInputs function scope")

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
    inputsContainer.setAttribute("id", `${identifier}`);
    inputsContainer.setAttribute("class", "list wrapper");

    inputsContainer.appendChild(deleteListButton);

    const priorityInput = document.getElementById("priority").value;
    quadrantFour.textContent = priorityInput;

    quadrantOne.setAttribute("class", "inputs listTitle");
    quadrantFour.setAttribute("class", "inputs listPriority");
    inputsContainer.appendChild(quadrantOne);
    inputsContainer.appendChild(quadrantFour);

    inputsContainer.appendChild(buttonAddItem);

    let parentContainer = document.querySelector(`.project-${projectCounter}`);
    parentContainer.appendChild(inputsContainer);
  }

  if (e.target.classList.contains("item")) {
    ///////////////////
    console.log(e.target)
    ///////////////////
    itemCounter += 1;
    let identifier = `item-${itemCounter}`;
    inputsContainer.setAttribute("class", `item wrapper ${identifier}`);
    ///////////////////
    console.log(inputsContainer)
    ///////////////////
    const detailsInput = document.querySelector(".details").value;
    quadrantTwo.textContent = detailsInput;
    const dueDateInput = document.querySelector(".dueDate").value;
    quadrantThree.textContent = dueDateInput;
    const priorityInput = document.getElementById("priority").value;
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
    ///////////////////
    console.log(e.target.parentElement)
    ///////////////////
    const targetListId = e.target.parentElement.id.slice(0,-5) 
    const targetList = document.getElementById(`${targetListId}`)
    targetList.appendChild(inputsContainer);

  }

  // OLD CODE: when 'add item' button in panel instead of on list
  //   if (document.querySelector(`.list-${listCounter}`)) {
  //     let parentContainer = document.querySelector(`.list-${listCounter}`);
  //     parentContainer.appendChild(inputsContainer);
  //   } else alert("You must create a list first!");
  // }

  console.log("END OF _appendInputsToDisplay()");
}