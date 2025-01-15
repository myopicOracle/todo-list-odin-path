const outerContainer = document.querySelector("#outer-container")
const panelContainer = document.querySelector("#panel-container")
const contentContainer = document.querySelector("#content-container")

const buttonAddProject = document.createElement("button")
const buttonAddList = document.createElement("button")
const buttonAddItem = document.createElement("button")

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

const projectArray = []

// exports below
export default function defaultOnPageLoad() {

    // if in global scope, causes els to be overwritten
    const sampleList = document.createElement("div")
    const sampleItem = document.createElement("div")

    const quadrantOne = document.createElement("div")
    const quadrantTwo = document.createElement("div")
    const quadrantThree = document.createElement("div")
    const quadrantFour = document.createElement("div")
    
    // Add sample project details and action buttons to Left Panel 
    projectTitle.setAttribute("class", "inputs projectTitle")
    projectTitle.textContent = "projectTitle"
    panelContainer.appendChild(projectTitle)
    
    projectDetail.setAttribute("class", "inputs projectDetail")
    projectDetail.textContent = "projectDetail"
    panelContainer.appendChild(projectDetail)
    
    formContainer.setAttribute("class", "form container")
    panelContainer.appendChild(formContainer)
    
    addPanelButtons()
    
    // Create sample list and item
    sampleList.setAttribute("class", "list wrapper sample")
    sampleItem.setAttribute("class", "item wrapper sample")
    listTitle.setAttribute("class", "inputs listTitle")
    listDetail.setAttribute("class", "inputs listDetail")
    
    listTitle.textContent = "listTitle"
    listDetail.textContent = "listDetail"
    
    quadrantOne.textContent = "One"
    quadrantTwo.textContent = "Two"
    quadrantThree.textContent = "Three"
    quadrantFour.textContent = "Four"

    sampleItem.appendChild(quadrantOne)
    sampleItem.appendChild(quadrantTwo)
    sampleItem.appendChild(quadrantThree)
    sampleItem.appendChild(quadrantFour)
    
    // Add completed list to right-hand content box
    const projectContainer = document.createElement("div")
    projectContainer.setAttribute("class", "project-container project-1")
    contentContainer.appendChild(projectContainer)

    sampleList.appendChild(listTitle)
    sampleList.appendChild(listDetail)

    sampleList.appendChild(sampleItem)
    projectContainer.appendChild(sampleList)

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

export { outerContainer, 
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
    projectArray };    