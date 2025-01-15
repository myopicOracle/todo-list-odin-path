import defaultOnPageLoad, { addPanelButtons, addItemQuadrants, outerContainer, panelContainer, contentContainer, sampleList, sampleItem, projectTitle, projectDetail, listTitle, listDetail, formContainer, formName, formDetails, formDueDate, formPriority, formButton, inputsContainer, buttonAddProject, buttonAddList, buttonAddItem, quadrantOne, quadrantTwo, quadrantThree, quadrantFour, projectArray, projectCounter, listCounter, itemCounter } from "./global_scope.js";

import _submitForm from "./_submitForm.js";

export default function _showForm(e) {

    const containerInstance = document.querySelector(".form.container")
    
    formName.setAttribute("class", "form name")    
    formName.placeholder = "Please enter a Title."
    formDetails.setAttribute("class", "form details")    
    formDetails.placeholder = "Include a Description."
    formDueDate.setAttribute("class", "form dueDate")    
    formDueDate.placeholder = "What is the Due Date?"
    formPriority.setAttribute("class", "form priority")
    formPriority.placeholder = "Choose the Priority Lvl."
    formButton.setAttribute("class", "form submit")
    
    containerInstance.appendChild(formName)
    
    if (e.target.classList.contains("project")) {
        containerInstance.appendChild(formDueDate)
        formButton.setAttribute("class", "project form submit")
        
    } else if (e.target.classList.contains("list")) {
        containerInstance.appendChild(formPriority)
        formButton.setAttribute("class", "list form submit")
        
    } else if (e.target.classList.contains("item")) {
        containerInstance.appendChild(formDetails)            
        containerInstance.appendChild(formDueDate)
        containerInstance.appendChild(formPriority)
        formButton.setAttribute("class", "item form submit")
        
    } else alert("ERROR")
    
    containerInstance.appendChild(formButton)

    const submitButton = document.querySelector(".form.submit")
    submitButton.textContent = "Create"
    submitButton.addEventListener("click", _submitForm)

console.log("END OF _showForm()")
}