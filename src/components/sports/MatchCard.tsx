import React from 'react';
import { Match } from '../../types';
import { Link } from '../../router/Link';
import { Trophy, Shield } from 'lucide-react';

interface MatchCardProps {
  match: Match;
  className?: string;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match, className = '' }) => {
  const isCricket = match.sport === 'cricket';
  const isLive = match.status === 'live';
  const isUpcoming = match.status === 'upcoming';
  const isCompleted = match.status === 'completed';

  return (
    <div
      className={`bg-white border border-neutral-200 rounded-xs p-3.5 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between relative overflow-hidden ${className}`}
    >
      {/* Top Bar: Competition + Status Badge + Explicit Demo/Sample Data Label */}
      <div>
        <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-neutral-100 text-[11px]">
          <div className="flex items-center gap-1.5 truncate text-neutral-600">
            {isCricket ? (
              <Trophy className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            ) : (
              <Shield className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            )}
            <span className="font-semibold truncate">{match.competitionBangla}</span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {/* Required Demo Tag to prevent misrepresenting mock data as real scores */}
            <span className="text-[9px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-500 px-1.5 py-0.5 rounded-xs border border-neutral-200">
              নমুনা তথ্য
            </span>

            {isLive && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-red-50 text-red-600 border border-red-200 px-1.5 py-0.5 rounded-xs animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                {match.statusText}
              </span>
            )}
            {isUpcoming && (
              <span className="text-[10px] font-medium bg-amber-50 text-amber-800 border border-amber-200 px-1.5 py-0.5 rounded-xs">
                {match.statusText}
              </span>
            )}
            {isCompleted && (
              <span className="text-[10px] font-medium bg-neutral-100 text-neutral-600 border border-neutral-200 px-1.5 py-0.5 rounded-xs">
                {match.statusText}
              </span>
            )}
          </div>
        </div>

        {/* Teams & Scores */}
        <div className="space-y-2 py-1">
          {/* Team 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <div
                className={`w-3 h-3 rounded-full ${
                  match.team1.color || (isCricket ? 'bg-emerald-600' : 'bg-red-600')
                } shrink-0`}
              />
              <span className="text-xs sm:text-sm font-bold text-neutral-900 truncate">
                {match.team1.banglaName}
              </span>
            </div>

            <div className="text-right shrink-0">
              <span className="text-xs sm:text-sm font-black font-mono text-neutral-950">
                {match.team1.score || '-'}
              </span>
              {match.team1.overs && (
                <span className="text-[10px] text-neutral-500 ml-1.5">
                  ({match.team1.overs})
                </span>
              )}
            </div>
          </div>

          {/* Team 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <div
                className={`w-3 h-3 rounded-full ${
                  match.team2.color || (isCricket ? 'bg-blue-600' : 'bg-neutral-800')
                } shrink-0`}
              />
              <span className="text-xs sm:text-sm font-bold text-neutral-900 truncate">
                {match.team2.banglaName}
              </span>
            </div>

            <div className="text-right shrink-0">
              <span className="text-xs sm:text-sm font-black font-mono text-neutral-950">
                {match.team2.score || '-'}
              </span>
              {match.team2.overs && (
                <span className="text-[10px] text-neutral-500 ml-1.5">
                  ({match.team2.overs})
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer: Result description / Venue */}
      <div className="pt-2 mt-2 border-t border-neutral-100 flex items-center justify-between text-[11px]">
        <span className="text-neutral-600 truncate font-medium">
          {match.result || match.venue}
        </span>
        <Link
          href="/live"
          className="text-emerald-700 hover:text-emerald-800 font-bold shrink-0 hover:underline"
        >
          স্কোরকার্ড →
        </Link>
      </div>
    </div>
  );
};
