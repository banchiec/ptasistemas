import axios from "axios"
import { SITES_LIST_REQUEST } from "../constants/sitesConstants";

export const getSitesList = async () => {
	return async function (dispatch, getState) {
		const response = await axios.get('https://interview.staging.atresplayer.com/sites')

	}
}