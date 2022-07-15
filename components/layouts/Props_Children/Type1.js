import React from "react";

export default function Type1(props) {
  console.log("This is Props : ", props);
  return <div className=" bg-red-500  ">{props.children}</div>;
}
