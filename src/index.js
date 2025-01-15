import "./styles.css";

import defaultOnPageLoad, { addPanelButtons, addItemQuadrants, outerContainer, panelContainer, contentContainer, sampleList, sampleItem, projectTitle, projectDetail, listTitle, listDetail, formContainer, formName, formDetails, formDueDate, formPriority, formButton, inputsContainer, buttonAddProject, buttonAddList, buttonAddItem, quadrantOne, quadrantTwo, quadrantThree, quadrantFour, projectArray, projectCounter, listCounter, itemCounter } from "./global_scope.js";

import App from "./app_class.js";
import Project from "./project_class.js";
import List from "./list_class.js";
import Item from "./item_class.js";

import _showForm from "./_showForm.js";
import _pushInputsToArray from "./_pushInputs.js";
import _appendInputsToDisplay from "./_appendInputs.js";
import _submitForm from "./_submitForm.js";
import _deleteElement from "./_delete.js";




defaultOnPageLoad();




buttonAddProject.addEventListener("click", _showForm)
buttonAddList.addEventListener("click", _showForm)
buttonAddItem.addEventListener("click", _showForm)


// deleteItemButton.addEventListener("click", _deleteElement)
// deleteListButton.addEventListener("click", _deleteElement)
// deleteProjectButton.addEventListener("click", _deleteElement)







// delete everything below
console.log(buttonAddProject)
console.log(buttonAddList)
console.log(buttonAddItem)