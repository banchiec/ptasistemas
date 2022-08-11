import { SITES_LIST_REQUEST } from "../constants/sitesConstants"

const initialState = {
	sites: []
}
const sitesListReducers = (state = initialState, {type, payload}) => {
	console.log(type);
	switch(type){
		case  SITES_LIST_REQUEST:
			return {...state, sites: payload }
		default:
			return state
	}
}

export {
	sitesListReducers
}