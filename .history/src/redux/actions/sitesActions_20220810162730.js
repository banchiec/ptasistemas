import axios from "axios"
import { SITES_LIST_REQUEST } from "../constants/sitesConstants";

export const getSitesList = async () => {
	const response = await axios.get('https://interview.staging.atresplayer.com/sites')
	console.log(response.data);
	return {
		type: SITES_LIST_REQUEST,
		payload: response.data
	}
}