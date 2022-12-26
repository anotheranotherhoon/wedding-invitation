import styled from "styled-components"
import CardLayout from "./CardLayout"

interface IProps {
  address : string;
  bus : string;
  subway : string;
  parking : string;
  place : string;
  hall_name : string
}

const SpecificInfo = ({address, bus, subway, parking, place, hall_name} : IProps) => {
  return(
    <CardLayout>
      <InfoBox>Information</InfoBox>
      <div>
        <ContentBox>
          <LeftBox>일시</LeftBox>
          <RightBox>컨텐츠</RightBox>
        </ContentBox>
        <ContentBox>
          <LeftBox>오시는 길</LeftBox>
          <RightBox>
            <div>{place}</div>
            <div>{hall_name}</div>
            <div>{address}</div>
          </RightBox>
        </ContentBox>
        <ContentBox>
          <LeftBox>지하철</LeftBox>
          <RightBox>{subway}</RightBox>
        </ContentBox>
        <ContentBox>
          <LeftBox>셔틀버스</LeftBox>
          <RightBox>{bus}</RightBox>
        </ContentBox>
        <ContentBox>
          <LeftBox>주차 안내</LeftBox>
          <RightBox>{parking}</RightBox>
        </ContentBox>
      </div>
    </CardLayout>
  )
}

const InfoBox = styled.div`
  border-bottom: 1px solid black;
`
const ContentBox = styled.div`
  display:flex;
`
const LeftBox = styled.div`
  width:25%;
  font-weight: bold;
`
const RightBox = styled.div`
  width:75%;
`

export default SpecificInfo