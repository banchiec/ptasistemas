
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import CustomCard from "../../components/CustomCard.js/CustomCard"
import { ContainerCard } from "../../components/CustomCard.js/styles/customCardStyled"
import { getSites } from "../../redux/actions/sitesActions"

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
            <>
              <CustomCard key={site.key} site />
            </>
          )
        })
      }
      sites list
    </div>
  )
}
export default SitesListScreen
