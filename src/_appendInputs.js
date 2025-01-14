export default function _appendInputsToDisplay(e) {

    // MOVED to global_scope.js
    // const inputsContainer = document.createElement("div")

    // const quadrantOne = document.createElement("div")
    // const quadrantTwo = document.createElement("div")
    // const quadrantThree = document.createElement("div")
    // const quadrantFour = document.createElement("div")

    quadrantOne.textContent = nameInput
    quadrantTwo.textContent = detailsInput
    quadrantThree.textContent = dueDateInput
    quadrantFour.textContent = priorityInput

    if (e.target.parentElement.classList.contains("project")) {

        quadrantOne.setAttribute("class", "quadrantOne project")
        quadrantThree.setAttribute("class", "quadrantThree project")
        
        inputsContainer.appendChild(quadrantOne)
        inputsContainer.appendChild(quadrantThree)
        
        outerContainer.appendChild(inputsContainer)
    }
    
    if (e.target.parentElement.classList.contains("list")) {

        quadrantOne.setAttribute("class", "quadrantOne list")
        quadrantFour.setAttribute("class", "quadrantFour list")
        
        inputsContainer.appendChild(quadrantOne)
        inputsContainer.appendChild(quadrantFour)

        contentContainer.appendChild(inputsContainer)
    }
    
    if (e.target.parentElement.classList.contains("item")) {

        quadrantOne.setAttribute("class", "quadrantOne item")
        quadrantTwo.setAttribute("class", "quadrantTwo item")
        quadrantThree.setAttribute("class", "quadrantThree item")
        quadrantFour.setAttribute("class", "quadrantFour item")
        
        inputsContainer.appendChild(quadrantOne)
        inputsContainer.appendChild(quadrantTwo)       
        inputsContainer.appendChild(quadrantThree)
        inputsContainer.appendChild(quadrantFour)

        e.target.parentElement.appendChild(inputsContainer)
    }

}
