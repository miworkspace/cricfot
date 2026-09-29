/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './router/RouterContext';
import RootLayout from '../app/layout';
import HomePageApp from '../app/page';
import CricketPageApp from '../app/cricket/page';
import FootballPageApp from '../app/football/page';
import LivePageApp from '../app/live/page';
import MatchesPageApp from '../app/matches/page';
import ResultsPageApp from '../app/results/page';
import AnalysisPageApp from '../app/analysis/page';
import VideosPageApp from '../app/videos/page';
import NewsDetailPageApp from '../app/news/[slug]/page';
import SearchPageApp from '../app/search/page';
import NotFoundApp from '../app/not-found';
import { AdminRouter } from './components/admin/AdminRouter';

function AppContent() {
  const { route } = useRouter();

  if (route.name === 'admin') {
    return <AdminRouter />;
  }

  let pageComponent: React.ReactNode;

  switch (route.name) {
    case 'home':
      pageComponent = <HomePageApp />;
      break;
    case 'cricket':
      pageComponent = <CricketPageApp />;
      break;
    case 'football':
      pageComponent = <FootballPageApp />;
      break;
    case 'live':
      pageComponent = <LivePageApp />;
      break;
    case 'matches':
      pageComponent = <MatchesPageApp />;
      break;
    case 'results':
      pageComponent = <ResultsPageApp />;
      break;
    case 'analysis':
      pageComponent = <AnalysisPageApp />;
      break;
    case 'videos':
      pageComponent = <VideosPageApp />;
      break;
    case 'news-detail':
      pageComponent = <NewsDetailPageApp params={{ slug: route.params.slug }} />;
      break;
    case 'search':
      pageComponent = <SearchPageApp />;
      break;
    default:
      pageComponent = <NotFoundApp />;
      break;
  }

  return <RootLayout>{pageComponent}</RootLayout>;
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

