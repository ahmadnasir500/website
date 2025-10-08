import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
const Edit = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: `halaman edit` }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          href: `/`,
          method: "get",
          children: /* @__PURE__ */ jsx("button", { className: "btn btn-info text-decoration-none btn-warning", children: "home" })
        }
      ),
      "halaman Edit"
    ] })
  ] });
};
export {
  Edit as default
};
