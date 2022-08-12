import { combineReducers } from "redux";
import { siteDetailsReducers, sitesListReducers } from "./sitesReducers";

const reducers = combineReducers({
	sitesList: sitesListReducers,
	siteDetails: siteDetailsReducers
})

export default reducers