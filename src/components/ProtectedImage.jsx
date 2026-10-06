/**
 * Image with right-click, drag, and save-as prevention.
 * A transparent overlay sits on top so the browser's
 * "Save Image As" targets the overlay, not the actual image.
 */
export default function ProtectedImage({ src, alt, style, ...props }) {
  return (
    <div
      style={{ position: 'relative', userSelect: 'none', ...style }}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <img
        src={src}
        alt={alt || ''}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        style={{ width: '100%', display: 'block', pointerEvents: 'none' }}
        {...props}
      />
      <div
        style={{ position: 'absolute', inset: 0, zIndex: 1 }}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}
