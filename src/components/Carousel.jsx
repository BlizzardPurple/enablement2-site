import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Screenshot gallery — images shown as a clickable grid.
 * Click any image to view full-screen in a lightbox.
 * All images are protected against right-click/drag/save-as.
 */
export default function Carousel({ images = [] }) {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (i) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = useCallback(() => setLightbox((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setLightbox((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, prev, next]);

  if (!images.length) return null;

  const blockMenu = (e) => e.preventDefault();
  const blockDrag = (e) => e.preventDefault();

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.min(images.length, 3)}, 1fr)`,
          gap: '0.75rem',
          marginTop: '1.5rem',
        }}
      >
        {images.map((img, i) => (
          <div key={i} onContextMenu={blockMenu}>
            <motion.button
              onClick={() => openLightbox(i)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: 0,
                border: '2px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                cursor: 'zoom-in',
                background: 'var(--bg-code)',
                display: 'block',
                width: '100%',
                position: 'relative',
                userSelect: 'none',
              }}
            >
              <img
                src={img.src}
                alt={img.alt || `Screenshot ${i + 1}`}
                loading="lazy"
                draggable={false}
                onDragStart={blockDrag}
                onContextMenu={blockMenu}
                style={{ width: '100%', display: 'block', pointerEvents: 'none' }}
              />
              {/* Overlay to block save-as */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
            </motion.button>
            {img.alt && (
              <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', margin: '0.35rem 0 0' }}>
                {img.alt}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Fullscreen lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            onContextMenu={blockMenu}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(0, 0, 0, 0.88)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'zoom-out',
              padding: '2rem',
              userSelect: 'none',
            }}
          >
            <button onClick={closeLightbox} style={{ position: 'absolute', top: 16, right: 20, background: 'none', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', lineHeight: 1 }} aria-label="Close">✕</button>
            <span style={{ position: 'absolute', top: 20, left: 24, color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontWeight: 600 }}>{lightbox + 1} / {images.length}</span>

            {images.length > 1 && (
              <>
                <button onClick={(e) => { e.stopPropagation(); prev(); }} style={lbArrow('left')} aria-label="Previous">‹</button>
                <button onClick={(e) => { e.stopPropagation(); next(); }} style={lbArrow('right')} aria-label="Next">›</button>
              </>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={lightbox}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                style={{ position: 'relative' }}
              >
                <img
                  src={images[lightbox].src}
                  alt={images[lightbox].alt || ''}
                  draggable={false}
                  onDragStart={blockDrag}
                  onContextMenu={blockMenu}
                  style={{
                    maxWidth: '92vw',
                    maxHeight: '88vh',
                    objectFit: 'contain',
                    borderRadius: 8,
                    cursor: 'default',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
                    pointerEvents: 'none',
                  }}
                />
                {/* Overlay */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 1 }} onContextMenu={blockMenu} />
              </motion.div>
            </AnimatePresence>

            {images[lightbox].alt && (
              <p style={{ position: 'absolute', bottom: 20, color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textAlign: 'center', maxWidth: '80vw' }}>
                {images[lightbox].alt}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function lbArrow(side) {
  return {
    position: 'absolute',
    top: '50%',
    [side]: 16,
    transform: 'translateY(-50%)',
    width: 48,
    height: 48,
    borderRadius: '50%',
    border: 'none',
    background: 'rgba(255,255,255,0.15)',
    color: '#fff',
    fontSize: '2rem',
    lineHeight: 1,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
  };
}
