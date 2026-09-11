import { MouseEvent } from 'react';
import { Wrench } from 'lucide-react';

interface FooterProps {
  onOpenPolicyModal?: (title: string, content: string) => void;
  onOpenDirections?: () => void;
}

export default function Footer({ onOpenPolicyModal, onOpenDirections }: FooterProps) {
  const handlePolicyClick = (e: MouseEvent, title: string, content: string) => {
    e.preventDefault();
    if (onOpenPolicyModal) {
      onOpenPolicyModal(title, content);
    } else {
      alert(`${title}\n\n${content}`);
    }
  };

  return (
    <footer className="bg-[#181c20] border-t border-gray-800 text-[#f8f9ff]">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col gap-10">
        {/* Top Footer Row: Brand Info & Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          {/* Company Identity */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#ffdead]">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-[#f8f9ff] tracking-tight">
                LJ 모터스 프리미엄 오토케어
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#c3c7cc] leading-relaxed pr-4">
              LJ 모터스는 고양시 일산 원흥역 공식 센터급 장비와 숙련된 20년 경력 마스터
              엔지니어단이 상주하는 1급 종합 자동차 전문 정비센터입니다. 국산 및 수입 전 차종의
              가치를 정직하게 지켜드립니다.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="px-2.5 py-1 rounded bg-white/10 text-xs font-semibold text-[#ffdead]">
                국가공인 1급 정비업
              </span>
              <span className="px-2.5 py-1 rounded bg-white/10 text-xs font-semibold text-[#ffdead]">
                1년 정비보증 지정점
              </span>
            </div>
          </div>

          {/* Business Details */}
          <div className="md:col-span-4 flex flex-col gap-2 text-xs text-[#c3c7cc]">
            <div className="text-sm text-[#f8f9ff] font-bold mb-1">사업장 운영 안내</div>
            <div>상호명: LJ 모터스 (원흥 모터스) | 대표자: 원흥마스터</div>
            <div>사업자등록번호: 123-45-67890 | 통신판매업신고: 제2024-고양덕양-0000호</div>
            <div>주소: 경기도 고양시 덕양구 원흥5로4 1층 102, 103, 104호 (삼송동, 디올리치빌딩)</div>
            <div>
              영업시간: 평일 08:30 ~ 18:30 | 토요일 09:00 ~ 15:00 (일요일 예약 작업 가능)
            </div>
            <div>
              전화상담/예약직통: <a href="tel:010-8848-6134" className="text-white font-bold hover:underline">010-8848-6134</a>
            </div>
            <div>팩스(FAX): <span className="text-white font-semibold">070-7507-0123</span> | 애완견 동반 가능 🐶</div>
          </div>

          {/* Quick Links Navigation */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <div className="text-sm text-[#f8f9ff] font-bold mb-1">바로가기 링크</div>
            <div className="flex flex-col gap-1.5 text-xs text-[#808489]">
              <a href="#about" className="hover:text-white transition-colors text-[#fdbe50]">
                20년 경력 마스터 소개 (정비 철학)
              </a>
              <a
                href="https://pf.kakao.com/_xncxlrX/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fee500] hover:underline transition-colors font-medium flex items-center gap-1"
              >
                <span>카카오톡 1:1 상담 채널</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#fee500]/20 text-[#fee500]">실시간</span>
              </a>
              <a
                href="#terms"
                onClick={(e) =>
                  handlePolicyClick(
                    e,
                    '이용약관',
                    'LJ 모터스는 표준 자동차정비업 약관을 준수하며, 소비자기본법 및 관련 법령에 따라 고객 권익을 엄격히 보호합니다.'
                  )
                }
                className="hover:text-white transition-colors"
              >
                이용약관
              </a>
              <a
                href="#privacy"
                onClick={(e) =>
                  handlePolicyClick(
                    e,
                    '개인정보처리방침',
                    '견적 및 정비 상담을 위해 수집된 고객의 개인정보(성함, 연락처, 차량정보)는 상담 목적 외 사용되지 않으며 상담 완료 후 즉시 파기됩니다.'
                  )
                }
                className="hover:text-white transition-colors"
              >
                개인정보처리방침
              </a>
              <a
                href="#warranty"
                onClick={(e) =>
                  handlePolicyClick(
                    e,
                    '1년 20,000km 정비보증정책',
                    'LJ 모터스에서 정비한 순정/OEM 파츠는 출고일로부터 1년 또는 주행거리 20,000km까지 무상 품질보증을 제공합니다.'
                  )
                }
                className="hover:text-white transition-colors"
              >
                정비보증정책
              </a>
              <a
                href="#location"
                onClick={(e) => {
                  if (onOpenDirections) {
                    onOpenDirections();
                  }
                }}
                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>오시는 길</span>
                <span className="text-[10px] text-[#fdbe50] bg-white/10 px-1.5 py-0.5 rounded">약도</span>
              </a>
              <a href="#quote" className="hover:text-white transition-colors">
                온라인 견적문의
              </a>
              <button
                onClick={() =>
                  alert('관리자 로그인 페이지입니다. (보안 담당자 전용 시스템)')
                }
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                관리자 로그인
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#808489]">
          <div>
            © 2025 LJ 모터스 (원흥 모터스). All rights reserved. 일산 원흥역 공식 센터급 프리미엄
            오토케어 서비스.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#ffdead] font-bold">정직한 부품 · 투명한 견적 · 공식급 기술력</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
