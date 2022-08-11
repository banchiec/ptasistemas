import { ContainerCard } from "./styles/customCardStyled"

const CustomCard = (site) => {
  return (
    <ContainerCard>
      {site?.name}
    </ContainerCard>
  )
}
export default CustomCard