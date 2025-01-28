import _pushInputsToArray from "./_pushInputs.js";
import _appendInputsToDisplay from "./_appendInputs.js";

export default function _submitForm(e) {
  console.log("Executed _submitForm in SubmitForm Module");

  // clear previous stage formatting
  document.querySelector(".popup-overlay").remove()
  e.target.parentElement.style.cssText += "display: none;"

  // execute callback functions
  _pushInputsToArray(e);
  console.log("Executed _pushInputsToArray in SubmitForm Module");
  _appendInputsToDisplay(e);
  console.log("Executed _appendInputsToDisplay in SubmitForm Module");

  console.log("END OF _submitForm()");
}