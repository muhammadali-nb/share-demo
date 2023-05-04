import React from "react";
import Container from "@/components/ui/container";
import TaxiAddressForm from "@/components/sections/taxi/taxi-address-form";
import TaxiTariffs from "@/components/sections/taxi/taxi-tariffs";
import Button from "@/components/ui/button";
import cn from "classnames";
import TaxiTripPrice from "@/components/sections/taxi/taxi-trip-price";
import { useMapStore } from "@/store/map-store";
import Image from "next/image";

const TaxiOrderSidebar = () => {
  const process = useMapStore((state) => state.process);
  const setProcess = useMapStore((state) => state.setProcess);

  const toggleSidebar = () => {
    if (process === "order") setProcess("check-route");
    else setProcess("order");
  };

  return (
    <div
      className={cn(
        "w-full h-44 bg-white bg-transparent fixed bottom-0 left-0 z-10 transition-all duration-700 ",
        { "h-96": process === "order" },
        { "h-5": process === "check-route" },
        { "h-0": process === "cancel" }
      )}>
      <div
        className={cn(
          "absolute inset-x-[45%] -top-7 h-10 w-10 rounded-full bg-blue-400 py-2 px-2 transition-all duration-500",
          { hidden: process === "start" || process === "cancel" },
          { block: process === "order" },
          { "rotate-180": process === "check-route" }
        )}
        onClick={toggleSidebar}>
        <Image
          src="/icons/chevron-down.svg"
          width={28}
          height={28}
          alt="check-card"
        />
      </div>
      <Container>
        <TaxiAddressForm />
        <TaxiTariffs />
        <TaxiTripPrice />
        <Button className="m-auto mt-3" theme="secondary" size="md">
          Order
        </Button>
      </Container>
    </div>
  );
};

export default TaxiOrderSidebar;
