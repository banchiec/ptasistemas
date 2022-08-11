import { ContainerCard } from "./styles/customCardStyled"

const CustomCard = (site) => {
  console.log(site)
  return (
    <ContainerCard>
      <h2>{site.site.name}</h2>
      <article>
        <p>{site.site.description}</p>
      </article>
    </ContainerCard>
  )
}
export default CustomCard