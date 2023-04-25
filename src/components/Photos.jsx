import React, { useState } from "react";

import { useSuspensfulSRCR } from "../server-fetch-client-receive";

const request = async (photosId) =>
  fetch(`https://jsonplaceholder.typicode.com/photos/${photosId}`)
    .then((res) => res.json())
    .catch((e) => console.error(e));

function Photos({ photosId }) {
  const [count, setCount] = useState(1);

  const photosData = useSuspensfulSRCR(
    () => request(photosId, count),
    `photos-${photosId}`
  );

  const photos = photosData.read() || null;

  return (
    <>
      <h4>Hello from Photos</h4>
      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
      <p>photos {photosId}</p>
      {JSON.stringify(photos)}
      <br />
      <hr />
    </>
  );
}

export default Photos;
