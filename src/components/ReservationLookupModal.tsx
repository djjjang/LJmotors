import { useState, useMemo } from 'react';
import {
  X,
  Search,
  Calendar,
  Clock,
  Car,
  Phone,
  User,
  MessageCircle,
  Copy,
  CheckCircle2,
  ExternalLink,
  Info,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { ReservationRecord } from '../types';
import { getStoredReservations, searchReservations } from '../utils/reservationStorage';

interface ReservationLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
  onOpenNewReservation?: () => void;
}

export default function ReservationLookupModal({
  isOpen,
  onClose,
  initialQuery = '',
  onOpenNewReservation,
}: ReservationLookupModalProps) {
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showAdminTips, setShowAdminTips] = useState(false);

  const KAKAO_CHAT_URL = 'https://pf.kakao.com/_xncxlrX/chat';
  const MASTER_PHONE = '010-8848-6134';

  const reservations = useMemo(() => {
    return searchReservations(searchTerm);
  }, [searchTerm, isOpen]);

  if (!isOpen) return null;

  const handleCopyText = (record: ReservationRecord) => {
    const text = `[LJ모터스 정비 예약 확인]
• 예약번호: ${record.id}
• 고객명: ${record.customerName}
• 연락처: ${record.phone}
• 차종/모델: ${record.carModel}
• 희망일시: ${record.preferredDate || '일정 조율'} ${record.preferredTime || ''}
• 정비항목: ${record.serviceCategory}
• 요청사항: ${record.notes || '점검 후 상담'}
• 예약접수일: ${record.createdAt}`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(record.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleSendToKakao = (record: ReservationRecord) => {
    handleCopyText(record);
    window.open(KAKAO_CHAT_URL, '_blank');
  };

  const createSmsHref = (record: ReservationRecord) => {
    const body = `[LJ모터스 정비예약 접수확인]
예약번호: ${record.id}
고객명: ${record.customerName}
연락처: ${record.phone}
차종: ${record.carModel}
희망일시: ${record.preferredDate || ''} ${record.preferredTime || ''}
정비항목: ${record.serviceCategory}
요청사항: ${record.notes || '빠른 상담 요청'}`;

    return `sms:${MASTER_PHONE}?body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0d1c2f] px-5 sm:px-6 py-4 flex items-center justify-between border-b border-[#1f2937] text-white shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#fdbe50] flex items-center justify-center text-[#281900] font-black shadow-xs">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-[#f8f9ff]">예약 내역 실시간 확인</h3>
              <p className="text-xs text-[#c3c7cc]">카카오톡 채널 및 매장 접수 내역 통합 확인</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar & Guide */}
        <div className="p-4 sm:p-5 bg-gray-50 border-b border-gray-200 space-y-3 shrink-0">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="고객명, 연락처(뒷자리), 또는 예약번호로 검색하세요"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#7e5700]/30 focus:border-[#7e5700]"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 px-1.5 py-0.5 rounded cursor-pointer"
              >
                지우기
              </button>
            )}
          </div>

          {/* Quick Notice Banner */}
          <div className="p-3 bg-amber-50/90 border border-amber-200 rounded-xl text-xs space-y-1">
            <div className="flex items-center justify-between">
              <div className="font-bold text-[#7e5700] flex items-center gap-1.5">
                <Info className="w-4 h-4 shrink-0" />
                <span>카카오톡 채널 연동 안내</span>
              </div>
              <button
                onClick={() => setShowAdminTips(!showAdminTips)}
                className="text-[11px] font-semibold text-gray-600 hover:text-black underline cursor-pointer"
              >
                {showAdminTips ? '접기 ▲' : '자세히 보기 ▼'}
              </button>
            </div>
            <p className="text-gray-700 leading-relaxed">
              카카오톡 정책상 외부 웹사이트에서 고객님의 채팅창으로 글을 강제 전송하는 것은 스팸 방지 규정으로 제한되어 있습니다.
              예약 카드에서 <strong>[카카오톡 전달]</strong>을 누른 후 <strong>채팅창에 붙여넣기</strong>하시거나, <strong>[문자(SMS) 전송]</strong>을 누르시면 즉시 접수됩니다.
            </p>
            {showAdminTips && (
              <div className="pt-2 border-t border-amber-200/80 text-[11px] text-gray-600 space-y-1 mt-1 bg-white/70 p-2.5 rounded-lg">
                <p className="font-bold text-gray-800">💡 카카오 채널 관리자 설정 팁:</p>
                <p>• 카카오톡 비즈니스 센터(center-pf.kakao.com) &gt; [자동응답/웰컴메시지]에서 기본 문구를 "성함과 차종을 남겨주시면 20년 경력 마스터가 바로 안내해 드립니다"로 설정해두시면 더욱 원활한 상담이 가능합니다.</p>
                <p>• 긴급한 수리 문의나 당일 입고는 마스터 직통 번호(010-8848-6134)로 전화 주시면 즉시 베이 배정이 가능합니다.</p>
              </div>
            )}
          </div>
        </div>

        {/* Reservation List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {reservations.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-gray-700">검색된 예약 내역이 없습니다</h4>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                입력하신 고객명 또는 전화번호가 맞는지 확인해 주세요. 신규 정비 예약을 원하시면 아래 버튼을 눌러주세요.
              </p>
              {onOpenNewReservation && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenNewReservation();
                  }}
                  className="mt-2 px-4 py-2 bg-[#7e5700] hover:bg-[#604100] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  신규 간편 정비 예약 신청하기
                </button>
              )}
            </div>
          ) : (
            reservations.map((record) => (
              <div
                key={record.id}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#7e5700]/40 shadow-xs transition-all space-y-3"
              >
                {/* Status & ID */}
                <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md">
                      {record.id}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        record.status === '상담확정'
                          ? 'bg-blue-100 text-blue-800'
                          : record.status === '정비완료'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      ● {record.status}
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-400">접수일: {record.createdAt}</span>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="text-gray-500">고객명:</span>
                    <strong className="text-gray-900">{record.customerName}</strong>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="text-gray-500">연락처:</span>
                    <strong className="text-gray-900">{record.phone}</strong>
                  </div>

                  <div className="flex items-center gap-2">
                    <Car className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="text-gray-500">예약차종:</span>
                    <strong className="text-gray-900">{record.carModel}</strong>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="text-gray-500">희망일시:</span>
                    <strong className="text-gray-900">
                      {record.preferredDate ? `${record.preferredDate} ${record.preferredTime || ''}` : '일정 유선 협의'}
                    </strong>
                  </div>
                </div>

                <div className="bg-gray-50 p-2.5 rounded-xl text-xs space-y-1 border border-gray-100">
                  <div>
                    <span className="font-semibold text-gray-700">정비 항목: </span>
                    <span className="text-gray-800">{record.serviceCategory}</span>
                  </div>
                  {record.notes && (
                    <div>
                      <span className="font-semibold text-gray-700">요청 사항: </span>
                      <span className="text-gray-600">{record.notes}</span>
                    </div>
                  )}
                </div>

                {/* Action Buttons for this reservation */}
                <div className="pt-1 flex flex-wrap items-center gap-2">
                  {/* Kakao Button */}
                  <button
                    onClick={() => handleSendToKakao(record)}
                    className="flex-1 min-w-[140px] py-2.5 px-3 rounded-xl bg-[#fee500] hover:bg-[#fad800] text-[#191919] font-black text-xs flex items-center justify-center gap-1.5 border border-[#e6ce00] shadow-2xs transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-[#191919]" />
                    <span>카카오톡 채널로 전달</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>

                  {/* SMS Button */}
                  <a
                    href={createSmsHref(record)}
                    className="flex-1 min-w-[130px] py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center gap-1.5 border border-blue-200 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 text-blue-600" />
                    <span>문자(SMS)로 전송</span>
                  </a>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopyText(record)}
                    className="py-2.5 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs flex items-center justify-center gap-1 border border-gray-200 transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedId === record.id ? '복사됨!' : '내용 복사'}</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-5 py-3 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500 shrink-0">
          <span>LJ모터스 상담 및 예약 직통: 010-8848-6134</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-gray-800 hover:bg-black text-white rounded-lg font-semibold transition-colors cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
