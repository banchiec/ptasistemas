const initialState = {
	sites: []
}
const sitesListReducers = (state, {type, payload}) => {
	switch(type){
		case  SITES_LIST_REQUEST:
			return {...state, sites, payload }
	}
}