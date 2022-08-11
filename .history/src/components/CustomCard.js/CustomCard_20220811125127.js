import { ContainerCard } from "./styles/customCardStyled"

const CustomCard = (site) => {
  console.log(site.site)
  return (
    <ContainerCard>
      <h2>{site.site.name}</h2>
      <article>
        <p></p>
      </article>
    </ContainerCard>
  )
}
export default CustomCard