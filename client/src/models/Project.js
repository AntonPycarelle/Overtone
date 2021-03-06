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

  updateFromJson = ({ name, text, images, thumb, links, behance }) => {
    this.name = name;
    this.text = text;
    this.images = images;
    this.thumb = thumb;
    this.links = links;
    this.behance = behance;


  };

  get asJson() {
    return {
      id: this.id,
      name: this.name,
      text: this.text,
      thumb: this.thumb,
      images: this.images,
      links: this.links,
      behance: this.behance
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
