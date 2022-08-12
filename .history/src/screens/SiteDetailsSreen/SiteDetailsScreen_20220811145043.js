import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSiteDetails } from "../../redux/actions/sitesActions"

const SiteDetailsScreen = () => {
  const dispatch = useDispatch()
  const { siteId } = useParams()
  const { site } = useSelector((state) => state.siteDetails)
  console.log(siteId)
  useEffect(() => {
    dispatch(getSiteDetails(siteId))
  }, [])
  console.log(site)
  return (
    <>
      Details
    </>
  )
}
export default SiteDetailsScreen