import CardLayout from "../CardLayout"
import Image from "next/image"
import { useModal } from "../../hook/useModal";
import Modal from '../AccountNumberModal'
import {InfoWrapper, ContentBox,LeftBox,RightBox, AccountBox, BoxWrapper, GroomSection, NumberBox, KakaoBox, BridSection } from './style'
import {AutoHeightImageWrapper} from '../../../styles/ImageLayout'
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
  brid_name: string;
  brid_bank: string;
  brid_accountNumber: string;
  brid_kakaoPay : string;
  groom_name: string;
  groom_bank: string;
  groom_accountNumber: string;
  groom_kakaoPay : string 
  img:string
}

const AccountNumber = ({ brid_dad, brid_dad_bank, brid_dad_accountNumber, brid_mom, brid_mom_bank, brid_mom_accountNumber, groom_dad, groom_dad_bank, groom_dad_accountNumber, groom_mom, brid_name, brid_bank, brid_accountNumber,brid_kakaoPay, groom_name, groom_bank, groom_accountNumber,groom_kakaoPay, img }: IAccountNumberProps) => {
  const { isModalOpen, bankState, accountNumberState, nameState, showModal, closeModal } = useModal()
  return (
    <CardLayout>
      <AutoHeightImageWrapper>
        <Image src={img} width={400} height={525}   className="autoImage" alt={'흑백'} priority={true} placeholder="blur"  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==" />
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
                <KakaoBox><a href={groom_kakaoPay}>카카오페이</a></KakaoBox>
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
                <KakaoBox><a href={brid_kakaoPay}>카카오페이</a></KakaoBox>
              </BoxWrapper>
            </div>
            <div className="side role">신부측 혼주</div>
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



export default AccountNumber