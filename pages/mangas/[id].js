import React from "react";
import MangaCard from "@/layouts/MangaCard";
import { GetServerSideProps } from "next";
import Site_Head from "@/layouts/Site_Head";
export default function MangaId({ manga }) {
  return (
    <>
      <Site_Head title={manga.title}>
        {/* default website */}
        <meta charset="UTF-8" />
        <meta name="description" content={manga.synopsis} />
        <meta name="keywords" content={`${manga.title}, Test SEO`} />
        <meta name="author" content={manga.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Set Robots content(index,noindex,...) */}
        <meta name="robots" content="noindex,nofollow" />
        {/* set Publisher */}
        {/* <link
          href={`https://learn-nextjs-ten-murex.vercel.app/mangas/${manga.mal_id}`}
          rel="publisher"
        /> */}
        {/* Set Canonical */}
        <link
          rel="canonical"
          href={`https://learn-nextjs-ten-murex.vercel.app/mangas/${manga.mal_id}`}
        />

        {/* Facebook Card */}
        <meta
          property="og:url"
          content={`https://learn-nextjs-ten-murex.vercel.app/mangas/${manga.mal_id}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={manga.title} />
        <meta property="og:description" content={manga.synopsis} />
        <meta property="og:image" content={manga.image_url} />
        {/* Twitter Card */}
        <meta name="twitter:title" content={manga.title} />
        <meta name="twitter:description" content={manga.synopsis} />
        <meta name="twitter:image" content={manga.image_url} />
        <meta name="twitter:card" content="summary_large_image"></meta>
        {/* Open source image */}
        <link rel="image_src" href={manga.image_url}></link>
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
