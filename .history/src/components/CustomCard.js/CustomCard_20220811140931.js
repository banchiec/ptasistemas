import { Link } from "react-router-dom"
import { ContainerCard } from "./styles/customCardStyled"

const CustomCard = (site) => {
  return (
    <ContainerCard>
      <Link to={`/site/${site.site._id}`}>
        <h2>{site.site.name}</h2>
        <article>
          <a href={site.site.publicPath} >
            <p>{site.site.description}</p>
          </a>
          <span>{`sitio:${site.site.site}`}</span>
        </article>
      </Link>
    </ContainerCard>
  )
}
export default CustomCard