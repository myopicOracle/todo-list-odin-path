export default function globalScopeIIFE() {

    console.log('"Testing that globalScopeIIFE called on page load."')

    const sampleProject = document.createElement("div") 
    const sampleList = document.createElement("ul")
    const sampleItem = document.createElement("li")

    sampleProject.setAttribute("class", "project wrapper sample")
    sampleList.setAttribute("class", "list wrapper sample")
    sampleItem.setAttribute("class", "item wrapper sample")

    const projectTitle = document.createElement("div")
    projectTitle.textContent = "projectTitle TEXT TEXT"
    projectTitle.setAttribute("class", "inputs projectTitle sampleProject")
    sampleProject.appendChild(projectTitle)
    
    const projectDetail = document.createElement("div")
    projectDetail.textContent = "projectDetail TEXT TEXT"
    projectDetail.setAttribute("class", "inputs projectDetail sampleProject")
    sampleProject.appendChild(projectDetail)
    
    const listTitle = document.createElement("div")
    listTitle.textContent = "listTitle TEXT TEXT"
    listTitle.setAttribute("class", "inputs listTitle sampleList")
    sampleList.appendChild(listTitle)
    
    const listDetail = document.createElement("div")
    listDetail.textContent = "listDetail TEXT TEXT"
    listDetail.setAttribute("class", "inputs listDetail sampleList")
    sampleList.appendChild(listDetail)
    
    const quadrantOne = document.createElement("div")
    quadrantOne.textContent = "QuadrantOne Text"
    quadrantOne.setAttribute("class", "inputs quadrantOne sampleItem")
    sampleItem.appendChild(quadrantOne)

    const quadrantTwo = document.createElement("div")
    quadrantTwo.textContent = "QuadrantTwo Text"
    quadrantTwo.setAttribute("class", "inputs quadrantTwo sampleItem")
    sampleItem.appendChild(quadrantTwo)

    const quadrantThree = document.createElement("div")
    quadrantThree.textContent = "QuadrantThree Text"
    quadrantThree.setAttribute("class", "inputs quadrantThree sampleItem")
    sampleItem.appendChild(quadrantThree)

    const quadrantFour = document.createElement("div")
    quadrantFour.textContent = "QuadrantFour Text"
    quadrantFour.setAttribute("class", "inputs quadrantFour sampleItem")
    sampleItem.appendChild(quadrantFour)

    sampleList.appendChild(sampleItem)
    sampleProject.appendChild(sampleList)
    contentContainer.appendChild(sampleProject)

    const button1 = document.createElement("button")
    const button2 = document.createElement("button")
    const button3 = document.createElement("button")

}

const outerContainer = document.querySelector("#outer-container")
const panelContainer = document.querySelector("#panel-container")
const contentContainer = document.querySelector("#content-container")

const inputsContainer = document.createElement("div")

const formContainer = document.createElement("div")
const formName = document.createElement("input")
const formDetails = document.createElement("input")
const formDueDate = document.createElement("input")
const formPriority = document.createElement("input")
const submitButton = document.createElement("button")

formContainer.setAttribute("class", "form container")
formName.setAttribute("class", "form name")    
formDetails.setAttribute("class", "form details")    
formDueDate.setAttribute("class", "form dueDate")    
formPriority.setAttribute("class", "form priority")
submitButton.setAttribute("class", "form submit button")

// IN _pushInputs
// const nameInput = document.querySelector(".name").value
// const detailsInput = document.querySelector(".details").value
// const dueDateInput = document.querySelector(".dueDate").value
// const priorityInput = document.querySelector(".priority").value

const quadrantOne = document.createElement("div")
const quadrantTwo = document.createElement("div")
const quadrantThree = document.createElement("div")
const quadrantFour = document.createElement("div")

// IN _appendInputs
// quadrantOne.textContent = nameInput
// quadrantTwo.textContent = detailsInput
// quadrantThree.textContent = dueDateInput
// quadrantFour.textContent = priorityInput

const submitFormButton = document.querySelector(".form.submit")
const projectArray = []

export { outerContainer, 
    panelContainer, 
    contentContainer, 
    inputsContainer, 
    formContainer,
    formName,
    formDetails,
    formDueDate,
    formPriority,
    submitButton,
    quadrantOne, 
    quadrantTwo, 
    quadrantThree, 
    quadrantFour, 
    submitFormButton, 
    projectArray };