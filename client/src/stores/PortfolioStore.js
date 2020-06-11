import RestService from "../services/RestService";
import { decorate, observable, action } from "mobx";
import Project from "../models/Project";

class PortfolioStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.projecten = [];
    this.authorsService = new RestService("projecten");
  }

  loadAllItems = async () => {
    const jsonAuthors = await this.authorsService.getAll();
    console.log(jsonAuthors);
    jsonAuthors.forEach(json => this.updateAuthorFromServer(json));
  };

  addProject = project => {
    this.projecten.push(project);
  };

  // createAuthor = async author => {
  //   const json = await this.authorsService.create(author);
  //   this.updateAuthorFromServer(json);
  // };

  // updateAuthor = async author => {
  //   const json = await this.authorsService.update(author);
  //   this.updateAuthorFromServer(json);
  // };

  // deleteAuthor = async author => {
  //   const json = await this.authorsService.delete(author);
  //   this.updateAuthorFromServer(json);
  // };

  updateAuthorFromServer(json) {
    let project = this.projecten.find(project => project.id === json.id);
    if (!project) {
      project = new Project({
        id: json.id,
        store: this
      });
    }
    if (json.isDeleted) {
      this.projecten.remove(project);
    } else {
      project.updateFromJson(json);
    }
  }

  resolveBook = id => this.projecten.find(project => project.id === id);
}

decorate(PortfolioStore, {
  projecten: observable,
  addProject: action,
  updateAuthorFromServer: action
});

export default PortfolioStore;
