'use client';
import { useState } from "react";
import { CheckCircle, XCircle, Award } from "lucide-react";
import { toBanglaNumber } from "../../utils/banglaUtils";
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u099F\u09C7\u09B8\u09CD\u099F \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F\u09C7\u09B0 \u0987\u09A4\u09BF\u09B9\u09BE\u09B8\u09C7 \u09AA\u09CD\u09B0\u09A5\u09AE \u09A1\u09BE\u09AC\u09B2 \u09B8\u09C7\u099E\u09CD\u099A\u09C1\u09B0\u09BF \u09B9\u09BE\u0981\u0995\u09BF\u09AF\u09BC\u09C7\u099B\u09BF\u09B2\u09C7\u09A8 \u0995\u09CB\u09A8 \u09AC\u09CD\u09AF\u09BE\u099F\u09B8\u09AE\u09CD\u09AF\u09BE\u09A8?",
    sport: "cricket",
    options: ["\u09B8\u09BE\u0995\u09BF\u09AC \u0986\u09B2 \u09B9\u09BE\u09B8\u09BE\u09A8", "\u09AE\u09C1\u09B6\u09AB\u09BF\u0995\u09C1\u09B0 \u09B0\u09B9\u09BF\u09AE", "\u09A4\u09BE\u09AE\u09BF\u09AE \u0987\u0995\u09AC\u09BE\u09B2", "\u09AE\u09AE\u09BF\u09A8\u09C1\u09B2 \u09B9\u0995"],
    correctAnswerIndex: 1,
    explanation: "\u09E8\u09E6\u09E7\u09E9 \u09B8\u09BE\u09B2\u09C7\u09B0 \u09AE\u09BE\u09B0\u09CD\u099A\u09C7 \u09B6\u09CD\u09B0\u09C0\u09B2\u0999\u09CD\u0995\u09BE\u09B0 \u0997\u09B2\u09C7 \u0985\u09A8\u09C1\u09B7\u09CD\u09A0\u09BF\u09A4 \u099F\u09C7\u09B8\u09CD\u099F\u09C7 \u09AE\u09C1\u09B6\u09AB\u09BF\u0995\u09C1\u09B0 \u09B0\u09B9\u09BF\u09AE \u09E8\u09E6\u09E6 \u09B0\u09BE\u09A8\u09C7\u09B0 \u0990\u09A4\u09BF\u09B9\u09BE\u09B8\u09BF\u0995 \u0987\u09A8\u09BF\u0982\u09B8 \u0996\u09C7\u09B2\u09C7\u09A8\u0964"
  },
  {
    id: 2,
    question: "\u0989\u09AF\u09BC\u09C7\u09AB\u09BE \u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09CD\u09B8 \u09B2\u09BF\u0997\u09C7\u09B0 \u0987\u09A4\u09BF\u09B9\u09BE\u09B8\u09C7 \u09B8\u09AC\u099A\u09C7\u09AF\u09BC\u09C7 \u09AC\u09C7\u09B6\u09BF \u09B6\u09BF\u09B0\u09CB\u09AA\u09BE \u099C\u09AF\u09BC\u09C0 \u0995\u09CD\u09B2\u09BE\u09AC \u0995\u09CB\u09A8\u099F\u09BF?",
    sport: "football",
    options: ["\u09AC\u09BE\u09AF\u09BC\u09BE\u09B0\u09CD\u09A8 \u09AE\u09BF\u0989\u09A8\u09BF\u0996", "\u09AC\u09BE\u09B0\u09CD\u09B8\u09C7\u09B2\u09CB\u09A8\u09BE", "\u09B0\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AE\u09BE\u09A6\u09CD\u09B0\u09BF\u09A6", "\u098F\u09B8\u09BF \u09AE\u09BF\u09B2\u09BE\u09A8"],
    correctAnswerIndex: 2,
    explanation: "\u09B0\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AE\u09BE\u09A6\u09CD\u09B0\u09BF\u09A6 \u09B0\u09C7\u0995\u09B0\u09CD\u09A1 \u09E7\u09EB \u09AC\u09BE\u09B0 \u0987\u0989\u09B0\u09CB\u09AA \u09B8\u09C7\u09B0\u09BE \u0995\u09CD\u09B2\u09BE\u09AC \u09B9\u09BF\u09B8\u09C7\u09AC\u09C7 \u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09CD\u09B8 \u09B2\u09BF\u0997 \u099F\u09CD\u09B0\u09AB\u09BF \u099C\u09BF\u09A4\u09C7\u099B\u09C7\u0964"
  },
  {
    id: 3,
    question: "\u09AC\u09BF\u09AA\u09BF\u098F\u09B2\u09C7\u09B0 (BPL) \u098F\u0995 \u0986\u09B8\u09B0\u09C7 \u09B8\u09B0\u09CD\u09AC\u09CB\u099A\u09CD\u099A \u09B0\u09BE\u09A8 \u09B8\u0982\u0997\u09CD\u09B0\u09BE\u09B9\u0995 \u09AC\u09CD\u09AF\u09BE\u099F\u09B8\u09AE\u09CD\u09AF\u09BE\u09A8 \u0995\u09C7 \u099B\u09BF\u09B2\u09C7\u09A8?",
    sport: "cricket",
    options: ["\u09A8\u09BE\u099C\u09AE\u09C1\u09B2 \u09B9\u09CB\u09B8\u09C7\u09A8 \u09B6\u09BE\u09A8\u09CD\u09A4", "\u0995\u09CD\u09B0\u09BF\u09B8 \u0997\u09C7\u0987\u09B2", "\u09B0\u09BE\u0987\u09B2\u09BF \u09B0\u09C1\u09B6\u09CB", "\u09A4\u09BE\u09AE\u09BF\u09AE \u0987\u0995\u09AC\u09BE\u09B2"],
    correctAnswerIndex: 2,
    explanation: "\u09E8\u09E6\u09E7\u09EF \u09B8\u09BE\u09B2\u09C7\u09B0 \u09AC\u09BF\u09AA\u09BF\u098F\u09B2 \u0986\u09B8\u09B0\u09C7 \u09B0\u09BE\u0987\u09B2\u09BF \u09B0\u09C1\u09B6\u09CB \u09B0\u0982\u09AA\u09C1\u09B0 \u09B0\u09BE\u0987\u09A1\u09BE\u09B0\u09CD\u09B8\u09C7\u09B0 \u09B9\u09AF\u09BC\u09C7 \u09B8\u09B0\u09CD\u09AC\u09CB\u099A\u09CD\u099A \u09EB\u09EB\u09EE \u09B0\u09BE\u09A8 \u0995\u09B0\u09C7\u099B\u09BF\u09B2\u09C7\u09A8\u0964"
  }
];
export const DailySportsQuiz = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const question = QUIZ_QUESTIONS[currentIdx];
  const handleSelect = (idx) => {
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
  return <div className="bg-white border border-neutral-200/90 rounded-xs p-4 sm:p-5 shadow-2xs" id="daily-sports-quiz">
      {
    /* Header */
  }
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

      {
    /* Question */
  }
      <p className="text-sm sm:text-base font-bold font-serif-bengali text-neutral-950 leading-snug mb-3">
        {question.question}
      </p>

      {
    /* Options */
  }
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3.5">
        {question.options.map((opt, idx) => {
    let stateStyle = "border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50 text-neutral-800";
    if (isAnswered) {
      if (idx === question.correctAnswerIndex) {
        stateStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold";
      } else if (selectedOption === idx) {
        stateStyle = "border-red-500 bg-red-50 text-red-900 font-bold";
      } else {
        stateStyle = "border-neutral-200 bg-neutral-50 text-neutral-400 opacity-60";
      }
    }
    return <button
      key={idx}
      type="button"
      onClick={() => handleSelect(idx)}
      disabled={isAnswered}
      className={`p-2.5 rounded-xs border text-left text-xs font-sans transition-all flex items-center justify-between gap-2 ${stateStyle}`}
    >
              <span>{opt}</span>
              {isAnswered && idx === question.correctAnswerIndex && <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />}
              {isAnswered && selectedOption === idx && idx !== question.correctAnswerIndex && <XCircle className="w-4 h-4 text-red-600 shrink-0" />}
            </button>;
  })}
      </div>

      {
    /* Explanation Box */
  }
      {isAnswered && <div className="p-3 bg-neutral-50 border-l-2 border-emerald-600 rounded-r-xs mb-3 text-xs text-neutral-700 font-sans leading-relaxed animate-in fade-in duration-200">
          <p className="font-semibold text-neutral-900 mb-0.5">ব্যাখ্যা:</p>
          <p>{question.explanation}</p>
        </div>}

      {
    /* Footer controls */
  }
      <div className="pt-2.5 border-t border-neutral-100 flex items-center justify-between text-xs font-sans">
        <div className="text-neutral-500">
          সঠিক উত্তর: <span className="font-bold text-neutral-900">{toBanglaNumber(score)}</span>/{toBanglaNumber(QUIZ_QUESTIONS.length)}
        </div>

        <div className="flex items-center gap-2">
          {isAnswered ? <button
    type="button"
    onClick={handleNext}
    className="px-3 py-1 bg-neutral-900 text-white rounded-xs text-xs font-semibold hover:bg-neutral-800 transition-colors"
  >
              পরবর্তী প্রশ্ন →
            </button> : <span className="text-[11px] text-neutral-400">সঠিক বিকল্পটি নির্বাচন করুন</span>}
        </div>
      </div>
    </div>;
};
