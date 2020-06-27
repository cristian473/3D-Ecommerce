import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/searchReducers";
import thunk from "redux-thunk";

// En esta constante almacenamos el Store.
const store = createStore(
  rootReducer, // Primer parametro el reducer.
  applyMiddleware(thunk) // Metodo ya definido de Redux para facilitar action creator asincronicas.
);

// Exportamos el Store para usarlo en otro archivo.
export default store;