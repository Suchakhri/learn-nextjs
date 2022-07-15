import React, { useState } from "react";
import Site_Head from "@/layouts/Site_Head";
import MyButton from "@/layouts/MyButton";
import Link from "next/link";
import Tracker from "@/layouts/Tracker";
export default function Contact() {
  const handleClicked = (event, msg) => {
    console.log("This is Props Function : ", msg, event);
  };
  const List_link = [
    { id: 0, name: "Go to Index", href: "/" },
    { id: 1, name: "Go to About", href: "/About" },
    { id: 2, name: "Go to Contact Us", href: "/Contact" },
  ];
  const Tracker_btn = [
    { id: 0, count: 10 },
    { id: 1 },
    { id: 2 },
    { id: 3, count: 1 },
  ];
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  return (
    <>
      <Site_Head title={"Contact us..."}></Site_Head>
      <div>THis is Contact us</div>
      <div className="grid grid-flow-rows">
        {List_link.map((list) => (
          <Link key={list.id} href={list.href || list.href.toLowerCase()}>
            {list.name}
          </Link>
        ))}
      </div>
      <MyButton msg={"Hi Btn"} handleFunc={handleClicked}></MyButton>
      <MyButton msg={"Bye Btn"} handleFunc={handleClicked}></MyButton>
      {Tracker_btn.map((list) => (
        <Tracker tracker={list} key={list.id}>
          {" "}
        </Tracker>
      ))}

      <div>
        <h1>This is Form...</h1>
        <form
          onSubmit={(e) => {
            console.log("On submit : ", firstname, lastname);
            e.preventDefault();
          }}
        >
          <input
            type="text"
            name="firstname"
            className="border-2 border-emerald-400 rounded-lg"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
          <input
            type="text"
            name="lastname"
            className="border-2 border-emerald-400 rounded-lg"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
          <input
            type="submit"
            name="submit"
            value="submit"
            className="bg-green-500 p-2 m-2 text-center text-white text-sm"
          />
        </form>
      </div>
    </>
  );
}
