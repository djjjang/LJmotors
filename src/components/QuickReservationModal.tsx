import { useState, useEffect, FormEvent } from 'react';
import {
  X,
  Calendar,
  Clock,
  Car,
  Phone,
  User,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  Copy,
  ExternalLink,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';

interface QuickReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
  defaultBrand?: string;
}

export default function QuickReservationModal({
  isOpen,
  onClose,
  defaultCategory = '01',
  defaultBrand = '',
}: QuickReservationModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [carModel, setCarModel] = useState(defaultBrand ? `${defaultBrand} ` : '');
  const [category, setCategory] = useState(defaultCategory);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [reservationSummary, setReservationSummary] = useState('');

  const KAKAO_CHAT_URL = 'https://pf.kakao.com/_xncxlrX/chat';

  useEffect(() => {
    if (defaultCategory) setCategory(defaultCategory);
    if (defaultBrand) setCarModel((prev) => (prev ? prev : `${defaultBrand} `));
  }, [defaultCategory, defaultBrand, isOpen]);

  if (!isOpen) return null;

  const categoryLabels: Record<string, string> = {
    '01': '엔진 및 미션 계통 점검 (경고등, 누유, 출력저하)',
    '02': '제조사 규격 소모품 및 오일 교환',
    '03': '1급 판금·도장 및 차체 보험 수리',
    '04': '수입차 전용 진단 및 전자제어',
    '05': '타이어 교체 및 3D 휠 얼라인먼트',
    '06': '하체 소음 및 브레이크 제동 계통',
    '07': '정기 종합 정밀 검사',
  };

  const generateReservationText = () => {
    const selectedCategoryTitle = categoryLabels[category] || category;
    return `[LJ모터스 정비 예약 신청]
• 고객명: ${name}
• 연락처: ${phone}
• 차종/모델: ${carModel}
• 희망일시: ${date} ${time}
• 정비항목: ${selectedCategoryTitle}
• 요청사항: ${notes.trim() ? notes.trim() : '사전 예약 방문 요청'}
• 매장위치: 고양시 덕양구 원흥5로4 1층 102~104호 (디올리치빌딩)`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !carModel || !date) {
      alert('성함, 연락처, 차종, 희망 예약일을 모두 입력해 주세요.');
      return;
    }

    const summary = generateReservationText();
    setReservationSummary(summary);

    // 1. Automatically copy to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(summary).catch(() => {});
    }

    // 2. Open KakaoTalk channel 1:1 chat window automatically
    window.open(KAKAO_CHAT_URL, '_blank');

    setIsSuccess(true);
  };

  const handleCopyAgain = () => {
    if (navigator.clipboard && reservationSummary) {
      navigator.clipboard.writeText(reservationSummary);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2000);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setCopiedText(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#181c20] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#fdbe50]/20 text-[#fdbe50] flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#f8f9ff]">간편 정비 예약 신청</h3>
              <p className="text-xs text-[#c3c7cc]">카카오톡 1:1 채널 실시간 자동 연동</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-2 space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-[#fee500] text-[#191919] flex items-center justify-center mx-auto shadow-md">
                <MessageCircle className="w-8 h-8 fill-[#191919]" />
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-black text-[#0d1c2f]">
                  카카오톡 상담창으로 자동 연결되었습니다!
                </h4>
                <p className="text-xs sm:text-sm text-[#44474a] mt-1 leading-relaxed">
                  <strong>{name}</strong> 고객님의 예약 신청 내용이 <span className="text-[#7e5700] font-bold">클립보드에 자동 복사</span>되었습니다.
                </p>
              </div>

              {/* Kakao Step Guidance Banner */}
              <div className="p-3.5 bg-[#fee500]/20 border border-[#fee500] rounded-xl text-left text-xs space-y-1">
                <div className="font-bold text-[#191919] flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#fee500] text-[#191919] flex items-center justify-center text-[10px] font-black shrink-0">
                    !
                  </span>
                  <span>카카오톡 전송 방법</span>
                </div>
                <p className="text-gray-700 leading-relaxed pl-5">
                  새 창으로 열린 <strong>LJ모터스 카카오톡 채팅창</strong> 입력란에 <span className="font-bold underline decoration-[#7e5700]">붙여넣기 (Ctrl+V 또는 길게 터치 후 붙여넣기)</span>하시면 사장님께 즉시 예약 메시지가 전송됩니다.
                </p>
              </div>

              {/* Summary Preview Box */}
              <div className="p-3.5 bg-gray-50 rounded-xl text-left text-xs space-y-1.5 border border-gray-200">
                <div className="flex items-center justify-between border-b border-gray-200 pb-1 mb-1">
                  <span className="font-bold text-gray-700">전송 예약 내용 미리보기</span>
                  <button
                    onClick={handleCopyAgain}
                    className="text-[11px] font-bold text-[#7e5700] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedText ? '복사 완료!' : '내용 다시 복사'}</span>
                  </button>
                </div>
                <pre className="font-sans whitespace-pre-wrap text-[11px] sm:text-xs text-gray-800 leading-relaxed">
                  {reservationSummary}
                </pre>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 pt-1">
                <a
                  href={KAKAO_CHAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#fee500] hover:bg-[#fad800] text-[#191919] font-black text-sm flex items-center justify-center gap-2 border border-[#e6ce00] shadow-md transition-all hover:scale-[1.01] active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 fill-[#191919]" />
                  <span>카카오톡 1:1 채팅창 열기 (메시지 전송)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <div className="flex gap-2">
                  <a
                    href="tel:010-8848-6134"
                    className="flex-1 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs flex items-center justify-center gap-1.5 border border-gray-300 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#7e5700]" />
                    <span>전화 직통 상담</span>
                  </a>
                  <button
                    onClick={handleClose}
                    className="flex-1 py-2.5 rounded-lg bg-gray-800 hover:bg-black text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    창 닫기
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    고객 성함 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="홍길동"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#7e5700] outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    연락처 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="010-1234-5678"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#7e5700] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  차종 및 모델명 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Car className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    placeholder="예: BMW 520d / 제네시스 G80"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#7e5700] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  정비 희망 패키지
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#7e5700] outline-none"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.categoryValue}>
                      {srv.code}: {srv.title}
                    </option>
                  ))}
                  <option value="99">기타 일반 고장 진단 및 수리</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    희망 예약 일자 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#7e5700] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    희망 시간
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#7e5700] outline-none"
                  >
                    <option value="08:30">오전 08:30</option>
                    <option value="09:30">오전 09:30</option>
                    <option value="10:30">오전 10:30</option>
                    <option value="11:30">오전 11:30</option>
                    <option value="13:30">오후 01:30</option>
                    <option value="15:00">오후 03:00</option>
                    <option value="16:30">오후 04:30</option>
                    <option value="18:00">오후 06:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  증상 및 요청 사항 (선택)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="증상이나 무상 픽업 희망 여부 등을 적어주세요."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#7e5700] outline-none resize-none"
                />
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 text-xs">
                <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
                <span>정비 내역 1년 2만km 품질보증서가 출고 시 무상 발급됩니다.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#fee500] hover:bg-[#fad800] text-[#191919] font-black text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#e6ce00] active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-[#191919]" />
                <span>카카오톡 채널로 예약 신청하기</span>
              </button>
              <p className="text-[11px] text-center text-gray-500">
                ⚡ 신청 즉시 작성하신 내용이 복사되며 카카오톡 1:1 상담창이 열립니다.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
