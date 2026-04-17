"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/theme/GlossaryTerm/index.js
var GlossaryTerm_exports = {};
__export(GlossaryTerm_exports, {
  default: () => GlossaryTerm
});
module.exports = __toCommonJS(GlossaryTerm_exports);
var import_react = __toESM(require("react"), 1);
var import_useGlobalData = require("@docusaurus/useGlobalData");
var import_styles = __toESM(require("../../styles.module-N7ME3MWS.module.css"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
function GlossaryTerm({ term, definition, routePath = "/glossary", children }) {
  const [showTooltip, setShowTooltip] = (0, import_react.useState)(false);
  const [tooltipStyle, setTooltipStyle] = (0, import_react.useState)(null);
  const [placement, setPlacement] = (0, import_react.useState)("top");
  const wrapperRef = (0, import_react.useRef)(null);
  const tooltipRef = (0, import_react.useRef)(null);
  const updatePosition = (0, import_react.useCallback)(() => {
    if (!wrapperRef.current || !tooltipRef.current) return;
    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const preferredGap = 8;
    const hasSpaceAbove = wrapperRect.top >= tooltipRect.height + preferredGap;
    const hasSpaceBelow = viewportHeight - wrapperRect.bottom >= tooltipRect.height + preferredGap;
    const nextPlacement = hasSpaceAbove || !hasSpaceBelow ? "top" : "bottom";
    let top;
    if (nextPlacement === "top") {
      top = wrapperRect.top - tooltipRect.height - preferredGap;
    } else {
      top = wrapperRect.bottom + preferredGap;
    }
    const horizontalMargin = 8;
    let left = wrapperRect.left + wrapperRect.width / 2 - tooltipRect.width / 2;
    left = Math.max(
      horizontalMargin,
      Math.min(left, viewportWidth - tooltipRect.width - horizontalMargin)
    );
    setPlacement(nextPlacement);
    setTooltipStyle({ top: Math.max(4, top), left });
  }, []);
  (0, import_react.useEffect)(() => {
    if (!showTooltip) return;
    let rafId2;
    const rafId1 = requestAnimationFrame(() => {
      rafId2 = requestAnimationFrame(() => {
        updatePosition();
      });
    });
    const onScroll = () => updatePosition();
    const onResize = () => updatePosition();
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(rafId1);
      if (rafId2) cancelAnimationFrame(rafId2);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onResize);
    };
  }, [showTooltip, updatePosition]);
  const pluginData = (0, import_useGlobalData.usePluginData)("docusaurus-plugin-glossary");
  const effectiveDefinition = (0, import_react.useMemo)(() => {
    if (definition && typeof definition === "string" && definition.length > 0) {
      return definition;
    }
    const terms = pluginData && pluginData.terms || [];
    const found = terms.find(
      (t) => typeof t.term === "string" && t.term.toLowerCase() === String(term).toLowerCase()
    );
    return found && found.definition ? found.definition : void 0;
  }, [definition, pluginData, term]);
  const effectiveRoutePath = (0, import_react.useMemo)(() => {
    if (routePath && typeof routePath === "string" && routePath.length > 0) return routePath;
    return pluginData && pluginData.routePath || "/glossary";
  }, [pluginData, routePath]);
  const displayText = children || term;
  const termId = term.toLowerCase().replace(/\s+/g, "-");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { ref: wrapperRef, className: import_styles.default.glossaryTermWrapper, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "a",
      {
        href: `${effectiveRoutePath}#${termId}`,
        className: import_styles.default.glossaryTerm,
        onMouseEnter: () => setShowTooltip(true),
        onMouseLeave: () => setShowTooltip(false),
        onFocus: () => setShowTooltip(true),
        onBlur: () => setShowTooltip(false),
        "aria-describedby": `tooltip-${termId}`,
        children: displayText
      }
    ),
    effectiveDefinition && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "span",
      {
        ref: tooltipRef,
        id: `tooltip-${termId}`,
        className: `${import_styles.default.tooltip} ${showTooltip ? import_styles.default.tooltipVisible : ""} ${placement === "top" ? import_styles.default.tooltipTop : import_styles.default.tooltipBottom} ${import_styles.default.tooltipFloating}`,
        role: "tooltip",
        style: showTooltip && tooltipStyle ? { top: `${tooltipStyle.top}px`, left: `${tooltipStyle.left}px` } : void 0,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: term }),
          " ",
          effectiveDefinition
        ]
      }
    )
  ] });
}
//# sourceMappingURL=index.cjs.map