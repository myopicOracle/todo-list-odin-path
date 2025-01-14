export default function _showForm(e) {

    // formContainer.setAttribute("class", "form container")
    // formName.setAttribute("class", "form name")    
    // formDetails.setAttribute("class", "form details")    
    // formDueDate.setAttribute("class", "form dueDate")    
    // formPriority.setAttribute("class", "form priority")
    // formButton.setAttribute("class", "form submit")
    
    formContainer.appendChild(formName)

    if (e.target.classList.contains("project")) {
            formContainer.appendChild(formDueDate)
            
    } else if (e.target.classList.contains("list")) {
            formContainer.appendChild(formPriority)
                  
    } else if (e.target.classList.contains("item")) {
            formContainer.appendChild(formDetails)            
            formContainer.appendChild(formDueDate)
            formContainer.appendChild(formPriority)
            
    } else alert("ERROR")

    formContainer.appendChild(formButton)
    panelContainer.appendChild(formContainer)

    const submitButton = document.querySelector(".form.submit")
    submitButton.addEventListener("click", _submitForm)

}