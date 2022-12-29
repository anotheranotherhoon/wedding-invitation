import styled from "styled-components"

export const InfoWrapper = styled.div`
  margin: 0 10px;
`
export const ContentBox = styled.div`
  display:flex;
`
export const LeftBox = styled.div`
  width:25%;
  font-weight: bold;
  padding: 6px 0;
  line-height: 22px;
`
export const RightBox = styled.div`
  width:75%;
  padding: 6px 0;
  line-height: 27px;
  div{
    padding: 6px 0;
  }
`

export const AccountBox = styled.section`
  display:flex;
  justify-content:space-around;
  margin : 30px 0;
  .side{
    margin-bottom: 20px;
  }
  .role{
    font-size: 13px;
  }
`

export const BoxWrapper = styled.section`
  display : flex;
  flex-direction: column;
  margin : 16px 0;
  font-size: 13px;
`

export const ParentBox = styled.div`
    text-align:center;
    border-radius:9px;
    padding : 6px;
    font-weight: 700;
    cursor : pointer;
`

export const NumberBox = styled(ParentBox)`
  color : var(--color-white);
  background-color : #463b3c;
  margin-bottom: 6px;
`
export const KakaoBox = styled(ParentBox)`
  background-color : #FEF01B;
  color : #504949;
  a{
    text-decoration: none;
    color : #504949;
  }
`

export const GroomSection = styled.section`
  width: 92px;
`
export const BridSection = styled.section`
  width: 92px;
`