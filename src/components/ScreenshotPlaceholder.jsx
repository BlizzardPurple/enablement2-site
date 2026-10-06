/**
 * Drop-in placeholder for screenshots.
 * Replace `src` with actual image paths when available.
 * If `src` is provided it renders the image, otherwise a labeled placeholder box.
 */
export default function ScreenshotPlaceholder({ label = 'Screenshot', src }) {
  if (src) {
    return (
      <div className="media-placeholder">
        <img src={src} alt={label} loading="lazy" />
      </div>
    );
  }

  return (
    <div className="media-placeholder">
      <span>📷 {label}</span>
    </div>
  );
}
