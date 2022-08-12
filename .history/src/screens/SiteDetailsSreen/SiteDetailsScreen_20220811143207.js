import { useParams } from "react-router-dom"

const SiteDetailsScreen = () => {
  const { siteId } = useParams()
  return (
    <>
      Details
    </>
  )
}
export default SiteDetailsScreen