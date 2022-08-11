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
        console.log(site.id)
        return (
          <div key={site?.id}>
            <CustomCard site={site} />
          </div>
        )
      })}
    </ContainerSitesList>
  )
}
export default SitesListScreen
