import styled from "styled-components"
export const ContainerCard = styled.div`
  display: flex;
  background-color: whitesmoke;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 2rem;
  margin: 10px 15px 10px 15px;
  border: 1px solid #f7b749;
  a{
    cursor: pointer;
    text-decoration: none;
  }
  @media only screen and (min-width: 768px){
    width: 150px;
  }
`
