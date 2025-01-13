export default function _pushInputsToArray(e) {

    // moved to IIFE DOM Els module
    // const nameInput = document.querySelector(".name").value
    // const detailsInput = document.querySelector(".details").value
    // const dueDateInput = document.querySelector(".dueDate").value
    // const priorityInput = document.querySelector(".priority").value
    
    if (e.target.parentElement.classList.contains("project")) {
        const newObj = new Project(nameInput, dueDateInput)
        newObj.projectArray.push(newObj)
        console.log(projectArray)
    }
    
    if (e.target.parentElement.classList.contains("list")) {
        const newObj = new List(nameInput, priorityInput)
        newObj.listArray.push(newObj)
        console.log(listArray)
    }
    
    if (e.target.parentElement.classList.contains("item")) {
        const newObj = new Item(nameInput, detailsInput, dueDateInput, priorityInput)
        newObj.itemArray.push(newObj)
        console.log(itemArray)
    }

}