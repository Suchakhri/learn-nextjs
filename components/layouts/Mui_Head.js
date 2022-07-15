import React from "react";
import Head from "next/head";

export default function Mui_Head({ children }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheets"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheets"
        />
      </Head>
      {children}
    </>
  );
}
