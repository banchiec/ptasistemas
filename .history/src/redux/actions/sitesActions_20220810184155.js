import axios from "axios"
import { SITES_DETAILS_REQUEST, SITES_LIST_REQUEST } from "../constants/sitesConstants";

export const getSites = () => async function (dispatch) {
	const response = await axios.get('https://interview.staging.atresplayer.com/sites')
	dispatch({ type: SITES_LIST_REQUEST, payload: response.data })
}
export const getDetailsSites = () => async function (dispatch) {
	const response = await axios.get('https://interview.staging.atresplayer.com/site/6274e62d51dd9c32d5143c0b')
	dispatch({ type: SITES_DETAILS_REQUEST, payload: response.data })
}