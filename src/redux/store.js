import { createStore } from "redux";
import bookReducer from "./reducer";

const store = createStore(bookReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;