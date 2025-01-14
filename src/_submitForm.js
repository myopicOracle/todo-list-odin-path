import _pushInputsToArray from "./_pushInputs.js"
import _appendInputsToDisplay from "./_appendInputs.js"

export default function _submitForm(e) {
    _pushInputsToArray(e)
    _appendInputsToDisplay(e)
    _addPanelButtons()
}