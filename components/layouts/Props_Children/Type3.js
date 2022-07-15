import React from "react";

export default function Type3({ children, props_className }) {
  console.log("This is Children : ", children);
  return <div className={props_className}>{children}</div>;
}
