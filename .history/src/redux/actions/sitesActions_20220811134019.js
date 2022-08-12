import axios from "axios"
import { SITES_DETAILS_REQUEST, SITES_LIST_REQUEST } from "../constants/sitesConstants";

export const getSites = () => async function (dispatch) {
	const response = await axios.get('https://interview.staging.atresplayer.com/sites')
	dispatch({ type: SITES_LIST_REQUEST, payload: response.data })
}
export const getSiteDetails = (id) => async function (dispatch) {
	const response = await axios.get(`https://interview.staging.atresplayer.com/${id}`)
	dispatch({ type: SITES_DETAILS_REQUEST, payload: response.data })
}