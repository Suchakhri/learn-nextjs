import React from "react";
import Link from "next/link";
import Site_Head from "@/layouts/Site_Head";
import Df_layout from "@/layouts/Df_layout";
import Type1 from "@/layouts/Props_Children/Type1";
import Type2 from "@/layouts/Props_Children/Type2";
import Type3 from "@/layouts/Props_Children/Type3";

export default function index() {
  const helloMoon = (e, txt) => {
    console.log(`Hello, ${txt}...`);
  };
  const List_link = [
    { name: "Go to Index", href: "/" },
    { name: "Go to About", href: "/about" },
    { name: "Go to Contact Us", href: "/contact" },
  ];
  return (
    <>
      <Site_Head title={"Index Page..."}></Site_Head>
      <Df_layout>
        <h1>This is Index Page...</h1>
        <div className="grid grid-flow-rows">
          {List_link.map((list, index) => (
            <Link key={index} href={list.href}>
              {list.name}
            </Link>
          ))}
        </div>
      </Df_layout>
      {/* Strat Onclick Functon */}
      <button
        className=" bg-blue-500 m-2 p-1 ml-0 rounded-[5px] text-center text-white text-xs"
        onClick={(e) => {
          helloMoon(e, "World");
        }}
      >
        Hello, World{" "}
      </button>
      <button
        className=" bg-blue-500 m-2 p-1 ml-0 rounded-[5px] text-center text-white text-xs"
        onClick={(e) => {
          helloMoon(e, "Moon");
        }}
      >
        Hello, Moon{" "}
      </button>
      {/* End Onclick Functon */}
      <Type1>
        <div className="text-white">Hello Props.Children</div>
      </Type1>
      <Type2>
        <div className="text-white">Hello Const Children</div>
      </Type2>
      <Type3 props_className="bg-yellow-500">
        <div className="text-white">Hello Children</div>
      </Type3>
    </>
  );
}
