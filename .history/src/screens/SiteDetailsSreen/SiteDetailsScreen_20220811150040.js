import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSiteDetails } from "../../redux/actions/sitesActions"

const SiteDetailsScreen = () => {
  const dispatch = useDispatch()
  const { siteId } = useParams()
  const { site } = useSelector((state) => state.siteDetail)
  console.log(siteId)
  useEffect(() => {
    dispatch(getSiteDetails(siteId))
  }, [dispatch])
  return (
    <>
      Details
    </>
  )
}
export default SiteDetailsScreen