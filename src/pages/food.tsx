import React, { ReactElement } from "react";
import TaxiLayout from "@/components/sections/taxi/taxi-layout";
import { NextPageWithLayout } from "@/types/next-page-with-layout";

const Food: NextPageWithLayout = () => {
  return <div>test</div>;
};

Food.getLayout = (page: ReactElement) => {
  return <TaxiLayout>{page}</TaxiLayout>;
};

export default Food;
