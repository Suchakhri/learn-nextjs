import React from "react";
import Link from "next/link";
import Site_Head from "../components/layouts/Site_Head";
import Center from "../components/layouts/Center";
export default function about() {
  return (
    <>
      <Site_Head>
        <title>About Page</title>
      </Site_Head>
      <Center>
        <h1>This is About Page...</h1>
        <div className="grid grid-rows-2 grid-flow-col">
          <Link href={"/"}>Go to Index</Link>
          <Link href={"/about"}> Go to About</Link>
        </div>
      </Center>
    </>
  );
}
