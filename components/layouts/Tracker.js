import React from "react";
import { useState } from "react";

export default function Tracker({ tracker }) {
  const [count, setCount] = useState(tracker.count || 0);
  return (
    <div>
      <p>
        #Id :{tracker.id} Count == {count}
      </p>
      <button
        className="bg-green-500 text-white text-xl rounded-md p-2 m-3"
        onClick={(e) => {
          count < 10 ? setCount(++count) : alert("This is Maximum...");
        }}
      >
        +
      </button>
      <button
        className="bg-green-500 text-white text-xl rounded-md p-2 m-3"
        onClick={(e) => {
          count !== 0 ? setCount(--count) : alert("This is Minimum...");
        }}
      >
        -
      </button>
    </div>
  );
}
