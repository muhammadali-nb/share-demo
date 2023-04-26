import React, {FC} from 'react';
import InputPlaces from "@/components/ui/input-places";
import {useMapStore} from "@/store/map-store";
import {TypeFrom} from "@/store/types";

const TaxiFromInput: FC = () => {
  const setFrom = useMapStore(state => state.setFrom)

  const handleInput = ({address, location}: TypeFrom) => {
    setFrom({address, location})
  }

  return (
    <InputPlaces
      placeholder='From'
      type='from'
      cbSuccess={handleInput}
    />
  );
};

export default TaxiFromInput;