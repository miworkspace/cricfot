import React, { useState, useEffect } from 'react';
import { HelpCircle, CheckCircle, XCircle, Award, RotateCcw, Sparkles } from 'lucide-react';
import { toBanglaNumber } from '../../utils/banglaUtils';

interface QuizQuestion {
  id: number;
  question: string;
  sport: 'cricket' | 'football';
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'বাংলাদেশ টেস্ট ক্রিকেটের ইতিহাসে প্রথম ডাবল সেঞ্চুরি হাঁকিয়েছিলেন কোন ব্যাটসম্যান?',
    sport: 'cricket',
    options: ['সাকিব আল হাসান', 'মুশফিকুর রহিম', 'তামিম ইকবাল', 'মমিনুল হক'],
    correctAnswerIndex: 1,
    explanation: '২০১৩ সালের মার্চে শ্রীলঙ্কার গলে অনুষ্ঠিত টেস্টে মুশফিকুর রহিম ২০০ রানের ঐতিহাসিক ইনিংস খেলেন।',
  },
  {
    id: 2,
    question: 'উয়েফা চ্যাম্পিয়ন্স লিগের ইতিহাসে সবচেয়ে বেশি শিরোপা জয়ী ক্লাব কোনটি?',
    sport: 'football',
    options: ['বায়ার্ন মিউনিখ', 'বার্সেলোনা', 'রিয়াল মাদ্রিদ', 'এসি মিলান'],
    correctAnswerIndex: 2,
    explanation: 'রিয়াল মাদ্রিদ রেকর্ড ১৫ বার ইউরোপ সেরা ক্লাব হিসেবে চ্যাম্পিয়ন্স লিগ ট্রফি জিতেছে।',
  },
  {
    id: 3,
    question: 'বিপিএলের (BPL) এক আসরে সর্বোচ্চ রান সংগ্রাহক ব্যাটসম্যান কে ছিলেন?',
    sport: 'cricket',
    options: ['নাজমুল হোসেন শান্ত', 'ক্রিস গেইল', 'রাইলি রুশো', 'তামিম ইকবাল'],
    correctAnswerIndex: 2,
    explanation: '২০১৯ সালের বিপিএল আসরে রাইলি রুশো রংপুর রাইডার্সের হয়ে সর্বোচ্চ ৫৫৮ রান করেছিলেন।',
  },
];

export const DailySportsQuiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const question = QUIZ_QUESTIONS[currentIdx];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === question.correctAnswerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setCurrentIdx((prev) => (prev + 1) % QUIZ_QUESTIONS.length);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setCurrentIdx(0);
    setScore(0);
  };

  return (
    <div className="bg-white border border-neutral-200/90 rounded-xs p-4 sm:p-5 shadow-2xs" id="daily-sports-quiz">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xs bg-amber-50 text-amber-600 flex items-center justify-center">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block font-sans">
              দৈনিক ক্রীড়া কুইজ
            </span>
            <h3 className="text-sm font-bold text-neutral-900 font-sans">
              আপনার ক্রীড়া জ্ঞান যাচাই করুন
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-600">
          <span className="bg-neutral-100 px-2 py-0.5 rounded-xs">
            প্রশ্ন: {toBanglaNumber(currentIdx + 1)}/{toBanglaNumber(QUIZ_QUESTIONS.length)}
          </span>
        </div>
      </div>

      {/* Question */}
      <p className="text-sm sm:text-base font-bold font-serif-bengali text-neutral-950 leading-snug mb-3">
        {question.question}
      </p>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3.5">
        {question.options.map((opt, idx) => {
          let stateStyle = 'border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50 text-neutral-800';

          if (isAnswered) {
            if (idx === question.correctAnswerIndex) {
              stateStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
            } else if (selectedOption === idx) {
              stateStyle = 'border-red-500 bg-red-50 text-red-900 font-bold';
            } else {
              stateStyle = 'border-neutral-200 bg-neutral-50 text-neutral-400 opacity-60';
            }
          }

          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelect(idx)}
              disabled={isAnswered}
              className={`p-2.5 rounded-xs border text-left text-xs font-sans transition-all flex items-center justify-between gap-2 ${stateStyle}`}
            >
              <span>{opt}</span>
              {isAnswered && idx === question.correctAnswerIndex && (
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              )}
              {isAnswered && selectedOption === idx && idx !== question.correctAnswerIndex && (
                <XCircle className="w-4 h-4 text-red-600 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation Box */}
      {isAnswered && (
        <div className="p-3 bg-neutral-50 border-l-2 border-emerald-600 rounded-r-xs mb-3 text-xs text-neutral-700 font-sans leading-relaxed animate-in fade-in duration-200">
          <p className="font-semibold text-neutral-900 mb-0.5">ব্যাখ্যা:</p>
          <p>{question.explanation}</p>
        </div>
      )}

      {/* Footer controls */}
      <div className="pt-2.5 border-t border-neutral-100 flex items-center justify-between text-xs font-sans">
        <div className="text-neutral-500">
          সঠিক উত্তর: <span className="font-bold text-neutral-900">{toBanglaNumber(score)}</span>/{toBanglaNumber(QUIZ_QUESTIONS.length)}
        </div>

        <div className="flex items-center gap-2">
          {isAnswered ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-3 py-1 bg-neutral-900 text-white rounded-xs text-xs font-semibold hover:bg-neutral-800 transition-colors"
            >
              পরবর্তী প্রশ্ন →
            </button>
          ) : (
            <span className="text-[11px] text-neutral-400">সঠিক বিকল্পটি নির্বাচন করুন</span>
          )}
        </div>
      </div>
    </div>
  );
};
