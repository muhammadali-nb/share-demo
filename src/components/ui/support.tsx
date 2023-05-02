import React from 'react';
import Image from "next/image";

const Support = () => {
  return (
    <div className='flex justify-between items-center px-5 py-6 bg-zinc-100 rounded-xl'>
      <div className='flex items-center'>
        <Image src='/icons/support.svg' alt='Support' width={36} height={36}/>
        <h3 className='text-2xl font-medium ml-2'>Support</h3>
      </div>
      <div className='flex items-center'>
        <Image src='/icons/phone.svg' alt='Phone' width={18} height={18}/>
        <p className=' text-xl ml-1'>1297</p>
      </div>
    </div>
  );
};

export default Support;