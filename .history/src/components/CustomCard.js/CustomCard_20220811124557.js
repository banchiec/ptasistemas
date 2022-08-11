import { ContainerCard } from "./styles/customCardStyled"

const CustomCard = (site) => {
  return (
    <ContainerCard>
      <h1>

        {site?.name}
      </h1>
    </ContainerCard>
  )
}
export default CustomCard