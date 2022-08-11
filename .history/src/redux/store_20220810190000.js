import { 
	configureStore,
	compose 
} from "@reduxjs/toolkit";
import reducer from "./reducers";
import thunk from "redux-thunk";

const middleware = [thunk]
const userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null
const preLoaderState = {
	userLogin: {userInfo: userInfoFromStorage}
}
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose

const store = configureStore({
	reducer,
	preLoaderState,
	middleware,
})

export default store