import { join } from "path";
import express from "express";
import React from "react";
// import { renderToString } from "react-dom/server";
import "isomorphic-fetch";

import App from "./components/App";
import {
  resolvedDataToHTML,
  renderToString,
} from "./server-fetch-client-receive";

const server = express();

server.use("/assets", express.static(join(__dirname, "assets")));

server.get("/", async (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  const appString = renderToString(<App />);

  const title = "Hello World from the server";

  res.write(`<!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link rel="preload" href="/assets/bundle.js" as="script">
    </head>
    <body>
    <div id="root">${appString}</div>
`);

  const writer = (chunk) => {
    // console.log("chunk", chunk);
    res.write(chunk);
  };
  await resolvedDataToHTML(writer);
  res.end(`<script src="/assets/bundle.js"></script>`);
});

server.listen(8080);

console.log("listening on 8080");
