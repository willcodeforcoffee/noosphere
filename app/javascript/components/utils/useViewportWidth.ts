import { useState, useEffect } from "react";

// https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions#8876069
function getBrowserViewportWidth(): number {
  return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
}

function useViewportWidth(): number {
  const [vw, setVw] = useState(0);

  useEffect(() => {
    function handleResize() {
      setVw(getBrowserViewportWidth());
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return vw;
}

export { useViewportWidth, getBrowserViewportWidth };
