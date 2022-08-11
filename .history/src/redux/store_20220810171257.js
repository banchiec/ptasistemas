import { 
  applyMiddleware,
	compose, 
	configureStore
} from "@reduxjs/toolkit";
import reducers from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose

const store = configureStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
)

export default store