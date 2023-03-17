import React, { Component, useEffect, useState } from "react";
import { renderToString } from "react-dom/server";

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

const dataAttrName = "data-srcr";

const cache = new Map();

const suspenderSet = new Set();

globalThis.__srcrLoaded = true;

export class SrcrSuspense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inSuspense: isServer,
    };
    suspenderSet.add(this);
    this.suspenderIdx = suspenderSet.size - 1;
  }

  componentDidCatch(err) {
    if (!err.key) throw err;

    const { key } = err;

    const { toResolve, resolvedResponse } = cache.get(key);

    if (resolvedResponse) {
      this.setState({ inSuspense: false });
      return this.props.children;
    }

    this.setState({ inSuspense: true });

    const suspender = toResolve;
    this._suspender = suspender;

    const update = (res) => {
      if (this._suspender !== suspender) return;

      cache.set(key, {
        ...cache.get(key),
        resolvedResponse: res,
        toResolve: null,
      });
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
  if (!cache.get(key)) {
    const suspenseBoundary = Array.from(suspenderSet)[suspenderSet.size - 1];
    cache.set(key, {
      ...cache.get(key),
      suspenseBoundary,
      suspenseBoundaryIdx: suspenseBoundary.suspenderIdx,
      toResolve: null,
      resolvedResponse: null,
    });
  }

  return {
    read: () => {
      const resolvedDataOnClient = globalThis[`srcr-comp-json_${key}`];
      if (resolvedDataOnClient) {
        return resolvedDataOnClient;
      }

      const { resolvedResponse, toResolve } = cache.get(key);
      if (resolvedResponse) {
        return resolvedResponse;
      }

      if (toResolve) {
        if (!isServer) throw { key };
        return;
      }

      const suspenseBoundary = Array.from(suspenderSet)[suspenderSet.size - 1];
      cache.set(key, {
        ...cache.get(key),
        suspenseBoundary,
        suspenseBoundaryIdx: suspenseBoundary.suspenderIdx,
        toResolve: requestPromise(),
      });

      if (!isServer) throw { key };
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
  const [loading, setLoading] = useState(true);

  if (!cache.get(key)) {
    cache.set(key, {
      requestPromise,
    });
  }

  useEffect(() => {
    if (isServer) return;
    async function fetchData() {
      const json = await resolveDataOrPromise(key, requestPromise);
      setData(json);
      setLoading(false);
    }
    fetchData();
  }, [key]);

  return { data, loading };
};

export const fixSRCRComments = (htmlString) => {
  return htmlString.replace(
    /(<div data-srcr-comment="true">&lt;!--) ([\w\d_]+) (--&gt;<\/div>)/g,
    "<!-- $2 -->"
  );
};

const copyElsIntoPlace = (key, idx, dataAttrName) => {
  // data already loaded which means React has already hydrated
  if (globalThis[`srcr-comp-json_${key}`] || globalThis.__srcrLoaded) return;
  const rootEls = document.querySelectorAll(
    "[data-reactroot]:not([data-srcr-post])"
  );
  rootEls.forEach((rootEl) => {
    const start = rootEl.innerHTML.match(`(<!--) (srcr_s_${idx}) (-->)`);
    const end = rootEl.innerHTML.match(`(<!--) (srcr_e_${idx}) (-->)`);
    const postEl = document.querySelector(`[${dataAttrName}-post="${key}"]`);
    if (!start || !end || !postEl) return;

    // WIP - still figuring out how we can stitch in the HTML of the nested components
    const nestedStart = postEl.innerHTML.match(`<!-- srcr_s_([\\d]) -->`);
    const nestedEnd = postEl.innerHTML.match(`<!-- srcr_e_([\\d]) -->`);
    if (nestedStart && nestedEnd) {
      console.log(nestedStart);
      const id = nestedStart[1];
      const nestedEl = document.querySelector(`[data-srcr-suspender="${id}"]`);
      postEl.innerHTML =
        postEl.innerHTML.substring(0, nestedStart.index) +
        nestedEl.innerHTML +
        postEl.innerHTML.substring(nestedEnd.index);
    }

    rootEl.innerHTML =
      rootEl.innerHTML.substring(0, start.index) +
      postEl.innerHTML +
      rootEl.innerHTML.substring(end.index);
  });
};

export const resolvedDataToHTML = async (resWriter) => {
  const entries = Array.from(cache.entries());

  return Promise.allSettled(
    entries.map(
      async ([
        key,
        { requestPromise, toResolve, suspenseBoundary, suspenseBoundaryIdx },
      ]) => {
        let html = "<div hidden style='display:none'>";

        if (requestPromise) {
          const json = await requestPromise();
          html += `<script>globalThis["srcr-comp-json_${key}"] = ${JSON.stringify(
            json
          ).replace(/</g, "\\u003C")}</script>`;
        } else {
          const json = await toResolve;

          cache.set(key, {
            ...cache.get(key),
            toResolve: null,
            resolvedResponse: json,
          });

          const post = suspenseBoundary.props.children;
          if (post) {
            html += fixSRCRComments(
              renderToString(
                <div
                  data-srcr-post={key}
                  data-srcr-suspender={suspenseBoundaryIdx}
                >
                  {post}
                </div>
              )
            );
          }

          html += `<script>(${copyElsIntoPlace})("${key}", "${suspenseBoundaryIdx}", "${dataAttrName}");</script>`;

          // add data to global after the component HTML stitching to ensure it doesn't move HTML after React has hydrated
          html += `<script data-idx=${suspenseBoundaryIdx}>globalThis["srcr-comp-json_${key}"] = ${JSON.stringify(
            json
          ).replace(/</g, "\\u003C")}</script>`;
        }
        html += "</div>";

        resWriter(html);

        cache.delete(key);
        suspenderSet.clear();

        return html;
      }
    )
  ).finally(() => {
    cache.clear();
  });
};
