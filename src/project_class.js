class Project extends App {
    constructor(name, dueDate) {
        super(name)
        this.dueDate = dueDate
        this.projectArray = []
    }

    _getProjectInputs() {
        const wrapper = document.querySelector(".wrapper")

        super._createForm()
        
        const formDueDate = document.createElement("input")
        formDueDate.setAttribute("class", "form dueDate")
        formContainer.appendChild(formDueDate)
        
        wrapper.appendChild(formContainer)
    }

    _appendProject() {

    }

    _deleteProject() {

    }

    _switchProject() {

    }

    _selectProject() {

    }

    _editProject() {

    }


}