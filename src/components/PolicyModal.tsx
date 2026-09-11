import { X, ShieldCheck } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
}

export default function PolicyModal({
  isOpen,
  title,
  content,
  onClose,
}: PolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        <div className="bg-[#181c20] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#fdbe50]" />
            <h3 className="font-bold text-base">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{content}</p>
          <div className="p-3 rounded-lg bg-gray-50 text-xs text-gray-500 border border-gray-200">
            문의사항이 있으시면 고객지원센터(010-5244-6477)로 연락주시면 친절히 안내해 드립니다.
          </div>
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-lg bg-gray-800 text-white font-semibold text-sm hover:bg-black transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
