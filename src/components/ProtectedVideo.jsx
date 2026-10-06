/**
 * Video player with download disabled, right-click blocked,
 * and drag prevention. controlsList="nodownload" removes the
 * download button from the native player controls.
 */
export default function ProtectedVideo({ src, border, shadow, ...props }) {
  return (
    <div
      style={{
        borderRadius: 'var(--radius-md)',
        border: border || '2px solid var(--border)',
        boxShadow: shadow || 'var(--shadow-md)',
        overflow: 'hidden',
        background: '#000',
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <video
        src={src}
        controls
        controlsList="nodownload noremoteplayback"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        style={{ width: '100%', display: 'block' }}
        preload="metadata"
        {...props}
      />
    </div>
  );
}
