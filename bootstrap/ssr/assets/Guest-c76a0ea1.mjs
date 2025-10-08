import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { usePage, Head, Link } from "@inertiajs/react";
const guest = "";
const Guest = ({ children }) => {
  const website = usePage().props.website;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: `${website.title}` }),
      /* @__PURE__ */ jsx("meta", { description: `${website.description}` })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container mt-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between align-items-center mb-3", children: [
        /* @__PURE__ */ jsx("div", { className: "logo", children: /* @__PURE__ */ jsx(Link, { href: `/`, children: "Gtmov" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "search-icon", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", width: "24", height: "24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 21l-4.35-4.35m0 0A7.5 7.5 0 1112 4.5a7.5 7.5 0 014.65 12.15z" }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { className: "col-lg-8", children }),
        /* @__PURE__ */ jsx("div", { className: "col-lg-4 right-col ps-lg-4 mt-3", children: /* @__PURE__ */ jsxs("div", { className: "article-item", children: [
          /* @__PURE__ */ jsx("img", { src: "https://bewbin.com/wp-content/uploads/2023/03/1bb902da-031e-46e8-81ae-816b35569628-300x119.png", className: "article-thumb", width: "70", alt: "4 Best Ways How to Fix HP Printer 6835 Printhead Error" }),
          /* @__PURE__ */ jsxs("div", { className: "article-text", children: [
            /* @__PURE__ */ jsx("h6", { className: "article-title", children: "4 Best Ways How to Fix HP Printer 6835 Printhead Error" }),
            /* @__PURE__ */ jsx("p", { className: "article-desc", children: "This problem is an important device that must be tet you print documents..." })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("footer", { className: "footer mt-5", children: [
      /* @__PURE__ */ jsx("div", { children: "Copyright © 2023 gtmov" }),
      /* @__PURE__ */ jsx("div", { children: "design by ilmu" })
    ] })
  ] });
};
export {
  Guest as default
};
