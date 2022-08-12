import { SITES_DETAILS_REQUEST, SITES_LIST_REQUEST } from "../constants/sitesConstants"

const initialState = {
  sites: [],
  site: {}
}

export const sitesListReducers = (state = initialState, { type, payload }) => {
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

export const siteDetailsReducers = (state = {}, { type, payload }) => {
  switch (type) {
    case SITES_DETAILS_REQUEST:
      return {
        ...state,
        site: payload
      }
    default:
      return state
  }
}