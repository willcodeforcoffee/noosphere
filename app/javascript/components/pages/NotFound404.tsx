import * as React from "react";

export function NotFound404(): JSX.Element {
  console.log("Page not found!");
  return (
    <div id="NotFound">
      <h1>Page Not Found</h1>
      <p>The page you are looking for was not found.</p>
    </div>
  );
}
