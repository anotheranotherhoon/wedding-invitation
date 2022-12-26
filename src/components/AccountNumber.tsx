import styled from "styled-components"
import { useState } from "react";
import CardLayout from "./CardLayout"
import Image from "next/image"
import { useModal } from "../hook/useModal";
import Modal from './Modal'

interface IAccountNumberProps {
  brid_dad : string;
  brid_dad_bank : string;
  brid_dad_accountNumber :  string;
  brid_mom : string;
  brid_mom_bank : string;
  brid_mom_accountNumber : string;
  groom_dad : string;
  groom_dad_bank : string;
  groom_dad_accountNumber : string;
  groom_mom : string;
  groom_mom_bank : string;
  groom_mom_accountNumber : string;
  brid_name : string;
  brid_bank : string;
  brid_accountNumber : string;
  groom_name : string;
  groom_bank : string;
  groom_accountNumber : string;
}

const AccountNumber = ({brid_dad, brid_dad_bank, brid_dad_accountNumber, brid_mom,brid_mom_bank,brid_mom_accountNumber, groom_dad,groom_dad_bank,groom_dad_accountNumber,groom_mom,groom_mom_bank, groom_mom_accountNumber, brid_name,brid_bank,brid_accountNumber, groom_name, groom_bank, groom_accountNumber} : IAccountNumberProps) => {
  const { isModalOpen, bankState, accountNumberState, nameState, showModal, closeModal} = useModal()
  return(
    <CardLayout>
            <AutoHeightImageWrapper>
      <Image src={'http://m.bomtvcard.com/data/1662021003952/crop_A_221027_215051_32353300JEVMGn.jpg'} layout='fill' className="autoImage" alt={'흑백'} />
      </AutoHeightImageWrapper>
      <div>
        <ContentBox>
          <LeftBox>마음<br/>전하실 곳</LeftBox>
          <RightBox>
            <div>비대면으로 축하해 주실 분들을 위해</div>
            <div>계좌번호를 남깁니다.</div>
            <br/>
            <div>축하해 주셔서</div>
            <div>진심으로 감사드립니다.</div>
          </RightBox>
        </ContentBox>
        <AccountBox>
          <div>
          <div>
            <div>신랑 {groom_name}</div>
            <BoxWrapper>
            <NumberBox onClick={()=>showModal(groom_bank, groom_accountNumber, groom_name)}>계좌번호</NumberBox>
            <KakaoBox><a href="https://qr.kakaopay.com/281006011152811201008007">카카오페이</a></KakaoBox>
            </BoxWrapper>
            </div>
          <div>신랑측 혼주</div>
          <div>
            <div>아버지 {groom_dad}</div>
            <BoxWrapper>
            <NumberBox onClick={()=>showModal(groom_dad_bank, groom_dad_accountNumber, groom_dad)}>계좌번호</NumberBox>
            </BoxWrapper>
            </div>
          <div>
            <div>어머니 {groom_mom }</div>
            <BoxWrapper>
            <NumberBox onClick={()=>showModal(groom_mom_bank, groom_mom_accountNumber, groom_mom)}>계좌번호</NumberBox>
            </BoxWrapper>
            </div>
          </div>
          <div>
          <div>
            <div>신부 {brid_name}</div>
            <BoxWrapper>
            <NumberBox onClick={()=>showModal(brid_bank, brid_accountNumber, brid_name)}>계좌번호</NumberBox>
            <KakaoBox><a href="https://qr.kakaopay.com/281006011152811201008007">카카오페이</a></KakaoBox>
            </BoxWrapper>
            </div>
          <div>신부측 혼주</div>
          <div>
            <div>아버지 {brid_dad}</div>
            <BoxWrapper>
            <NumberBox onClick={()=>showModal(brid_dad_bank, brid_dad_accountNumber, brid_dad)}>계좌번호</NumberBox>
            </BoxWrapper>
            </div>
          <div>
            <div>어머니{brid_mom}</div>
            <BoxWrapper>
            <NumberBox onClick={()=>showModal(brid_mom_bank, brid_mom_accountNumber, brid_mom)}>계좌번호</NumberBox>
            </BoxWrapper>
            </div>
          </div>
        </AccountBox>
      </div>
      {isModalOpen && <Modal bankState={bankState}  accountNumberState={accountNumberState} nameState={nameState}  closeModal={closeModal}/>}
    </CardLayout>
  )
}

const AutoHeightImageWrapper = styled.section`
  width:100%;
  & > span {
    position : unset !important;
    & .autoImage {
      object-fit: contain !important;
      position : relative !important;
      height: auto !important
    }
  }
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

const AccountBox = styled.section`
  display:flex;
  justify-content:center;
`

const BoxWrapper = styled.section`
  display : flex;
  flex-direction: column;
  margin : 16px 0;
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

`
const KakaoBox = styled(ParentBox)`
  background-color : #FEF01B;
  color : #504949;
  a{
    text-decoration: none;
  }
`

export default AccountNumber