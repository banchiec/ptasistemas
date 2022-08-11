
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
  console.log(sites)
  return (
    <div>
      {
        sites?.map((site) => {
          return (
            <h1>
              {site.name}
            </h1>
          )
        })
      }
      sites list
    </div>
  )
}
export default SitesListScreen
