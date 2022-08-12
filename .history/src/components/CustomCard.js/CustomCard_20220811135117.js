import { ContainerCard } from "./styles/customCardStyled"

const CustomCard = (site) => {
  return (
    <ContainerCard>
      <div>
        <h2>{site.site.name}</h2>
        <article>
          <a href={site.site.publicPath} >
            <p>{site.site.description}</p>
          </a>
          <span>{`sitio: ${site.site.site}`}</span>
        </article>
      </div>
    </ContainerCard>
  )
}
export default CustomCard