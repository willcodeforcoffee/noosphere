import * as React from "react";
import { FeedList } from "./components/feeds/";

export function Home(): JSX.Element {
  return (
    <div id="Home">
      <h1>Home</h1>
      <FeedList></FeedList>
    </div>
  );
}
