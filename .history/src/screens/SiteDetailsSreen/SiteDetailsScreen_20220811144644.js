import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const SiteDetailsScreen = () => {
  const { siteId } = useParams()
  const { site } = useSelector((state) => state.siteDetails)
  console.log(siteId)
  return (
    <>
      Details
    </>
  )
}
export default SiteDetailsScreen