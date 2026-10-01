'use client';
import { ExternalLink, Sparkles } from "lucide-react";
const SPONSORED_STORIES = [
  {
    id: "sp-1",
    title: "\u09AC\u09BF\u09AA\u09BF\u098F\u09B2 \u09AB\u09CD\u09AF\u09BE\u09A8\u09CD\u099F\u09BE\u09B8\u09BF \u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F \u09E8\u09E6\u09E8\u09EC: \u09A8\u09BF\u099C\u09C7\u09B0 \u098F\u0995\u09BE\u09A6\u09B6 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C7 \u099C\u09BF\u09A4\u09C7 \u09A8\u09BF\u09A8 \u0986\u0995\u09B0\u09CD\u09B7\u09A3\u09C0\u09AF\u09BC \u09AE\u09C7\u0997\u09BE \u09AA\u09CD\u09B0\u09BE\u0987\u099C",
    sponsor: "\u0995\u09CD\u09B0\u09BF\u0995\u09AA\u09CD\u09B2\u09C7 \u09AB\u09CD\u09AF\u09BE\u09A8\u09CD\u099F\u09BE\u09B8\u09BF \u09B8\u09CD\u09AA\u09CB\u09B0\u09CD\u099F\u09B8",
    category: "\u0997\u09C7\u09AE\u09BF\u0982 \u0993 \u09AA\u09C1\u09B0\u09B8\u09CD\u0995\u09BE\u09B0",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80",
    ctaText: "\u098F\u0996\u09A8\u0987 \u0996\u09C7\u09B2\u09C1\u09A8"
  },
  {
    id: "sp-2",
    title: "\u09AA\u09CD\u09B0\u09AB\u09C7\u09B6\u09A8\u09BE\u09B2 \u09B8\u09CD\u09AA\u09CB\u09B0\u09CD\u099F\u09B8 \u09AB\u09BF\u099F\u09A8\u09C7\u09B8 \u099F\u09CD\u09B0\u09CD\u09AF\u09BE\u0995\u09BE\u09B0: \u09B9\u09BE\u09B0\u09CD\u099F \u09B0\u09C7\u099F \u0993 \u09B0\u09BE\u09A8\u09BF\u0982 \u09AA\u09C7\u09B8 \u09AE\u09A8\u09BF\u099F\u09B0\u09BF\u0982\u09AF\u09BC\u09C7 \u09B8\u09CD\u09AE\u09BE\u09B0\u09CD\u099F \u099A\u09AF\u09BC\u09C7\u09B8",
    sponsor: "\u0985\u09CD\u09AF\u09BE\u09A5\u09B2\u09C7\u099F \u09AA\u09CD\u09B0\u09CB \u0997\u09CD\u09AF\u09BE\u099C\u09C7\u099F\u09B8",
    category: "\u09B8\u09CD\u09AE\u09BE\u09B0\u09CD\u099F \u0997\u09BF\u09AF\u09BC\u09BE\u09B0",
    image: "https://images.unsplash.com/photo-1510519138161-58474dfab9c8?auto=format&fit=crop&w=600&q=80",
    ctaText: "\u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8"
  },
  {
    id: "sp-3",
    title: "\u0987\u0989\u09B0\u09CB\u09AA\u09BF\u09AF\u09BC\u09BE\u09A8 \u09AB\u09C1\u099F\u09AC\u09B2\u09C7\u09B0 \u0985\u09AB\u09BF\u09B6\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AE\u09BE\u09B0\u09CD\u099A\u09C7\u09A8\u09CD\u09A1\u09BE\u0987\u099C: \u0985\u09B0\u09BF\u099C\u09BF\u09A8\u09BE\u09B2 \u0995\u09CD\u09B2\u09BE\u09AC \u099C\u09BE\u09B0\u09CD\u09B8\u09BF \u098F\u0996\u09A8 \u09A2\u09BE\u0995\u09BE\u09AF\u09BC \u09B9\u09CB\u09AE \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF",
    sponsor: "\u09B8\u09CD\u09AA\u09CB\u09B0\u09CD\u099F\u09B8 \u099C\u09CB\u09A8 \u09A2\u09BE\u0995\u09BE",
    category: "\u0985\u09AB\u09BF\u09B8\u09BF\u09AF\u09BC\u09BE\u09B2 \u099C\u09BE\u09B0\u09CD\u09B8\u09BF",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80",
    ctaText: "\u0995\u09BE\u09B2\u09C7\u0995\u09B6\u09A8 \u09A6\u09C7\u0996\u09C1\u09A8"
  }
];
export const SponsoredArticleGrid = ({
  className = ""
}) => {
  return <section className={`pt-8 border-t border-neutral-200 ${className}`} id="sponsored-content-grid">
      {
    /* Header with Sponsored Marker */
  }
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-200">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-xs bg-amber-100 text-amber-800 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-neutral-900 font-sans">
              স্পন্সরড প্রতিবেদন ও পার্টনার সংবাদ
            </h3>
          </div>
        </div>

        <span className="text-[10px] text-neutral-400 font-sans uppercase tracking-wider bg-neutral-100 px-2 py-0.5 rounded-2xs">
          বিজ্ঞাপন ও স্পন্সর
        </span>
      </div>

      {
    /* Grid of 3 sponsored items */
  }
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {SPONSORED_STORIES.map((item) => <div
    key={item.id}
    className="group bg-white border border-neutral-200 rounded-xs overflow-hidden flex flex-col justify-between hover:shadow-xs hover:border-neutral-300 transition-all"
  >
            <div>
              {
    /* Image with Sponsored Overlays */
  }
              <div className="relative aspect-16/10 bg-neutral-950 overflow-hidden">
                <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
    loading="lazy"
  />
                <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-xs text-amber-300 text-[9px] font-bold px-1.5 py-0.5 rounded-2xs uppercase tracking-wide">
                  স্পন্সরড
                </div>
              </div>

              {
    /* Body */
  }
              <div className="p-3">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wide block mb-1 font-sans">
                  {item.sponsor}
                </span>

                <h4 className="text-xs sm:text-sm font-bold font-serif-bengali text-neutral-950 leading-snug line-clamp-2 group-hover:text-red-700 transition-colors">
                  <a href="#sponsor-link" onClick={(e) => e.preventDefault()}>
                    {item.title}
                  </a>
                </h4>
              </div>
            </div>

            {
    /* Footer CTA */
  }
            <div className="p-3 pt-0 flex items-center justify-between text-[11px] font-sans">
              <span className="text-neutral-400 text-[10px]">{item.category}</span>
              <a
    href="#sponsor-link"
    onClick={(e) => e.preventDefault()}
    className="text-red-700 hover:text-red-900 font-bold inline-flex items-center gap-1 group-hover:underline"
  >
                <span>{item.ctaText}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>)}
      </div>
    </section>;
};
