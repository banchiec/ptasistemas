import { ContainerCard } from "./styles/customCardStyled"

const CustomCard = (site) => {
  return (
    <ContainerCard>
      <h2>{site.site.name}</h2>
      <p>{site.site.description}</p>
      <span>{`sitio: ${site.site.site}`}</span>
    </ContainerCard>
  )
}
export default CustomCard