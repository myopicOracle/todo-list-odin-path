import defaultOnPageLoad, { outerContainer, panelContainer, contentContainer, projectTitle, projectDetail, listTitle, listDetail, formContainer, formName, formDetails, formDueDate, formPriority, formButton, buttonAddProject, buttonAddList, buttonAddItem, projectArray } from "./global_scope.js";

let projectCounter = 1;
let listCounter = 0;
let itemCounter = 0;

export default function _appendInputsToDisplay(e) {

    const inputsContainer = document.createElement("ul")
    const quadrantOne = document.createElement("li")
    const quadrantTwo = document.createElement("li")
    const quadrantThree = document.createElement("li")
    const quadrantFour = document.createElement("li")

    const nameInput = document.querySelector(".name").value
    quadrantOne.textContent = nameInput

    if (e.target.classList.contains("project")) {
        projectCounter += 1
        let identifier = `project-${projectCounter}`
        inputsContainer.setAttribute("class", `${identifier}`)

        const dueDateInput = document.querySelector(".dueDate").value
        quadrantThree.textContent = dueDateInput

        quadrantOne.setAttribute("class", "quadrantOne project")
        quadrantThree.setAttribute("class", "quadrantThree project")
        inputsContainer.appendChild(quadrantOne)
        inputsContainer.appendChild(quadrantThree)
        
        contentContainer.appendChild(inputsContainer)
    }
    
    if (e.target.classList.contains("list")) {
        listCounter += 1
        let identifier = `list-${listCounter}`
        inputsContainer.setAttribute("class", `${identifier}`)

        const priorityInput = document.querySelector(".priority").value
        quadrantFour.textContent = priorityInput

        quadrantOne.setAttribute("class", "quadrantOne list")
        quadrantFour.setAttribute("class", "quadrantFour list")
        inputsContainer.appendChild(quadrantOne)
        inputsContainer.appendChild(quadrantFour)

        let parentContainer = document.querySelector(`.project-${projectCounter}`)
            console.log(projectCounter)
            console.log(parentContainer)
            console.log(`List Counter: ${listCounter}`)

        parentContainer.appendChild(inputsContainer)
    }
    
    if (e.target.classList.contains("item")) {
        itemCounter += 1
        let identifier = `item-${itemCounter}`
        inputsContainer.setAttribute("class", `${identifier}`)

        const detailsInput = document.querySelector(".details").value
        quadrantTwo.textContent = detailsInput
        const dueDateInput = document.querySelector(".dueDate").value
        quadrantThree.textContent = dueDateInput
        const priorityInput = document.querySelector(".priority").value
        quadrantFour.textContent = priorityInput

        quadrantOne.setAttribute("class", "quadrantOne item")
        quadrantTwo.setAttribute("class", "quadrantTwo item")
        quadrantThree.setAttribute("class", "quadrantThree item")
        quadrantFour.setAttribute("class", "quadrantFour item")
        inputsContainer.appendChild(quadrantOne)
        inputsContainer.appendChild(quadrantTwo)       
        inputsContainer.appendChild(quadrantThree)
        inputsContainer.appendChild(quadrantFour)

        console.log(listCounter)

        let parentContainer = document.querySelector(`.list-${listCounter}`)
            console.log(listCounter)
            console.log(parentContainer)

        parentContainer.appendChild(inputsContainer)
    }

console.log("END OF _appendInputsToDisplay()")
}
