import * as React from "react";
import { useStyles } from "./Home.style";

export function Home(): JSX.Element {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <h1>Admin Home</h1>
    </main>
  );
}
