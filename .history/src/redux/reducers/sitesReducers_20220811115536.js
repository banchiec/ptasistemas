import { SITES_LIST_REQUEST } from "../constants/sitesConstants"

const initialState = {
	sites: [],
}
export const sitesListReducers = (state = {}, { type, payload }) => {
	switch (type) {
		case SITES_LIST_REQUEST:
			return {
				...state,
				sites: payload
			}
		default:
			return state
	}
}