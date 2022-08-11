
import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"

const SitesListScreen = () => {
  const [sites, setSites] = useState([])
  const { sites } = useSelector((state) => state.sitesList)

  useEffect(() => {

  }, [])
  return (
    <div>
      <h1>
        sites list
      </h1>
    </div>
  )
}
export default SitesListScreen
