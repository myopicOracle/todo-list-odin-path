export default function _deleteElement(e) {
  if (e.target.classList.contains("project")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("list")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("item")) {
    e.target.parentElement.remove();
  } else alert("ERROR");
}