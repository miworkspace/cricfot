"use client";
import { useMemo } from "react";
import { Container } from "../components/common/Container";
import { useRouteSearchParams } from "../router/RouterContext";
import { HeroFeaturedNews } from "../components/home/HeroFeaturedNews";
import { LatestNewsSection } from "../components/home/LatestNewsSection";
import { LiveScoreSection } from "../components/home/LiveScoreSection";
import { SportNewsSection } from "../components/news/SportNewsSection";
import { TrendingNewsSection } from "../components/home/TrendingNewsSection";
import { AnalysisSection } from "../components/home/AnalysisSection";
import { VideoSection } from "../components/home/VideoSection";
import { AudienceGrowth } from "../components/home/AudienceGrowth";
import { ReaderEngagementHub } from "../components/home/ReaderEngagementHub";
import { GoogleAdSlot } from "../components/ads/GoogleAdSlot";
import { CategoryFilterNav } from "../components/home/CategoryFilterNav";
import {
  HOMEPAGE_FEATURED_MAIN,
  HOMEPAGE_FEATURED_SECONDARY,
  HOMEPAGE_LATEST_ARTICLES,
  HOMEPAGE_LIVE_MATCHES,
  HOMEPAGE_CRICKET_ARTICLES,
  HOMEPAGE_FOOTBALL_ARTICLES,
  HOMEPAGE_TRENDING_ARTICLES,
  HOMEPAGE_ANALYSIS_ARTICLES,
  HOMEPAGE_VIDEOS,
} from "../data/homepage";
export const HomePage = () => {
  const searchParams = useRouteSearchParams();
  const categoryParam = (
    searchParams.get("category") ||
    searchParams.get("sport") ||
    searchParams.get("filter") ||
    "all"
  ).toLowerCase();
  const activeCategory =
    categoryParam === "cricket"
      ? "cricket"
      : categoryParam === "football"
        ? "football"
        : "all";
  const {
    heroMain,
    heroSecondary,
    latestArticles,
    liveMatches,
    trendingItems,
    analysisArticles,
    videos,
  } = useMemo(() => {
    if (activeCategory === "cricket") {
      return {
        heroMain: HOMEPAGE_CRICKET_ARTICLES.featured || HOMEPAGE_FEATURED_MAIN,
        heroSecondary: [...HOMEPAGE_CRICKET_ARTICLES.articles.slice(0, 3)],
        latestArticles: HOMEPAGE_LATEST_ARTICLES.filter(
          (a) => a.sport === "cricket",
        ),
        liveMatches: HOMEPAGE_LIVE_MATCHES.filter((m) => m.sport === "cricket"),
        trendingItems: HOMEPAGE_TRENDING_ARTICLES.filter(
          (t) =>
            t.category.toLowerCase().includes("cricket") ||
            t.category.includes("\u0995\u09CD\u09B0\u09BF\u0995\u09C7\u099F") ||
            t.category.includes("\u09AC\u09BF\u09AA\u09BF\u098F\u09B2") ||
            t.category.includes("\u0986\u0987\u09B8\u09BF\u09B8\u09BF") ||
            t.category.includes("BPL") ||
            t.category.includes("IPL"),
        ),
        analysisArticles: HOMEPAGE_ANALYSIS_ARTICLES.filter(
          (a) => a.sport === "cricket",
        ),
        videos: HOMEPAGE_VIDEOS.filter((v) => v.sport === "cricket"),
      };
    }
    if (activeCategory === "football") {
      return {
        heroMain:
          HOMEPAGE_FOOTBALL_ARTICLES.featured || HOMEPAGE_FEATURED_SECONDARY[0],
        heroSecondary: [...HOMEPAGE_FOOTBALL_ARTICLES.articles.slice(0, 3)],
        latestArticles: HOMEPAGE_LATEST_ARTICLES.filter(
          (a) => a.sport === "football",
        ),
        liveMatches: HOMEPAGE_LIVE_MATCHES.filter(
          (m) => m.sport === "football",
        ),
        trendingItems: HOMEPAGE_TRENDING_ARTICLES.filter(
          (t) =>
            t.category.toLowerCase().includes("football") ||
            t.category.includes("\u09AB\u09C1\u099F\u09AC\u09B2") ||
            t.category.includes("Champions") ||
            t.category.includes("\u09B2\u09BF\u0997") ||
            t.category.includes("FIFA"),
        ),
        analysisArticles: HOMEPAGE_ANALYSIS_ARTICLES.filter(
          (a) => a.sport === "football",
        ),
        videos: HOMEPAGE_VIDEOS.filter((v) => v.sport === "football"),
      };
    }
    return {
      heroMain: HOMEPAGE_FEATURED_MAIN,
      heroSecondary: HOMEPAGE_FEATURED_SECONDARY,
      latestArticles: HOMEPAGE_LATEST_ARTICLES,
      liveMatches: HOMEPAGE_LIVE_MATCHES,
      trendingItems: HOMEPAGE_TRENDING_ARTICLES,
      analysisArticles: HOMEPAGE_ANALYSIS_ARTICLES,
      videos: HOMEPAGE_VIDEOS,
    };
  }, [activeCategory]);
  return (
    <div className="w-full pb-10" id="cricfot-homepage">
      <Container size="wide" className="space-y-4 sm:space-y-6 pt-3 sm:pt-4">
        {/* 1. Category Filter Navigation Bar (Driven by Router State) */}
        <CategoryFilterNav
          activeCategory={activeCategory}
          counts={{
            all: 48,
            cricket: 28,
            football: 20,
          }}
        />

        {/* 2. Hero / Featured News (Adapts dynamically to category filter) */}
        <HeroFeaturedNews
          mainArticle={heroMain}
          secondaryArticles={heroSecondary}
        />

        {/* 3. Latest News (Filtered by active sport) */}
        <LatestNewsSection articles={latestArticles} />

        {/* Commercial Leaderboard Ad Slot */}
        <GoogleAdSlot
          format="leaderboard"
          slotId="ca-pub-cricfot-homepage-leaderboard-101"
          className="my-3 sm:my-5"
        />

        {/* 4. Live Score (Filtered by active sport) */}
        <LiveScoreSection matches={liveMatches} />

        {/* 5. Dedicated Sport Sections according to router filter */}
        {(activeCategory === "all" || activeCategory === "cricket") && (
          <SportNewsSection
            sport="cricket"
            title="ক্রিকেট"
            subtitle="বাংলাদেশ জাতীয় দল, বিপিএল, টেস্ট চ্যাম্পিয়নশিপ ও আন্তর্জাতিক ক্রিকেটের খবরাখবর"
            viewAllHref="/cricket"
            viewAllText="সব ক্রিকেট সংবাদ →"
            featured={HOMEPAGE_CRICKET_ARTICLES.featured}
            articles={HOMEPAGE_CRICKET_ARTICLES.articles}
            headlines={HOMEPAGE_CRICKET_ARTICLES.headlines}
          />
        )}

        {(activeCategory === "all" || activeCategory === "football") && (
          <SportNewsSection
            sport="football"
            title="ফুটবল"
            subtitle="বাংলাদেশ ফুটবল, ইংলিশ প্রিমিয়ার লিগ, চ্যাম্পিয়ন্স লিগ ও দলবদলের তাজা খবর"
            viewAllHref="/football"
            viewAllText="সব ফুটবল সংবাদ →"
            featured={HOMEPAGE_FOOTBALL_ARTICLES.featured}
            articles={HOMEPAGE_FOOTBALL_ARTICLES.articles}
            headlines={HOMEPAGE_FOOTBALL_ARTICLES.headlines}
          />
        )}

        {/* 6. Trending News */}
        <TrendingNewsSection items={trendingItems} />

        {/* 7. Analysis (In-depth editorial columns) */}
        <AnalysisSection articles={analysisArticles} />

        {/* 8. Reader Engagement Hub (Poll, Quiz, Photo of the Day) */}
        <ReaderEngagementHub />

        {/* 9. Videos (Highlights & interviews) */}
        <VideoSection videos={videos} />

        {/* 10. Newsletter / Follow Section */}
        <AudienceGrowth />
      </Container>
    </div>
  );
};
