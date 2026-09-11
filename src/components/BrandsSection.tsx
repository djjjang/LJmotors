import { useState } from 'react';
import { Car, Zap, Droplets, RefreshCw, Sparkles, ChevronRight, Info } from 'lucide-react';
import { BrandItem } from '../types';
import { BRANDS_DATA } from '../data/mockData';

interface BrandsSectionProps {
  onSelectBrand: (brand: BrandItem) => void;
}

export default function BrandsSection({ onSelectBrand }: BrandsSectionProps) {
  const [selectedBrand, setSelectedBrand] = useState<BrandItem | null>(null);

  const handleBrandClick = (brand: BrandItem) => {
    setSelectedBrand(brand);
    onSelectBrand(brand);
  };

  return (
    <section className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="brands">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdbe50]/30 border border-[#fdbe50] text-[#7e5700] text-xs font-semibold mb-3">
          <Car className="w-3.5 h-3.5" />
          <span>SPECIALIZED VEHICLE BRANDS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0d1c2f] font-bold tracking-tight mb-4">
          국산 및 수입 전 차종 전문 케어
        </h2>
        <p className="text-sm md:text-base text-[#44474a]">
          제조사별 전용 진단 소프트웨어와 규격 공구를 통해 브랜드 고유의 엔지니어링 특성에 맞춘 맞춤형
          정비를 실현합니다.
        </p>
      </div>

      {/* Brand Pills / Badges Grid (12 Brands) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
        {BRANDS_DATA.map((brand) => {
          const isCurrent = selectedBrand?.name === brand.name;
          return (
            <button
              key={brand.name}
              onClick={() => handleBrandClick(brand)}
              className={`p-3.5 sm:p-4 rounded-lg border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 shadow-sm hover:scale-[1.02] ${
                isCurrent
                  ? 'bg-[#181c20] text-white border-[#181c20] ring-2 ring-[#fdbe50]'
                  : 'bg-white text-[#0d1c2f] border-gray-200 hover:border-[#7e5700]'
              }`}
            >
              <span
                className={`font-extrabold text-sm sm:text-base tracking-tight ${
                  isCurrent ? 'text-[#ffdead]' : 'text-[#0d1c2f]'
                }`}
              >
                {brand.name}
              </span>
              <span
                className={`text-xs ${
                  isCurrent ? 'text-gray-300' : 'text-[#44474a]'
                }`}
              >
                {brand.koreanName}
              </span>
            </button>
          );
        })}
      </div>

      {/* Interactive Active Brand Quick Inspector Banner */}
      {selectedBrand && (
        <div className="mb-12 p-5 sm:p-6 rounded-xl bg-[#181c20] text-[#f8f9ff] border border-gray-700 shadow-md animate-fadeIn flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-[#fdbe50] text-[#281900] text-xs font-bold">
                {selectedBrand.name} 전담 진단 센터
              </span>
              <span className="text-xs text-gray-400">국가: {selectedBrand.country}</span>
            </div>
            <p className="text-sm font-semibold text-white mb-2">
              전용 장비: <span className="text-[#fabc4d]">{selectedBrand.diagnosticTool}</span>
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-gray-300">
              {selectedBrand.keySpecialties.map((spec, i) => (
                <span key={i} className="inline-flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded">
                  <Sparkles className="w-3 h-3 text-[#fabc4d]" />
                  {spec}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('quote');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="shrink-0 px-4 py-2.5 rounded-lg bg-[#fdbe50] text-[#281900] font-bold text-xs sm:text-sm hover:bg-[#fabc4d] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>{selectedBrand.name} 정비 견적 문의</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 3 Specialized Callout Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="p-6 rounded-xl bg-[#e6eeff]/50 border border-blue-100 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#7e5700]" />
              <h3 className="font-bold text-base text-[#0d1c2f]">현대·기아 하이브리드 전용 진단</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#44474a] leading-relaxed">
              고전압 배터리 밸런싱, 인버터 냉각수 교환, 하이브리드 전용 변속기 시스템 정밀 진단 시스템
              구축.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-blue-200/60 text-xs text-[#7e5700] font-bold">
            친환경 고전압 안전 교육 이수 마스터 집도
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-xl bg-[#e6eeff]/50 border border-blue-100 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Droplets className="w-5 h-5 text-[#7e5700]" />
              <h3 className="font-bold text-base text-[#0d1c2f]">BMW·벤츠 누유/하체 소음 케어</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#44474a] leading-relaxed">
              오일팬, 로커암 커버 가스켓 누유 원천 해결 및 에어 서스펜션, 컨트롤 암 부싱 잡음 완벽
              교정.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-blue-200/60 text-xs text-[#7e5700] font-bold">
            독일 3사 고질병 데이터베이스 보유
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-xl bg-[#e6eeff]/50 border border-blue-100 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <RefreshCw className="w-5 h-5 text-[#7e5700]" />
              <h3 className="font-bold text-base text-[#0d1c2f]">폭스바겐·아우디 DCT & 타이밍</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#44474a] leading-relaxed">
              DSG/S-Tronic 듀얼클러치 오일 및 필터 교환, 타이밍 벨트 풀세트 및 워터펌프 정밀 오버홀.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-blue-200/60 text-xs text-[#7e5700] font-bold">
            VAG 전용 어댑테이션 세팅 완료
          </div>
        </div>
      </div>
    </section>
  );
}
