import Image from "next/image"
import styled from "styled-components"
import CardLayout from "./CardLayout"

const WelcomePage = () => {
  return(
    <CardLayout>
      <AutoHeightImageWrapper>
      <Image src={'http://m.bomtvcard.com/data/1662021003952/crop_PP_221027_212528_674815002JXhTx.jpg'} priority={true}  layout='fill' className="autoImage" alt={'메인'} />
      </AutoHeightImageWrapper>
    </CardLayout>
  )
}

const AutoHeightImageWrapper = styled.section`
  width:100%;
  position: relative;
  & > span {
    position : unset !important;
    & .autoImage {
      object-fit: contain !important;
      position : relative !important;
      height: auto !important
    }
  }
`

export default WelcomePage