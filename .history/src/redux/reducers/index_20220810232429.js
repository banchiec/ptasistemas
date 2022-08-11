import { combineReducers } from "redux";
import { siteDetailsReducers, sitesListReducers } from "./sitesReducers";

const reducers = combineReducers({
	sitesList: sitesListReducers ,
})

export default reducers