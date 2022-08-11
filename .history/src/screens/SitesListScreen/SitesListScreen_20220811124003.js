import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import CustomCard from "../../components/CustomCard.js/CustomCard"
import { getSites } from "../../redux/actions/sitesActions"
import { ContainerSitesList } from "./styles/sitesListScreenStyled"

const SitesListScreen = () => {
  const dispatch = useDispatch()

  const [currentSites, setCurrentSites] = useState([])
  const { sites } = useSelector((state) => state.sitesList)

  useEffect(() => {
    dispatch(getSites())
  }, [dispatch])
  useEffect(() => {
    if (sites) {
      setCurrentSites(sites)
    }
  }, [sites])

  return (
    <ContainerSitesList>
      {currentSites?.map((site) => {
        return (
          <div key={site.key}>
            <CustomCard site={site} />
          </div>
        )
      })}
    </ContainerSitesList>
  )
}
export default SitesListScreen
