import axios from "axios"

export const getSitesList = async () => {
	const response = await axios.get('https://interview.staging.atresplayer.com/sites')
	console.log(response);
}