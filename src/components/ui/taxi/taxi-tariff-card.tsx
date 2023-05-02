import React, {FC} from 'react';
import Image from "next/image";

interface ITaxiTariffCard {
  image: string
  id?: number
  name: string
}

const TaxiTariffCard: FC<ITaxiTariffCard> = ({name, image}) => {
  return (
    <div className='flex flex-col items-center py-3 px-2 bg-zinc-100 rounded-xl'>
      <div className='h-7 w-20 rounded overflow-hidden'>
        <Image src={image} className='h-full w-full' alt={name} height={40} width={150}/>
      </div>
      <p className='font-medium mt-1'>
        {name}
      </p>
    </div>
  );
};

export default TaxiTariffCard;