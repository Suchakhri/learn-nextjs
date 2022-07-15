import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MangaCard from "@/layouts/MangaCard";
export default function MangaId() {
  const router = useRouter();
  const [manga, setManga] = useState([]);
  const searchByid = async () => {
    if (router.query.id) {
      const url = `https://api.jikan.moe/v3/manga/${router.query.id}`;
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setManga(json);
    }
  };
  useEffect(() => {
    searchByid();
  }, [router]);
  return (
    <div>
      <div className="grid  grid-flow-row gap-4 justify-center items-center">
        <div key={manga.mal_id} className="gap-4">
          <MangaCard manga={manga}></MangaCard>
        </div>
      </div>
    </div>
  );
}
