export default function globalScopeIIFE() {

    const sampleList = document.createElement("ul")
    const sampleItem = document.createElement("ul")

        sampleList.setAttribute("class", "list wrapper sample")
        sampleItem.setAttribute("class", "item wrapper sample")

    const projectTitle = document.createElement("div")
    const projectDetail = document.createElement("div")
    const listTitle = document.createElement("div")
    const listDetail = document.createElement("div")

        projectTitle.setAttribute("class", "inputs projectTitle")
        projectDetail.setAttribute("class", "inputs projectDetail")
        listTitle.setAttribute("class", "inputs listTitle")
        listDetail.setAttribute("class", "inputs listDetail")

        projectTitle.textContent = "projectTitle TEXT TEXT"
        projectDetail.textContent = "projectDetail TEXT TEXT"
        listTitle.textContent = "listTitle TEXT TEXT"
        listDetail.textContent = "listDetail TEXT TEXT"
    
    const quadrantOne = document.createElement("li")
    const quadrantTwo = document.createElement("li")
    const quadrantThree = document.createElement("li")
    const quadrantFour = document.createElement("li")

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

    const button1 = document.createElement("button")
    const button2 = document.createElement("button")
    const button3 = document.createElement("button")

        button1.setAttribute("class", "button1 Project button add")
        button2.setAttribute("class", "button2 List button add")
        button3.setAttribute("class", "button3 Item button add")

        button1.textContent = "Add Project"
        button2.textContent = "Add List"
        button3.textContent = "Add Item"

    // Add list details to display
    sampleList.appendChild(listTitle)
    sampleList.appendChild(listDetail)

    // Add completed list to right-hand content box
    sampleList.appendChild(sampleItem)
    contentContainer.appendChild(sampleList)

    // Add project details to left-hand panel
    panelContainer.appendChild(projectTitle)
    panelContainer.appendChild(projectDetail)

    // Add action buttons to left-hand panel
    panelContainer.appendChild(button1)
    panelContainer.appendChild(button2)
    panelContainer.appendChild(button3)

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