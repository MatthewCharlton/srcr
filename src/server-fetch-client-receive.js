import React, { Component, useEffect, useState } from "react";
import { renderToString as reactRenderToString } from "react-dom/server";

const isNode = () =>
  Object.prototype.toString.call(
    typeof process !== "undefined" ? process : 0
  ) === "[object process]";

let serverCheck;
export const setIsServerCheck = (customServerCheck) => {
  serverCheck = customServerCheck;
};
const isServer = serverCheck
  ? serverCheck()
  : isNode() || !(typeof window != "undefined" && window.document);

const SRCR_TYPE = Symbol("srcr");

if (!isServer) {
  window.onerror = function () {
    if (arguments && arguments.length > 3 && typeof arguments[4] === "object") {
      return arguments[4].type === SRCR_TYPE;
    }
  };
}

const fixSRCRComments = (htmlString) => {
  return htmlString.replace(
    /(<div data-srcr-comment="true">&lt;!--) ([\w\d_]+) (--&gt;<\/div>)/g,
    "<!-- $2 -->"
  );
};

export const renderToString = (App) => {
  const appString = reactRenderToString(App);
  return fixSRCRComments(appString);
};

const cache = new Map();
const requestCache = new Map();

globalThis.__srcrLoaded = true;

export class SrcrSuspense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inSuspense: false,
    };

    if (!cache.get(this) && isServer) {
      cache.set(this);
      this.suspenderIdx = cache.size - 1;
    }
  }

  componentDidCatch(err) {
    if (!err.key && err.type !== SRCR_TYPE) throw err;

    const { key, toResolve } = err;

    const suspender = toResolve;
    this._suspender = suspender;

    this.setState({ inSuspense: true });

    const update = (res) => {
      if (this._suspender !== suspender) return;

      globalThis[`srcr-comp-json_${key}`] = res;

      this.setState({ inSuspense: false });
    };

    suspender.then(update, update);
  }

  render() {
    const { inSuspense } = this.state;

    if (isServer) {
      return (
        <>
          <Comment start text={this.suspenderIdx} />
          {this.props.children}
          <Comment text={this.suspenderIdx} />
        </>
      );
    }

    if (inSuspense) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

const Comment = ({ start, text }) => {
  return (
    <div data-srcr-comment>{`<!-- srcr_${start ? "s" : "e"}_${text} -->`}</div>
  );
};

export const useSuspensfulSRCR = (requestPromise, key) => {
  let toResolve;
  if (!requestCache.get(key) && isServer) {
    const req = requestPromise();
    requestCache.set(key, req);
    toResolve = req;
  } else {
    toResolve = requestCache.get(key);
  }
  if (cache.size > 0 && isServer) {
    const suspenseBoundary = Array.from(cache)[cache.size - 1][0];
    if (!cache.get(suspenseBoundary)) {
      cache.set(suspenseBoundary, {
        ...cache.get(suspenseBoundary),
        [key]: {
          ...(cache.get(suspenseBoundary) && cache.get(suspenseBoundary)[key]),
          toResolve,
        },
      });
    }
  }
  return {
    read: () => {
      const resolvedDataOnClient = globalThis[`srcr-comp-json_${key}`];

      if (resolvedDataOnClient) {
        return resolvedDataOnClient;
      }

      if (cache.size > 0 && isServer) {
        const suspenseBoundary = Array.from(cache)[cache.size - 1][0];
        cache.set(suspenseBoundary, {
          ...cache.get(suspenseBoundary),
          [key]: {
            ...(cache.get(suspenseBoundary) &&
              cache.get(suspenseBoundary)[key]),
            toResolve,
          },
        });
      }
      if (!isServer) {
        let toResolve;
        if (!requestCache.get(key)) {
          const req = requestPromise();
          requestCache.set(key, req);
          toResolve = req;
        } else {
          toResolve = requestCache.get(key);
        }
        throw { key, type: SRCR_TYPE, toResolve };
      }
    },
  };
};

const resolveDataOrPromise = async (key, requestPromise) => {
  const data = globalThis[`srcr-comp-json_${key}`];
  if (data) {
    return data;
  }
  return await requestPromise();
};

export const useSRCR = (requestPromise, key) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!cache.get(key) && isServer) {
    cache.set(key, requestPromise);
  }

  useEffect(() => {
    if (isServer) return;
    setLoading(true);
    async function fetchData() {
      const json = await resolveDataOrPromise(key, requestPromise);
      setData(json);
      setLoading(false);
    }
    fetchData();
  }, [key]);

  return { data, loading };
};

