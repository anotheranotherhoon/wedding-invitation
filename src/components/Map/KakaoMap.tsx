import React, { useEffect, useState } from "react"
import { MapMarker, Map, CustomOverlayMap } from "react-kakao-maps-sdk";
import styled from "styled-components";
import CardLayout from "../CardLayout";
import type { IKakaoMap } from "../../../types/interface";


const KakaoMap = ({ lat, lng, place }: IKakaoMap) => {
  return (
    <CardLayout>
            <Map
        center={{ lat: lat, lng: lng }}
        style={{ width: "350px", height: "150px", margin: "20px 0 0 0", textAlign:"center"}}
      >
        <MapMarker
            position={{ lat: lat, lng: lng }}
        >
            <div style={{ color: "#000", margin:"2.5px 0 0 25px" }}>{place}</div>
        </MapMarker>
      </Map>
    </CardLayout>
  )
}



export default KakaoMap