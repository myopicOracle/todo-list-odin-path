import "./styles.css";

import defaultOnPageLoad, {
  buttonAddProject,
  buttonAddList,
  buttonAddItem,
} from "./global_scope.js";

import _showForm from "./_showForm.js";
import _pushInputsToArray from "./_pushInputs.js";
import _appendInputsToDisplay from "./_appendInputs.js";

defaultOnPageLoad();

buttonAddProject.addEventListener("click", _showForm);
buttonAddList.addEventListener("click", _showForm);
buttonAddItem.addEventListener("click", _showForm);
