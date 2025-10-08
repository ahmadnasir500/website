import { jsx } from "react/jsx-runtime";
import createServer from "@inertiajs/react/server";
import { createInertiaApp } from "@inertiajs/react";
import "react";
import ReactDOMServer from "react-dom/server";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const appName = {}.VITE_APP_NAME || "Laravel";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(
      `./Pages/${name}.jsx`,
      /* @__PURE__ */ Object.assign({ "./Pages/Edit.jsx": () => import("./assets/Edit-49296d84.mjs"), "./Pages/Guest/Index.jsx": () => import("./assets/Index-64d69055.mjs"), "./Pages/Guest/Show.jsx": () => import("./assets/Show-e0462758.mjs"), "./Pages/Index.jsx": () => import("./assets/Index-8537eec7.mjs"), "./Pages/Layouts/Guest.jsx": () => import("./assets/Guest-c76a0ea1.mjs") })
    ),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
