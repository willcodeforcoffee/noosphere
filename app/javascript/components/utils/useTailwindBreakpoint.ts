import { useState, useEffect } from "react";
import { getBrowserViewportWidth } from "./useViewportWidth";

enum TailwindBreakpoint {
  none = "none",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xl2 = "2xl",
}

const smBreakpoint = 640;
const mdBreakpoint = 768;
const lgBreakpoint = 1024;
const xlBreakpoint = 1280;
const xl2Breakpoint = 1536;

function getTailwindBreakpoint(vw: number): TailwindBreakpoint {
  // Breakpoints are by min-width so to match the breakpoint it has to be minimal width
  if (vw >= xl2Breakpoint) {
    return TailwindBreakpoint.xl2;
  } else if (vw >= xlBreakpoint) {
    return TailwindBreakpoint.xl;
  } else if (vw >= lgBreakpoint) {
    return TailwindBreakpoint.lg;
  } else if (vw >= mdBreakpoint) {
    return TailwindBreakpoint.md;
  } else if (vw >= smBreakpoint) {
    return TailwindBreakpoint.sm;
  }
  return TailwindBreakpoint.none;
}

function useTailwindBreakpoint(): TailwindBreakpoint {
  const [breakpoint, setBreakpoint] = useState(TailwindBreakpoint.none);

  useEffect(() => {
    function handleResize() {
      const vw = getBrowserViewportWidth();
      setBreakpoint(getTailwindBreakpoint(vw));
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return breakpoint;
}

export { useTailwindBreakpoint };
