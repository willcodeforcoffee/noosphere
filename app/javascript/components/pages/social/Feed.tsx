import { Typography } from "@material-ui/core";
import * as React from "react";
import { useStyles } from "./Feed.style";
import { useParams } from "react-router-dom";

export function Feed(): JSX.Element {
  let { id } = useParams();
  const classes = useStyles();
  console.log("[Feed]  id:", id);
  return (
    <main className={classes.root}>
      <Typography variant="h1">Feed</Typography>
    </main>
  );
}
