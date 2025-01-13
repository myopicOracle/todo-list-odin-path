class App {
    nameInput = document.querySelector(".name").value
    detailsInput = document.querySelector(".details").value
    dueDateInput = document.querySelector(".dueDate").value
    priorityInput = document.querySelector(".priority").value 

    quadrantOne = document.createElement("div")
    quadrantTwo = document.createElement("div")
    quadrantThree = document.createElement("div")
    quadrantFour = document.createElement("div")

    constructor(name) {
        this.name
        this.root = []
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

    _appendInputs(container) {
        const newItem = document.createElement("div")

        if (this.quadrantOne) {
            this.quadrantOne.textContent = this.nameInput;
            newItem.appendChild(this.quadrantOne);
        }
        if (this.quadrantTwo) {
            this.quadrantTwo.textContent = this.detailsInput;
            newItem.appendChild(this.quadrantTwo);
        }
        if (this.quadrantThree) {
            this.quadrantThree.textContent = this.dueDateInput;
            newItem.appendChild(this.quadrantThree);
        }
        if (this.quadrantFour) {
            this.quadrantFour.textContent = this.priorityInput;
            newItem.appendChild(this.quadrantFour);
        }

        container.appendChild(newItem)
    }

    _getInputs() {

    }

    _editContent() {

    }
}