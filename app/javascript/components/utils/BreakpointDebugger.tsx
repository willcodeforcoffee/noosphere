import * as React from "react";
import { useViewportWidth } from "./useViewportWidth";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  breakPointDebugger: {
    width: "100%",
  },
}));

function ViewportWidthDebugger(): JSX.Element {
  const vw = useViewportWidth();
  return <p>@media width: {vw}px</p>;
}

function BreakpointDebugger(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.breakPointDebugger}>
      <Typography variant="h6" component="p">
        Breakpoint Debugger:
      </Typography>
      <ViewportWidthDebugger />
    </div>
  );
}

export { BreakpointDebugger };
