import { jsx } from "react/jsx-runtime";
import { usePage } from "@inertiajs/react";
import Guest from "./Guest-c76a0ea1.mjs";
const Show = () => {
  const data = usePage().props.data;
  return /* @__PURE__ */ jsx(Guest, { children: /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("div", { className: "col-12", children: data.body }) }) });
};
export {
  Show as default
};
