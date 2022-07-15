import React from "react";
import Link from "next/link";
import Site_Head from "../components/layouts/Site_Head";
import Df_layout from "../components/layouts/Df_layout";
export default function index() {
  return (
    <>
      <Site_Head>
        <title>Index Page...</title>
      </Site_Head>
      <Df_layout>
        <h1>This is Index Page...</h1>
        <div className="grid grid-rows-2 grid-flow-col">
          <Link href={"/"}>Go to Index</Link>
          <Link href={"/about"}> Go to About</Link>
        </div>
      </Df_layout>
    </>
  );
}
