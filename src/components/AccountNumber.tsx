import styled from "styled-components"
import CardLayout from "./CardLayout"
import Image from "next/image"
import { useModal } from "../hook/useModal";
import Modal from './Modal'

interface IAccountNumberProps {
  brid_dad: string;
  brid_dad_bank: string;
  brid_dad_accountNumber: string;
  brid_mom: string;
  brid_mom_bank: string;
  brid_mom_accountNumber: string;
  groom_dad: string;
  groom_dad_bank: string;
  groom_dad_accountNumber: string;
  groom_mom: string;
  groom_mom_bank: string;
  groom_mom_accountNumber: string;
  brid_name: string;
  brid_bank: string;
  brid_accountNumber: string;
  groom_name: string;
  groom_bank: string;
  groom_accountNumber: string;
}

const AccountNumber = ({ brid_dad, brid_dad_bank, brid_dad_accountNumber, brid_mom, brid_mom_bank, brid_mom_accountNumber, groom_dad, groom_dad_bank, groom_dad_accountNumber, groom_mom, groom_mom_bank, groom_mom_accountNumber, brid_name, brid_bank, brid_accountNumber, groom_name, groom_bank, groom_accountNumber }: IAccountNumberProps) => {
  const { isModalOpen, bankState, accountNumberState, nameState, showModal, closeModal } = useModal()
  return (
    <CardLayout>
      <AutoHeightImageWrapper>
        <Image src={'http://m.bomtvcard.com/data/1662021003952/crop_A_221027_215051_32353300JEVMGn.jpg'} layout='fill' className="autoImage" alt={'흑백'} />
      </AutoHeightImageWrapper>
      <InfoWrapper>
        <ContentBox>
          <LeftBox>마음<br />전하실 곳</LeftBox>
          <RightBox>
            <div>비대면으로 축하해 주실 분들을 위해</div>
            <div>계좌번호를 남깁니다.</div>
            <div>축하해 주셔서</div>
            <div>진심으로 감사드립니다.</div>
          </RightBox>
        </ContentBox>
        <AccountBox>
          <GroomSection>
            <div>
              <span className="role">신랑 </span>
              <span>{groom_name}</span>
              <BoxWrapper>
                <NumberBox onClick={() => showModal(groom_bank, groom_accountNumber, groom_name)}>계좌번호</NumberBox>
                <KakaoBox><a href="https://qr.kakaopay.com/281006011152811201008007">카카오페이</a></KakaoBox>
              </BoxWrapper>
            </div>
            <div className="side role">신랑측 혼주</div>
            <div>
              <span>{groom_mom} </span>
              <span>{groom_dad}</span>
              <BoxWrapper>
                <NumberBox onClick={() => showModal(groom_dad_bank, groom_dad_accountNumber, groom_dad)}>계좌번호</NumberBox>
              </BoxWrapper>
            </div>
          </GroomSection>
          <BridSection>
            <div>
              <span className="side role">신부 </span>
              <span>{brid_name}</span>
              <BoxWrapper>
                <NumberBox onClick={() => showModal(brid_bank, brid_accountNumber, brid_name)}>계좌번호</NumberBox>
                <KakaoBox><a href="https://qr.kakaopay.com/281006011152811201008007">카카오페이</a></KakaoBox>
              </BoxWrapper>
            </div>
            <div className="side role">신랑측 혼주</div>
            <div>
              <span className="role">아버지 </span>
              <span>{brid_dad}</span>
              <BoxWrapper>
                <NumberBox onClick={() => showModal(brid_dad_bank, brid_dad_accountNumber, brid_dad)}>계좌번호</NumberBox>
              </BoxWrapper>
            </div>
            <div>
              <span className="role">어머니 </span>
              <span>{brid_mom}</span>
              <BoxWrapper>
                <NumberBox onClick={() => showModal(brid_mom_bank, brid_mom_accountNumber, brid_mom)}>계좌번호</NumberBox>
              </BoxWrapper>
            </div>
          </BridSection>
        </AccountBox>
      </InfoWrapper>

      {isModalOpen && <Modal bankState={bankState} accountNumberState={accountNumberState} nameState={nameState} closeModal={closeModal} />}
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

const InfoWrapper = styled.div`
  margin: 0 10px;
`
const ContentBox = styled.div`
  display:flex;
`
const LeftBox = styled.div`
  width:25%;
  font-weight: bold;
  padding: 6px 0;
  line-height: 22px;
`
const RightBox = styled.div`
  width:75%;
  padding: 6px 0;
  line-height: 27px;
  div{
    padding: 6px 0;
  }
`

const AccountBox = styled.section`
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

const BoxWrapper = styled.section`
  display : flex;
  flex-direction: column;
  margin : 16px 0;
  font-size: 13px;
`

const ParentBox = styled.div`
    text-align:center;
    border-radius:9px;
    padding : 6px;
    font-weight: 700;
    cursor : pointer;
`

const NumberBox = styled(ParentBox)`
  color : var(--color-white);
  background-color : #463b3c;
  margin-bottom: 6px;
`
const KakaoBox = styled(ParentBox)`
  background-color : #FEF01B;
  color : #504949;
  a{
    text-decoration: none;
    color : #504949;
  }
`

const GroomSection = styled.section`
  width: 92px;
`
const BridSection = styled.section`
  width: 92px;
`

export default AccountNumber