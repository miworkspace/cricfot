import React from 'react';
import { Container } from '../components/common/Container';
import { Link } from '../router/Link';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-20">
      <Container size="narrow" className="text-center">
        <div className="bg-white border border-neutral-200 p-8 sm:p-12 shadow-xs">
          <span className="text-5xl font-extrabold text-neutral-300 font-mono">404</span>
          <h1 className="text-xl sm:text-2xl font-bold font-serif-headline text-neutral-900 mt-2 mb-2">
            Sports Report Not Found
          </h1>
          <p className="text-sm text-neutral-600 max-w-sm mx-auto mb-6">
            The page or match report you are looking for does not exist, has expired, or has been
            relocated.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back to CricFot Homepage</span>
          </Link>
        </div>
      </Container>
    </div>
  );
};
