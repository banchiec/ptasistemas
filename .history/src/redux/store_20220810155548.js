import { createStore , applyMiddleware } from "redux";
import reducers from "./reducers";

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
	reducers,
)

export default store