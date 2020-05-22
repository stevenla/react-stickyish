import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { useStickyish } from "react-stickyish";
import range from "lodash/range";

function App() {
  const ref = useRef();
  const { top, position } = useStickyish(ref);
  return (
    <div>
      <nav
        ref={ref}
        style={{
          lineHeight: "60px",
          padding: "0 20px",
          color: "white",
          left: 0,
          right: 0,
          backgroundColor: "black",
          height: 60,
          top,
          position,
        }}
      >
        react-stickyish
      </nav>
      <div style={{ height: 60 }} data-testid="spacer" />
      <div>
        Try scrolling down, then scrolling back up
        {range(100).map((i) => {
          return <div key={i}>{i}</div>;
        })}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
