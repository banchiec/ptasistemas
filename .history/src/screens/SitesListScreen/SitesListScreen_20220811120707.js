
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSites } from "../../redux/actions/sitesActions"

const SitesListScreen = () => {
  const [currentSites, setCurrentSites] = useState([])
  const { sites } = useSelector((state) => state.sitesList)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSites())
  }, [])

  return (
    <div>
      {
      }
      sites list
    </div>
  )
}
export default SitesListScreen
