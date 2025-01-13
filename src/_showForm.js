export default function _showForm(e) {

    const formContainer = document.createElement("div")
    formContainer.setAttribute("class", "form container")

    const formName = document.createElement("input")
    formName.setAttribute("class", "form name")
    formContainer.appendChild(formName)

    if (e.target.parentElement.classList.contains("project") ||
        e.target.classList.contains("project")
        ) {
            const formDueDate = document.createElement("input")
            formDueDate.setAttribute("class", "form dueDate")
            formContainer.appendChild(formDueDate)

        } else if (e.target.parentElement.classList.contains("list") ||
            e.target.classList.contains("list")
            ) {
            const formPriority = document.createElement("input")
            formPriority.setAttribute("class", "form priority")
            formContainer.appendChild(formPriority)        

        } else if (e.target.parentElement.classList.contains("item") ||
            e.target.classList.contains("item")
            ) {
            const formDetails = document.createElement("input")
            formDetails.setAttribute("class", "form details")
            formContainer.appendChild(formDetails)
            
            const formDueDate = document.createElement("input")
            formDueDate.setAttribute("class", "form dueDate")
            formContainer.appendChild(formDueDate)
            
            const formPriority = document.createElement("input")
            formPriority.setAttribute("class", "form priority")
            formContainer.appendChild(formPriority)

        } else alert("ERROR")

    const submitButton = document.querySelector("button")
    submitButton.setAttribute("id", "form-submit")
    formContainer.appendChild(submitButton)

    panelContainer.appendChild(formContainer)

}