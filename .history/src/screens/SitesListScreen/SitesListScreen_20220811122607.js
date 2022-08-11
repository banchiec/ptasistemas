
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import CustomCard from "../../components/CustomCard.js/CustomCard"
import { ContainerCard } from "../../components/CustomCard.js/styles/customCardStyled"
import { getSites } from "../../redux/actions/sitesActions"
import { ContainerSitesList } from "./styles/sitesListScreenStyled"

const SitesListScreen = () => {
  const [currentSites, setCurrentSites] = useState([])
  const { sites } = useSelector((state) => state.sitesList)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSites())
  }, [])
  return (
    <div>
      {
        sites?.map((site) => {
          return (
            <ContainerSitesList>
              <CustomCard key={site.key} site={site} />
            </ContainerSitesList>
          )
        })
      }
      sites list
    </div>
  )
}
export default SitesListScreen
