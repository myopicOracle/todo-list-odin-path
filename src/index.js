import { globalScopeIIFE } from "./global_scope.js";

import App from "./app_class.js";
import Project from "./project_class.js";
import List from "./list_class.js";
import Item from "./item_class.js";

import _showForm from "./_showForm.js"
import _pushInputsToArray from "./_pushInputs.js"
import _appendInputsToDisplay from "./_appendInputs.js"
import _submitForm from "./_submitForm.js"
import _deleteElement from "./_delete.js";




defaultShownOnPageLoad();







addItemButton.addEventListener("click", _showForm)

submitFormButton.addEventListener("click", _submitForm)

deleteItemButton.addEventListener("click", _deleteElement)



addListButton.addEventListener("click", _showForm)

confirmAddListButton.addEventListener("click", _submitForm)

deleteListButton.addEventListener("click", _deleteElement)



addProjectButton.addEventListener("click", _showForm)

confirmAddProjectButton.addEventListener("click", _submitForm)

deleteProjectButton.addEventListener("click", _deleteElement)