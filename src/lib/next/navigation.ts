/**
 * Next.js App Router Navigation Hooks & Utilities (next/navigation)
 */
import { useContext } from 'react';
import { useRouter as useInternalRouter } from '../../router/RouterContext';

export interface AppRouterInstance {
  push: (href: string, options?: { scroll?: boolean }) => void;
  replace: (href: string, options?: { scroll?: boolean }) => void;
  back: () => void;
  forward: () => void;
  refresh: () => void;
  prefetch: (href: string) => void;
}

export function useRouter(): AppRouterInstance {
  const internalRouter = useInternalRouter();

  return {
    push: (href: string) => {
      internalRouter.navigate(href);
    },
    replace: (href: string) => {
      internalRouter.navigate(href, { replace: true });
    },
    back: () => {
      if (typeof window !== 'undefined') {
        window.history.back();
      }
    },
    forward: () => {
      if (typeof window !== 'undefined') {
        window.history.forward();
      }
    },
    refresh: () => {
      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    },
    prefetch: (_href: string) => {
      // No-op for client-side prefetching
    },
  };
}

export function usePathname(): string {
  const internalRouter = useInternalRouter();
  return internalRouter.currentPath.split('?')[0];
}

export function useSearchParams(): URLSearchParams {
  const internalRouter = useInternalRouter();
  return internalRouter.route.searchParams;
}

export function useParams<T extends Record<string, string | string[]> = Record<string, string>>(): T {
  const internalRouter = useInternalRouter();
  return internalRouter.route.params as unknown as T;
}

export function notFound(): never {
  const err = new Error('NEXT_NOT_FOUND');
  (err as unknown as { digest: string }).digest = 'NEXT_NOT_FOUND';
  throw err;
}

export function redirect(url: string): never {
  if (typeof window !== 'undefined') {
    window.location.href = url;
  }
  const err = new Error(`NEXT_REDIRECT: ${url}`);
  (err as unknown as { digest: string }).digest = `NEXT_REDIRECT;replace;${url};307;`;
  throw err;
}
