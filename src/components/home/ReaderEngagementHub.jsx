import { DailySportsPoll } from "./DailySportsPoll";
import { DailySportsQuiz } from "./DailySportsQuiz";
import { PhotoOfTheDay } from "./PhotoOfTheDay";
import { SectionHeader } from "../common/SectionHeader";
import { Sparkles } from "lucide-react";
export const ReaderEngagementHub = ({
  className = ""
}) => {
  return <section className={`py-6 sm:py-8 ${className}`} id="reader-engagement-hub">
      <SectionHeader
    title="পাঠক কর্নার ও ইন্টারেক্টিভ স্পোর্টস"
    subtitle="আজকের মতামত জরিপ, দৈনিক ক্রীড়া কুইজ এবং সেরা ফটোফিচার"
    icon={<Sparkles className="w-5 h-5 text-red-600" />}
    badge="পাঠক প্রতিক্রিয়া"
  />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
        {
    /* Column 1: Daily Sports Poll */
  }
        <div className="flex flex-col h-full">
          <DailySportsPoll />
        </div>

        {
    /* Column 2: Daily Sports Trivia Quiz */
  }
        <div className="flex flex-col h-full">
          <DailySportsQuiz />
        </div>

        {
    /* Column 3: Sports Photo of the Day */
  }
        <div className="flex flex-col h-full md:col-span-2 lg:col-span-1">
          <PhotoOfTheDay />
        </div>
      </div>
    </section>;
};
