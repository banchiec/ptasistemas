import { SITES_DETAILS_REQUEST, SITES_LIST_REQUEST } from "../constants/sitesConstants"

const initialState = {
	sites: [],
	site: {}
}
export const sitesListReducers = (state = initialState, action) => {
	switch(action.type){
		case  SITES_LIST_REQUEST:
			return {
				...state,
				 sites: action.payload }
		default:
			return state
	}
}
export const siteDetailsReducers = (state = {}, action) => {
	switch(action.type){
		case  SITES_DETAILS_REQUEST:
			return {
				...state,
				 sites: action.payload }
		default:
			return state
	}
}