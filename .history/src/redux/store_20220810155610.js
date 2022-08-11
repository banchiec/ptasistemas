import { createStore , applyMiddleware, compose } from "redux";
import reducers from "./reducers";

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose

const store = createStore(
	reducers,
)

export default store