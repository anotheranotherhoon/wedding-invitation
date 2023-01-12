import { useRef } from 'react';
import styled from 'styled-components'
import KakaoMap from '../Map/KakaoMap';
import type { IMapModalProps } from '../../../types/interface';

const MapModal = ({closeMapModal, lat, lng, place} : IMapModalProps) => {
  const modalRef = useRef(null)
  const cllickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      closeMapModal()
    }
  }
  return(
    <Container>
    <Background ref={modalRef} onClick={cllickBackground} />
    <ModalBox>
      <div>
        <Title>오시는 길</Title>
        <MapSection>
          <div><a href='https://m.place.naver.com/place/13103771/location?subtab=location'>네이버 지도 바로가기</a></div>
          <div><a href='https://m.map.kakao.com/actions/searchView?q=%EC%88%98%EC%9B%90%ED%8C%8C%ED%8B%B0%EC%9B%A8%EB%94%A9%EC%9C%A0&wxEnc=LVSOTP&wyEnc=QNLTTMN&lvl=4'>카카오 지도 바로가기</a></div>
        </MapSection>
      <KakaoMap lat={lat} lng={lng} place={place}/>
      </div>
    </ModalBox>
  </Container>
  )
}

const Container = styled.div`
    font-size: 2rem;
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

const Title = styled.div`
  border-bottom :  2px dashed black;
  margin-bottom: 10px;
  padding:0 0 10px 0;
`

const MapSection = styled.section`
  display:flex;
  margin-top: 5px;
  div{
    width:100%;
    text-align:center;
  }
  a{
    text-decoration:none;
    color: var(--color-black);
  }
`

const ModalBox = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-white);
  border-radius: 5px;
  padding: 20px;
  font-size: 15px;
`



export default MapModal