export interface IData {
  client : IClient;
  brid : object;
  weddingDate : string;
  time : string;
  place : string;
  hall_name : string;
  address : string;
  subway : string
  bus:string;
  parkingLot : string;
  parents_info : IParensInfo;
  img : IImg[];
}

interface IParensInfo {
  groom_parents :IParents;
  brid_parents : IParents;
}

interface IClient {
  groom : IClientInfo;
  brid : IClientInfo;
}

interface IPersonInfo {
  name : string;
  phoneNumber : string;
  bank : string;
  accountNumber : string
}

interface IClientInfo extends  IPersonInfo{
  rank : string
}

interface IParents  {
  dad : IPersonInfo;
  mom : IPersonInfo
}

export interface IImg {
  id:string;
  url : string;
}