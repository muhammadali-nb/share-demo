import React, {FC} from 'react';
import InputPlaces from "@/components/ui/input-places";
import { useMapStore} from "@/store/map-store";
import {TypeFrom} from "@/store/types";



const TaxiToInput: FC = ({}) => {
  const setTo = useMapStore(state => state.setTo)

  const handleInput = ({address, location}:TypeFrom) => {
    setTo({address, location})
  }

  return (
    <InputPlaces
      placeholder='To'
      className='mt-3'
      cbSuccess={handleInput}
    />
  );
};

export default TaxiToInput;