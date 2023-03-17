# Server Request Client Recieve aka SRCR
## React - Suspense only SRCR (React 16.8.6)

### What does it do?
Server makes the fetch and inlines the JSON response and component HTML with resolved response for the client to show. This means expensive network requests can be triggered on the server ASAP with the response streamed later.

Designed to imitate the behaviour of data fetching using Suspense with SSR in React 18.

See it in action here - https://codesandbox.io/p/sandbox/react-suspense-only-srcr-react-16-8-6-z1s0q0

I also created a fork of this sandbox for testing with React 18 for compatibility - https://codesandbox.io/p/sandbox/react-suspense-only-srcr-react-18-2-0-testing-2cprzo
