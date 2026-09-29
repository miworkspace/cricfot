import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';

export interface RouteMatch {
  name:
    | 'home'
    | 'cricket'
    | 'football'
    | 'live'
    | 'matches'
    | 'results'
    | 'analysis'
    | 'videos'
    | 'news-detail'
    | 'search'
    | 'admin'
    | 'not-found';
  path: string;
  params: Record<string, string>;
  searchParams: URLSearchParams;
}

interface RouterContextType {
  currentPath: string;
  route: RouteMatch;
  navigate: (to: string, options?: { replace?: boolean }) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

function parsePath(pathname: string, search: string): RouteMatch {
  const cleanPath = pathname.replace(/\/+$/, '') || '/';
  const searchParams = new URLSearchParams(search);

  if (cleanPath === '/' || cleanPath === '') {
    return { name: 'home', path: '/', params: {}, searchParams };
  }

  if (cleanPath === '/cricket') {
    return { name: 'cricket', path: '/cricket', params: {}, searchParams };
  }

  if (cleanPath === '/football') {
    return { name: 'football', path: '/football', params: {}, searchParams };
  }

  if (cleanPath === '/live') {
    return { name: 'live', path: '/live', params: {}, searchParams };
  }

  if (cleanPath === '/matches') {
    return { name: 'matches', path: '/matches', params: {}, searchParams };
  }

  if (cleanPath === '/results') {
    return { name: 'results', path: '/results', params: {}, searchParams };
  }

  if (cleanPath === '/analysis') {
    return { name: 'analysis', path: '/analysis', params: {}, searchParams };
  }

  if (cleanPath === '/videos') {
    return { name: 'videos', path: '/videos', params: {}, searchParams };
  }

  if (cleanPath === '/search') {
    return { name: 'search', path: '/search', params: {}, searchParams };
  }

  if (cleanPath.startsWith('/admin')) {
    return { name: 'admin', path: cleanPath, params: {}, searchParams };
  }

  // Check for /news/:slug
  const newsMatch = cleanPath.match(/^\/news\/([a-zA-Z0-9_-]+)$/);
  if (newsMatch) {
    return {
      name: 'news-detail',
      path: cleanPath,
      params: { slug: newsMatch[1] },
      searchParams,
    };
  }

  return { name: 'not-found', path: cleanPath, params: {}, searchParams };
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUrl, setCurrentUrl] = useState(() => ({
    pathname: typeof window !== 'undefined' ? window.location.pathname : '/',
    search: typeof window !== 'undefined' ? window.location.search : '',
  }));

  useEffect(() => {
    const handlePopState = () => {
      setCurrentUrl({
        pathname: window.location.pathname,
        search: window.location.search,
      });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string, options?: { replace?: boolean }) => {
    if (typeof window === 'undefined') return;

    if (options?.replace) {
      window.history.replaceState({}, '', to);
    } else {
      window.history.pushState({}, '', to);
    }

    const [newPath, newSearch = ''] = to.split('?');
    setCurrentUrl({
      pathname: newPath || '/',
      search: newSearch ? `?${newSearch}` : '',
    });

    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const route = useMemo(
    () => parsePath(currentUrl.pathname, currentUrl.search),
    [currentUrl.pathname, currentUrl.search]
  );

  return (
    <RouterContext.Provider
      value={{
        currentPath: currentUrl.pathname,
        route,
        navigate,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export function useRouter(): RouterContextType {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}
