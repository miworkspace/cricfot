'use client';
import { useState, useEffect } from "react";
import { Send, Zap } from "lucide-react";
import { AdminService } from "../../services/adminService";
import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { AdminStatusBadge } from "../../components/admin/AdminStatusBadge";
import { AdminLoading } from "../../components/admin/AdminEmptyState";
import { useAdminToast } from "../../components/admin/AdminToast";
export const AdminLiveScorePage = () => {
  const { showToast } = useAdminToast();
  const [matches, setMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [homeScore, setHomeScore] = useState("");
  const [awayScore, setAwayScore] = useState("");
  const [statusText, setStatusText] = useState("");
  const [events, setEvents] = useState([
    {
      id: "ev-1",
      time: "14:28",
      ballOrMin: "84.2 ov",
      type: "boundary",
      text: "FOUR! Beautiful cover drive by Liton Das off Fernando.",
      banglaText: "\u099A\u09BE\u09B0! \u09AB\u09BE\u09B0\u09CD\u09A8\u09BE\u09A8\u09CD\u09A6\u09CB\u09B0 \u09AC\u09B2\u09C7 \u09B2\u09BF\u099F\u09A8\u09C7\u09B0 \u09A6\u09C1\u09B0\u09CD\u09A6\u09BE\u09A8\u09CD\u09A4 \u0995\u09AD\u09BE\u09B0 \u09A1\u09CD\u09B0\u09BE\u0987\u09AD\u0964"
    },
    {
      id: "ev-2",
      time: "14:24",
      ballOrMin: "83.5 ov",
      type: "milestone",
      text: "50 Partnership comes up between Liton and Shanto!",
      banglaText: "\u09B2\u09BF\u099F\u09A8 \u0993 \u09B6\u09BE\u09A8\u09CD\u09A4\u09B0 \u099C\u09C1\u099F\u09BF\u09A4\u09C7 \u09EB\u09E6 \u09B0\u09BE\u09A8 \u09AA\u09C2\u09B0\u09CD\u09A3 \u09B9\u09B2\u09CB!"
    },
    {
      id: "ev-3",
      time: "14:15",
      ballOrMin: "81.1 ov",
      type: "commentary",
      text: "Sri Lanka take the new ball as overs reach 80.",
      banglaText: "\u09EE\u09E6 \u0993\u09AD\u09BE\u09B0 \u09B6\u09C7\u09B7\u09C7 \u09B6\u09CD\u09B0\u09C0\u09B2\u0999\u09CD\u0995\u09BE \u09A8\u09A4\u09C1\u09A8 \u09AC\u09B2 \u0997\u09CD\u09B0\u09B9\u09A3 \u0995\u09B0\u09C7\u099B\u09C7\u0964"
    }
  ]);
  const [commentaryInput, setCommentaryInput] = useState("");
  const [commentaryBangla, setCommentaryBangla] = useState("");
  const [eventType, setEventType] = useState("commentary");
  const [ballOrMin, setBallOrMin] = useState("84.3 ov");
  useEffect(() => {
    async function loadMatches() {
      setIsLoading(true);
      try {
        const data = await AdminService.getMatches();
        setMatches(data);
        if (data.length > 0) {
          const live = data.find((m) => m.status === "live") || data[0];
          setSelectedMatch(live);
          setHomeScore(live.homeTeam.score || "");
          setAwayScore(live.awayTeam.score || "");
          setStatusText(live.statusText || "");
        }
      } finally {
        setIsLoading(false);
      }
    }
    loadMatches();
  }, []);
  const handleSelectMatch = (m) => {
    setSelectedMatch(m);
    setHomeScore(m.homeTeam.score || "");
    setAwayScore(m.awayTeam.score || "");
    setStatusText(m.statusText || "");
  };
  const handleUpdateScore = async () => {
    if (!selectedMatch) return;
    try {
      await AdminService.updateMatch(selectedMatch.id, {
        homeTeam: { ...selectedMatch.homeTeam, score: homeScore },
        awayTeam: { ...selectedMatch.awayTeam, score: awayScore },
        statusText
      });
      showToast("Live score propagated to match centres & public ticker!");
    } catch (err) {
      showToast("Failed to update live score", "error");
    }
  };
  const handleAddCommentary = (e) => {
    e.preventDefault();
    if (!commentaryInput.trim() && !commentaryBangla.trim()) return;
    const newEv = {
      id: `ev-${Date.now()}`,
      time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      ballOrMin: ballOrMin || "Live",
      type: eventType,
      text: commentaryInput || commentaryBangla,
      banglaText: commentaryBangla || commentaryInput
    };
    setEvents([newEv, ...events]);
    setCommentaryInput("");
    setCommentaryBangla("");
    showToast("Ball commentary published!");
  };
  if (isLoading) return <AdminLoading message="Connecting to Live Score Simulator..." />;
  return <div className="space-y-6">
      <AdminPageHeader
    title="Live Score & Commentary Broadcaster"
    banglaTitle="লাইভ স্কোর ও কমেন্ট্রি সম্প্রচার"
    description="Stream live overs, ball-by-ball updates, goal alerts, and real-time score ticker changes."
  >
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
          <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
          <span>Realtime Broadcaster Mode</span>
        </span>
      </AdminPageHeader>

      {
    /* Match Selector Bar */
  }
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {matches.map((m) => {
    const isSelected = selectedMatch?.id === m.id;
    return <button
      key={m.id}
      onClick={() => handleSelectMatch(m)}
      className={`px-4 py-2.5 rounded-xl border text-left shrink-0 transition-all ${isSelected ? "bg-neutral-900 text-white border-neutral-900 shadow-md" : "bg-white text-neutral-800 border-neutral-200 hover:border-neutral-300"}`}
    >
              <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-neutral-400">
                <span>{m.competition}</span>
                <span className={m.status === "live" ? "text-rose-400 font-black" : ""}>
                  • {m.status.toUpperCase()}
                </span>
              </div>
              <div className="text-xs font-bold mt-1">
                {m.homeTeam.banglaName || m.homeTeam.name} vs {m.awayTeam.banglaName || m.awayTeam.name}
              </div>
            </button>;
  })}
      </div>

      {selectedMatch && <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {
    /* Quick Score Tweaker (4 cols) */
  }
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white p-5 rounded-xl border border-neutral-200/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                  Instant Score Tweaker
                </h3>
                <AdminStatusBadge status={selectedMatch.status} size="sm" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  {selectedMatch.homeTeam.banglaName || selectedMatch.homeTeam.name} Score
                </label>
                <input
    type="text"
    value={homeScore}
    onChange={(e) => setHomeScore(e.target.value)}
    placeholder="e.g. 312/6 (84.2 ov) or 2"
    className="w-full px-3 py-2 text-base font-bold bg-neutral-50 border border-neutral-200 rounded-lg text-emerald-800"
  />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  {selectedMatch.awayTeam.banglaName || selectedMatch.awayTeam.name} Score
                </label>
                <input
    type="text"
    value={awayScore}
    onChange={(e) => setAwayScore(e.target.value)}
    placeholder="e.g. 280 (all out) or 1"
    className="w-full px-3 py-2 text-base font-bold bg-neutral-50 border border-neutral-200 rounded-lg text-emerald-800"
  />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Match Status Ticker / Note
                </label>
                <input
    type="text"
    value={statusText}
    onChange={(e) => setStatusText(e.target.value)}
    placeholder="e.g. Day 4: 2nd Session - Lead by 32 runs"
    className="w-full px-3 py-2 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-800"
  />
              </div>

              <button
    type="button"
    onClick={handleUpdateScore}
    className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs flex items-center justify-center gap-1.5"
  >
                <Zap className="w-4 h-4" />
                <span>Push Score to Public Site</span>
              </button>
            </div>
          </div>

          {
    /* Ball-by-ball Commentary Feed (7 cols) */
  }
          <div className="lg:col-span-7 bg-white rounded-xl border border-neutral-200/80 p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                  Ball-by-Ball Live Commentary
                </h3>
                <span className="text-xs text-neutral-400">{events.length} events logged</span>
              </div>

              {
    /* Input Form */
  }
              <form onSubmit={handleAddCommentary} className="mb-6 p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-600 mb-1">Over / Min</label>
                    <input
    type="text"
    value={ballOrMin}
    onChange={(e) => setBallOrMin(e.target.value)}
    placeholder="84.3 ov"
    className="w-full px-2.5 py-1.5 text-xs bg-white border border-neutral-200 rounded"
  />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-600 mb-1">Event Type</label>
                    <select
    value={eventType}
    onChange={(e) => setEventType(e.target.value)}
    className="w-full px-2.5 py-1.5 text-xs bg-white border border-neutral-200 rounded"
  >
                      <option value="commentary">Commentary</option>
                      <option value="boundary">Boundary / 4 or 6</option>
                      <option value="wicket">Wicket (আউট)</option>
                      <option value="goal">Goal (গোল)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <input
    type="text"
    required
    value={commentaryBangla}
    onChange={(e) => setCommentaryBangla(e.target.value)}
    placeholder="বাংলা কমেন্ট্রি লিখুন (যেমন: চার! লিটনের দুর্দান্ত শট)..."
    className="w-full px-3 py-2 text-xs bg-white border border-neutral-200 rounded-lg"
  />
                </div>

                <div className="flex items-center justify-end">
                  <button
    type="submit"
    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors"
  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Event</span>
                  </button>
                </div>
              </form>

              {
    /* Event Stream */
  }
              <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                {events.map((ev) => <div
    key={ev.id}
    className="p-3 bg-neutral-50 rounded-lg border border-neutral-200/80 flex items-start gap-3 text-xs"
  >
                    <span
    className={`px-2 py-0.5 rounded font-mono font-bold text-[10px] shrink-0 ${ev.type === "wicket" || ev.type === "goal" ? "bg-rose-100 text-rose-800" : ev.type === "boundary" ? "bg-emerald-100 text-emerald-800" : "bg-neutral-200 text-neutral-700"}`}
  >
                      {ev.ballOrMin}
                    </span>

                    <div className="flex-1">
                      <p className="font-semibold text-neutral-900">{ev.banglaText || ev.text}</p>
                      {ev.banglaText && ev.text !== ev.banglaText && <p className="text-[11px] text-neutral-500 mt-0.5">{ev.text}</p>}
                    </div>

                    <span className="text-[10px] text-neutral-400 shrink-0">{ev.time}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>}
    </div>;
};
