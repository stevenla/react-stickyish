import { useState, useEffect, useRef } from "react";
import { Properties } from "csstype";

/**
 * Used to make navbars sticky-ish, where they will disappear when scrolling
 * down, but re-appear when scrolling up.
 * @param ref the element to track
 */
export function useStickyish(
  ref: React.MutableRefObject<HTMLElement>
): { top: number; position: Properties["position"] } {
  const lastScrollY = useRef<number>(0);
  const [top, setTop] = useState<number>(0);
  const [position, setPosition] = useState<Properties["position"]>("fixed");
  useEffect(() => {
    function listener() {
      const refEl = ref.current;
      const navHeight = (refEl && refEl.scrollHeight) || 0;
      const currentY = window.scrollY;
      const lastY = lastScrollY.current;
      if (currentY <= 0) {
        setPosition("absolute");
        setTop(0);
      } else if (currentY < lastY) {
        // Scroll up
        if (currentY - top > navHeight) {
          setTop(currentY - navHeight);
        } else if (top >= currentY) {
          setPosition("fixed");
        }
      } else {
        // Scroll down
        if (position === "fixed") {
          setPosition("absolute");
          setTop(currentY);
        }
      }
      lastScrollY.current = window.scrollY;
    }
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [top, position, ref]);
  return { top: position === "fixed" ? 0 : top, position };
}
