import { X, Wrench, Shield, Check, Cpu, ExternalLink, MessageCircle } from 'lucide-react';
import { BrandItem } from '../types';

interface BrandDetailModalProps {
  brand: BrandItem | null;
  onClose: () => void;
  onBookForBrand: (brandName: string) => void;
}

export default function BrandDetailModal({
  brand,
  onClose,
  onBookForBrand,
}: BrandDetailModalProps) {
  if (!brand) return null;

  const KAKAO_CHAT_URL = 'https://pf.kakao.com/_xncxlrX/chat';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[#181c20] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#fdbe50]/20 text-[#fdbe50] flex items-center justify-center font-black text-base border border-[#fdbe50]/30">
              {brand.name.slice(0, 2)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-lg text-white tracking-wide">{brand.name}</h3>
                <span className="px-2 py-0.5 rounded bg-white/10 text-[11px] text-gray-300">
                  {brand.country}
                </span>
              </div>
              <p className="text-xs text-[#c3c7cc]">{brand.koreanName} 전문 진단 케어</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <p className="text-sm text-[#44474a] leading-relaxed">{brand.description}</p>

          {/* Diagnostic Tool */}
          <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
            <Cpu className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-blue-900">전용 진단 시스템 & 스캐너</div>
              <div className="text-sm font-semibold text-blue-800 mt-0.5">
                {brand.diagnosticTool}
              </div>
            </div>
          </div>

          {/* Key Specialties */}
          <div>
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2.5">
              주요 전담 정비 & 해결 항목
            </h4>
            <div className="space-y-2">
              {brand.keySpecialties.map((spec, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                  <Check className="w-4 h-4 text-[#7e5700] shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg text-xs text-gray-600 flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#7e5700] shrink-0" />
            <span>100% 제조사 규격 정품/OEM 파츠 사용 & 1년 20,000km 보증</span>
          </div>

          {/* Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
            <button
              onClick={() => {
                onClose();
                onBookForBrand(brand.name);
              }}
              className="w-full sm:flex-1 py-3 rounded-xl bg-[#7e5700] text-white font-bold text-sm hover:bg-[#604100] transition-colors cursor-pointer text-center"
            >
              {brand.name} 예약 신청
            </button>
            <a
              href={KAKAO_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-3 rounded-xl bg-[#fee500] hover:bg-[#fad800] text-[#191919] font-bold text-sm flex items-center justify-center gap-1.5 border border-[#e6ce00] transition-colors shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-[#191919]" />
              <span>카톡 1:1 상담</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
