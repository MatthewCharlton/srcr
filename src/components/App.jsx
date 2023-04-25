import React, { useState } from "react";

import { SrcrSuspense } from "../server-fetch-client-receive";

import Users from "./Users";
import Photos from "./Photos";
import Albums from "./Albums";
import Comments from "./Comments";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>SRCR</h1>
      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
      <br />
      <h2>Non-Suspense</h2>
      <Albums postId={count + 1} />
      <br />
      <br />
      <h2>Suspense based</h2>
      <SrcrSuspense
        fallback={
          <h1>Loading Comments... This request has a 5 second delay</h1>
        }
      >
        <Comments commentId={count + 1}>Based on count + 1</Comments>
        <Comments commentId={count * 2}>Based on count * 2</Comments>
      </SrcrSuspense>
      <br />
      <SrcrSuspense fallback={<h1>Loading Users...</h1>}>
        <Users userId={count + 1}>
          <SrcrSuspense fallback={<h1>Loading Photos nested...</h1>}>
            <Photos photosId={count + 1 * 10} />
          </SrcrSuspense>
        </Users>
      </SrcrSuspense>
      <SrcrSuspense fallback={<h1>Loading Photos...</h1>}>
        <Photos photosId={count + 1} />
      </SrcrSuspense>
      <br />
      Hello from below
    </div>
  );
}

export default App;
