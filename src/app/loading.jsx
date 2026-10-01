export default function Loading() {
  return <div className="py-24 text-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 border-3 border-red-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-semibold text-neutral-600 font-sans">
          ক্রিকফুট ক্রীড়া সংবাদ লোড হচ্ছে...
        </p>
      </div>
    </div>;
}
