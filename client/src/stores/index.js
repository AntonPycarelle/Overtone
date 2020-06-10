import { configure } from "mobx";
import PortfolioStore from "./PortfolioStore";

configure({ enforceActions: `observed` });

class Store {
  constructor() {
    this.portfolioStore = new PortfolioStore(this);
  }

  loadAllData = async () => {
    await this.portfolioStore.loadAllItems();
    // console.log("item loading");
    
  };
}

export default Store;
