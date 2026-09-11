import { useState } from 'react';
import { Wrench, Phone, Menu, X, Calendar, Search } from 'lucide-react';

interface HeaderProps {
  onOpenReservation: (category?: string) => void;
  onOpenDirections?: () => void;
  onOpenLookup?: () => void;
}

export default function Header({ onOpenReservation, onOpenDirections, onOpenLookup }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop streamlined navigation (clean 6 items that never wrap)
  const desktopNavLinks = [
    { label: '정비 서비스', href: '#services' },
    { label: '20년 마스터', href: '#about' },
    { label: '취급 브랜드', href: '#brands' },
    { label: '정비 프로세스', href: '#process' },
    { label: '고객 후기', href: '#reviews' },
    { label: '오시는 길', href: '#location', isDirections: true },
  ];

  // Mobile menu comprehensive navigation
  const mobileNavLinks = [
    { label: '정비 서비스 안내', href: '#services' },
    { label: '20년 마스터 정비 철학', href: '#about' },
    { label: '센터 핵심 강점 6가지', href: '#benefits' },
    { label: '취급 수입차·국산차 브랜드', href: '#brands' },
    { label: '4단계 투명 정비 프로세스', href: '#process' },
    { label: '고객 리얼 정비 후기', href: '#reviews' },
    { label: '오시는 길 (약도)', href: '#location', isDirections: true },
    { label: '실시간 온라인 견적 문의', href: '#quote' },
  ];

  return (
    <header className="bg-white top-0 sticky z-50 shadow-sm border-b border-gray-200/80">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18 sm:h-20">
        {/* Brand Logo / Identity */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#181c20] flex items-center justify-center text-[#fdbe50] shadow-sm group-hover:scale-105 transition-transform duration-200 shrink-0">
            <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="flex flex-col shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg lg:text-xl tracking-tight text-[#0d1c2f] whitespace-nowrap">
                LJ 모터스
              </span>
              <span className="hidden sm:inline-block text-[11px] font-bold text-[#7e5700] bg-[#fdbe50]/20 px-1.5 py-0.5 rounded whitespace-nowrap">
                원흥점
              </span>
            </div>
            <span className="text-[11px] text-[#555] whitespace-nowrap hidden md:block">
              일산 원흥역 1급 자동차 전문 정비센터
            </span>
          </div>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-semibold text-[#44474a]">
          {desktopNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                if (link.isDirections && onOpenDirections) {
                  e.preventDefault();
                  onOpenDirections();
                }
              }}
              className="whitespace-nowrap inline-flex items-center gap-1 transition-colors duration-200 hover:text-[#7e5700] py-1 text-xs xl:text-sm font-bold text-[#44474a]"
            >
              <span>{link.label}</span>
              {link.isDirections && (
                <span className="text-[10px] text-[#7e5700] bg-[#fdbe50]/20 px-1.5 py-0.5 rounded font-bold whitespace-nowrap">
                  약도
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Trailing Action Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 shrink-0">
          <a
            href="tel:010-8848-6134"
            className="hidden 2xl:flex items-center gap-1.5 text-sm text-[#0d1c2f] hover:text-[#7e5700] transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-[#7e5700]" />
            <span className="font-bold tracking-wide">010-8848-6134</span>
          </a>

          {onOpenLookup && (
            <button
              onClick={() => onOpenLookup()}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-lg border border-gray-300 hover:border-[#7e5700] bg-gray-50 hover:bg-white text-[#0d1c2f] hover:text-[#7e5700] text-xs sm:text-sm font-bold shadow-2xs transition-colors cursor-pointer whitespace-nowrap shrink-0"
              title="예약 내역 조회"
            >
              <Search className="w-3.5 h-3.5 text-[#7e5700]" />
              <span className="hidden md:inline">예약 내역 확인</span>
              <span className="md:hidden">예약확인</span>
            </button>
          )}

          <button
            onClick={() => onOpenReservation()}
            className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg bg-[#7e5700] hover:bg-[#604100] text-white text-xs sm:text-sm font-bold shadow transition-all active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">간편 정비 예약</span>
            <span className="sm:hidden">정비 예약</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#0d1c2f] hover:bg-gray-100 transition-colors shrink-0"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-4 shadow-xl">
          <div className="flex flex-col space-y-1.5 pb-3">
            {onOpenLookup && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLookup();
                }}
                className="w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-bold bg-[#eff4ff] text-[#0d1c2f] flex items-center justify-between cursor-pointer border border-[#c3d5ff]"
              >
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#7e5700]" />
                  <span>예약 내역 실시간 확인</span>
                </div>
                <span className="text-xs text-[#7e5700] font-bold bg-white px-2 py-0.5 rounded shadow-2xs">
                  조회
                </span>
              </button>
            )}

            {mobileNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.isDirections && onOpenDirections) {
                    e.preventDefault();
                    onOpenDirections();
                  }
                }}
                className="px-3.5 py-2.5 rounded-md text-sm font-semibold text-[#0d1c2f] hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.isDirections && (
                  <span className="text-[11px] text-[#7e5700] bg-[#fdbe50]/20 px-2 py-0.5 rounded font-bold">
                    약도 안내
                  </span>
                )}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <a
              href="tel:010-8848-6134"
              className="flex items-center gap-2 text-sm font-bold text-[#7e5700]"
            >
              <Phone className="w-4 h-4" />
              <span>010-8848-6134</span>
            </a>
            <span className="text-xs text-gray-500">평일 08:30 ~ 18:30</span>
          </div>
        </div>
      )}
    </header>
  );
}
