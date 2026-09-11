import { useState, useEffect, FormEvent } from 'react';
import { X, Calendar, Clock, Car, Phone, User, CheckCircle2, ShieldCheck } from 'lucide-react';
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

  useEffect(() => {
    if (defaultCategory) setCategory(defaultCategory);
    if (defaultBrand) setCarModel((prev) => (prev ? prev : `${defaultBrand} `));
  }, [defaultCategory, defaultBrand, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !carModel || !date) {
      alert('성함, 연락처, 차종, 희망 예약일을 모두 입력해 주세요.');
      return;
    }
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
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
              <p className="text-xs text-[#c3c7cc]">원흥역 1·2번 출구 앞 LJ 모터스</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#0d1c2f]">예약 신청이 접수되었습니다!</h4>
              <p className="text-xs sm:text-sm text-[#44474a] leading-relaxed max-w-sm mx-auto">
                <strong>{name}</strong> 고객님, 희망 일자(<strong>{date} {time}</strong>)로 정비 예약이
                접수되었습니다. 담당 어드바이저가 확인 후 30분 이내로 확정 전화를 드리겠습니다.
              </p>
              <div className="p-4 bg-gray-50 rounded-xl text-left text-xs space-y-1.5 border border-gray-200">
                <div>• 예약 차종: <span className="font-semibold text-gray-800">{carModel}</span></div>
                <div>• 정비 위치: <span className="font-semibold text-gray-800">고양시 덕양구 원흥5로4 1층 102~104호 (디올리치빌딩)</span></div>
                <div>• 문의 전화: <span className="font-semibold text-[#7e5700]">010-8848-6134 / 010-5244-6477</span></div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <a
                  href="https://pf.kakao.com/_xncxlrX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-lg bg-[#fee500] hover:bg-[#fad800] text-[#191919] font-bold text-xs flex items-center justify-center gap-1.5 border border-[#e6ce00] transition-colors"
                >
                  <span>카카오톡 1:1 상담 연결</span>
                </a>
                <button
                  onClick={handleClose}
                  className="flex-1 py-3 rounded-lg bg-[#7e5700] text-white font-bold text-xs hover:bg-[#604100] transition-colors"
                >
                  확인 완료
                </button>
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
                className="w-full py-3 rounded-lg bg-[#7e5700] text-white font-bold text-sm hover:bg-[#604100] transition-colors cursor-pointer"
              >
                예약 신청 완료하기
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
