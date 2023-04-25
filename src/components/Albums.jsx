import React from "react";

import { useSRCR } from "../server-fetch-client-receive";

const request = (endpoint, id) =>
  fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`)
    .then((res) => res.json())
    .catch((e) => console.error(e));

const Albums = ({ postId }) => {
  const { data, loading } = useSRCR(
    () => request("albums", postId),
    `albums-${postId}`
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h5>Hello from Albums using non-Suspense hook</h5>
      <br />
      {postId}
      <br />
      {JSON.stringify(data)}
      <hr />
    </>
  );
};

export default Albums;
