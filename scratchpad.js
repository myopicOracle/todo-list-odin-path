


_addAllButtonsToPage()



_renderForm() {

    
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


_getProjectInputs() {
    const wrapper = document.querySelector(".wrapper")

    super._createForm()
    
    const formDueDate = document.createElement("input")
    formDueDate.setAttribute("class", "form dueDate")
    formContainer.appendChild(formDueDate)
    
    wrapper.appendChild(formContainer)
}

_getListInputs() {
    const wrapper = document.querySelector(".wrapper")

    super._createForm()
    
    const formPriority = document.createElement("input")
    formPriority.setAttribute("class", "form priority")
    formContainer.appendChild(formPriority)
    
    wrapper.appendChild(formContainer)
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
    const newItem = document.createElement("div")

    this.quadrantOne.textContent = this.nameInput
    newItem.appendChild(this.quadrantOne)
    this.quadrantTwo.textContent = this.detailsInput
    newItem.appendChild(this.quadrantTwo)
    this.quadrantThree.textContent = this.dueDateInput
    newItem.appendChild(this.quadrantThree)
    this.quadrantFour.textContent = this.priorityInput
    newItem.appendChild(this.quadrantFour)

    this.itemArray.push(newItem)

}