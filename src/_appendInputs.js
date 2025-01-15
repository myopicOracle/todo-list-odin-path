import defaultOnPageLoad, { addPanelButtons, addItemQuadrants, outerContainer, panelContainer, contentContainer, sampleList, sampleItem, projectTitle, projectDetail, listTitle, listDetail, formContainer, formName, formDetails, formDueDate, formPriority, formButton, inputsContainer, buttonAddProject, buttonAddList, buttonAddItem, quadrantOne, quadrantTwo, quadrantThree, quadrantFour, projectArray, projectCounter, listCounter, itemCounter } from "./global_scope.js";

export default function _appendInputsToDisplay(e) {

    // MOVED to global_scope.js
    // const inputsContainer = document.createElement("div")

    // const quadrantOne = document.createElement("div")
    // const quadrantTwo = document.createElement("div")
    // const quadrantThree = document.createElement("div")
    // const quadrantFour = document.createElement("div")

    const nameInput = document.querySelector(".name").value
    quadrantOne.textContent = nameInput

    if (e.target.classList.contains("project")) {
        ++projectCounter
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
        ++listCounter
        let identifier = `list-${listCounter}`
        inputsContainer.setAttribute("class", `${identifier}`)

        const priorityInput = document.querySelector(".priority").value
        quadrantFour.textContent = priorityInput

        quadrantOne.setAttribute("class", "quadrantOne list")
        quadrantFour.setAttribute("class", "quadrantFour list")
        inputsContainer.appendChild(quadrantOne)
        inputsContainer.appendChild(quadrantFour)

        const parentContainer = document.querySelector(`.project-${projectCounter}`)
            console.log(projectCounter)
            console.log(parentContainer)

        parentContainer.appendChild(inputsContainer)
    }
    
    if (e.target.classList.contains("item")) {
        ++itemCounter
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

        const parentContainer = document.querySelector(`.list-${listCounter}`)
            console.log(listCounter)
            console.log(parentContainer)

        parentContainer.appendChild(inputsContainer)

    //     e.target.parentElement.appendChild(inputsContainer)
    }

console.log("END OF _appendInputsToDisplay()")
}
