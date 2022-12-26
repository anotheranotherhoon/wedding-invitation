import styled from "styled-components";


interface MyComponentProps {
  children : React.ReactNode
}

const CardLayout = ({children} : MyComponentProps) => {
  return(
    <StyledLayout>
    {children}
  </StyledLayout>
  )
}

export const StyledLayout = styled.div`
    max-width: 400px;
    width:100%;
    height:100%;
`

export default CardLayout