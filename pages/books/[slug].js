import React from "react";
import { useRouter } from "next/router";
export default function Books() {
  const router = useRouter();
  console.log(router);
  return <div>Books index : {router.query.slug} </div>;
}
