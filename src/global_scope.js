const outerContainer = document.querySelector("#outer-container")
const panelContainer = document.querySelector("#panel-container")
const contentContainer = document.querySelector("#content-container")

const formContainer = document.createElement("div")
const formName = document.createElement("input")
const formDetails = document.createElement("input")
const formDueDate = document.createElement("input")
const formPriority = document.createElement("input")
const formButton = document.createElement("button")

const buttonAddProject = document.createElement("button")
const buttonAddList = document.createElement("button")
const buttonAddItem = document.createElement("button")

const sampleList = document.createElement("ul")
const sampleItem = document.createElement("ul")
const projectTitle = document.createElement("div")
const projectDetail = document.createElement("div")
const listTitle = document.createElement("div")
const listDetail = document.createElement("div")

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

    sampleList.setAttribute("class", "list wrapper sample")
    sampleItem.setAttribute("class", "item wrapper sample")

    projectTitle.setAttribute("class", "inputs projectTitle")
    projectDetail.setAttribute("class", "inputs projectDetail")
    listTitle.setAttribute("class", "inputs listTitle")
    listDetail.setAttribute("class", "inputs listDetail")

    projectTitle.textContent = "projectTitle TEXT TEXT"
    projectDetail.textContent = "projectDetail TEXT TEXT"
    listTitle.textContent = "listTitle TEXT TEXT"
    listDetail.textContent = "listDetail TEXT TEXT"
    
    // Add item text content to item container
    addItemQuadrants()

    // Add list details to display
    sampleList.appendChild(listTitle)
    sampleList.appendChild(listDetail)

    // Add completed list to right-hand content box
    sampleList.appendChild(sampleItem)
    contentContainer.appendChild(sampleList)

    // Add project details to left-hand panel
    panelContainer.appendChild(projectTitle)
    panelContainer.appendChild(projectDetail)

    addPanelButtons()
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