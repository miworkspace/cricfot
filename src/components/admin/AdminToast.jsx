'use client';
import { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
const ToastContext = createContext(null);
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const showToast = useCallback((message, type = "success") => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  }, []);
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };
  return <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => <div
    key={toast.id}
    className={`pointer-events-auto flex items-center justify-between p-3.5 rounded-lg shadow-lg border text-sm font-medium transition-all transform animate-in slide-in-from-bottom-2 ${toast.type === "success" ? "bg-neutral-900 text-white border-neutral-800" : toast.type === "error" ? "bg-red-900 text-white border-red-800" : "bg-neutral-800 text-white border-neutral-700"}`}
  >
            <div className="flex items-center gap-2.5">
              {toast.type === "success" && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
              {toast.type === "error" && <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />}
              {toast.type === "info" && <Info className="w-4 h-4 text-blue-400 shrink-0" />}
              <span>{toast.message}</span>
            </div>
            <button
    onClick={() => removeToast(toast.id)}
    className="p-1 rounded hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
  >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>)}
      </div>
    </ToastContext.Provider>;
};
export const useAdminToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useAdminToast must be used within ToastProvider");
  }
  return context;
};
