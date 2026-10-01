'use client';

import React, { createContext, useMemo } from 'react';
import { useRouter as useNextRouter, usePathname, useSearchParams } from 'next/navigation';

const RouterContext = createContext(null);

export const RouterProvider = ({ children }) => {
  return children;
};

export function useRouter() {
  const nextRouter = useNextRouter();
  const pathname = usePathname() || '/';

  const route = useMemo(() => {
    let name = 'home';
    const clean = pathname.replace(/\/+$/, '') || '/';
    if (clean === '/') name = 'home';
    else if (clean.startsWith('/admin')) name = 'admin';
    else if (clean.startsWith('/news/')) name = 'news-detail';
    else name = clean.replace(/^\//, '');

    const params = {};
    if (clean.startsWith('/news/')) {
      params.slug = clean.replace('/news/', '');
    }

    return {
      name,
      path: clean,
      params,
    };
  }, [pathname]);

  const navigate = (to, options) => {
    if (options?.replace) {
      nextRouter.replace(to);
    } else {
      nextRouter.push(to);
    }
  };

  return {
    currentPath: pathname,
    route,
    navigate,
    push: (href) => nextRouter.push(href),
    replace: (href) => nextRouter.replace(href),
    back: () => nextRouter.back(),
    forward: () => nextRouter.forward(),
    refresh: () => nextRouter.refresh(),
  };
}

export function useRouteSearchParams() {
  return useSearchParams();
}
