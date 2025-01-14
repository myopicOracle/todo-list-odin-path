import "./styles.css";

import App from "./app_class.js";
import Project from "./project_class.js";
import List from "./list_class.js";
import Item from "./item_class.js";

import _showForm from "./_showForm.js";
import _pushInputsToArray from "./_pushInputs.js";
import _appendInputsToDisplay from "./_appendInputs.js";
import _submitForm from "./_submitForm.js";
import _deleteElement from "./_delete.js";

import globalScopeIIFE, { outerContainer, panelContainer, contentContainer, inputsContainer, formContainer, formName, formDetails, formDueDate, formPriority, submitButton, quadrantOne, quadrantTwo, quadrantThree, quadrantFour, submitFormButton, projectArray } from "./global_scope.js";

globalScopeIIFE();












// delete everything below
console.log(outerContainer)
console.log(panelContainer)
console.log(contentContainer)