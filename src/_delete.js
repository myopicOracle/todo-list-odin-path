export default function _deleteElement(e) {

  if (e.target.classList.contains("project")) {
    const confirmation = prompt('Type "Yes" to confirm deletion of project.', 'Yes')
    if (confirmation === "Yes") {
      e.target.parentElement.remove();
    }

  } else if (e.target.classList.contains("list")) {
    const confirmation = prompt('Type "Yes" to confirm deletion of list.', 'Yes')
    if (confirmation === "Yes") {
      e.target.parentElement.remove();
    }

  } else if (e.target.classList.contains("item")) {
    const confirmation = prompt('Type "Yes" to confirm deletion of item.', 'Yes')
    if (confirmation === "Yes") {
      e.target.parentElement.remove();
    }

  } else alert("ERROR");
}