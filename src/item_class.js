class Item extends App {
    constructor(name, details, dueDate, priority) {
        super(name, details, dueDate, priority)
        this.itemArray = []
    }

    _getItemInputs() {
        const wrapper = document.querySelector(".wrapper")

        super._createForm()

        const formDetails = document.createElement("input")
        formDetails.setAttribute("class", "form details")
        formContainer.appendChild(formDetails)
        
        const formDueDate = document.createElement("input")
        formDueDate.setAttribute("class", "form dueDate")
        formContainer.appendChild(formDueDate)
        
        const formPriority = document.createElement("input")
        formPriority.setAttribute("class", "form priority")
        formContainer.appendChild(formPriority)

        wrapper.appendChild(formContainer)
    }

    _addToArray() {
        this.newObj = new App(this.nameInput, this.detailsInput, this.dueDateInput, this.priorityInput)
        this.itemArray.push(this.newObj)
    }


    _addNewItem() {
        this._getItemInputs()
        this._addToArray()
    }


    _deleteItem() {

    }






};;;;;





// _appendItem() {
//     const newItem = document.createElement("div")

//     this.quadrantOne.textContent = this.nameInput
//     newItem.appendChild(this.quadrantOne)
//     this.quadrantTwo.textContent = this.detailsInput
//     newItem.appendChild(this.quadrantTwo)
//     this.quadrantThree.textContent = this.dueDateInput
//     newItem.appendChild(this.quadrantThree)
//     this.quadrantFour.textContent = this.priorityInput
//     newItem.appendChild(this.quadrantFour)

//     this.itemArray.push(newItem)

// }