import * as React from "react";
import { useViewportWidth } from "./useViewportWidth";
import { useTailwindBreakpoint } from "./useTailwindBreakpoint";
import { Heading } from "components/content";

function ViewportWidthDebugger(): JSX.Element {
  const vw = useViewportWidth();
  return <p>@media width: {vw}px</p>;
}

function TailwindBreakpointDebugger(): JSX.Element {
  return (
    <>
      <p className="block sm:hidden">&lt;sm</p>
      <p className="hidden sm:block md:hidden">sm</p>
      <p className="hidden md:block lg:hidden">md</p>
      <p className="hidden lg:block xl:hidden">lg</p>
      <p className="hidden xl:block">xl</p>
    </>
  );
}

function CurrentBreakPoint(): JSX.Element {
  const breakpoint = useTailwindBreakpoint();
  const classNames = [
    "br-red-900",
    "text-white",
    "sm:bg-green-700",
    "sm:text-gray-200",
    "md:bg-blue-600",
    "md:text-gray-200",
    "lg:bg-indigo-500",
    "lg:text-white",
    "xl:bg-pink-400",
    "xl:text-black",
    "2xl:bg-red-600",
    "2xl:text-black",
  ];
  return <p className={classNames.join(" ")}>Current Breakpoint {breakpoint}</p>;
}

function BreakpointDebugger(): JSX.Element {
  return (
    <div className="w-full">
      <Heading level={2}>Breakpoint Debugger</Heading>
      <ViewportWidthDebugger />
      <CurrentBreakPoint />
      <TailwindBreakpointDebugger />
    </div>
  );
}

export { BreakpointDebugger };
