/* eslint-disable no-console */
import React from "react";
import { BreakpointDebugger } from "components/utils/BreakpointDebugger";

export function Test(): JSX.Element {
  console.log("Test");

  return (
    <div id="Test">
      <BreakpointDebugger />
    </div>
  );
}
