import { ContainerCard } from "./styles/customCardStyled"

const CustomCard = (site) => {
  return (
    <ContainerCard>
      <h2>{site.site.name}</h2>
      <a href={site.site.publicPath} >
        <p>{site.site.description}</p>
      </a>
      <span>{`sitio:${site.site.site}`}</span>
    </ContainerCard>
  )
}
export default CustomCard