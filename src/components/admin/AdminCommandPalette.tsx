import React, { useState, useEffect } from 'react';
import { Search, FileText, Trophy, Users, Folder, X, ExternalLink } from 'lucide-react';
import { AdminService } from '../../services/adminService';
import { useRouter } from '../../router/RouterContext';

interface AdminCommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminCommandPalette: React.FC<AdminCommandPaletteProps> = ({ isOpen, onClose }) => {
  const { navigate } = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{
    articles: Array<{ id: string; title: string; slug: string; sport: string }>;
    categories: Array<{ id: string; name: string; slug: string }>;
    matches: Array<{ id: string; competition: string; teams: string }>;
    teams: Array<{ id: string; name: string; sport: string }>;
  }>({ articles: [], categories: [], matches: [], teams: [] });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults({ articles: [], categories: [], matches: [], teams: [] });
      return;
    }
    const timer = setTimeout(async () => {
      const res = await AdminService.searchEverything(query);
      setResults(res);
    }, 180);
    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  const hasAnyResults =
    results.articles.length > 0 ||
    results.categories.length > 0 ||
    results.matches.length > 0 ||
    results.teams.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-neutral-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-neutral-200 overflow-hidden z-10">
        <div className="flex items-center px-4 py-3.5 border-b border-neutral-200">
          <Search className="w-5 h-5 text-neutral-400 shrink-0 mr-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, categories, teams, matches or players..."
            className="w-full text-base bg-transparent border-none focus:outline-hidden text-neutral-900 placeholder:text-neutral-400"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-4 space-y-4">
          {!query && (
            <div className="text-center py-8 text-xs text-neutral-400">
              Type keywords to search across the entire CricFot editorial database.
            </div>
          )}

          {query && !hasAnyResults && (
            <div className="text-center py-8 text-xs text-neutral-500">
              No matching records found for "{query}".
            </div>
          )}

          {/* Articles */}
          {results.articles.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Articles ({results.articles.length})</span>
              </div>
              <div className="space-y-1">
                {results.articles.map((art) => (
                  <button
                    key={art.id}
                    onClick={() => {
                      navigate(`/admin/articles/${art.id}`);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-100 flex items-center justify-between group transition-colors"
                  >
                    <span className="text-sm font-medium text-neutral-900 line-clamp-1 group-hover:text-emerald-700">
                      {art.title}
                    </span>
                    <span className="text-xs uppercase text-neutral-400 ml-2 shrink-0">
                      {art.sport}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Categories */}
          {results.categories.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                <Folder className="w-3.5 h-3.5" />
                <span>Categories</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {results.categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      navigate(`/admin/categories`);
                      onClose();
                    }}
                    className="text-left p-2 rounded-lg hover:bg-neutral-100 flex items-center justify-between text-xs font-medium text-neutral-800"
                  >
                    <span>{c.name}</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matches */}
          {results.matches.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5" />
                <span>Matches</span>
              </div>
              <div className="space-y-1">
                {results.matches.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      navigate('/admin/matches');
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-100 flex items-center justify-between text-xs"
                  >
                    <span className="font-semibold text-neutral-900">{m.teams}</span>
                    <span className="text-neutral-500">{m.competition}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Teams */}
          {results.teams.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>Teams</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {results.teams.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      navigate('/admin/teams');
                      onClose();
                    }}
                    className="text-left p-2 rounded-lg hover:bg-neutral-100 flex items-center justify-between text-xs font-medium text-neutral-800"
                  >
                    <span>{t.name}</span>
                    <span className="text-[10px] text-neutral-400 uppercase">{t.sport}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="px-4 py-2.5 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-400">
          <span>Navigate with click or arrow keys</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
