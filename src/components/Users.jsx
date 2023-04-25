import React from "react";

import { useSuspensfulSRCR } from "../server-fetch-client-receive";

const request = (endpoint, id) =>
  fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`)
    .then((res) => res.json())
    .catch((e) => console.error(e));

function Users({ userId, children }) {
  const userData = useSuspensfulSRCR(
    () => request("users", userId),
    `users-${userId}`
  );

  const user = userData.read() || null;

  return (
    <>
      <h2>Hello from Users</h2>
      <br />
      {JSON.stringify(user)}
      <div style={{ padding: "2rem" }}>{children}</div>
      <hr />
    </>
  );
}

export default Users;
