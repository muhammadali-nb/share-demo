import React, { ReactElement } from "react";
import Map from "@/components/sections/global/map";
import TaxiLayout from "@/components/sections/taxi/taxi-layout";
import { NextPageWithLayout } from "@/types/next-page-with-layout";
import Head from "next/head";
import TaxiOrderSidebar from "@/components/sections/taxi/taxi-order-sidebar";

const Taxi: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>YOTA | Taxi service</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Map />
      <TaxiOrderSidebar />
    </>
  );
};

Taxi.getLayout = (page: ReactElement) => {
  return <TaxiLayout>{page}</TaxiLayout>;
};

export default Taxi;
