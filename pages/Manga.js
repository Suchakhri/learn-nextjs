import React, { useState } from "react";
import Mui_Head from "@/layouts/Mui_Head";
import { Button, TextField, Grid } from "@mui/material";
import { Search } from "@mui/icons-material";
import MangaCard from "@/layouts/MangaCard";
export default function Manga() {
  const [keywords, setKeywords] = useState("naruto");
  const [result, setResult] = useState([]);
  const searchManga = async () => {
    const url = `https://api.jikan.moe/v3/search/manga?q=${keywords}`;
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    setResult(json.results);
  };
  return (
    <>
      <Mui_Head>
        <Grid container justifyContent={"center"}>
          <TextField
            className="w-[300px] m-2 p-2"
            id="outlined-basic"
            label="Search Keywords"
            variant="outlined"
            value={keywords}
            onChange={(e) => {
              setKeywords(e.target.value);
            }}
          />
          <Button
            onClick={searchManga}
            className=" bg-green-400 text-white mt-4 w-[50px] p-2 items-center h-[56px]"
          >
            <Search />
          </Button>
        </Grid>
        <div className="grid grid-cols-3 grid-flow-row gap-4 justify-center items-center">
          {result.map((manga) => (
            <Grid key={manga.mal_id} className="gap-4">
              <MangaCard manga={manga}></MangaCard>
            </Grid>
          ))}
        </div>
      </Mui_Head>
    </>
  );
}
