import React from 'react';
import { Container } from '../components/common/Container';
import { Link } from '../router/Link';
import { Radio, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';

export const LivePage: React.FC = () => {
  return (
    <div className="py-8">
      <Container size="narrow">
        {/* Page Header */}
        <div className="border-b border-neutral-200 pb-4 mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider rounded-xs mb-2">
            <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span>Match Center Protocol</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif-headline text-neutral-900">
            CricFot Live Match Center
          </h1>
          <p className="text-sm text-neutral-600 mt-1">
            Real-time Cricket & Football Tracking Infrastructure (Phase 2)
          </p>
        </div>

        {/* Editorial Integrity Notice */}
        <div className="bg-white border border-neutral-200 p-6 sm:p-8 rounded-sm shadow-xs space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-neutral-100 rounded-xs border border-neutral-200 shrink-0">
              <ShieldAlert className="w-6 h-6 text-neutral-800" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-neutral-900">
                Zero Deceptive Data Policy
              </h2>
              <p className="text-sm text-neutral-600 mt-1 leading-relaxed">
                As a serious sports journalism publication, CricFot never displays simulated,
                random, or fabricated scoreboards. Live scores will go live once official API
                provider synchronization is connected in the next project phase.
              </p>
            </div>
          </div>

          <div className="border-t border-neutral-100 pt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
              Planned Live Score Architecture (Upcoming Phase):
            </h3>
            <ul className="space-y-3 text-sm text-neutral-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Cricket Ball-by-Ball Engine:</strong> Verified feeds for Bangladesh
                  Tigers internationals, BPL, IPL, and ICC global tournaments with real-time wagon
                  wheels and run-rate worms.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Football Live Clock & Event Log:</strong> Minute-by-minute goal alerts,
                  cards, VAR decisions, and line-ups for BFF national fixtures and top European leagues.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Mobile-First Low Bandwidth Mode:</strong> Ultra-fast text updates optimized
                  for 3G/4G connectivity across Bangladesh.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-neutral-50 p-4 border border-neutral-200 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-neutral-600 font-medium text-center sm:text-left">
              In the meantime, explore our breaking dispatches and in-depth match analyses.
            </span>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shrink-0"
            >
              <span>Go To Latest News</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
