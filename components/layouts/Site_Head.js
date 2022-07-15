import React from "react";
import Head from "next/head";
export default function Site_Head({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {children}
        <link rel="icon" href="purse.webp" />
      </Head>
    </>
  );
}
