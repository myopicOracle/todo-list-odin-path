export default function _appendInputsToDisplay(e) {

    // moved to IIFE DOM Els module
    // const quadrantOne = document.createElement("div")
    // const quadrantTwo = document.createElement("div")
    // const quadrantThree = document.createElement("div")
    // const quadrantFour = document.createElement("div")

    const inputsContainer = document.createElement("div")

    if (e.target.parentElement.classList.contains("project")) {

        quadrantOne.textContent = nameInput
        quadrantOne.setAttribute("class", "quadrantOne project")
        inputsContainer.appendChild(quadrantOne)

        quadrantThree.textContent = dueDateInput
        quadrantThree.setAttribute("class", "quadrantThree project")
        inputsContainer.appendChild(quadrantThree)
        
        outerContainer.appendChild(inputsContainer)
    }
    
    if (e.target.parentElement.classList.contains("list")) {

        quadrantOne.textContent = nameInput
        quadrantOne.setAttribute("class", "quadrantOne list")
        inputsContainer.appendChild(quadrantOne)

        quadrantFour.textContent = priorityInput
        quadrantFour.setAttribute("class", "quadrantFour list")
        inputsContainer.appendChild(quadrantFour)

        contentContainer.appendChild(inputsContainer)
    }
    
    if (e.target.parentElement.classList.contains("item")) {

        quadrantOne.textContent = nameInput
        quadrantOne.setAttribute("class", "quadrantOne item")
        inputsContainer.appendChild(quadrantOne)

        quadrantTwo.textContent = detailsInput
        quadrantTwo.setAttribute("class", "quadrantTwo item")
        inputsContainer.appendChild(quadrantTwo)

        quadrantThree.textContent = dueDateInput
        quadrantThree.setAttribute("class", "quadrantThree item")
        inputsContainer.appendChild(quadrantThree)

        quadrantFour.textContent = priorityInput
        quadrantFour.setAttribute("class", "quadrantFour item")
        inputsContainer.appendChild(quadrantFour)

        e.target.parentElement.appendChild(inputsContainer)
    }

}
