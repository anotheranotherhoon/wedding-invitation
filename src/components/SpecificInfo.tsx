import { Calendar } from "react-calendar";
import styled from "styled-components"
import { useModalMap } from "../hook/useModalMap";
import CardLayout from "./CardLayout"
import MapModal from './MapModal'
import moment from "moment";
import 'react-calendar/dist/Calendar.css'
import { useEffect, useState } from "react";
import { isoToTimeStamp } from "../../utils/convertDate";
interface IProps {
  date: string;
  time : string;
  address: string;
  bus: string;
  subway: string;
  parking: string;
  place: string;
  hall_name: string;
  brid_name : string;
  groom_name : string;
}

const SpecificInfo = ({ date, time, address, bus, subway, parking, place, hall_name, brid_name, groom_name }: IProps) => {
  const [hydrated, setHydrated] = useState<boolean>(false)
  const Ddate = new Date(date)
  const { isMapModalOpen, showMapModal, closeMapModal } = useModalMap()
  const DATE = isoToTimeStamp(date)
  useEffect(()=>{
    setHydrated(true)
  },[])
  if(!hydrated){
    return null
  }
  return (
    <CardLayout>
      <InfoWrapper>
        <InfoBox>Information</InfoBox>
        <ContentBox>
          <LeftBox>일시</LeftBox>
          <RightBox>
            <CalendarContainer>
              <Calendar value={Ddate}
                calendarType="US"
                formatDay={(locale, date) => date.toLocaleString('en', { day: 'numeric' })}
                nextLabel={null}
                prevLabel={null}
                next2Label={null}
                prev2Label={null}
                showFixedNumberOfWeeks={true}
              />
            </CalendarContainer>
            <>
            <div>{DATE} {time}</div>
            <div>{groom_name.slice(1)}♥{brid_name.slice(1)} 결혼식이 {moment(date).diff(moment(), 'days')}일 남았습니다.</div>
            </>
          </RightBox>
        </ContentBox>
        <ContentBox>
          <LeftBox>오시는 길</LeftBox>
          <RightBox>
            <div>{place}</div>
            <div>{hall_name}</div>
            <div>{address}</div>
            <div className="modal" onClick={showMapModal}>오시는 길</div>
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
      </InfoWrapper>
      {isMapModalOpen && <MapModal closeMapModal={closeMapModal} />}
    </CardLayout>
  )
}

const InfoWrapper = styled.div`
  margin: 0 10px;
`

const InfoBox = styled.div`
  padding-bottom: 6px;
  border-bottom: 1px solid black;
`
const ContentBox = styled.div`
  display:flex;
`
const LeftBox = styled.div`
  width:30%;
  font-weight: bold;
  padding: 6px 0;
  line-height: 22px;
`
const RightBox = styled.div`
  width:70%;
  padding: 6px 0;
  line-height: 27px;
  div{
    padding: 6px 0;
  }
  .modal{
    width:100%;
    color : var(--color-white);
    background-color:#524344;
    border-radius: 9px;
    padding: 6px;
    text-align:center;
    cursor: pointer;
  }
`
export const CalendarContainer = styled.div`
  background-color: var(--color-white);
  border-radius: 10px;
  .react-calendar{
    border: 1px solid  var(--color-white);
  }
  .react-calendar__navigation__label > span {
    font-size:  15px;
    font-weight: bold;
  }
  .react-calendar__month-view__weekdays {
    abbr {
      font-size:  15px;
      font-weight: bold;
      text-decoration: none;
    }
  }
  .react-calendar__tile {
    font-weight: bold;
    text-align: center;
    border-radius: 1rem;
    
  }
  .react-calendar__tile--active {
    color: #fff;
    background-color: var(--color-coral);
  }
`

export default SpecificInfo