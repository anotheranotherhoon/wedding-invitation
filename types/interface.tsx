import { ObjectId } from "mongodb"

export interface IData {
  weddingData : WeddingData;
}

interface WeddingData{
  seo : ISeo;
  client: IClient;
  brid: object;
  weddingDate: string;
  time: string;
  place: string;
  lat : number;
  lng : number;
  hall_name: string;
  address: string;
  subway: string
  bus: string;
  parkingLot: string;
  parents_info: IParensInfo;
  img: IImg[];
}

export interface GuestBookData {
  _id : ObjectId;
  name : string;
  message : string
}

export interface GuestBookDataProps {
  guestBookData : GuestBookData[]
}

interface ISeo {
  title : string;
  description : string;
  url : string;
}
interface IParensInfo {
  groom_parents: IParents;
  brid_parents: IParents;
}

interface IClient {
  groom: IClientInfo;
  brid: IClientInfo;
}

interface IPersonInfo {
  name: string;
  phoneNumber: string;
  bank: string;
  accountNumber: string
}

interface IClientInfo extends IPersonInfo {
  rank: string;
  kakaoPay : string;
}

interface IParents {
  dad: IPersonInfo;
  mom: IPersonInfo
}

export interface IImg {
  id: number;
  url: string;
}

export interface ICarouselProps {
  img : IImg[]
}

export interface IInfoProps {
  date: string,
  time: string,
  place: string,
  hall_name: string
  thumbNail : string
}

export interface IInvitationMessageProps {
  brid_dad : string;
  brid_mom : string;
  groom_dad : string;
  groom_mom : string;
  brid_name : string;
  brid_rank : string;
  groom_name : string;
  groom_rank : string;
  img : string;
}

export interface IMapModalProps {
  closeMapModal : () => void
  lat : number;
  lng : number;
  place : string
}

export interface ISNS {
  title: string;
  description : string;
  img : string
}

export interface ISpecificInfo {
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
  lat : number;
  lng : number
}

export interface IKakaoMap {
  lat : number;
  lng : number;
  place : string;
}

export interface GuestBookInput{
  name : string;
  message : string
}