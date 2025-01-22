import Project from "./project_class.js";
import List from "./list_class.js";
import Item from "./item_class.js";

export default function _pushInputsToArray(e) {
  const nameInput = document.querySelector(".name").value;

  if (e.target.classList.contains("project")) {
    const dueDateInput = document.querySelector(".dueDate").value;

    const newObj = new Project(nameInput, dueDateInput);
    console.log("projectObj: ", newObj);

    const { rootArray } = newObj;
    console.log(rootArray);

    rootArray.push(newObj);
    console.log(rootArray);
  }

  if (e.target.classList.contains("list")) {
    const priorityInput = document.getElementById("priority").value;

    const newObj = new List(nameInput, priorityInput);
    console.log("listObj: ", newObj);

    const { listArray } = newObj;
    console.log(listArray);

    listArray.push(newObj);
    console.log(listArray);
  }

  if (e.target.classList.contains("item")) {
    const detailsInput = document.querySelector(".details").value;
    const dueDateInput = document.querySelector(".dueDate").value;
    const priorityInput = document.getElementById("priority").value;

    const newObj = new Item(
      nameInput,
      detailsInput,
      dueDateInput,
      priorityInput,
    );
    console.log("itemObj: ", newObj);

    const { itemArray } = newObj;
    console.log(itemArray);

    itemArray.push(newObj);
    console.log(itemArray);
  }

  console.log("END OF _pushInputsToArray()");
}
