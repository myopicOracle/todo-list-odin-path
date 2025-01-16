import App from "./app_class.js";

export default class Project extends App {
  constructor(name, dueDate) {
    super(name);
    this.dueDate = dueDate;
  }

  _switchProject() {}

  _selectProject() {}

  _editProject() {}
}
