import React from 'react';
import { Match } from '../../types';
import { SectionHeader } from '../common/SectionHeader';
import { MatchCard } from '../sports/MatchCard';
import { Radio, AlertCircle } from 'lucide-react';
import { Link } from '../../router/Link';

interface LiveScoreSectionProps {
  matches: Match[];
  className?: string;
}

export const LiveScoreSection: React.FC<LiveScoreSectionProps> = ({
  matches,
  className = '',
}) => {
  return (
    <section
      className={`py-6 sm:py-8 bg-neutral-100/80 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-y border-neutral-200/90 ${className}`}
      id="live-scores-section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Live indicator */}
        <SectionHeader
          title="লাইভ স্কোর"
          subtitle="ক্রিকেট ও ফুটবলের চলমান, আসন্ন ও সাম্প্রতিক ম্যাচের ফলাফল"
          viewAllHref="/live"
          viewAllText="সব লাইভ স্কোর দেখুন →"
          badge="ম্যাচ সেন্টার"
          icon={<Radio className="w-5 h-5 text-red-600 animate-pulse" />}
        />

        {/* Demo Disclaimer notice - required to explicitly prevent presenting mock as real scores */}
        <div className="mb-4 bg-amber-50/90 border border-amber-200 text-amber-900 rounded-xs px-3 py-2 text-xs flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>নমুনা স্কোর ডেটা (Demo Data):</strong> স্পোর্টস ডাটা এপিআই সংযুক্তির পূর্বে উপস্থাপিত সকল লাইভ স্কোর এবং পরিসংখ্যান প্রদর্শনীমূলক।
            </span>
          </div>
          <Link
            href="/live"
            className="text-amber-900 font-bold underline shrink-0 hover:text-amber-950"
          >
            লাইভ পেজ
          </Link>
        </div>

        {/* Match Cards Grid - Responsive & mobile friendly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </section>
  );
};
