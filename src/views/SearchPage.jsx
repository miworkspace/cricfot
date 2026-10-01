'use client';
import { useEffect, useState } from "react";
import { Container } from "../components/common/Container";
import { NewsCard } from "../components/news/NewsCard";
import { NewsService } from "../services/newsService";
import { useRouter, useRouteSearchParams } from "../router/RouterContext";
import { Search, X } from "lucide-react";
export const SearchPage = () => {
  const { navigate } = useRouter();
  const searchParams = useRouteSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const rawInitialSport = searchParams.get("sport");
  const initialSport = rawInitialSport === "cricket" || rawInitialSport === "football" ? rawInitialSport : "all";
  const initialCategory = searchParams.get("category") || void 0;
  const initialTrending = searchParams.get("trending") === "true";
  const [query, setQuery] = useState(initialQuery);
  const [selectedSport, setSelectedSport] = useState(initialSport);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || "all");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const categories = NewsService.getCategories();
  useEffect(() => {
    const qParam = searchParams.get("q") || "";
    const rawSport = searchParams.get("sport");
    const sportParam = rawSport === "cricket" || rawSport === "football" ? rawSport : "all";
    const catParam = searchParams.get("category") || "all";
    setQuery(qParam);
    setSelectedSport(sportParam);
    setSelectedCategory(catParam);
    let isMounted = true;
    async function performSearch() {
      setLoading(true);
      const results = await NewsService.getArticles({
        query: qParam || void 0,
        sport: sportParam !== "all" ? sportParam : void 0,
        category: catParam !== "all" ? catParam : void 0,
        trending: initialTrending ? true : void 0
      });
      if (isMounted) {
        setArticles(results);
        setLoading(false);
      }
    }
    performSearch();
    return () => {
      isMounted = false;
    };
  }, [searchParams, initialTrending]);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (selectedSport !== "all") params.set("sport", selectedSport);
    if (selectedCategory !== "all") params.set("category", selectedCategory);
    const queryString = params.toString();
    navigate(`/search${queryString ? `?${queryString}` : ""}`);
  };
  const clearFilters = () => {
    setQuery("");
    setSelectedSport("all");
    setSelectedCategory("all");
    navigate("/search");
  };
  return <div className="py-6 sm:py-8">
      <Container size="wide">
        {
    /* Search Header */
  }
        <div className="border-b border-neutral-200 pb-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold font-serif-headline text-neutral-900">
            Search News Archive
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Search published reports, match commentary, transfers, and analysis.
          </p>
        </div>

        {
    /* Filter & Search Bar */
  }
        <div className="bg-white border border-neutral-200 p-4 sm:p-5 rounded-xs mb-8 shadow-xs">
          <form onSubmit={handleSearchSubmit} className="space-y-4">
            <div className="relative">
              <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search by headline, player name, team, or keyword (e.g. Shanto, BPL, Cabrera)..."
    className="w-full pl-10 pr-4 py-2.5 text-sm bg-neutral-50 border border-neutral-300 focus:border-neutral-900 focus:bg-white rounded-xs transition-colors outline-hidden"
  />
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {query && <button
    type="button"
    onClick={() => setQuery("")}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
  >
                  <X className="w-4 h-4" />
                </button>}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-neutral-100 text-xs">
              <div className="flex flex-wrap items-center gap-3">
                {
    /* Sport selector */
  }
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-neutral-700">Sport:</span>
                  <div className="inline-flex rounded-xs border border-neutral-300 overflow-hidden">
                    {["all", "cricket", "football"].map((s) => <button
    key={s}
    type="button"
    onClick={() => setSelectedSport(s)}
    className={`px-2.5 py-1 uppercase text-[11px] font-bold transition-colors ${selectedSport === s ? "bg-neutral-900 text-white" : "bg-white text-neutral-600 hover:bg-neutral-100"}`}
  >
                        {s}
                      </button>)}
                  </div>
                </div>

                {
    /* Category selector */
  }
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-neutral-700">Category:</span>
                  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="bg-white border border-neutral-300 text-neutral-700 text-xs py-1 px-2 rounded-xs focus:outline-hidden"
  >
                    <option value="all">All Categories</option>
                    {categories.map((c) => <option key={c} value={c}>
                        {c}
                      </option>)}
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {(query || selectedSport !== "all" || selectedCategory !== "all") && <button
    type="button"
    onClick={clearFilters}
    className="text-neutral-500 hover:text-neutral-800 text-xs underline"
  >
                    Reset
                  </button>}
                <button
    type="submit"
    className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs rounded-xs transition-colors"
  >
                  Apply Filters
                </button>
              </div>
            </div>
          </form>
        </div>

        {
    /* Results Counter */
  }
        <div className="flex items-center justify-between mb-4 text-xs text-neutral-600">
          <div>
            Showing <strong className="text-neutral-900">{articles.length}</strong> dispatches
            {query && <span> for "{query}"</span>}
          </div>
        </div>

        {
    /* Results Grid */
  }
        {loading ? <div className="py-16 text-center text-sm text-neutral-500">
            Searching CricFot newsroom...
          </div> : articles.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((art) => <NewsCard key={art.id} article={art} variant="standard" />)}
          </div> : <div className="bg-white border border-neutral-200 p-8 text-center rounded-xs">
            <p className="text-sm font-semibold text-neutral-800">No matching articles found</p>
            <p className="text-xs text-neutral-500 mt-1 max-w-sm mx-auto">
              Try searching with a broader keyword, changing the sport category, or resetting your
              filter preferences.
            </p>
            <button
    onClick={clearFilters}
    className="mt-4 px-3 py-1.5 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider rounded-xs"
  >
              Clear All Filters
            </button>
          </div>}
      </Container>
    </div>;
};
