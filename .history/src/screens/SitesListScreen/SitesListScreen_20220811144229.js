import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import CustomCard from "../../components/CustomCard.js/CustomCard"
import { getSites } from "../../redux/actions/sitesActions"
import { ContainerSitesList } from "./styles/sitesListScreenStyled"

const SitesListScreen = () => {
  const dispatch = useDispatch()
  const history = useHistory()

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
  const handleDetails = (id) => {
    history.push(`/sites/${id}`)

  }

  return (
    <ContainerSitesList>
      {currentSites?.map((site) => {
        return (
          <div onClick={() => handleDetails(sites._id)}>
            <CustomCard key={site._id} site={site} />
          </div>
        )
      })}
    </ContainerSitesList>
  )
}
export default SitesListScreen
