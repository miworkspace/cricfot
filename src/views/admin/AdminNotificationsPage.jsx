'use client';
import { useState } from "react";
import { Bell, Send, Users } from "lucide-react";
import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { useAdminToast } from "../../components/admin/AdminToast";
export const AdminNotificationsPage = () => {
  const { showToast } = useAdminToast();
  const [logs, setLogs] = useState([
    {
      id: "notif-1",
      title: "\u{1F6A8} \u09AC\u09CD\u09B0\u09C7\u0995\u09BF\u0982: \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u09EA \u0989\u0987\u0995\u09C7\u099F\u09C7 \u099C\u09AF\u09BC\u09C0!",
      message: "\u09B6\u09CD\u09B0\u09C0\u09B2\u0999\u09CD\u0995\u09BE\u0995\u09C7 \u09EA \u0989\u0987\u0995\u09C7\u099F\u09C7 \u09B9\u09BE\u09B0\u09BF\u09AF\u09BC\u09C7 \u0990\u09A4\u09BF\u09B9\u09BE\u09B8\u09BF\u0995 \u099C\u09AF\u09BC \u09A4\u09C1\u09B2\u09C7 \u09A8\u09BF\u09B2 \u099F\u09BE\u0987\u0997\u09BE\u09B0\u09B0\u09BE\u0964 \u09A6\u09C7\u0996\u09C1\u09A8 \u09AE\u09CD\u09AF\u09BE\u099A \u09B9\u09BE\u0987\u09B2\u09BE\u0987\u099F\u09B8\u0964",
      sentAt: "2026-03-22 17:45",
      recipients: 42500,
      openRate: "28.4%",
      status: "sent"
    },
    {
      id: "notif-2",
      title: "\u26BD \u09AE\u09C7\u09B8\u09BF \u0993 \u09AE\u09BE\u09AF\u09BC\u09BE\u09AE\u09BF\u09B0 \u09A6\u09C1\u09B0\u09CD\u09A6\u09BE\u09A8\u09CD\u09A4 \u099C\u09AF\u09BC",
      message: "\u0995\u09A8\u0995\u09BE\u0995\u09BE\u09AB \u099A\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BF\u09AF\u09BC\u09A8\u09B8 \u0995\u09BE\u09AA\u09C7 \u09AE\u09BE\u09AF\u09BC\u09BE\u09AE\u09BF\u09B0 \u09B8\u09B9\u099C \u099C\u09AF\u09BC\u0964",
      sentAt: "2026-03-21 08:30",
      recipients: 39100,
      openRate: "19.2%",
      status: "sent"
    }
  ]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState("");
  const handleBroadcast = (e) => {
    e.preventDefault();
    if (!title.trim() || !message.trim()) return;
    const newLog = {
      id: `notif-${Date.now()}`,
      title,
      message,
      sentAt: "Just now",
      recipients: 45200,
      openRate: "0.0%",
      status: "sent"
    };
    setLogs([newLog, ...logs]);
    setTitle("");
    setMessage("");
    setUrl("");
    showToast("Push alert broadcast dispatched to 45,200 web subscribers!");
  };
  return <div className="space-y-6">
      <AdminPageHeader
    title="Push Notifications Broadcaster"
    banglaTitle="ওয়েব পুশ নোটিফিকেশন"
    description="Dispatch instant web and mobile push notifications for breaking match alerts, wickets, and big transfers."
  />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {
    /* Left: Compose */
  }
        <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-neutral-200/80 shadow-xs space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-2 border-b border-neutral-200 flex items-center gap-1.5">
            <Bell className="w-3.5 h-3.5 text-emerald-600" />
            <span>Compose Push Alert</span>
          </h3>

          <form onSubmit={handleBroadcast} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Notification Title *
              </label>
              <input
    type="text"
    required
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="🚨 ব্রেকিং: সাকিব আল হাসানের শতক..."
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Alert Message Body *
              </label>
              <textarea
    rows={3}
    required
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    placeholder="সংবাদের বিস্তারিত বা গুরুত্বপূর্ণ আপডেট..."
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Destination URL
              </label>
              <input
    type="text"
    value={url}
    onChange={(e) => setUrl(e.target.value)}
    placeholder="https://cricfot.com/news/article-slug"
    className="w-full px-3 py-2 text-xs font-mono bg-white border border-neutral-200 rounded-lg"
  />
            </div>

            <button
    type="submit"
    className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs flex items-center justify-center gap-1.5"
  >
              <Send className="w-3.5 h-3.5" />
              <span>Broadcast to 45,200 Subscribers</span>
            </button>
          </form>
        </div>

        {
    /* Right: Broadcast History */
  }
        <div className="lg:col-span-7 bg-white p-5 rounded-xl border border-neutral-200/80 shadow-xs">
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-2 mb-4 border-b border-neutral-200 flex items-center justify-between">
            <span>Recent Broadcast Logs</span>
            <span className="text-xs text-neutral-400 font-normal">Active Subscribers: 45.2K</span>
          </h3>

          <div className="space-y-3">
            {logs.map((log) => <div
    key={log.id}
    className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 text-xs space-y-1.5"
  >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-neutral-900">{log.title}</h4>
                  <span className="text-[10px] text-neutral-400">{log.sentAt}</span>
                </div>
                <p className="text-neutral-600 text-xs">{log.message}</p>
                <div className="pt-2 flex items-center gap-4 text-[11px] text-neutral-500 border-t border-neutral-200/60">
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-neutral-400" />
                    <span>{log.recipients.toLocaleString()} reached</span>
                  </span>
                  <span>Open Rate: {log.openRate}</span>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
