/**
 * Next.js App Router Type Definitions & Response Helpers
 */

export interface Metadata {
  title?: string | { default: string; template: string };
  description?: string;
  keywords?: string[] | string;
  authors?: Array<{ name: string; url?: string }>;
  creator?: string;
  publisher?: string;
  robots?: string | { index: boolean; follow: boolean };
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    images?: Array<{ url: string; width?: number; height?: number; alt?: string }>;
    locale?: string;
    type?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    title?: string;
    description?: string;
    images?: string[];
    creator?: string;
  };
  alternates?: {
    canonical?: string;
  };
}

export class NextRequest extends Request {
  public nextUrl: URL;

  constructor(input: RequestInfo | URL, init?: RequestInit) {
    super(input, init);
    const urlStr = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url;
    this.nextUrl = new URL(urlStr, 'http://localhost:3000');
  }
}

export class NextResponse extends Response {
  static json<T>(data: T, init?: ResponseInit): Response {
    const headers = new Headers(init?.headers);
    if (!headers.has('content-type')) {
      headers.set('content-type', 'application/json');
    }
    return new Response(JSON.stringify(data), {
      ...init,
      headers,
    });
  }

  static redirect(url: string | URL, status = 307): Response {
    const headers = new Headers();
    headers.set('Location', typeof url === 'string' ? url : url.toString());
    return new Response(null, {
      status,
      headers,
    });
  }
}
