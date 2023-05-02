import React, { FC, FormEvent } from "react";
import Button from "@/components/ui/button";
import cn from "classnames";
import TaxiFromInput from "@/components/ui/taxi/taxi-from-input";
import TaxiToInput from "@/components/ui/taxi/taxi-to-input";
import { useMapStore } from "@/store/map-store";

interface ITaxiAddressForm {
  className?: string;
}

const TaxiAddressForm: FC<ITaxiAddressForm> = ({ className }) => {
  const setDirectionResult = useMapStore((state) => state.setDirectionResult);
  const { from, to } = useMapStore((state) => state);
  const setProcess = useMapStore((state) => state.setProcess);
  const setStatus = useMapStore((state) => state.setStatus);
  const status = useMapStore((state) => state.status);
  const process = useMapStore((state) => state.process);
  const directionResult = useMapStore((state) => state.directionResponse);

  const mapRoute = async () => {
    const directionService = new google.maps.DirectionsService();
    const directionRenderer = new google.maps.DirectionsRenderer();
    if (process === "cancel") {
      directionRenderer.setMap(null);
    }

    try {
      const result = await directionService.route({
        origin: from.location,
        destination: to.location,
        travelMode: google.maps.TravelMode.DRIVING,
      });
      setStatus("success");
      setDirectionResult(result, result.routes[0].legs[0]);
      setTimeout(() => {
        setProcess("order");
      }, 1500);
    } catch (err) {
      setProcess("start");
      setStatus("error");
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // @ts-ignore
    if (from.location?.lat === undefined && to.location?.lat === undefined) {
      setProcess("start");
      setStatus("error");
    } else {
      mapRoute();
    }
  };

  return (
    <div>
      <form
        className={cn("pt-5 pb-2  flex flex-col items-center", className)}
        onSubmit={onSubmit}>
        <TaxiFromInput />
        <TaxiToInput />
        <Button
          theme="primary"
          className={cn("transition-all duration-500", {
            "scale-0 opacity-0 w-0 !h-0": process === "order",
            "scale-100 opacity-100 mt-2":
              process === "start" || process === "cancel",
          })}>
          Done
        </Button>
      </form>
    </div>
  );
};

export default TaxiAddressForm;
