import { 
	createStore,
  applyMiddleware,
	compose 
} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose

const store = createStore(
	reducers,
	{},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store