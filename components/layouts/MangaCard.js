import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
export default function MangaCard({ manga }) {
  return (
    <Card className=" max-w-[345px]">
      <CardMedia
        component="img"
        height="140"
        image={manga.image_url}
        alt={manga.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {manga.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {manga.synopsis}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/mangas/${manga.mal_id}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
