// Ensure window.fetch is writable if third-party polyfills/wrappers attempt to assign to it
if (typeof window !== 'undefined') {
  try {
    const origFetch = window.fetch;
    if (typeof origFetch === 'function') {
      let activeFetch = origFetch;
      Object.defineProperty(window, 'fetch', {
        get: () => activeFetch,
        set: (next) => {
          activeFetch = next;
        },
        configurable: true,
        enumerable: true,
      });
    }
  } catch {
    // Ignore if not permitted
  }
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
