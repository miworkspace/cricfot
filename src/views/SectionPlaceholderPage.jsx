import { Container } from "../components/common/Container";
import { Link } from "../router/Link";
import { Calendar, Trophy, BarChart3, Video, ArrowLeft, Clock } from "lucide-react";
export const SectionPlaceholderPage = ({
  title,
  banglaTitle,
  description,
  type
}) => {
  const getIcon = () => {
    switch (type) {
      case "matches":
        return <Calendar className="w-8 h-8 text-neutral-800" />;
      case "results":
        return <Trophy className="w-8 h-8 text-neutral-800" />;
      case "analysis":
        return <BarChart3 className="w-8 h-8 text-neutral-800" />;
      case "videos":
        return <Video className="w-8 h-8 text-neutral-800" />;
      default:
        return <Clock className="w-8 h-8 text-neutral-800" />;
    }
  };
  return <div className="py-8 sm:py-12">
      <Container size="narrow">
        <div className="bg-white border border-neutral-200 p-6 sm:p-10 rounded-xs shadow-xs text-center space-y-5">
          <div className="mx-auto w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center border border-neutral-200">
            {getIcon()}
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-neutral-100 text-neutral-700 text-xs font-semibold rounded-xs mb-2">
              <span>{title}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-sans text-neutral-900">
              {banglaTitle}
            </h1>
            <p className="text-sm text-neutral-600 max-w-md mx-auto mt-2 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="p-4 bg-neutral-50 rounded-xs border border-neutral-200 text-xs text-neutral-600 max-w-md mx-auto">
            <p className="font-semibold text-neutral-800 mb-1">
              পরবর্তী ধাপে এই বিভাগের বিস্তারিত ডেটা ও কার্যকারিতা যুক্ত করা হবে।
            </p>
            <p className="text-neutral-500">
              বর্তমানে ক্রিকফুটের গ্লোবাল হেডার ও নেভিগেশন সিস্টেম সফলভাবে সংযুক্ত রয়েছে।
            </p>
          </div>

          <div className="pt-2">
            <Link
    href="/"
    className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-xs transition-colors"
  >
              <ArrowLeft className="w-4 h-4" />
              <span>প্রচ্ছদে ফিরে যান</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>;
};
