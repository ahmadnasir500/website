import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { usePage, Link } from "@inertiajs/react";
import Guest from "./Guest-c76a0ea1.mjs";
const Index = () => {
  const datas = usePage().props.data;
  return /* @__PURE__ */ jsx(Guest, { children: /* @__PURE__ */ jsx("div", { className: "row g-3", children: datas ? /* @__PURE__ */ jsx(Fragment, { children: datas.map((data, key) => /* @__PURE__ */ jsx("div", { className: "col-md-6", children: /* @__PURE__ */ jsxs("div", { className: "card border-0", children: [
    /* @__PURE__ */ jsx(Link, { href: `/${data.slug}`, children: /* @__PURE__ */ jsx("img", { src: data.img_tmb || "https://image-placeholder.com/images/actual-size/720x486.png", className: "card-img-top", alt: data.title }) }),
    /* @__PURE__ */ jsxs("div", { className: "card-body p-0 pt-2", children: [
      /* @__PURE__ */ jsx("h6", { className: "article-title", children: data.title }),
      /* @__PURE__ */ jsx("p", { className: "article-desc", children: data.body })
    ] })
  ] }) }, key)) }) : /* @__PURE__ */ jsx("div", { className: "col-md-12", children: /* @__PURE__ */ jsx("div", { className: "card", children: /* @__PURE__ */ jsx("div", { className: "card-body p-0 pt-2", children: /* @__PURE__ */ jsx("h6", { className: "article-title", children: "Posting tidak ditemukan" }) }) }) }) }) });
};
export {
  Index as default
};
