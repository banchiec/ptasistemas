
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ContainerCard } from "../../components/CustomCard.js/styles/customCardStyled"
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
            <>
              <ContainerCard name={site.name} />
            </>
          )
        })
      }
      sites list
    </div>
  )
}
export default SitesListScreen
