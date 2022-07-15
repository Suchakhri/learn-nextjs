import React from "react";

export default function MyButton({ msg, handleFunc }) {
  return (
    <button
      className=" bg-green-500 m-2 p-1 ml-0 rounded-[5px] text-center text-white text-xs"
      onClick={(event) => {
        handleFunc(event, msg);
      }}
    >
      {msg}
    </button>
  );
}
