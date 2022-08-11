import axios from "axios"
import { SITES_LIST_REQUEST } from "../constants/sitesConstants";

export const getSitesList = () => async function (dispatch, getState) {
	const response = await axios.get('https://interview.staging.atresplayer.com/sites')
	dispatch({type: SITES_LIST_REQUEST, payload: response.data})
}