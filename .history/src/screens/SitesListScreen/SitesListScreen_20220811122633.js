
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
    <ContainerSitesList>
      {
        sites?.map((site) => {
          return (
            <div>
              <CustomCard key={site.key} site={site} />
            </div>
          )
        })
      }
      sites list
    </ContainerSitesList>
  )
}
export default SitesListScreen
