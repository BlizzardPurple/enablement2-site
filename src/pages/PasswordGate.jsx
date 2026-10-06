import { useState } from 'react';
import NielsenLogo from '../assets/NielsenLogo';

// SHA-256 hash of the access key — plaintext never appears in the bundle.
const KEY_HASH = 'c754d6519e6f94a89546e8944953eea5412454c7dec08f4aedd569e4eee9649c';

async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export default function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checking) return;
    setChecking(true);

    const hash = await sha256(value.trim());
    if (hash === KEY_HASH) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1500);
    }
    setChecking(false);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-secondary)',
        padding: '2rem',
      }}
    >
      {/* Logo above the card */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <NielsenLogo height={36} />
      </div>

      {/* Spacer between logo and card */}
      <div style={{ height: '3.5rem' }} />

      <div
        style={{
          background: '#fff',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(2rem, 5vw, 3rem)',
          boxShadow: 'var(--shadow-lg)',
          maxWidth: 420,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            marginTop: '0.5rem',
            fontSize: '1.5rem',
            background: 'linear-gradient(135deg, var(--n-turquoise), var(--n-purple))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Enablement 2.0
        </h2>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.5rem 0 1.5rem' }}>
          Enter the access key to continue.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Access key"
            autoFocus
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              fontSize: '1rem',
              border: `2px solid ${error ? 'var(--n-pink)' : 'var(--border)'}`,
              borderRadius: 'var(--radius-sm)',
              outline: 'none',
              fontFamily: 'var(--font-sans)',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--n-turquoise)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = error ? 'var(--n-pink)' : 'var(--border)';
            }}
          />

          {error && (
            <p style={{ color: 'var(--n-pink)', fontSize: '0.82rem', marginTop: '0.5rem' }}>
              Incorrect key. Try again.
            </p>
          )}

          <button
            type="submit"
            disabled={checking}
            style={{
              marginTop: '1rem',
              width: '100%',
              padding: '0.75rem',
              fontSize: '0.95rem',
              fontWeight: 600,
              fontFamily: 'var(--font-sans)',
              color: '#fff',
              background: 'linear-gradient(135deg, var(--n-turquoise), var(--n-purple))',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
              opacity: checking ? 0.7 : 1,
            }}
            onMouseOver={(e) => { e.target.style.opacity = '0.9'; }}
            onMouseOut={(e) => { e.target.style.opacity = '1'; }}
          >
            {checking ? 'Checking...' : 'Enter'}
          </button>
        </form>
      </div>
    </div>
  );
}
