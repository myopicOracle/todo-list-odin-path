import App from "./app_class.js";
import Project from "./project_class.js";
import List from "./list_class.js";
import Item from "./item_class.js";

import defaultOnPageLoad, { addPanelButtons, addItemQuadrants, outerContainer, panelContainer, contentContainer, sampleList, sampleItem, projectTitle, projectDetail, listTitle, listDetail, formContainer, formName, formDetails, formDueDate, formPriority, formButton, inputsContainer, buttonAddProject, buttonAddList, buttonAddItem, quadrantOne, quadrantTwo, quadrantThree, quadrantFour, projectArray, projectCounter, listCounter, itemCounter } from "./global_scope.js";

export default function _pushInputsToArray(e) {

    const nameInput = document.querySelector(".name").value
    
    if (e.target.classList.contains("project")) {
        const dueDateInput = document.querySelector(".dueDate").value
        
        const newObj = new Project(nameInput, dueDateInput)
        console.log("projectObj: ", newObj)
        
        const { rootArray } = newObj
        console.log(rootArray)
        
        rootArray.push(newObj)
        console.log(rootArray)
    }
    
    if (e.target.classList.contains("list")) {
        const priorityInput = document.querySelector(".priority").value
        
        const newObj = new List(nameInput, priorityInput)
        console.log("listObj: ", newObj)
        
        const { listArray } = newObj
        console.log(listArray)
        
        listArray.push(newObj)
        console.log(listArray)
    }
    
    if (e.target.classList.contains("item")) {
        const detailsInput = document.querySelector(".details").value
        const dueDateInput = document.querySelector(".dueDate").value
        const priorityInput = document.querySelector(".priority").value
        
        const newObj = new Item(nameInput, detailsInput, dueDateInput, priorityInput)
        console.log("itemObj: ", newObj)
        
        const { itemArray } = newObj
        console.log(itemArray)
        
        itemArray.push(newObj)
        console.log(itemArray)
    }

// console.log(projectArray)
// console.log(listArray)
// console.log(itemArray)    
console.log("END OF _pushInputsToArray()")
}