import { join } from "path";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import "isomorphic-fetch";

import App from "./components/App";
import {
  resolvedDataToHTML,
  fixSRCRComments,
} from "./server-fetch-client-receive";

const server = express();

server.use("/assets", express.static(join(__dirname, "assets")));

server.get("/", async (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Transfer-Encoding", "chunked");
  const appString = fixSRCRComments(renderToString(<App />));

  const title = "Hello World from the server";

  res.write(`<!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
    <div id="root">${appString}</div>
`);

  res.write(`<script async src="/assets/bundle.js"></script>`);
  const writer = (chunk) => {
    // console.log("chunk", chunk);
    res.write(chunk);
  };
  await resolvedDataToHTML(writer);
  res.end();
});

server.listen(8080);

console.log("listening on 8080");
