import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSiteDetails } from "../../redux/actions/sitesActions"

const SiteDetailsScreen = () => {
  const dispatch = useDispatch()
  const { siteId } = useParams()
  const statum = useSelector((state) => state)
  console.log(siteId)
  useEffect(() => {
  }, [])
  return (
    <>
      Details
    </>
  )
}
export default SiteDetailsScreen