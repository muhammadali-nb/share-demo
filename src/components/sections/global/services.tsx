import React from 'react';
import Container from "@/components/ui/container";
import ServiceTypeCard from "@/components/ui/service-type-card";


const Services = () => {
  return (
    <div className='pt-12 pb-4 '>
      <Container>
        <div className='overflow-x-auto pb-3'>
          <div className='w-600 grid grid-cols-3 gap-x-2.5'>
            <ServiceTypeCard
              title='Go to ride'
              image='/tesla.png'
              link='/taxi'
            />
            <ServiceTypeCard
              title='Order food'
              image='/food.png'
              link='/food'
            />
            <ServiceTypeCard
              title='Sharing'
              image='/bicycle.png'
              link='/sharing'
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;