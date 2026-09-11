import { useState } from 'react';
import {
  X,
  MapPin,
  Navigation,
  Copy,
  CheckCircle2,
  ExternalLink,
  Car,
  Footprints,
  Phone,
  MessageCircle,
  Clock,
  Compass,
  Building2,
  Dog,
} from 'lucide-react';
import { MAP_PREVIEW_IMAGE } from '../data/mockData';

interface DirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation?: () => void;
}

export default function DirectionsModal({
  isOpen,
  onClose,
  onOpenReservation,
}: DirectionsModalProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'schematic' | 'transit' | 'driving'>('schematic');

  if (!isOpen) return null;

  const fullAddress = '경기도 고양시 덕양구 원흥5로4 1층 102, 103, 104호 (삼송동, 디올리치빌딩)';
  const jibunAddress = '경기도 고양시 덕양구 삼송동 344-1 디올리치빌딩 1층';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const naverMapUrl = `https://map.naver.com/p/search/${encodeURIComponent('경기도 고양시 덕양구 원흥5로4 LJ모터스')}`;
  const kakaoMapUrl = `https://map.kakao.com/link/search/${encodeURIComponent('경기도 고양시 덕양구 원흥5로4')}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/75 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#181c20] px-5 sm:px-7 py-4 sm:py-5 text-white flex items-center justify-between shrink-0 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#fdbe50] text-[#281900] flex items-center justify-center font-black shadow-md">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  LJ 모터스 오시는 길 & 상세 약도
                </h3>
                <span className="px-2 py-0.5 rounded bg-[#fdbe50]/20 text-[#fdbe50] text-[11px] font-bold">
                  원흥역 2번 출구 490m
                </span>
              </div>
              <p className="text-xs text-[#c3c7cc] mt-0.5">
                디올리치빌딩 1층 102, 103, 104호 (고객 전용 지상 주차 완비)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="약도 창 닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 bg-gray-50 px-4 sm:px-6 pt-2 shrink-0 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('schematic')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'schematic'
                ? 'border-[#7e5700] text-[#7e5700]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>상세 약도 다이어그램</span>
          </button>

          <button
            onClick={() => setActiveTab('driving')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'driving'
                ? 'border-[#7e5700] text-[#7e5700]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Car className="w-4 h-4" />
            <span>자가용 · 내비게이션 길안내</span>
          </button>

          <button
            onClick={() => setActiveTab('transit')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'transit'
                ? 'border-[#7e5700] text-[#7e5700]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Footprints className="w-4 h-4" />
            <span>지하철 3호선 · 도보 안내</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Address Quick Action Box */}
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-5 h-5 text-[#7e5700] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs text-gray-500 font-medium">도로명 주소</div>
                <div className="text-xs sm:text-sm font-bold text-[#0d1c2f] leading-snug">
                  {fullAddress}
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5">
                  지번: {jibunAddress}
                </div>
              </div>
            </div>
            <button
              onClick={handleCopyAddress}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer shadow-2xs ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>주소 복사됨!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-gray-500" />
                  <span>주소 복사</span>
                </>
              )}
            </button>
          </div>

          {/* TAB 1: Schematic Diagram (약도) */}
          {activeTab === 'schematic' && (
            <div className="space-y-4">
              {/* Visual Schematic Box */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-[#181c20] via-[#20252b] to-[#181c20] text-white border border-gray-800 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-bold text-[#fdbe50] tracking-wider flex items-center gap-1.5">
                    <Compass className="w-4 h-4" />
                    <span>LJ MOTORS SCHEMATIC ROUTE MAP</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-gray-300">
                    원흥역 도보 5분 거리 (490m)
                  </span>
                </div>

                {/* Illustrated Route Flow */}
                <div className="relative py-4 px-2">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                    {/* Step 1: Wonheung Station */}
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-extrabold">
                          출발 지점
                        </span>
                        <span className="text-[11px] text-gray-400">지하철 3호선</span>
                      </div>
                      <div className="text-sm font-black text-white flex items-center gap-1.5">
                        <div className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                          3
                        </div>
                        <span>원흥역 2번 출구</span>
                      </div>
                      <p className="text-[11px] text-gray-300 mt-2 leading-relaxed">
                        2번 출구로 나와 삼송역/신원동 방향 큰 도로를 따라 직진합니다.
                      </p>
                    </div>

                    {/* Step 2: Route 490m */}
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-extrabold">
                          진행 구간
                        </span>
                        <span className="text-[11px] text-gray-400">약 490m 직진</span>
                      </div>
                      <div className="text-sm font-black text-white flex items-center gap-1.5">
                        <Footprints className="w-5 h-5 text-blue-400" />
                        <span>원흥5로 교차로 방면</span>
                      </div>
                      <p className="text-[11px] text-gray-300 mt-2 leading-relaxed">
                        도로변을 따라 약 4~5분 직진하시면 우측에 디올리치빌딩이 보입니다.
                      </p>
                    </div>

                    {/* Step 3: Arrival LJ Motors */}
                    <div className="p-3.5 rounded-xl bg-[#fdbe50]/15 border border-[#fdbe50]/40 flex flex-col justify-between shadow-inner">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded bg-[#fdbe50] text-[#281900] text-[10px] font-black">
                          목적지 도착
                        </span>
                        <span className="text-[11px] text-[#fdbe50] font-bold">1층 102~104호</span>
                      </div>
                      <div className="text-sm font-black text-[#fdbe50] flex items-center gap-1.5">
                        <Building2 className="w-5 h-5 text-[#fdbe50]" />
                        <span>LJ 모터스 (디올리치빌딩)</span>
                      </div>
                      <p className="text-[11px] text-gray-200 mt-2 leading-relaxed">
                        1층 전면 3개 정비 베이와 넓은 주차 공간이 완비되어 있습니다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Schematic Route Map Visual Representation */}
                <div className="mt-4 pt-4 border-t border-white/10 rounded-lg bg-black/30 p-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>원흥역 2번 출구 앞 &rarr; 원흥5로 사거리 &rarr; 디올리치빌딩 1층 (노란색 간판)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Dog className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-200 text-[11px] font-semibold">반려견 동반 입장 가능</span>
                  </div>
                </div>
              </div>

              {/* Real Map Photographic Card */}
              <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden border border-gray-200 group">
                <img
                  src={MAP_PREVIEW_IMAGE}
                  alt="원흥역 일대 정비소 위치 안내 지도"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute top-3 left-3 p-2.5 rounded-lg bg-[#181c20]/90 backdrop-blur-md text-white border border-white/20 text-xs">
                  <div className="font-bold text-amber-400">LJ 모터스 매장 위치</div>
                  <div className="text-[11px] text-gray-300">원흥역 2번 출구 직진 490m 도로변 1층</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Driving / Navigation */}
          {activeTab === 'driving' && (
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200/80">
                <h4 className="text-sm font-bold text-[#0d1c2f] flex items-center gap-2 mb-3">
                  <Car className="w-4 h-4 text-[#7e5700]" />
                  <span>내비게이션 검색 및 자가용 이용 안내</span>
                </h4>
                <div className="space-y-3 text-xs sm:text-sm text-[#44474a] leading-relaxed">
                  <div className="p-3 bg-white rounded-lg border border-amber-100">
                    <strong className="text-gray-900 block mb-1">내비게이션 추천 검색어</strong>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700">
                      <li><strong>"LJ모터스"</strong> 또는 <strong>"원흥5로4"</strong> 검색</li>
                      <li>건물명 검색 시: <strong>"디올리치빌딩"</strong> (삼송동 344-1)</li>
                      <li>티맵, 카카오내비, 네이버내비 모두 정밀 등록 완료</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-amber-100">
                    <strong className="text-gray-900 block mb-1">주차 및 차량 입고 안내</strong>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      건물 1층 전면에 <strong>LJ모터스 전용 넓은 지상 주차장</strong>이 마련되어 있어
                      초보 운전자분들도 편리하게 차량을 입고하실 수 있습니다.
                      도착 시 매장 앞 베이 또는 전용 주차면에 정차하시면 마스터가 직접 맞이해 드립니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Public Transit / Walking */}
          {activeTab === 'transit' && (
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200/80">
                <h4 className="text-sm font-bold text-[#0d1c2f] flex items-center gap-2 mb-3">
                  <Footprints className="w-4 h-4 text-blue-700" />
                  <span>지하철 3호선 및 도보 방문 상세 안내</span>
                </h4>
                <div className="space-y-3 text-xs sm:text-sm text-[#44474a] leading-relaxed">
                  <div className="p-3 bg-white rounded-lg border border-blue-100">
                    <strong className="text-gray-900 block mb-1">지하철 이용 시</strong>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      <strong>지하철 3호선 원흥역 2번 출구</strong>로 나와 원흥5로 사거리 방면으로
                      약 <strong>490m (성인 기준 도보 약 5분)</strong> 정도 직진하시면 디올리치빌딩 1층에 위치해 있습니다.
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-blue-100">
                    <strong className="text-gray-900 block mb-1">직장인 안심 픽업 서비스 안내</strong>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      시간을 내기 어려우신 고객님을 위해 <strong>삼송·원흥·지축·일산 인근 지역 차량 픽업 &amp; 딜리버리 서비스</strong>를
                      지원해 드립니다. 전화 또는 간편 예약을 통해 신청해 주세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Real-time Map Links (네이버 / 카카오 / 티맵) */}
          <div>
            <div className="text-xs font-bold text-gray-800 mb-2.5 flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5 text-[#7e5700]" />
              <span>실시간 지도 앱 바로 길찾기</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#03C75A]/10 hover:bg-[#03C75A]/20 border border-[#03C75A]/40 text-[#03C75A] font-bold text-xs sm:text-sm flex items-center justify-between transition-colors shadow-2xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-[#03C75A] text-white flex items-center justify-center font-black text-xs">
                    N
                  </span>
                  <span className="text-gray-900 font-bold">네이버 지도로 길찾기</span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#03C75A]" />
              </a>

              <a
                href={kakaoMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#FEE500]/20 hover:bg-[#FEE500]/30 border border-[#FEE500] text-[#191919] font-bold text-xs sm:text-sm flex items-center justify-between transition-colors shadow-2xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-[#FEE500] text-[#191919] border border-amber-300 flex items-center justify-center font-black text-xs">
                    K
                  </span>
                  <span className="text-gray-900 font-bold">카카오맵으로 길찾기</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-700" />
              </a>
            </div>
          </div>

          {/* Quick Contact & Hours Notice Bar */}
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#7e5700] shrink-0" />
              <div>
                <span className="text-gray-500">예약 및 길안내 문의:</span>{' '}
                <a href="tel:010-8848-6134" className="font-bold text-[#7e5700] hover:underline">
                  010-8848-6134
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#7e5700] shrink-0" />
              <div>
                <span className="text-gray-500">운영시간:</span>{' '}
                <span className="font-semibold text-gray-800">평일 08:30~18:30 / 토 09:00~15:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:px-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <a
            href="https://pf.kakao.com/_xncxlrX"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-[#fee500] hover:bg-[#fad800] text-[#191919] font-bold text-xs flex items-center justify-center gap-1.5 border border-[#e6ce00] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-[#191919]" />
            <span>카톡으로 실시간 길안내 받기</span>
          </a>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {onOpenReservation && (
              <button
                onClick={() => {
                  onClose();
                  onOpenReservation();
                }}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg bg-[#7e5700] hover:bg-[#604100] text-white font-bold text-xs transition-colors cursor-pointer"
              >
                방문 예약 신청
              </button>
            )}
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-gray-800 hover:bg-black text-white font-bold text-xs transition-colors cursor-pointer"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
