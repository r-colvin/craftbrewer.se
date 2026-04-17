import React, { useMemo, useState, useRef, useEffect, useCallback } from "react";
import { usePluginData } from "@docusaurus/useGlobalData";
import styles from "./styles.module.css";

function GlossaryTerm({ term, definition, url, routePath = "/glossary", children }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState(null);
  const [placement, setPlacement] = useState("top");
  const wrapperRef = useRef(null);
  const tooltipRef = useRef(null);
  const hideTimerRef = useRef(null);

  const scheduleHide = useCallback(() => {
    hideTimerRef.current = setTimeout(() => setShowTooltip(false), 100);
  }, []);

  const cancelHide = useCallback(() => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  }, []);

  useEffect(() => () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  }, []);

  const updatePosition = useCallback(() => {
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

  useEffect(() => {
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

  const pluginData = usePluginData("docusaurus-plugin-glossary");

  const foundTerm = useMemo(() => {
    const terms = pluginData?.terms || [];
    return terms.find(
      (t) => typeof t.term === "string" && t.term.toLowerCase() === String(term).toLowerCase()
    );
  }, [pluginData, term]);

  const effectiveDefinition = useMemo(() => {
    if (definition && typeof definition === "string" && definition.length > 0) return definition;
    return foundTerm?.definition ?? undefined;
  }, [definition, foundTerm]);

  const effectiveUrl = useMemo(() => {
    if (url && typeof url === "string" && url.length > 0) return url;
    return foundTerm?.url ?? undefined;
  }, [url, foundTerm]);

  const effectiveRoutePath = useMemo(() => {
    if (routePath && typeof routePath === "string" && routePath.length > 0) return routePath;
    return pluginData?.routePath || "/glossary";
  }, [pluginData, routePath]);

  const displayText = children || term;
  const termId = term.toLowerCase().replace(/\s+/g, "-");

  const tooltipClasses = [
    styles.tooltip,
    showTooltip ? styles.tooltipVisible : "",
    placement === "top" ? styles.tooltipTop : styles.tooltipBottom,
    styles.tooltipFloating,
  ].join(" ");

  return (
    <span
      ref={wrapperRef}
      className={styles.glossaryTermWrapper}
      onMouseEnter={() => { cancelHide(); setShowTooltip(true); }}
      onMouseLeave={scheduleHide}
    >
      <a
        href={`${effectiveRoutePath}#${termId}`}
        className={styles.glossaryTerm}
        onFocus={() => { cancelHide(); setShowTooltip(true); }}
        onBlur={scheduleHide}
        aria-describedby={`tooltip-${termId}`}
      >
        {displayText}
      </a>
      {effectiveDefinition && (
        <span
          ref={tooltipRef}
          id={`tooltip-${termId}`}
          className={tooltipClasses}
          role="tooltip"
          style={
            showTooltip && tooltipStyle
              ? { top: `${tooltipStyle.top}px`, left: `${tooltipStyle.left}px` }
              : undefined
          }
          onMouseEnter={() => { cancelHide(); setShowTooltip(true); }}
          onMouseLeave={scheduleHide}
        >
          <strong>{term}</strong>
          {" "}{effectiveDefinition}
          {effectiveUrl && (
            <a href={effectiveUrl} className={styles.tooltipLink}>
              → Full details
            </a>
          )}
        </span>
      )}
    </span>
  );
}

export default GlossaryTerm;
