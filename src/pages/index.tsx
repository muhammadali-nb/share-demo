import Head from 'next/head'
import MainLayout from "@/components/sections/global/main-layout";
import {ReactNode} from "react";
import Services from "@/components/sections/global/services";
import UserOperations from "@/components/sections/global/user-operations";


const HomePage = () => {
  return (
    <>
      <Head>
        <title>YOTA</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Services/>
      <UserOperations/>
    </>
  )
}
HomePage.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)
export default HomePage


