import Image from "next/image"
import styled from "styled-components"
import CardLayout from "../CardLayout"
import type { IInvitationMessageProps } from "../../../types/interface"

const InvitationMessage = ({brid_dad, brid_mom, groom_dad, groom_mom, brid_name, groom_name, brid_rank, groom_rank, img} : IInvitationMessageProps) => {
  return(
    <CardLayout>
      <AutoHeightImageWrapper>
      <Image src={img} width={400} height={525} className="autoImage" alt={'흑백'} priority={true} />
      </AutoHeightImageWrapper>
      <StyledSection>
      <div>어색했던 첫 만남을 또렷이 기억합니다.</div>
      <div>웃는 모습이 유난히 사랑스러웠던 향정이</div>
      <div>그 모습을 유난히도 좋아했던 현기</div>
      <br/>
      <div>이제는 언제나 함께 웃을 수 있는</div>
      <div>하나가 되려 합니다.</div>
      <br/>
      <div>그 시작이 소중한 분들과 함께라면</div>
      <div>저희에게 더없는 기쁨과 추억이 될 것입니다.</div>
      <br/>
      <div>귀한 걸음 하시어</div>
      <div>축복과 격려 주시면 감사하겠습니다.</div>
      <br/>
      <div><BoldSpan>{groom_dad}</BoldSpan> · <BoldSpan>{groom_mom}</BoldSpan>의 {groom_rank} {groom_name}</div>
      <div><BoldSpan>{brid_dad}</BoldSpan> · <BoldSpan>{brid_mom}</BoldSpan>의 {brid_rank } {brid_name} </div>
      </StyledSection>
    </CardLayout>
  )
}

const AutoHeightImageWrapper = styled.section`

`
const StyledSection = styled.section`
  margin : 10px 0;
  text-align:center;
  div{
    padding: 6px 0;
  }
`
const BoldSpan = styled.span`
  font-weight: bolder;
`

export default InvitationMessage