'use client';
import { useState, useEffect } from "react";
import { Plus, Video, Play, Trash2 } from "lucide-react";
import { AdminService } from "../../services/adminService";
import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { AdminModal } from "../../components/admin/AdminModal";
import { AdminConfirmDialog } from "../../components/admin/AdminConfirmDialog";
import { AdminEmptyState, AdminLoading } from "../../components/admin/AdminEmptyState";
import { useAdminToast } from "../../components/admin/AdminToast";
export const AdminVideosPage = () => {
  const { showToast } = useAdminToast();
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [banglaTitle, setBanglaTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [duration, setDuration] = useState("03:45");
  const [sport, setSport] = useState("cricket");
  const [previewVideo, setPreviewVideo] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const loadVideos = async () => {
    setIsLoading(true);
    try {
      const data = await AdminService.getVideos();
      setVideos(data);
    } catch (err) {
      showToast("Failed to load videos", "error");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    loadVideos();
  }, []);
  const openAdd = () => {
    setEditingVideo(null);
    setTitle("");
    setBanglaTitle("");
    setVideoUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    setThumbnailUrl("https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80");
    setDuration("04:12");
    setSport("cricket");
    setIsModalOpen(true);
  };
  const openEdit = (v) => {
    setEditingVideo(v);
    setTitle(v.title);
    setBanglaTitle(v.banglaTitle || "");
    setVideoUrl(v.videoUrl || "");
    setThumbnailUrl(v.thumbnailUrl || v.thumbnail || "");
    setDuration(v.duration);
    setSport(v.sport);
    setIsModalOpen(true);
  };
  const handleSave = async (e) => {
    e.preventDefault();
    if (!title.trim() || !videoUrl.trim()) return;
    try {
      if (editingVideo) {
        await AdminService.updateVideo(editingVideo.id, {
          title,
          banglaTitle,
          videoUrl,
          thumbnail: thumbnailUrl,
          thumbnailUrl,
          duration,
          sport
        });
        showToast("Video updated!");
      } else {
        await AdminService.createVideo({
          title,
          banglaTitle,
          videoUrl,
          thumbnail: thumbnailUrl,
          thumbnailUrl,
          duration,
          sport,
          views: "\u09E6 \u09AD\u09BF\u0989",
          publishedAt: (/* @__PURE__ */ new Date()).toISOString()
        });
        showToast("Video added to highlights hub!");
      }
      setIsModalOpen(false);
      loadVideos();
    } catch (err) {
      showToast("Failed to save video", "error");
    }
  };
  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await AdminService.deleteVideo(deleteTarget.id);
      showToast("Video removed");
      setDeleteTarget(null);
      loadVideos();
    } catch (err) {
      showToast("Failed to delete video", "error");
    }
  };
  return <div className="space-y-6">
      <AdminPageHeader
    title="Video Management"
    banglaTitle="ভিডিও ও ম্যাচ হাইলাইটস"
    description="Curate match highlights, press briefings, player interviews, and tactical analysis reels."
  >
        <button
    type="button"
    onClick={openAdd}
    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
  >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Video</span>
        </button>
      </AdminPageHeader>

      {isLoading ? <AdminLoading message="Loading video library..." /> : videos.length === 0 ? <AdminEmptyState
    icon={Video}
    title="No videos added"
    description="Embed video highlights from YouTube, Vimeo or direct video servers."
    actionLabel="Add Video"
    onAction={openAdd}
  /> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((vid) => <div
    key={vid.id}
    className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-xs flex flex-col justify-between"
  >
              <div>
                <div className="relative aspect-video bg-neutral-900 overflow-hidden group">
                  <img
    src={vid.thumbnailUrl || vid.thumbnail}
    alt={vid.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    referrerPolicy="no-referrer"
  />
                  <div className="absolute inset-0 bg-neutral-950/30 flex items-center justify-center">
                    <button
    type="button"
    onClick={() => setPreviewVideo(vid)}
    className="w-12 h-12 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
  >
                      <Play className="w-5 h-5 ml-0.5 fill-white" />
                    </button>
                  </div>
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[11px] font-bold bg-neutral-900/90 text-white">
                    {vid.duration}
                  </span>
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-neutral-900/80 text-emerald-400">
                    {vid.sport}
                  </span>
                </div>

                <div className="p-4">
                  <h4 className="font-bold text-sm text-neutral-900 line-clamp-2">{vid.title}</h4>
                  {vid.banglaTitle && <p className="text-xs text-neutral-500 line-clamp-1 mt-1">{vid.banglaTitle}</p>}
                  <div className="mt-3 flex items-center justify-between text-xs text-neutral-400">
                    <span>{vid.views.toLocaleString()} views</span>
                    <span>{new Date(vid.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 border-t border-neutral-100 flex items-center justify-end gap-2 bg-neutral-50/50">
                <button
    type="button"
    onClick={() => openEdit(vid)}
    className="px-2.5 py-1 text-xs font-semibold text-neutral-700 bg-white border border-neutral-200 rounded-md hover:bg-neutral-50"
  >
                  Edit
                </button>
                <button
    type="button"
    onClick={() => setDeleteTarget(vid)}
    className="p-1 text-neutral-400 hover:text-rose-600 rounded"
  >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>)}
        </div>}

      {
    /* Edit/Add Video Modal */
  }
      <AdminModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    title={editingVideo ? "Edit Video" : "Add New Video"}
    maxWidth="md"
  >
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Video Title (English) *
            </label>
            <input
    type="text"
    required
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="e.g. Bangladesh vs Sri Lanka Full Highlights"
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Bangla Title (বাংলা)
            </label>
            <input
    type="text"
    value={banglaTitle}
    onChange={(e) => setBanglaTitle(e.target.value)}
    placeholder="e.g. বাংলাদেশ বনাম শ্রীলঙ্কা ম্যাচ হাইলাইটস"
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Video URL or Embed Link *
            </label>
            <input
    type="text"
    required
    value={videoUrl}
    onChange={(e) => setVideoUrl(e.target.value)}
    placeholder="https://www.youtube.com/watch?v=..."
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Thumbnail URL
            </label>
            <input
    type="text"
    value={thumbnailUrl}
    onChange={(e) => setThumbnailUrl(e.target.value)}
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Duration (mm:ss)
              </label>
              <input
    type="text"
    value={duration}
    onChange={(e) => setDuration(e.target.value)}
    placeholder="05:20"
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Sport
              </label>
              <select
    value={sport}
    onChange={(e) => setSport(e.target.value)}
    className="w-full px-3 py-2 text-sm bg-white border border-neutral-200 rounded-lg"
  >
                <option value="cricket">Cricket</option>
                <option value="football">Football</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-3 border-t border-neutral-100">
            <button
    type="button"
    onClick={() => setIsModalOpen(false)}
    className="px-3 py-1.5 text-xs font-semibold text-neutral-600 bg-white border border-neutral-200 rounded-lg"
  >
              Cancel
            </button>
            <button
    type="submit"
    className="px-4 py-1.5 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700"
  >
              {editingVideo ? "Update Video" : "Add Video"}
            </button>
          </div>
        </form>
      </AdminModal>

      {
    /* Video Preview Modal */
  }
      {previewVideo && <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-neutral-900 rounded-xl overflow-hidden shadow-2xl p-4">
            <div className="flex justify-between items-center pb-2 mb-2 border-b border-neutral-800 text-white">
              <h4 className="text-sm font-bold truncate">{previewVideo.title}</h4>
              <button
    type="button"
    onClick={() => setPreviewVideo(null)}
    className="text-xs text-neutral-400 hover:text-white px-2 py-1"
  >
                Close
              </button>
            </div>
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center">
              <img
    src={previewVideo.thumbnailUrl || previewVideo.thumbnail}
    alt={previewVideo.title}
    className="w-full h-full object-cover opacity-60"
  />
              <div className="absolute text-center p-4">
                <Play className="w-12 h-12 text-emerald-400 mx-auto mb-2 fill-emerald-400" />
                <p className="text-white text-xs font-medium">Video Player Embed Simulation</p>
                <p className="text-neutral-400 text-[11px]">{previewVideo.videoUrl}</p>
              </div>
            </div>
          </div>
        </div>}

      <AdminConfirmDialog
    isOpen={!!deleteTarget}
    onClose={() => setDeleteTarget(null)}
    onConfirm={handleDelete}
    title="Delete Video"
    message={`Are you sure you want to delete "${deleteTarget?.title}"?`}
  />
    </div>;
};
