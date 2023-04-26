import React, {FC} from 'react';
import Image from "next/image";
import Link from "next/link";

export interface ITypeCard {
  id?: number
  image: string
  title: string
  link?: string
}

const ServiceTypeCard: FC<ITypeCard> = ({image, title, link}) => {
  return (
      <Link href={!link ? '' : link}>
        <div className='px-2 py-3 bg-zinc-100 flex justify-center items-center w-full rounded'>
          <div>
            <div className=' h-14'>
              <Image
                className='w-full h-full'
                src={image}
                width={100}
                height={50}
                alt={title}/>
            </div>
            <h3 className='text-xl mt-3.5'>{title}</h3>
          </div>
          <div className='ml-8'>
            <Image src='/icons/go.svg' width={42} height={42} alt='go over'/>
          </div>
        </div>
      </Link>
  );
};

export default ServiceTypeCard;