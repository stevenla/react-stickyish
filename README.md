# react-stickyish

[![npm version][npm-badge]][npm-url]
[![npm bundle size][size-badge]][npm-url]

React Hook that allows for headers to be stickyish, so they disappear when
scrolling down but reappear when scrolling up.

## Install

```
npm install --save react-stickyish
```

## Usage

The hook takes in one param for the ref of the element that should be made
stickyish. The hook returns an object with the `{ top, position }` CSS
properties for the navbar that should be stickyish. You can extract these items
out, or pass them into your HTML element directly.

```jsx
import React, { useRef } from "react";
import { useStickyish } from "react-stickyish";

function Navbar() {
  const ref = useRef();
  const stickyish = useStickyish(ref);
  return (
    <nav ref={ref} style={stickyish}>
      ...
    </nav>
  );
}
```
