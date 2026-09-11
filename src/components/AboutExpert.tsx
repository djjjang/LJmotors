import {
  Award,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  HeartHandshake,
  Cpu,
  Clock,
  Dog,
  Car,
  Sparkles,
  ArrowRight,
  UserCheck,
} from 'lucide-react';

interface AboutExpertProps {
  onOpenReservation: (category?: string) => void;
}

export default function AboutExpert({ onOpenReservation }: AboutExpertProps) {
  // 3대 원칙
  const principles = [
    {
      num: '01',
      title: '100% 정직한 정비',
      subtitle: '과잉정비 제로 약속',
      desc: '꼭 필요한 정비만 투명하게 제안하며, 불필요한 과잉정비나 부당한 교체 권유는 절대 하지 않습니다.',
      badge: '과잉정비 절대 근절',
    },
    {
      num: '02',
      title: '최신진단 및 정밀정비',
      subtitle: '원인 모를 소음·경고등 완벽 해결',
      desc: '공식 서비스센터급 첨단 전용 스캐너로 오진 없이 정확한 고장 원인을 진단하고 완벽하게 해결합니다.',
      badge: '공식센터급 첨단 스캐너',
    },
    {
      num: '03',
      title: '철저한 사후관리',
      subtitle: '1년 20,000km 품질 보증',
      desc: '출고 후에도 안심하고 운행하실 수 있도록 정비 내역 사진 공유 및 꼼꼼한 사후 피드백을 제공합니다.',
      badge: '안심 피드백 리포트',
    },
  ];

  // 무상 기본점검 서비스 4종
  const freeChecks = [
    { name: '타이어 공기압 체크', desc: '주행 조건별 적정 공기압 세팅' },
    { name: '타이어 펑크 무료 수리', desc: '안전 주행을 위한 지렁이 패치 무상' },
    { name: '에탄올 워셔액 완충', desc: '친환경 사계절 워셔액 넉넉히 보충' },
    { name: '브레이크액 수분도 점검', desc: '제동 안전 직결 정밀 테스터 측정' },
  ];

  // 마스터 커리어 하이라이트
  const masterMilestones = [
    {
      year: '2004 ~ 2015',
      role: '국내외 수입차 공식 서비스센터 선임 테크니션 & 테크니컬 마스터',
      detail: '독일 3사(BMW, 벤츠, 아우디) 전장 제어 및 엔진/미션 오버홀 전문 공인 자격 취득',
    },
    {
      year: '2016 ~ 2021',
      role: '고난도 하체 소음 및 하이브리드·EV 전자제어 트러블슈팅 전담',
      detail: '누적 10,000대 이상의 수입·국산 전 차종 복합 결함 분석 및 완벽 수리 경력',
    },
    {
      year: '2022 ~ 현재',
      role: 'LJ 모터스 프리미엄 오토케어 대표 마스터 엔지니어',
      detail: '고양시 삼송·원흥 1층 102~104호 3개 베이 확장, 최신 3D 휠얼라인먼트 & 전용 스캐너 완비',
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-white border-b border-gray-200 overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#fdbe50]/15 text-[#7e5700] text-xs font-bold tracking-wider mb-3">
              <Award className="w-4 h-4" />
              <span>ABOUT MASTER & PHILOSOPHY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0d1c2f] font-extrabold tracking-tight">
              20년 경력 마스터의 정비 철학
              <br />
              <span className="text-[#7e5700]">"과잉정비 없는 정직한 카센터, LJ모터스"</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#44474a] max-w-xl leading-relaxed">
            저희 LJ모터스는 <strong className="text-[#0d1c2f] font-semibold">"내 가족이 타는 차"</strong>라는
            마음으로 눈앞의 이익보다 고객님의 안전을 최우선으로 생각합니다.
            여성 운전자나 초보 운전자도 부당한 비용 걱정 없이 안심하고 맡기실 수 있는
            든든한 평생 차량 주치의가 되겠습니다.
          </p>
        </div>

        {/* Master Profile & Core Message Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Master Profile Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#181c20] to-[#252b32] text-white rounded-2xl p-7 sm:p-9 flex flex-col justify-between shadow-xl border border-gray-800 relative overflow-hidden">
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#fdbe50]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#fdbe50] text-[#281900] flex items-center justify-center font-black text-2xl shadow-lg">
                  LJ
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white">마스터 테크니션</h3>
                    <span className="px-2 py-0.5 rounded bg-[#fdbe50]/20 text-[#fdbe50] text-xs font-semibold">
                      경력 20년+
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">공식 센터 출신 1급 국가공인 정비마스터</p>
                </div>
              </div>

              <blockquote className="text-sm sm:text-base text-gray-200 leading-relaxed italic border-l-2 border-[#fdbe50] pl-4 my-6">
                "자동차 정비, 어디를 가야 과잉 정비 없이 정확하게 봐줄지 고민이셨나요?
                바쁜 직장인 분들과 초보 운전자분들이 부당한 견적 걱정 없이 언제든 편안히 찾으실 수 있도록,
                작은 볼트 하나까지 내 가족의 생명을 다루는 책임감으로 체결합니다."
              </blockquote>

              <div className="space-y-4 pt-4 border-t border-gray-700/80">
                <div className="text-xs font-bold text-[#fdbe50] tracking-wider uppercase">
                  MASTER CAREER HIGHLIGHTS
                </div>
                {masterMilestones.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#fdbe50] mt-2 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-white">
                        <span className="text-amber-400 mr-1.5">{item.year}</span>
                        {item.role}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-700/80 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-gray-400">
                정비 예약 직통: <span className="text-[#fdbe50] font-bold">010-8848-6134</span>
              </div>
              <button
                onClick={() => onOpenReservation()}
                className="px-4 py-2 rounded-lg bg-[#fdbe50] text-[#281900] text-xs font-bold hover:bg-[#fabc4d] transition-all flex items-center gap-1.5 cursor-pointer shadow"
              >
                <span>마스터 1:1 상담 예약</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3 Core Principles Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            <div className="grid grid-cols-1 gap-4">
              {principles.map((principle) => (
                <div
                  key={principle.num}
                  className="group p-6 rounded-2xl bg-[#f8f9ff] border border-gray-200 hover:border-[#fdbe50] hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <span className="text-2xl font-black text-[#fdbe50] tracking-tighter">
                        {principle.num}
                      </span>
                      <div>
                        <h4 className="text-lg font-bold text-[#0d1c2f] group-hover:text-[#7e5700] transition-colors">
                          {principle.title}
                        </h4>
                        <div className="text-xs font-semibold text-[#7e5700]">
                          {principle.subtitle}
                        </div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white border border-gray-200 text-gray-700 shrink-0">
                      {principle.badge}
                    </span>
                  </div>
                  <p className="text-sm text-[#44474a] mt-3 leading-relaxed pl-10">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Special Care & Amenities Bar (반려견 대환영, 정비 픽업, 3D 얼라인먼트) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#fdbe50] text-[#281900] flex items-center justify-center shrink-0">
                  <Dog className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0d1c2f]">애완견 동반 출입 대환영</div>
                  <div className="text-[11px] text-[#7e5700]">반려견과 함께 편안한 대기</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0d1c2f]">직장인 안심 픽업 서비스</div>
                  <div className="text-[11px] text-blue-700">이동이 바쁘신 분들을 위한 픽업</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0d1c2f]">최신 3D 휠얼라인먼트</div>
                  <div className="text-[11px] text-emerald-700">고속 주행 안정성 & 편마모 방지</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Free Basic Inspection Promise Banner (정비 이용 고객 전원 무상 제공) */}
        <div className="rounded-2xl bg-gradient-to-r from-[#181c20] via-[#22272e] to-[#181c20] text-white p-6 sm:p-8 border border-gray-800 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdbe50]/20 text-[#fdbe50] text-xs font-bold mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LJ모터스 정비 고객 100% 무상 혜택</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                정비 이용 시 <span className="text-[#fdbe50]">무상 기본점검 4종 서비스</span> 즉시 제공
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                안심하고 도로를 달리실 수 있도록 사소한 점검 하나도 놓치지 않고 무료로 꼼꼼하게 채워드립니다.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {freeChecks.map((check, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#fdbe50] mb-1">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>무상 지원</span>
                  </div>
                  <div className="text-sm font-bold text-white">{check.name}</div>
                  <div className="text-[11px] text-gray-400 mt-1 leading-tight">{check.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
