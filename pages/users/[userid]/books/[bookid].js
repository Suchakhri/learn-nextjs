import React from "react";
import { useRouter } from "next/router";
export default function index() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <div>
        User id : {router.query.userid} <br />
        Book id : {router.query.bookid}
      </div>
    </>
  );
}
