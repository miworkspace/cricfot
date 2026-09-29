import React, { useState, useEffect } from 'react';
import { BarChart3, CheckCircle2, Users, Trophy } from 'lucide-react';
import { toBanglaNumber } from '../../utils/banglaUtils';

interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export const DailySportsPoll: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [options, setOptions] = useState<PollOption[]>([
    {
      id: 'opt-1',
      text: 'হ্যাঁ, ঘরের মাঠে স্পিন ও পেস আক্রমণে সিরিজ জয়ের শতভাগ সম্ভাবনা রয়েছে',
      votes: 1420,
    },
    {
      id: 'opt-2',
      text: 'কঠিন লড়াই হবে, তবে সিরিজ ড্র হওয়ার সম্ভাবনা বেশি',
      votes: 685,
    },
    {
      id: 'opt-3',
      text: 'অস্ট্রেলিয়ার অভিজ্ঞতা ও ব্যাটিং গভীরতা এগিয়ে থাকবে',
      votes: 312,
    },
  ]);

  useEffect(() => {
    try {
      const storedVote = localStorage.getItem('cricfot_poll_vote_2026_aus');
      if (storedVote) {
        setSelectedOption(storedVote);
        setHasVoted(true);
      }
    } catch {
      // Ignore localStorage restrictions
    }
  }, []);

  const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0);

  const handleVote = (optionId: string) => {
    if (hasVoted) return;

    setOptions((prev) =>
      prev.map((opt) => (opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt))
    );
    setSelectedOption(optionId);
    setHasVoted(true);

    try {
      localStorage.setItem('cricfot_poll_vote_2026_aus', optionId);
    } catch {
      // Ignore
    }
  };

  return (
    <div className="bg-white border border-neutral-200/90 rounded-xs p-4 sm:p-5 shadow-2xs" id="daily-sports-poll">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xs bg-red-50 text-red-600 flex items-center justify-center">
            <BarChart3 className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-red-700 uppercase tracking-wider block font-sans">
              পাঠক মতামত ও জরিপ
            </span>
            <h3 className="text-sm font-bold text-neutral-900 font-sans">
              আজকের আলোচিত প্রশ্ন
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-neutral-500 font-sans">
          <Users className="w-3.5 h-3.5 text-neutral-400" />
          <span>{toBanglaNumber(totalVotes)} ভোট</span>
        </div>
      </div>

      {/* Question */}
      <p className="text-sm sm:text-base font-bold font-serif-bengali text-neutral-950 leading-snug mb-4">
        "আসন্ন বিশ্ব টেস্ট চ্যাম্পিয়নশিপে ঘরের মাঠে অস্ট্রেলিয়ার বিপক্ষে বাংলাদেশ কি ঐতিহাসিক সিরিজ জয় করতে পারবে?"
      </p>

      {/* Options */}
      <div className="space-y-2.5 mb-4">
        {options.map((option) => {
          const percentage = totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0;
          const isSelected = selectedOption === option.id;

          return (
            <div key={option.id} className="relative">
              <button
                type="button"
                onClick={() => handleVote(option.id)}
                disabled={hasVoted}
                className={`w-full text-left p-3 rounded-xs border transition-all text-xs sm:text-sm font-sans flex flex-col gap-1.5 relative overflow-hidden ${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50/50 text-neutral-900 font-semibold'
                    : hasVoted
                    ? 'border-neutral-200 bg-neutral-50/70 text-neutral-700 cursor-default'
                    : 'border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50/80 text-neutral-800'
                }`}
              >
                {/* Progress bar fill if voted */}
                {hasVoted && (
                  <div
                    className={`absolute left-0 top-0 bottom-0 transition-all duration-700 pointer-events-none opacity-20 ${
                      isSelected ? 'bg-emerald-600' : 'bg-neutral-400'
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                )}

                <div className="flex items-center justify-between gap-2 z-10 w-full">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-600 text-white'
                          : 'border-neutral-300 bg-white'
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </span>
                    <span className="leading-snug">{option.text}</span>
                  </div>

                  {hasVoted && (
                    <span className="text-xs font-mono font-bold shrink-0 ml-2">
                      %{toBanglaNumber(percentage)}
                    </span>
                  )}
                </div>
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer / Status */}
      <div className="pt-2.5 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500 font-sans">
        {hasVoted ? (
          <span className="text-emerald-700 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> আপনার মূল্যবান মতামতের জন্য ধন্যবাদ!
          </span>
        ) : (
          <span>যেকোনো একটি বিকল্পে ক্লিক করে আপনার ভোট দিন</span>
        )}
        <span className="text-neutral-400">ফলাফল নিয়মিত আপডেট হয়</span>
      </div>
    </div>
  );
};
