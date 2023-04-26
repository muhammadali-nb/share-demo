import React, {FC, useEffect} from 'react';
import {useMapStore} from "@/store/map-store";
import {format} from "@/utils/fomat";

const TaxiTripPrice: FC = () => {
  const cancelTrip = useMapStore(state => state.cancelTrip)
  const trip = useMapStore(state => state.tripData)

  const taxiCost = () => {
    const ratePerKm = 2.500;  // Стоимость за 1 км
    if (!trip?.distance) {
      return 'After trip, the driver will say'
    } else {
      const cost = ratePerKm * trip.distance.value;
      return (format(cost) + ' uzs');
    }
  }

  return (
    <div className='flex justify-between items-center rounded pt-2 pb-4'>
      <div className='flex'>
        <p className='font-medium'>Price:<span> {taxiCost()}</span></p>
      </div>
      <button className='bg-red-400 text-white px-3 py-1 text-sm rounded font-medium' onClick={cancelTrip}>
        Cancel
      </button>
    </div>
  );
};

export default TaxiTripPrice;