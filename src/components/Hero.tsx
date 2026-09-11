import { CheckCircle, Calendar, Phone, Cpu, ShieldCheck, Car, Navigation } from 'lucide-react';
import { HERO_BACKGROUND_IMAGE } from '../data/mockData';

interface HeroProps {
  onOpenReservation: (category?: string) => void;
  onOpenDirections?: () => void;
}

export default function Hero({ onOpenReservation, onOpenDirections }: HeroProps) {
  return (
    <section className="relative bg-[#0d1217] text-[#f8f9ff] overflow-hidden border-b border-gray-800 min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Hero Background Image (LJ Motors Storefront & Center Workshop Bay) - Brightened & Clearly Visible */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center object-cover brightness-[1.08] contrast-[1.03] transition-all duration-700 pointer-events-none"
        style={{
          backgroundImage: `url('${HERO_BACKGROUND_IMAGE}')`,
          backgroundPosition: 'center 40%',
        }}
        role="img"
        aria-label="LJ 모터스 프리미엄 오토케어 정비 베이 및 매장 전경"
      />

      {/* Directional scrim: Left is dimmed for text legibility, Center & Right remain clear and bright */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#0d1217]/95 via-[#0d1217]/75 to-transparent z-10 pointer-events-none" />

      {/* Top & Bottom subtle vignettes for seamless blending */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0d1217]/70 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#181c20] via-[#181c20]/60 to-transparent z-10 pointer-events-none" />

      {/* Center Storefront Highlight Indicator Badge */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-20 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs text-[#f8f9ff] shadow-lg">
        <span className="w-2 h-2 rounded-full bg-[#fdbe50] animate-ping" />
        <span className="font-semibold">LJ 모터스 매장 & 정비 베이 전경</span>
        <span className="text-[#c3c7cc] border-l border-white/20 pl-2">원흥5로4 1층</span>
      </div>

      <div className="relative z-20 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-[#fdbe50]/60 text-[#ffdead] text-xs font-semibold tracking-wide shadow-md">
            <CheckCircle className="w-4 h-4 text-[#fabc4d]" />
            <span>원흥5로4 디올리치빌딩 1층 | 수입차 & 국산차 1급 종합정비</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.2] text-[#f8f9ff] drop-shadow-md">
            국산차부터 수입차까지
            <br />
            <span className="text-[#fabc4d]">공식 센터 출신 20년 경력 마스터</span>의
            <br />
            전문 정비 파트너
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#e2e5e9] max-w-xl font-normal leading-relaxed drop-shadow-sm">
            현대, 기아, 제네시스부터 벤츠, BMW, 아우디, 포르쉐까지. 20년 경력의 베테랑 엔지니어단이
            정밀 첨단 진단 시스템으로 공식 센터 이상의 정직한 서비스를 합리적인 가격에 제공합니다.
          </p>

          {/* CTA Cluster */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenReservation()}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-lg bg-[#fdbe50] text-[#281900] text-base font-bold shadow-lg hover:bg-[#fabc4d] transition-all active:scale-95 cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>간편 정비 예약하기</span>
            </button>
            <a
              href="tel:010-5244-6477"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/30 text-[#f8f9ff] text-base font-semibold hover:bg-white/20 transition-all shadow-md"
            >
              <Phone className="w-5 h-5 text-[#fabc4d]" />
              <span>실시간 전화 상담문의</span>
            </a>
          </div>

          {/* Stats Counter Row */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 mt-2 border-t border-white/20 w-full max-w-xl bg-black/30 backdrop-blur-sm p-4 rounded-xl">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl text-[#fdbe50] font-extrabold tracking-tight">
                20년+
              </span>
              <span className="text-xs sm:text-sm text-[#c3c7cc] mt-1">공식센터 출신 전문</span>
            </div>
            <div className="flex flex-col border-l border-white/20 pl-4 sm:pl-6">
              <span className="text-2xl sm:text-3xl text-[#f8f9ff] font-extrabold tracking-tight">
                10,000+
              </span>
              <span className="text-xs sm:text-sm text-[#c3c7cc] mt-1">누적 점검 대수</span>
            </div>
            <div className="flex flex-col border-l border-white/20 pl-4 sm:pl-6">
              <span className="text-2xl sm:text-3xl text-[#fabc4d] font-extrabold tracking-tight">
                30%↓
              </span>
              <span className="text-xs sm:text-sm text-[#c3c7cc] mt-1">공식센터 대비 공임</span>
            </div>
          </div>
        </div>

        {/* Right Column Visual Glass Card - Translucent so center image is visible */}
        <div className="lg:col-span-5 hidden lg:flex flex-col gap-4">
          <div className="p-6 rounded-2xl bg-black/35 backdrop-blur-md border border-white/20 shadow-2xl flex flex-col gap-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/15">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#fdbe50] animate-pulse" />
                <span className="text-sm font-bold text-[#f8f9ff]">당일 점검·입고 실시간 가능</span>
              </div>
              <span className="text-xs font-semibold text-[#c3c7cc]">원흥5로4 디올리치빌딩 1층</span>
            </div>

            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#fdbe50]/20 flex items-center justify-center text-[#ffdead] shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#f8f9ff]">독일 3사 전용 진단 스캐너 완비</div>
                  <div className="text-xs text-[#c3c7cc]">BMW ISTA, 벤츠 Xentry 전용 진단장비</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#fdbe50]/20 flex items-center justify-center text-[#ffdead] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#f8f9ff]">1년 20,000km 정비 보증제</div>
                  <div className="text-xs text-[#c3c7cc]">정품 부품 보증서 발급 & 철저한 사후관리</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#fdbe50]/20 flex items-center justify-center text-[#ffdead] shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#f8f9ff]">대차 서비스 & 무상 딜리버리</div>
                  <div className="text-xs text-[#c3c7cc]">삼송·원흥·일산 전 지역 픽업 지원</div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  if (onOpenDirections) {
                    onOpenDirections();
                  } else {
                    const el = document.getElementById('location');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex-1 py-2.5 rounded-lg bg-white/15 hover:bg-white/25 border border-white/20 text-center text-xs font-semibold text-[#f8f9ff] transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
              >
                <Navigation className="w-4 h-4 text-[#fabc4d]" />
                <span>오시는 길 (약도)</span>
              </button>
              <a
                href="tel:010-5244-6477"
                className="flex-1 py-2.5 rounded-lg bg-[#fdbe50] hover:bg-[#fabc4d] text-center text-xs font-bold text-[#281900] transition-colors flex items-center justify-center gap-1.5 shadow"
              >
                <Phone className="w-4 h-4" />
                <span>010-5244-6477</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
