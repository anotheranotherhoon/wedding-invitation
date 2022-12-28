import { useRef, useState } from 'react';
import styled from 'styled-components'

interface IModalProps {
  bankState: string;
  accountNumberState: string;
  nameState: string;
  closeModal: () => void;
}
const Modal = ({ bankState, accountNumberState, nameState, closeModal }: IModalProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const [copyMessage, setCopyMessage] = useState<string>('ㅤ')
  const modalRef = useRef(null)
  const cllickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      closeModal()
    }
  }
  const copyAccountNumber = () => {
    setCopyMessage('복사가 완료되었습니다.')
    setIsCopied(true)
  }
  const doCopy = (text : string) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          copyAccountNumber()
        })
    }else {
      if (!document.queryCommandSupported("copy")) {
        return alert("복사하기가 지원되지 않는 브라우저입니다.");
      }
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      copyAccountNumber()
    }

  };

  return (
    <Container>
      <Background ref={modalRef} onClick={cllickBackground} />
      <ModalBox>
        <div>{bankState}</div>
        <div className='info'>{accountNumberState}</div>
        <div>예금주 : {nameState}</div>
        <div>{copyMessage}</div>
        <EventWrapper>
          <div className="copy" onClick={()=>doCopy(accountNumberState)}>복사하기</div>
          <div className="close"  onClick={closeModal}>닫기</div>
        </EventWrapper>
      </ModalBox>
    </Container>

  )
}
const Container = styled.div`
    font-size: 20px;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    background-color: rgba(0,0,0,.85);
    animation: modal-bg-show 0.5s;
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const ModalBox = styled.section`
  min-width : 200px;
  min-height: 100px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-white);
  border-radius: 5px;
  padding: 20px;
  .info{
    margin: 10px 0;
  }
`

const EventWrapper = styled.div`
  display : flex;
  text-align:center;
  width:100%;
  border-radius: 30px;
  font-size: 15px;
  .copy{
    background-color: #1B1C1D;
    color: white;
    width:100%;
    padding: 5%;
    cursor: pointer;
  }
  .close{
    width:100%;
    border :  1px solid #E9E9E9;

    padding: 5%;
    cursor: pointer;
    :hover{
      border :  1px solid #D9D9D9;
    }
  }
`

export default Modal