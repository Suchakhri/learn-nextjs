import React from "react";

export default function Type2(props) {
  const children = props.children;
  console.log("This is Const : ", children);
  return <div className=" bg-blue-500">{children}</div>;
}
