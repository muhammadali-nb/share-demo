import React, {FC, PropsWithChildren} from 'react';
import Container from "@/components/ui/container";

const MainLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div>
      <Container>
        <div className='pt-8 pb-2'>
          <h1 className='text-4xl font-medium text-center first-letter:text-blue-400 first-letter:text-5xl'>YOTA</h1>
          <h3 className='text-xl text-center '>service</h3>
        </div>
        {children}
      </Container>
    </div>
  );
};

export default MainLayout;