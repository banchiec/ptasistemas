import styled from 'styled-components'

export const Header = styled.div`
`

export const ContainerSitesList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h2{
    padding: 10px 0px 10px 0px;
  }
  article{
    padding: 10px 0px 10px 0px;
    span{
      padding: 10px 0px 10px 0px;
    }
    a{
      cursor: pointer;
      text-decoration: none;
      color: black;
    }
  }
  @media only screen and (min-width: 768px){
    flex-wrap: wrap;
  }

`
