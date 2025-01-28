import {
  formName,
  formDetails,
  formDueDate,
  formPriority,
  formButton,
} from "./global_scope.js";

import _submitForm from "./_submitForm.js";

export default function _showForm(e) {
  document.querySelector(".form.container").innerHTML = "";
  const containerInstance = document.querySelector(".form.container");

  formName.setAttribute("class", "form name");
  formName.value = "";

  formDetails.setAttribute("class", "form details");
  formDetails.placeholder = "Include a Description.";
  formDetails.value = "";

  formDueDate.setAttribute("class", "form dueDate");
  formDueDate.placeholder = "What is the Due Date?";
  formDueDate.value = "";

  formPriority.innerHTML = `
    <label for="priority">Select Priority</label>
    <select name="priority" id="priority">
      <option value="High">High Priority</option>
      <option value="Medium">Medium Priority</option>
      <option value="Low">Low Priority</option>
    </select>`
  formPriority.setAttribute("class", "form priority-container");
  formPriority.placeholder = "Choose the Priority Lvl.";
  formPriority.value = "";

  if (e.target.classList.contains("project")) {
    formName.placeholder = "PROJECT NAME";
    formButton.setAttribute("class", "project form submit");

    containerInstance.appendChild(formName);
    containerInstance.appendChild(formDueDate);

  } else if (e.target.classList.contains("list")) {
    formName.placeholder = "LIST TITLE";
    formButton.setAttribute("class", "list form submit");

    containerInstance.appendChild(formName);
    containerInstance.appendChild(formPriority);

  } else if (e.target.classList.contains("item")) {
    const getListId = e.target.parentElement.getAttribute('id')
    containerInstance.setAttribute('id', `${getListId}-item`)

    formName.placeholder = "TO-DO TASK NAME";
    formButton.setAttribute("class", "item form submit");

    containerInstance.appendChild(formName);
    containerInstance.appendChild(formDetails);
    containerInstance.appendChild(formDueDate);
    containerInstance.appendChild(formPriority);

  } else alert("ERROR");

  containerInstance.appendChild(formButton);
  containerInstance.style.cssText = 'position: absolute; left: 170%; top: 400px; z-index: 15; box-sizing: border-box; background-color: lightblue; border: 2px solid blue; border-radius: 10px; width: 300px; padding: 20px 30px;'  
  
  const submitButton = document.querySelector(".form.submit");
  submitButton.textContent = "Create";
  submitButton.addEventListener("click", _submitForm);

  const popupOverlay = document.createElement("div")
  popupOverlay.setAttribute("class", "popup-overlay hidden")
  popupOverlay.style.cssText = "position: fixed; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(180, 180, 180, 0.7);"
  document.body.appendChild(popupOverlay)

  console.log("END OF _showForm()");
}