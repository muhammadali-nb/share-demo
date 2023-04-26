import React, {FC, PropsWithChildren} from 'react';
import PrevPage from "@/components/ui/prev-page";
import TaxiOrderSidebar from "@/components/sections/taxi/taxi-order-sidebar";

const TaxiLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className='fixed bg-zinc-100 w-screen h-screen  '>
      <PrevPage link='/' className='fixed top-2 left-2 z-10'/>
      {children}
    </div>
  );
};

export default TaxiLayout;