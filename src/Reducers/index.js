import { combineReducers } from "redux";
import productoReducer from "./productoReducer";
import requestReducer from "./requestReducer";
import thumbnailReducer from "./thumbnailReducer";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import productoDetailReducer from "./productoDetailReducer";
import productoLatest from "./productosLatest";

const rootReducer = combineReducers({
  count: 42,
  name: "Armando",
  productos: productoReducer,
  productoDetail: productoDetailReducer,
  requests: requestReducer,
  thumbnails: thumbnailReducer,
  user: userReducer,
  cart: cartReducer,
  latest: productoLatest
});

export default rootReducer;
