import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const SiteDetailsScreen = () => {
  const { siteId } = useParams()
  const { site } = useSelector((state) => state.siteDetails)
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