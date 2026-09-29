import React from 'react';
import { AlertTriangle, Trash2 } from 'lucide-react';
import { AdminModal } from './AdminModal';

interface AdminConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'warning' | 'info';
  isLoading?: boolean;
}

export const AdminConfirmDialog: React.FC<AdminConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Delete Permanently',
  cancelText = 'Cancel',
  variant = 'danger',
  isLoading = false,
}) => {
  return (
    <AdminModal isOpen={isOpen} onClose={onClose} title={title} maxWidth="md">
      <div className="flex items-start gap-4">
        <div
          className={`p-3 rounded-xl shrink-0 ${
            variant === 'danger'
              ? 'bg-rose-50 text-rose-600'
              : variant === 'warning'
              ? 'bg-amber-50 text-amber-600'
              : 'bg-blue-50 text-blue-600'
          }`}
        >
          {variant === 'danger' ? (
            <Trash2 className="w-5 h-5" />
          ) : (
            <AlertTriangle className="w-5 h-5" />
          )}
        </div>
        <div>
          <p className="text-sm text-neutral-600 leading-relaxed">{message}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-neutral-100">
        <button
          type="button"
          onClick={onClose}
          disabled={isLoading}
          className="px-4 py-2 text-xs font-semibold text-neutral-700 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
        >
          {cancelText}
        </button>
        <button
          type="button"
          onClick={() => {
            onConfirm();
            onClose();
          }}
          disabled={isLoading}
          className={`px-4 py-2 text-xs font-semibold text-white rounded-lg transition-colors ${
            variant === 'danger'
              ? 'bg-rose-600 hover:bg-rose-700'
              : variant === 'warning'
              ? 'bg-amber-600 hover:bg-amber-700'
              : 'bg-neutral-900 hover:bg-neutral-800'
          }`}
        >
          {isLoading ? 'Processing...' : confirmText}
        </button>
      </div>
    </AdminModal>
  );
};
