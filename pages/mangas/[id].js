import React from "react";
import MangaCard from "@/layouts/MangaCard";
import { GetServerSideProps } from "next";
import Site_Head from "@/layouts/Site_Head";
export default function MangaId({ manga }) {
  return (
    <>
      <Site_Head title={manga.title}>
        <meta property="og:title" content={manga.title} />
      </Site_Head>
      <div className="grid  grid-flow-row gap-4 justify-center items-center">
        <div key={manga.mal_id} className="gap-4">
          <MangaCard manga={manga}></MangaCard>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  console.log("Server side props...", context.query);
  const url = `https://api.jikan.moe/v3/manga/${context.query.id}`;
  const response = await fetch(url);
  const json = await response.json();
  return { props: { manga: json } };
};
