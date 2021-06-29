import { Typography } from "@material-ui/core";
import * as React from "react";
import { FeedList } from "./components/feeds/";

export function Home(): JSX.Element {
  return (
    <div id="Home">
      <Typography variant="h1">Home</Typography>
      <FeedList></FeedList>
    </div>
  );
}
