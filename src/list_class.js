class List extends App {
    constructor() {
        this.listArray = []
    }

    _getListInputs() {
        const wrapper = document.querySelector(".wrapper")

        super._createForm()
        
        const formPriority = document.createElement("input")
        formPriority.setAttribute("class", "form priority")
        formContainer.appendChild(formPriority)
        
        wrapper.appendChild(formContainer)
    }

    _appendList() {

    }

    _deleteList() {

    }

    _switchList() {

    }

    _editList() {

    }


}