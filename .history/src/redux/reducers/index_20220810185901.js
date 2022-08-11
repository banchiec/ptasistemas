import { combineReducers } from "redux";
import { siteDetailsReducers, sitesListReducers } from "./sitesReducers";

const reducer = {
	sitesList: sitesListReducers ,
	siteDetails: siteDetailsReducers,
}

export default reducer