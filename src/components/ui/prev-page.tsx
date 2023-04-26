import React, {FC} from 'react';
import Image from "next/image";
import Link from "next/link";

const PrevPage :FC<{link: string, className?: string}> = ({link, className}) => {
  return (
   <Link href={link} className={className}>
     <div className='flex w-24 py-1 px-3 bg-white rounded'>
       <Image src='/icons/back.svg' alt='prev page' width={20} height={20}/>
       <p className='ml-2'>Back</p>
     </div>
   </Link>
  );
};

export default PrevPage;