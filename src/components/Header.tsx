import { useState } from 'react';
import { Wrench, Phone, Menu, X, Calendar } from 'lucide-react';

interface HeaderProps {
  onOpenReservation: (category?: string) => void;
  onOpenDirections?: () => void;
}

export default function Header({ onOpenReservation, onOpenDirections }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '정비 철학', href: '#about' },
    { label: '서비스 소개', href: '#services' },
    { label: '센터 강점', href: '#benefits' },
    { label: '취급 브랜드', href: '#brands' },
    { label: '정비 프로세스', href: '#process' },
    { label: '고객 후기', href: '#reviews' },
    { label: '오시는 길', href: '#location', isDirections: true },
    { label: '견적·예약', href: '#quote' },
  ];

  return (
    <header className="bg-white top-0 sticky z-50 shadow-sm border-b border-gray-200/80">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Brand Logo / Identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-[#181c20] flex items-center justify-center text-[#fdbe50] shadow-sm group-hover:scale-105 transition-transform duration-200">
            <Wrench className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-xl tracking-tight text-[#0d1c2f]">
              LJ 모터스 프리미엄 오토케어
            </span>
            <span className="text-xs text-[#44474a]">일산 원흥역 1급 종합 자동차 전문 정비센터</span>
          </div>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#44474a]">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                if (link.isDirections && onOpenDirections) {
                  onOpenDirections();
                }
              }}
              className={`transition-colors duration-200 hover:text-[#0d1c2f] ${
                idx === 0 ? 'text-[#7e5700] font-bold border-b-2 border-[#7e5700] pb-1' : ''
              } ${link.isDirections ? 'relative' : ''}`}
            >
              <span>{link.label}</span>
              {link.isDirections && (
                <span className="ml-1 text-[10px] text-[#7e5700] bg-[#fdbe50]/20 px-1.5 py-0.5 rounded font-bold">
                  약도
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Trailing Action Controls */}
        <div className="flex items-center gap-3 md:gap-5">
          <a
            href="tel:010-5244-6477"
            className="hidden sm:flex items-center gap-2 text-sm text-[#0d1c2f] hover:text-[#7e5700] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#7e5700]" />
            <span className="font-bold tracking-wide">010-5244-6477</span>
          </a>

          <button
            onClick={() => onOpenReservation()}
            className="inline-flex items-center justify-center gap-1.5 px-4 md:px-5 py-2.5 rounded-lg bg-[#7e5700] text-white text-sm font-bold shadow hover:bg-[#604100] transition-all active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>간편 정비 예약</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#0d1c2f] hover:bg-gray-100 transition-colors"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-4 shadow-xl">
          <div className="flex flex-col space-y-3 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (link.isDirections && onOpenDirections) {
                    onOpenDirections();
                  }
                }}
                className="px-3 py-2 rounded-md text-sm font-semibold text-[#0d1c2f] hover:bg-[#eff4ff] transition-colors flex items-center justify-between"
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
              href="tel:010-5244-6477"
              className="flex items-center gap-2 text-sm font-bold text-[#7e5700]"
            >
              <Phone className="w-4 h-4" />
              <span>010-5244-6477</span>
            </a>
            <span className="text-xs text-gray-500">평일 08:30 ~ 18:30</span>
          </div>
        </div>
      )}
    </header>
  );
}
