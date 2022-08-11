import { SITES_LIST_REQUEST } from "../constants/sitesConstants"

const initialState = {
	sites: [],
	site: {}
}
export const sitesListReducers = (state = initialState, {type, payload}) => {
	switch(type){
		case  SITES_LIST_REQUEST:
			return {
				...state,
				 sites: action.payload }
		default:
			return state
	}
}