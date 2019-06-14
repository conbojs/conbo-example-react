import AppContext from "./AppContext";

// We only need one instance, so we create and export it here, effectively creating a singleton
const context = new AppContext();

export default context;
