import { ContainerCard } from "./styles/customCardStyled"

const CustomCard = (site) => {
  console.log(site.site)
  return (
    <ContainerCard>
      <article>
        <p></p>
      </article>
      <h2>{site.site.name}</h2>
    </ContainerCard>
  )
}
export default CustomCard