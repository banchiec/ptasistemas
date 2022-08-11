import { combineReducers } from "redux";
import { sitesListReducers } from "./sitesReducers";

	const reducers = combineReducers({
		sitesList: sitesListReducers ,
	}
)
export default reducers