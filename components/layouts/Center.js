import React from "react";

export default function Center({ children }) {
  return (
    <div className=" bg-yellow-400 text-center underline underline-offset-1">
      {children}
    </div>
  );
}
