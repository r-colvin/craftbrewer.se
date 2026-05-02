import React from 'react';
import styles from './YouTubeEmbed.module.css';

/**
 * YouTubeEmbed — renders a responsive embedded YouTube video.
 *
 * Usage:
 *   import YouTubeEmbed from '@site/src/components/YouTubeEmbed';
 *   <YouTubeEmbed id="dQw4w9WgXcQ" title="Video title for accessibility" />
 *
 * Props:
 *   id    — YouTube video ID (the part after ?v= in the watch URL). Required
 *           unless using the legacy `URL` prop.
 *   title — Descriptive label for the iframe, used by screen readers.
 *           Defaults to 'YouTube video' if omitted; always provide one.
 *   size  — Controls the maximum width of the embed. One of:
 *             'small'  — max 400 px  (sidebar note, inline reference)
 *             'medium' — max 560 px  (supporting illustration)
 *             'large'  — max 750 px  (default; main content video)
 *           Defaults to 'large'.
 *   start — Optional start time in seconds (e.g. start={90} begins at 1:30).
 *
 * Legacy: the component also accepts a `URL` prop containing a full embed URL,
 * for backwards compatibility with existing pages that use the old API.
 */

const MAX_WIDTHS = {
  small:  400,
  medium: 560,
  large:  750,
};

export default function YouTubeEmbed({ id, title = 'YouTube video', size = 'large', start, URL }) {
  let src;
  if (id) {
    const params = new URLSearchParams({ rel: 0, modestbranding: 1 });
    if (start) params.set('start', start);
    src = `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
  } else if (URL) {
    // Legacy: accept a raw embed URL as-is
    src = URL;
  } else {
    return null;
  }

  const maxWidth = MAX_WIDTHS[size] ?? MAX_WIDTHS.large;
  // padding-bottom drives the 16:9 height via the aspect-ratio trick.
  // Cap it so the wrapper never exceeds maxWidth × 9/16 px tall.
  const maxHeight = Math.round(maxWidth * 9 / 16);

  return (
    <div
      className={styles.wrapper}
      style={{ maxWidth, paddingBottom: `min(56.25%, ${maxHeight}px)` }}
    >
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
