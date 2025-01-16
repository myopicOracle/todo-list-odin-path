import App from "./app_class.js";

export default class Item extends App {
  constructor(name, details, dueDate, priority) {
    super(name);
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  // _editItem() {

  // }

  // _deleteItem() {

  // }
}
