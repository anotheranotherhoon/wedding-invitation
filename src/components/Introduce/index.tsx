import styled from "styled-components"
import CardLayout from "../CardLayout"
import Image from "next/image"
import { isoToTimeStamp } from "../../../utils/convertDate"
import type { IInfoProps } from "../../../types/interface"

const Introduce = ({ date, time, place, hall_name, thumbNail }: IInfoProps) => {
  return (
    <CardLayout>
      <AutoHeightImageWrapper>
        <Image src={thumbNail} priority={true} width={400} height={525} className="autoImage" alt={'thumbNail'}  placeholder="blur"  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==" />
      </AutoHeightImageWrapper>
      <InfoWrapper>
        <StyledSection>
          <LeftSentence>
            <div>{isoToTimeStamp(date)}</div>
            <div>{time}</div>
            <div>{place}</div>
            <div>{hall_name}</div>
          </LeftSentence>
          <RightBox>
            <div id='head'>우리, 결혼해요</div>
            <div>어제의 너와 내가</div>
            <div>오늘의 우리가 되어</div>
            <div>서로 닮아가고 있는</div>
            <div>현기와 향정, 결혼합니다.</div>
            <br />
            <div>서로의 사랑을 약속하는 자리에</div>
            <div>소중한 여러분들을</div>
            <div>모시고 싶습니다.</div>
          </RightBox>
        </StyledSection>
      </InfoWrapper>

    </CardLayout>
  )
}

const InfoWrapper = styled.div`
  margin: 0 10px;
`

const StyledSection = styled.section`
  display: flex;
`

const LeftSentence = styled.section`
  font-weight: bolder;
  width:30%;
  padding: 6px 0;
  line-height: 22px;
  div{
    padding: 6px 0;
  }
`
const RightBox = styled.section`
    width:70%;
    padding: 6px 0;
    line-height: 27px;
    div{
    padding: 6px 0;
    font-weight: 500;
  }
  #head{
    font-size: 20px;
    font-weight: bolder;
  }
`

const AutoHeightImageWrapper = styled.section`
`


export default Introduce