const copyElsIntoPlace = (idx, suffix = "") => {
  const rootEls = document.querySelectorAll("[data-reactroot]");
  rootEls.forEach((rootEl) => {
    // data already loaded which means React has already hydrated
    if (globalThis.__srcrLoaded) return;
    const start = rootEl.innerHTML.match(`(<!--) (srcr_s_${idx}) (-->)`);
    const end = rootEl.innerHTML.match(`(<!--) (srcr_e_${idx}) (-->)`);
    const postEl = document.querySelector(
      `[data-srcr-suspender="${idx}${suffix}"]`
    );
    if (!start || !end || !postEl) return;
    rootEl.innerHTML =
      rootEl.innerHTML.substring(0, start[0].length + start.index) +
      postEl.innerHTML +
      rootEl.innerHTML.substring(end.index);
  });
};

export const resolvedDataToHTML = async (resWriter) => {
  const entries = Array.from(cache.entries());
  cache.clear();

  const seenKeys = new Set();

  return Promise.all(
    entries.map(async ([suspenseBoundaryOrKey, items]) => {
      if (typeof suspenseBoundaryOrKey === "string") {
        const key = suspenseBoundaryOrKey;
        const req = items;
        const json = await req();
        globalThis[`srcr-comp-json_${key}`] = json;
        const html = `<script>globalThis["srcr-comp-json_${key}"] = ${JSON.stringify(
          json
        ).replace(/</g, "\\u003C")}</script>`;
        resWriter(html);
        return;
      }
      if (!items) return;
      const suspenseBoundary = suspenseBoundaryOrKey;
      const suspenseBoundaryIdx = suspenseBoundary.suspenderIdx;
      let html = `<div hidden data-idx=${suspenseBoundaryIdx}>`;

      const dataArray = await Promise.all(
        Object.keys(items).map(async (key) => {
          const { toResolve } = items[key];
          let req = toResolve;
          if (!req) req = globalThis[`srcr-comp-json_${key}`];

          const json = await req;

          seenKeys.add(key);

          return { json, key };
        })
      );

      dataArray.map((data) => {
        if (!data) return;
        const { json, key } = data;

        const prevData = globalThis[`srcr-comp-json_${key}`];

        globalThis[`srcr-comp-json_${key}`] = json || prevData;

        // add data to global after the component HTML stitching to ensure it doesn't move HTML after React has hydrated
        html += `<script>globalThis["srcr-comp-json_${key}"] = ${JSON.stringify(
          json || null
        ).replace(/</g, "\\u003C")}</script>`;
      });

      const componentOutput = suspenseBoundary.props.children;
      if (componentOutput) {
        html += renderToString(
          <div data-srcr-suspender={`${suspenseBoundaryIdx}`}>
            {componentOutput}
          </div>
        );
      }

      html += `<script>(${copyElsIntoPlace})("${suspenseBoundaryIdx}");</script>`;

      html += "</div>";

      // console.log(html);

      resWriter(html);

      return html;
    })
  ).finally(() => {
    seenKeys.forEach(
      (key) => (globalThis[`srcr-comp-json_${key}`] = undefined)
    );
    seenKeys.clear();
    requestCache.clear();
  });
};
