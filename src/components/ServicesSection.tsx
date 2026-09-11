import {
  Wrench,
  Settings,
  ClipboardCheck,
  Paintbrush,
  Wind,
  Disc,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Clock,
  Shield,
} from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/mockData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Settings':
        return <Settings className="w-8 h-8 text-[#7e5700]" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-8 h-8 text-[#7e5700]" />;
      case 'Paintbrush':
        return <Paintbrush className="w-8 h-8 text-[#7e5700]" />;
      case 'Wind':
        return <Wind className="w-8 h-8 text-[#7e5700]" />;
      case 'Disc':
        return <Disc className="w-8 h-8 text-[#7e5700]" />;
      default:
        return <Wrench className="w-8 h-8 text-[#7e5700]" />;
    }
  };

  return (
    <section className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="services">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdbe50]/20 border border-[#fdbe50] text-[#7e5700] text-xs font-semibold mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>MASTER AUTO CARE SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0d1c2f] font-bold tracking-tight">
            LJ 모터스 핵심 정비 솔루션
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#44474a] max-w-md">
          최첨단 정밀 계측 스캐너와 제조사 권장 스펙을 철저히 준수하여 과잉 정비 없이 차량의 본래
          컨디션을 완벽하게 회복시킵니다.
        </p>
      </div>

      {/* 5 Service Cards + 1 Official Callout Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_DATA.map((service) => (
          <div
            key={service.id}
            className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-[#181c20] text-[#fabc4d] text-xs font-bold">
                  {service.code}
                </span>
                {getIcon(service.iconName)}
              </div>

              <h3 className="text-xl font-bold text-[#0d1c2f] mb-3 group-hover:text-[#7e5700] transition-colors">
                {service.title}
              </h3>

              <p className="text-sm text-[#44474a] leading-relaxed mb-5">{service.description}</p>

              {/* Badges for time & warranty */}
              <div className="flex items-center gap-2 mb-4 text-xs text-gray-500 font-medium">
                {service.estimatedTime && (
                  <span className="inline-flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded">
                    <Clock className="w-3 h-3 text-gray-600" />
                    {service.estimatedTime}
                  </span>
                )}
                {service.warranty && (
                  <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-200/50">
                    <Shield className="w-3 h-3 text-amber-700" />
                    {service.warranty}
                  </span>
                )}
              </div>

              <ul className="space-y-2.5 border-t border-gray-100 pt-4 mb-6 text-xs sm:text-sm text-[#44474a]">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7e5700] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectService(service)}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#7e5700] hover:text-[#604100] transition-colors cursor-pointer pt-2 group-hover:translate-x-1 duration-200"
            >
              <span>{service.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}

        {/* Workshop Master Banner Card (Callout) */}
        <div className="bg-[#181c20] text-[#f8f9ff] rounded-xl p-8 border border-gray-700 flex flex-col justify-between relative overflow-hidden md:col-span-2 lg:col-span-1 shadow-lg">
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded bg-[#7e5700] text-white text-[11px] font-bold uppercase tracking-wider mb-4">
              Official Grade
            </span>
            <h3 className="text-xl font-bold text-[#f8f9ff] mb-3">
              찾으시는 정비 항목이 없으신가요?
            </h3>
            <p className="text-xs sm:text-sm text-[#c3c7cc] leading-relaxed mb-6">
              하체 잡소리, 오일 누유, 브레이크 밀림, 전기 계통 이상 등 어떤 증상이든 20년 경력
              마스터에게 직접 문의하시면 가장 빠르고 명쾌한 해답을 드립니다.
            </p>
          </div>

          <div className="relative z-10 pt-5 border-t border-white/15 flex items-center justify-between">
            <div>
              <div className="text-xs text-[#c3c7cc]">전화 상담 직통 라인</div>
              <a
                href="tel:010-5244-6477"
                className="text-lg font-bold text-[#ffdead] hover:underline"
              >
                010-5244-6477
              </a>
            </div>
            <a
              href="tel:010-5244-6477"
              className="w-11 h-11 rounded-full bg-[#fdbe50] text-[#281900] flex items-center justify-center hover:scale-110 transition-transform shadow"
              aria-label="전화 걸기"
            >
              <PhoneCall className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
