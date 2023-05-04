import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
import { NextPageWithLayout } from "@/types/next-page-with-layout";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    (Component as any).getLayout || ((page: ReactElement) => page);

  return getLayout(<Component {...pageProps} />);
}
