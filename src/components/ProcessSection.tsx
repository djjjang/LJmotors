import { Phone, Search, FileText, CheckCircle, Clock } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: '상담 예약',
      icon: <Phone className="w-5 h-5 text-[#fabc4d]" />,
      desc: '전화 또는 온라인을 통한 사전 증상 상담 및 고객 맞춤형 방문 일정 예약',
      badge: '✓ 대기 없는 빠른 예약 접수',
      active: true,
    },
    {
      num: '02',
      title: '입고 점검',
      icon: <Search className="w-5 h-5 text-[#fabc4d]" />,
      desc: '차량 입고 후 전용 정밀 진단 시스템 점검 및 30개 기본 항목 무상 육안 검사',
      badge: '✓ 정밀 진단 스캐너 데이터 확인',
      active: false,
    },
    {
      num: '03',
      title: '견적 정비',
      icon: <FileText className="w-5 h-5 text-[#fabc4d]" />,
      desc: '점검 결과를 바탕으로 부품 및 공임 상세 견적 안내, 고객 최종 승인 후 전담 정비',
      badge: '✓ 승인 없는 추가 요금 원천 차단',
      active: false,
    },
    {
      num: '04',
      title: '검수 · 인도',
      icon: <CheckCircle className="w-5 h-5 text-[#fabc4d]" />,
      desc: '정비 완료 후 최종 시운전과 기능 재검수, 교체 고품 확인 안내 후 안전한 출고',
      badge: '✓ 1년 정비보증서 교부 및 출고',
      active: false,
    },
  ];

  return (
    <section className="bg-[#181c20] text-[#f8f9ff] py-16 md:py-24 border-t border-gray-800" id="process">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#fdbe50]/40 text-[#ffdead] text-xs font-semibold mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>TRANSPARENT 4 STEPS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#f8f9ff] font-bold tracking-tight">
              신뢰를 더하는 정직한 정비 프로세스
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#c3c7cc] max-w-md">
            모든 진단과 수리 내역을 고객님께 투명하게 영상 및 사진으로 공유하며 철저한 사전 승인 후
            작업을 진행합니다.
          </p>
        </div>

        {/* Horizontal 4-Column Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:bg-white/[0.08] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`w-10 h-10 rounded-full font-bold flex items-center justify-center text-sm shadow-sm ${
                      step.active
                        ? 'bg-[#7e5700] text-white ring-2 ring-[#fdbe50]'
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    {step.num}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#f8f9ff] mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#c3c7cc] leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs font-semibold text-[#ffdead]">
                {step.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
