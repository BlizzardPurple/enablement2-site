import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';

// Block common resource-extraction shortcuts
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + S (save), Ctrl/Cmd + U (view source), Ctrl/Cmd + Shift + I (devtools)
  if ((e.ctrlKey || e.metaKey) && ['s', 'u'].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'i') {
    e.preventDefault();
  }
  if (e.key === 'F12') {
    e.preventDefault();
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
