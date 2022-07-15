import React, { useEffect, useState } from "react";
import Link from "next/link";
import Site_Head from "../components/layouts/Site_Head";
import Center from "../components/layouts/Center";

export default function about() {
  const List_link = [
    { name: "Go to Index", href: "/" },
    { name: "Go to About", href: "/about" },
    { name: "Go to Contact Us", href: "/contact" },
  ];
  const [count, setCount] = useState(0);
  // about 1 time
  // useEffect(() => {
  //   console.log(`UseEffect []`);
  //   return () => {
  //     console.log(`UseEffect [] Unmounted`);
  //   };
  // }, []);
  // // Every count change
  // useEffect(() => {
  //   document.title = `Count is ${count}`;
  //   console.log(`${count} UseEffect [count]`);
  //   return () => {
  //     console.log(`${count} UseEffect [count] Unmounted`);
  //   };
  // }, [count]);

  return (
    <>
      <Site_Head title={"About Page..."}></Site_Head>
      <Center>
        <h1>This is About Page...</h1>
        <div className="grid  grid-flow-rows">
          {List_link.map((list, index) => (
            <Link key={index} href={list.href}>
              {list.name}
            </Link>
          ))}
        </div>
      </Center>
      <div>
        <h1>
          count={count}
          <button
            className="bg-red-500 m-3 p-2"
            onClick={(e) => {
              setCount(count + 1);
            }}
          >
            +
          </button>
        </h1>
      </div>
    </>
  );
}
