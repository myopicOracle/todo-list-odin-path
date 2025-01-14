export default function _deleteElement(e) {

    if (e.target.parentElement.classList.contains("project")) {
        outerContainer.removeChild(outerContainer.lastChild)
    } 
    
    else if (e.target.parentElement.classList.contains("list")) {
        contentContainer.removeChild(contentContainer.lastChild)
    } 
    
    else if (e.target.parentElement.classList.contains("item")) {
        e.target.parentElement.remove()
    } 
    
    else alert("ERROR")

}