import styled from 'styled-components'

interface IChildren {
  children : React.ReactNode
}

const Layout = ({children} : IChildren) => {
  return(
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        `

export default Layout