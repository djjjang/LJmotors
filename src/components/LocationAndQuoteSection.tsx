import { useState, useEffect, FormEvent } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Printer,
  Calculator,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  Navigation,
  MessageCircle,
  Compass,
} from 'lucide-react';
import { QuoteFormData } from '../types';
import { MAP_PREVIEW_IMAGE } from '../data/mockData';

interface LocationAndQuoteSectionProps {
  preselectedCategory?: string;
  onSubmittedSuccess?: (data: QuoteFormData) => void;
  onOpenDirections?: () => void;
}

export default function LocationAndQuoteSection({
  preselectedCategory,
  onSubmittedSuccess,
  onOpenDirections,
}: LocationAndQuoteSectionProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    customerName: '',
    phone: '',
    carModel: '',
    carYearAndMileage: '',
    serviceCategory: '01',
    symptoms: '',
    agreePrivacy: false,
  });

  const [copied, setCopied] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedCategory) {
      setFormData((prev) => ({ ...prev, serviceCategory: preselectedCategory }));
    }
  }, [preselectedCategory]);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('경기도 고양시 덕양구 원흥5로4 1층 102, 103, 104호 (삼송동, 디올리치빌딩) LJ 모터스');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.phone || !formData.carModel) {
      alert('성함, 연락처, 차종을 모두 입력해 주세요.');
      return;
    }
    if (!formData.agreePrivacy) {
      alert('개인정보 수집 및 정비 견적 안내 활용에 동의해 주세요.');
      return;
    }

    setSubmittedMessage(
      `[접수 완료] ${formData.customerName} 고객님, ${formData.carModel} 견적 문의가 성공적으로 접수되었습니다. 20년 경력 마스터가 30분 이내(${formData.phone})로 상세 견적을 유선 또는 문자로 안내해 드리겠습니다.`
    );

    if (onSubmittedSuccess) {
      onSubmittedSuccess(formData);
    }
  };

  const handleReset = () => {
    setSubmittedMessage(null);
    setFormData({
      customerName: '',
      phone: '',
      carModel: '',
      carYearAndMileage: '',
      serviceCategory: '01',
      symptoms: '',
      agreePrivacy: false,
    });
  };

  return (
    <section className="bg-[#eff4ff]/60 py-16 md:py-24 border-t border-gray-200" id="location">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: 오시는 길 안내 & 정보 */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdbe50]/30 border border-[#fdbe50] text-[#7e5700] text-xs font-semibold mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>LOCATION & CONTACT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0d1c2f] font-bold tracking-tight mb-4">
                LJ 모터스 오시는 길
              </h2>
              <p className="text-sm md:text-base text-[#44474a] mb-8 leading-relaxed">
                지하철 3호선 원흥역 2번 출구에서 490m (도보 5분 거리). 디올리치빌딩 1층 102~104호 넉넉한 고객 전용 주차 공간
                완비로 언제든 편안하게 방문 및 입고하실 수 있습니다. (애완견 동반 대환영 🐶)
              </p>

              {/* Contact Information Cards */}
              <div className="space-y-4 mb-8">
                {/* Address Card */}
                <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-white border border-gray-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#7e5700] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#0d1c2f]">정비소 매장 주소</div>
                      <div className="text-xs sm:text-sm font-medium text-[#0d1c2f] mt-0.5">
                        경기도 고양시 덕양구 원흥5로4 1층 102, 103, 104호 (삼송동, 디올리치빌딩)
                      </div>
                      <div className="text-xs text-[#7e5700] mt-0.5 font-semibold">
                        원흥역 2번 출구에서 490m | 디올리치빌딩 1층 | 대형 주차공간 완비
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 shrink-0">
                    {onOpenDirections && (
                      <button
                        onClick={onOpenDirections}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fdbe50] hover:bg-[#fabc4d] text-[#281900] text-xs font-bold transition-all shadow-2xs cursor-pointer active:scale-95"
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>약도 안내 보기</span>
                      </button>
                    )}
                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition-colors shrink-0 cursor-pointer"
                      title="주소 복사"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? '복사됨!' : '주소 복사'}</span>
                    </button>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-200 shadow-sm">
                  <Clock className="w-5 h-5 text-[#7e5700] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-[#0d1c2f]">영업 시간 안내</div>
                    <div className="text-xs sm:text-sm text-[#44474a] mt-0.5">
                      평일: 08:30 ~ 18:30 | 토요일: 09:00 ~ 15:00
                    </div>
                    <div className="text-xs text-[#7e5700] mt-0.5 font-medium">
                      일요일 휴무 (사전 예약 시 작업 가능) | 애완견 출입 대환영
                    </div>
                  </div>
                </div>

                {/* Phone & Fax Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-200 shadow-sm">
                    <Phone className="w-5 h-5 text-[#7e5700] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#0d1c2f]">상담 및 예약 직통</div>
                      <a
                        href="tel:010-8848-6134"
                        className="text-base font-extrabold text-[#7e5700] mt-0.5 hover:underline block tracking-tight"
                      >
                        010-8848-6134
                      </a>
                      <a
                        href="tel:010-5244-6477"
                        className="text-xs text-gray-500 hover:text-gray-700 mt-0.5 block"
                      >
                        대표번호: 010-5244-6477
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-200 shadow-sm">
                    <Printer className="w-5 h-5 text-[#7e5700] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#0d1c2f]">팩스 (FAX)</div>
                      <div className="text-base font-bold text-[#44474a] mt-0.5 tracking-tight">
                        070-7507-0123
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        정비 견적서 및 서류 수신
                      </div>
                    </div>
                  </div>
                </div>

                {/* KakaoTalk 1:1 Consultation Channel Card */}
                <a
                  href="https://pf.kakao.com/_xncxlrX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[#fee500]/25 hover:bg-[#fee500]/40 border border-[#fee500] text-[#191919] transition-all group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#fee500] border border-[#e6ce00] flex items-center justify-center text-[#191919] shadow-sm shrink-0">
                      <MessageCircle className="w-5 h-5 fill-[#191919]" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-black text-[#191919]">
                        카카오톡 1:1 실시간 상담 채널
                      </div>
                      <div className="text-[11px] sm:text-xs text-gray-600">
                        사진 전송, 실시간 공임 문의 및 예약 상담 가능
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-black text-[#191919] px-3 py-1.5 rounded-md bg-[#fee500] border border-[#e6ce00] group-hover:scale-105 transition-transform shrink-0 flex items-center gap-1">
                    <span>카톡 상담</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </div>

            {/* Interactive Style Map Box with Hotlink Image */}
            <div
              onClick={onOpenDirections}
              role={onOpenDirections ? 'button' : undefined}
              tabIndex={onOpenDirections ? 0 : undefined}
              onKeyDown={(e) => {
                if (onOpenDirections && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  onOpenDirections();
                }
              }}
              className="relative h-64 sm:h-72 rounded-xl overflow-hidden border border-gray-200 bg-gray-100 shadow-inner flex items-center justify-center group cursor-pointer hover:border-[#fdbe50] transition-colors"
              title="클릭하여 상세 약도 및 길안내 열기"
            >
              <img
                src={MAP_PREVIEW_IMAGE}
                alt="원흥역 일대 정비소 위치 안내 지도"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors" />

              {/* Pin Overlay Badge */}
              <div className="relative z-10 p-3.5 sm:p-4 rounded-lg bg-[#181c20]/90 backdrop-blur-md text-[#f8f9ff] flex items-center gap-3 border border-white/20 shadow-xl max-w-sm mx-4 group-hover:scale-102 transition-transform">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#fdbe50] text-[#281900] flex items-center justify-center shrink-0 shadow">
                  <Navigation className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold flex items-center gap-2">
                    <span>LJ 모터스 (원흥 모터스)</span>
                    <span className="text-[10px] font-bold text-[#fdbe50] bg-[#fdbe50]/15 px-1.5 py-0.5 rounded">
                      약도 보기
                    </span>
                  </div>
                  <div className="text-xs text-[#c3c7cc] mt-0.5">
                    원흥역 2번 출구 490m (클릭 시 상세 약도 안내)
                  </div>
                </div>
              </div>

              {/* Floating Bottom Cue Badge */}
              <div className="absolute bottom-3 right-3 z-10 px-3 py-1.5 rounded-full bg-[#fdbe50] hover:bg-[#fabc4d] text-[#281900] text-xs font-black shadow-lg flex items-center gap-1.5 group-hover:scale-105 transition-transform">
                <Compass className="w-3.5 h-3.5" />
                <span>상세 약도 안내 열기 🔍</span>
              </div>
            </div>
          </div>

          {/* Right Side: 온라인 견적문의 Interactive Form */}
          <div
            className="lg:col-span-6 bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-200 shadow-lg relative"
            id="quote"
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdbe50]/20 border border-[#fdbe50] text-[#7e5700] text-xs font-semibold mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>QUICK ESTIMATE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0d1c2f]">
                정비 견적을 문의해 주세요
              </h3>
              <p className="text-xs sm:text-sm text-[#44474a] mt-1">
                기본 정보를 남겨주시면 20년 경력 마스터가 30분 이내 정확하고 친절한 예상 견적을 안내해
                드립니다.
              </p>
            </div>

            {submittedMessage ? (
              <div className="p-6 rounded-xl bg-green-50 border border-green-200 text-green-900 space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2 text-green-700 font-bold text-lg">
                  <CheckCircle2 className="w-6 h-6" />
                  <span>견적 문의가 정상 접수되었습니다!</span>
                </div>
                <p className="text-sm leading-relaxed">{submittedMessage}</p>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold text-xs transition-colors cursor-pointer"
                  >
                    추가 견적 문의 작성하기
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0d1c2f] mb-1.5">
                      고객 성함 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.customerName}
                      onChange={(e) =>
                        setFormData({ ...formData, customerName: e.target.value })
                      }
                      placeholder="홍길동"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-[#7e5700] focus:ring-1 focus:ring-[#7e5700] text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0d1c2f] mb-1.5">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="010-1234-5678"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-[#7e5700] focus:ring-1 focus:ring-[#7e5700] text-sm outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0d1c2f] mb-1.5">
                      차종 및 모델명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.carModel}
                      onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                      placeholder="예: 벤츠 E300 / 쏘렌토 MQ4"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-[#7e5700] focus:ring-1 focus:ring-[#7e5700] text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0d1c2f] mb-1.5">
                      차량 연식 및 주행거리
                    </label>
                    <input
                      type="text"
                      value={formData.carYearAndMileage}
                      onChange={(e) =>
                        setFormData({ ...formData, carYearAndMileage: e.target.value })
                      }
                      placeholder="예: 2021년식 / 65,000km"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-[#7e5700] focus:ring-1 focus:ring-[#7e5700] text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0d1c2f] mb-1.5">
                    주요 정비 희망 항목
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) =>
                      setFormData({ ...formData, serviceCategory: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-[#7e5700] focus:ring-1 focus:ring-[#7e5700] text-sm outline-none"
                  >
                    <option value="01">엔진 및 미션 점검 (경고등, 누유, 출력저하)</option>
                    <option value="02">제조사 규격 정기점검 및 오일류 교환</option>
                    <option value="03">1급 판금 도장 및 차체 보험수리</option>
                    <option value="04">공조 에어컨 가스 및 전자제어 장비 점검</option>
                    <option value="05">타이어 교체 및 3D 휠 얼라인먼트</option>
                    <option value="06">하체 소음 / 브레이크 제동 계통 점검</option>
                    <option value="07">기타 종합 정밀 진단</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0d1c2f] mb-1.5">
                    증상 및 세부 문의 내용
                  </label>
                  <textarea
                    rows={4}
                    value={formData.symptoms}
                    onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                    placeholder="차량에서 발생하는 소음, 경고등 점등 상태, 정비 희망 일자 등을 자유롭게 남겨주세요."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-[#7e5700] focus:ring-1 focus:ring-[#7e5700] text-sm outline-none resize-none"
                  />
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    checked={formData.agreePrivacy}
                    onChange={(e) =>
                      setFormData({ ...formData, agreePrivacy: e.target.checked })
                    }
                    className="mt-1 rounded border-gray-300 text-[#7e5700] focus:ring-[#7e5700] cursor-pointer"
                  />
                  <label
                    htmlFor="privacy"
                    className="text-xs text-[#44474a] select-none cursor-pointer leading-relaxed"
                  >
                    개인정보 수집 및 정비 견적 안내 활용에 동의합니다. (상담 완료 후 즉시 파기)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 rounded-lg bg-[#7e5700] text-white font-bold text-sm sm:text-base shadow-md hover:bg-[#604100] transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>견적 문의하기 (무료 상담)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
