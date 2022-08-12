import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
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
          <Link key={site._id} to={`/sites/6274e62d51dd9c32d5143c0b`}>
            <CustomCard key={site._id} site={site} />
          </Link>
        )
      })}
    </ContainerSitesList>
  )
}
export default SitesListScreen
