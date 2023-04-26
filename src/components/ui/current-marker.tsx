import React, {FC} from 'react';
import {Marker} from "@react-google-maps/api";

interface IMarker {
  position: {
    lat: number,
    lng: number
  }
}

const CurrentMarker: FC<IMarker> = ({position}) => {
  return (

    <Marker position={{
      lat: 41.311081,
      lng: 69.240562
    }}
            icon='main-marker.svg'
    />
  )
};

export default CurrentMarker;