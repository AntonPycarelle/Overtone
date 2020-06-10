import { v4 } from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Project {
  constructor({ id = v4(), store, ...json }) {
    this.id = id;

    if (!store) {
      throw new Error("store is required");
    }
    this.store = store;
    this.updateFromJson(json);
    this.store.addProject(this);
  }

  update = async () => this.store.updateAuthor(this.asJson);
  create = async () => this.store.createAuthor(this.asJson);
  delete = async () => await this.store.deleteAuthor(this.asJson);

  setName = value => (this.name = value);

  // linkBook(book) {
  //   !this.books.includes(book) && this.books.push(book);
  // }

  // unlinkBook(book) {
  //   const index = this.books.findIndex(test => test.id === book.id);
  //   if (index !== -1) {
  //     this.books.splice(index, 1);
  //   }
  // }

  updateFromJson = ({ name, text }) => {
    this.name = name;
    this.text = text;
  };

  get asJson() {
    return {
      id: this.id,
      name: this.name,
      text: this.text
    };
  }
}

decorate(Project, {
  name: observable,
  setName: action,
  books: observable,
  updateFromJson: action,
  asJson: computed
});

export default Project;
