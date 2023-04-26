import React, {FC, PropsWithChildren} from 'react';

const Container: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className='m-auto px-2'>
      {children}
    </div>
  );
};

export default Container;