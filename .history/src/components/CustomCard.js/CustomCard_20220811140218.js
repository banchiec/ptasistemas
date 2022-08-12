import { Link } from "react-router-dom"
import { ContainerCard } from "./styles/customCardStyled"

const CustomCard = (site) => {
  console.log(site.site)
  return (
    <ContainerCard>
      <div>
        <h2>{site.site.name}</h2>
        <article>
          <Link to={`/site/${site.site._id}`}>
            <a href={site.site.publicPath} >
              <p>{site.site.description}</p>
            </a>
            <span>{`sitio: ${site.site.site}`}</span>
          </Link>
        </article>
      </div>
    </ContainerCard>
  )
}
export default CustomCard