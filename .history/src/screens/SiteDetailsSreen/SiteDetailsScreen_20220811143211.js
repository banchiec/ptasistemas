import { useParams } from "react-router-dom"

const SiteDetailsScreen = () => {
  const { siteId } = useParams()
  console.log(siteId)
  return (
    <>
      Details
    </>
  )
}
export default SiteDetailsScreen