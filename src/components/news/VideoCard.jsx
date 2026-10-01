import { Link } from "../../router/Link";
import { Play } from "lucide-react";
import { SportBadge } from "../sports/SportBadge";
export const VideoCard = ({ video, className = "" }) => {
  return <article
    className={`group bg-white border border-neutral-200/90 rounded-xs overflow-hidden shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between ${className}`}
  >
      <div>
        {
    /* Video Thumbnail with Play Button Overlay */
  }
        <div className="relative aspect-16/9 w-full bg-neutral-950 overflow-hidden">
          <img
    src={video.thumbnail}
    alt={video.banglaTitle || video.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
    loading="lazy"
  />

          {
    /* Dark Overlay Gradient */
  }
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

          {
    /* Play Icon Button */
  }
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-600 transition-all">
              <Play className="w-5 h-5 ml-0.5 fill-white" />
            </div>
          </div>

          {
    /* Duration Badge */
  }
          <div className="absolute bottom-2.5 right-2.5 bg-neutral-950/90 text-white text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-xs">
            {video.duration}
          </div>

          {
    /* Sport Badge */
  }
          <div className="absolute top-2.5 left-2.5">
            <SportBadge sport={video.sport} size="sm" showIcon={false} />
          </div>
        </div>

        {
    /* Video Metadata */
  }
        <div className="p-3.5">
          <div className="flex items-center gap-1.5 text-[11px] mb-1.5 text-neutral-500">
            <span className="font-semibold text-neutral-700">{video.category}</span>
            {video.views && <>
                <span className="text-neutral-300">•</span>
                <span>{video.views}</span>
              </>}
          </div>

          <h4 className="text-xs sm:text-sm font-bold font-serif-headline text-neutral-900 leading-snug line-clamp-2 group-hover:text-red-700 transition-colors">
            <Link href={`/news/${video.slug}`}>
              {video.banglaTitle || video.title}
            </Link>
          </h4>
        </div>
      </div>

      <div className="px-3.5 pb-3 pt-0">
        <Link
    href={`/news/${video.slug}`}
    className="text-[11px] font-bold text-red-600 group-hover:text-red-800 flex items-center gap-1"
  >
          ভিডিও দেখুন →
        </Link>
      </div>
    </article>;
};
