import React from "react";

import { useSuspensfulSRCR } from "../server-fetch-client-receive";

const request = (endpoint, id) =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`)
            .then((res) => res.json())
            .catch((e) => console.error(e))
        ),
      5 * 1000
    );
  });

const Comments = ({ commentId, children }) => {
  const data = useSuspensfulSRCR(
    () => request("comments", commentId),
    `comments-${commentId}`
  );

  const comments = data.read() || null;

  return (
    <>
      <h3>Hello from Comments</h3>
      <p>This request has a 5 second delay</p>
      <br />
      {children}
      <br />
      {commentId}
      <br />
      {JSON.stringify(comments)}
      <hr />
    </>
  );
};

export default Comments;
