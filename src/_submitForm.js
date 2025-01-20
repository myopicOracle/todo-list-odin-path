import _pushInputsToArray from "./_pushInputs.js";
import _appendInputsToDisplay from "./_appendInputs.js";

export default function _submitForm(e) {
  console.log("Executed _submitForm in SubmitForm Module");
  _pushInputsToArray(e);
  console.log("Executed _pushInputsToArray in SubmitForm Module");
  _appendInputsToDisplay(e);
  console.log("Executed _appendInputsToDisplay in SubmitForm Module");

  console.log("END OF _submitForm()");
}