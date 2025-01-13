class App {
    nameInput = document.querySelector(".name").value
    detailsInput = document.querySelector(".details").value
    dueDateInput = document.querySelector(".dueDate").value
    priorityInput = document.querySelector(".priority").value 

    constructor() {
        this.rootFolder = []
    }

    _clearPage() {

    }

    _removeChild() {

    }

    _renderForm() {
        const formContainer = document.createElement("div")
        formContainer.setAttribute("class", "form container")
        
        const formName = document.createElement("input")
        formName.setAttribute("class", "form name")
        formContainer.appendChild(formName)      
    }

    _getInputs() {

    }

    _editContent() {

    }
}