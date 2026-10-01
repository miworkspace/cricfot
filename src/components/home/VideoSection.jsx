import { SectionHeader } from "../common/SectionHeader";
import { VideoCard } from "../news/VideoCard";
import { PlayCircle } from "lucide-react";
export const VideoSection = ({
  videos,
  className = ""
}) => {
  return <section className={`py-6 sm:py-8 ${className}`} id="video-section">
      <SectionHeader
    title="ভিডিও"
    subtitle="ম্যাচ হাইলাইটস, সংবাদ সম্মেলন ও এক্সক্লুসিভ সাক্ষাৎকার"
    viewAllHref="/videos"
    viewAllText="সব ভিডিও দেখুন →"
    icon={<PlayCircle className="w-5 h-5 text-red-600" />}
    badge="হাইলাইটস"
  />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((video) => <VideoCard key={video.id} video={video} />)}
      </div>
    </section>;
};
