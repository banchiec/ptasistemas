import { 
	configureStore,
	compose 
} from "@reduxjs/toolkit";
import reducers from "./reducers";
import thunk from "redux-thunk";

const middleware = [thunk]
const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
: null
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose

const store = configureStore( {
	reducers,
	middleware,
})

export default store