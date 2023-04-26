import React, {FC} from 'react';
import TaxiTariffCard from "@/components/ui/taxi/taxi-tariff-card";
import cn from "classnames";

const TaxiTariffs:FC<{ className?: string }> = ({className}) => {
  return (
    <div className={cn('py-4', className)}>
      <h1 className='text-2xl leading-5 mb-2 font-medium'>Tariffs</h1>
      <div className='grid gap-x-2 grid-cols-3'>
        <TaxiTariffCard name='Start' image='/taxi_clasess/tesla_3.png'/>
        <TaxiTariffCard name='Comfort' image='/taxi_clasess/tesla_s.png'/>
        <TaxiTariffCard name='Business' image='/taxi_clasess/tesla_x.png'/>
      </div>
    </div>
  );
};

export default TaxiTariffs
;