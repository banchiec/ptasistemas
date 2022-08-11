
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSites } from "../../redux/actions/sitesActions"

const SitesListScreen = () => {
  const [currentSites, setCurrentSites] = useState([])
  const { sites } = useSelector((state) => state.sitesList)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!sites) {
      dispatch(getSites())
    }
  }, [sites])
  console.log(currentSites)
  return (
    <div>
      <h1>
        sites list
      </h1>
    </div>
  )
}
export default SitesListScreen
