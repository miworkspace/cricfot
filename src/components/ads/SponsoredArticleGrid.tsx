import React from 'react';
import { ExternalLink, Sparkles, ShieldCheck } from 'lucide-react';

interface SponsoredItem {
  id: string;
  title: string;
  sponsor: string;
  category: string;
  image: string;
  ctaText: string;
}

const SPONSORED_STORIES: SponsoredItem[] = [
  {
    id: 'sp-1',
    title: 'বিপিএল ফ্যান্টাসি ক্রিকেট ২০২৬: নিজের একাদশ তৈরি করে জিতে নিন আকর্ষণীয় মেগা প্রাইজ',
    sponsor: 'ক্রিকপ্লে ফ্যান্টাসি স্পোর্টস',
    category: 'গেমিং ও পুরস্কার',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80',
    ctaText: 'এখনই খেলুন',
  },
  {
    id: 'sp-2',
    title: 'প্রফেশনাল স্পোর্টস ফিটনেস ট্র্যাকার: হার্ট রেট ও রানিং পেস মনিটরিংয়ে স্মার্ট চয়েস',
    sponsor: 'অ্যাথলেট প্রো গ্যাজেটস',
    category: 'স্মার্ট গিয়ার',
    image: 'https://images.unsplash.com/photo-1510519138161-58474dfab9c8?auto=format&fit=crop&w=600&q=80',
    ctaText: 'অর্ডার করুন',
  },
  {
    id: 'sp-3',
    title: 'ইউরোপিয়ান ফুটবলের অফিশিয়াল মার্চেন্ডাইজ: অরিজিনাল ক্লাব জার্সি এখন ঢাকায় হোম ডেলিভারি',
    sponsor: 'স্পোর্টস জোন ঢাকা',
    category: 'অফিসিয়াল জার্সি',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80',
    ctaText: 'কালেকশন দেখুন',
  },
];

interface SponsoredArticleGridProps {
  className?: string;
}

export const SponsoredArticleGrid: React.FC<SponsoredArticleGridProps> = ({
  className = '',
}) => {
  return (
    <section className={`pt-8 border-t border-neutral-200 ${className}`} id="sponsored-content-grid">
      {/* Header with Sponsored Marker */}
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

      {/* Grid of 3 sponsored items */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {SPONSORED_STORIES.map((item) => (
          <div
            key={item.id}
            className="group bg-white border border-neutral-200 rounded-xs overflow-hidden flex flex-col justify-between hover:shadow-xs hover:border-neutral-300 transition-all"
          >
            <div>
              {/* Image with Sponsored Overlays */}
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

              {/* Body */}
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

            {/* Footer CTA */}
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
          </div>
        ))}
      </div>
    </section>
  );
};
