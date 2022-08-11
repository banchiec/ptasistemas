import { createStore , applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose

const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
)

export default store