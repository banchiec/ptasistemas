import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSiteDetails } from "../../redux/actions/sitesActions"

const SiteDetailsScreen = () => {
  const dispatch = useDispatch()
  const [currentSite, setCurrentSite] = useState()
  const { siteId } = useParams()
  const { site } = useSelector((state) => state.siteDetail)
  console.log(siteId)
  useEffect(() => {
    dispatch(getSiteDetails(siteId))
  }, [dispatch])
  useEffect(() => {
    if (!site) {
      setCurrentSite(site)
    }
  }, [site])

  return (
    <>
      {currentSite.name}
    </>
  )
}
export default SiteDetailsScreen