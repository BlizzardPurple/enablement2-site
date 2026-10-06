/**
 * Wraps media elements with a transparent overlay to prevent
 * right-click save-as on the actual media element.
 * Also disables drag and context menu.
 */
export default function ProtectedMedia({ children }) {
  return (
    <div
      style={{ position: 'relative', userSelect: 'none' }}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {children}
      {/* Invisible overlay blocks direct interaction with the media element */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          cursor: 'default',
        }}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}
