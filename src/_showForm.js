export default function _showForm(e) {

    // MOVED to global scope module
    // const formContainer = document.createElement("div")
    // const formName = document.createElement("input")
    // const formDetails = document.createElement("input")
    // const formDueDate = document.createElement("input")
    // const formPriority = document.createElement("input")
    // const submitButton = document.querySelector("button")
    
    // // look into deleting these attribute setters, unecessary?
    // formContainer.setAttribute("class", "form container")
    // formName.setAttribute("class", "form name")    
    // formDetails.setAttribute("class", "form details")    
    // formDueDate.setAttribute("class", "form dueDate")    
    // formPriority.setAttribute("class", "form priority")
    // submitButton.setAttribute("class", "form-submit")
    
    formContainer.appendChild(formName)

    if (e.target.parentElement.classList.contains("project") ||
        e.target.classList.contains("project")) {
            formContainer.appendChild(formDueDate)
            
    } else if (e.target.parentElement.classList.contains("list") ||
        e.target.classList.contains("list")) {
            formContainer.appendChild(formPriority)
                  
    } else if (e.target.parentElement.classList.contains("item") ||
        e.target.classList.contains("item")) {
            formContainer.appendChild(formDetails)            
            formContainer.appendChild(formDueDate)
            formContainer.appendChild(formPriority)
            
    } else alert("ERROR")

    formContainer.appendChild(submitButton)
    panelContainer.appendChild(formContainer)

}