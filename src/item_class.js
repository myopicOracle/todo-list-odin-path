class Item extends App {
    constructor() {
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

    _appendItem() {

    }

    _deleteItem() {

    }


}