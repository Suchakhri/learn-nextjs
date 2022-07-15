import React from "react";
import Head from "next/head";
export default function Site_Head({ children }) {
  return (
    <>
      <Head>
        {children}
        <link rel="icon" href="purse.webp" />
      </Head>
    </>
  );
}
