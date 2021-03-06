import { createContext } from "react";
import RootStore from "../stores/index";

const store = new RootStore();

store.loadAllData();

export const storeContext = createContext(store);
