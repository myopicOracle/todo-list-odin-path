import "./styles.css";

import renderNewProject, {
  buttonAddProject,
  buttonAddList
} from "./global_scope.js";

import _showForm from "./_showForm.js";
import _pushInputsToArray from "./_pushInputs.js";
import _appendInputsToDisplay from "./_appendInputs.js";

renderNewProject();

buttonAddProject.addEventListener("click", _showForm);
buttonAddList.addEventListener("click", _showForm);