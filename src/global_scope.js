const outerContainer = document.querySelector("#outer-container")
const panelContainer = document.querySelector("#panel-container")
const contentContainer = document.querySelector("#content-container")

const buttonAddProject = document.createElement("button")
const buttonAddList = document.createElement("button")
const buttonAddItem = document.createElement("button")

const sampleList = document.createElement("ul")
const sampleItem = document.createElement("ul")
const projectTitle = document.createElement("div")
const projectDetail = document.createElement("div")
const listTitle = document.createElement("div")
const listDetail = document.createElement("div")

const formContainer = document.createElement("div")
const formName = document.createElement("input")
const formDetails = document.createElement("input")
const formDueDate = document.createElement("input")
const formPriority = document.createElement("input")
const formButton = document.createElement("button")

const inputsContainer = document.createElement("div")
const quadrantOne = document.createElement("li")
const quadrantTwo = document.createElement("li")
const quadrantThree = document.createElement("li")
const quadrantFour = document.createElement("li")

const projectArray = []

// IN _pushInputs
// const nameInput = document.querySelector(".name").value
// const detailsInput = document.querySelector(".details").value
// const dueDateInput = document.querySelector(".dueDate").value
// const priorityInput = document.querySelector(".priority").value

// IN _appendInputs
// quadrantOne.textContent = nameInput
// quadrantTwo.textContent = detailsInput
// quadrantThree.textContent = dueDateInput
// quadrantFour.textContent = priorityInput

export default function defaultOnPageLoad() {
    
    // Add sample project details and action buttons to Left Panel 
    projectTitle.setAttribute("class", "inputs projectTitle")
    projectTitle.textContent = "projectTitle TEXT TEXT"
    panelContainer.appendChild(projectTitle)

    projectDetail.setAttribute("class", "inputs projectDetail")
    projectDetail.textContent = "projectDetail TEXT TEXT"
    panelContainer.appendChild(projectDetail)

    formContainer.setAttribute("class", "form container")
    panelContainer.appendChild(formContainer)

    addPanelButtons()

    // Create sample list and item
    sampleList.setAttribute("class", "list wrapper sample")
    sampleItem.setAttribute("class", "item wrapper sample")
    listTitle.setAttribute("class", "inputs listTitle")
    listDetail.setAttribute("class", "inputs listDetail")

    listTitle.textContent = "listTitle TEXT TEXT"
    listDetail.textContent = "listDetail TEXT TEXT"
    
    addItemQuadrants()

    // Add completed list to right-hand content box
    sampleList.appendChild(listTitle)
    sampleList.appendChild(listDetail)

    sampleList.appendChild(sampleItem)
    contentContainer.appendChild(sampleList)


}

export const addPanelButtons = function() {

    buttonAddProject.setAttribute("class", "buttonAddProject project button add")
    buttonAddList.setAttribute("class", "buttonAddList list button add")
    buttonAddItem.setAttribute("class", "buttonAddItem item button add")

    buttonAddProject.textContent = "Add Project"
    buttonAddList.textContent = "Add List"
    buttonAddItem.textContent = "Add Item"

    panelContainer.appendChild(buttonAddProject)
    panelContainer.appendChild(buttonAddList)
    panelContainer.appendChild(buttonAddItem)

}

export const addItemQuadrants = function() {

    quadrantOne.setAttribute("class", "inputs quadrantOne")
    quadrantTwo.setAttribute("class", "inputs quadrantTwo")
    quadrantThree.setAttribute("class", "inputs quadrantThree")
    quadrantFour.setAttribute("class", "inputs quadrantFour")

    quadrantOne.textContent = "QuadrantOne Text"
    quadrantTwo.textContent = "QuadrantTwo Text"
    quadrantThree.textContent = "QuadrantThree Text"
    quadrantFour.textContent = "QuadrantFour Text"

    sampleItem.appendChild(quadrantOne)
    sampleItem.appendChild(quadrantTwo)
    sampleItem.appendChild(quadrantThree)
    sampleItem.appendChild(quadrantFour)

}

export { outerContainer, 
    panelContainer, 
    contentContainer, 
    sampleList, 
    sampleItem, 
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
    inputsContainer, 
    buttonAddProject,
    buttonAddList,
    buttonAddItem,
    quadrantOne, 
    quadrantTwo, 
    quadrantThree, 
    quadrantFour, 
    projectArray };  