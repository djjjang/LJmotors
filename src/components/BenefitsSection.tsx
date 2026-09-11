import {
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  Wrench,
  Coins,
  Truck,
  ThumbsUp,
} from 'lucide-react';
import { BenefitItem } from '../types';
import { BENEFITS_DATA } from '../data/mockData';

export default function BenefitsSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#7e5700]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-[#7e5700]" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-6 h-6 text-[#7e5700]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#7e5700]" />;
      case 'Coins':
        return <Coins className="w-6 h-6 text-[#7e5700]" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-[#7e5700]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#7e5700]" />;
    }
  };

  return (
    <section className="bg-[#eff4ff]/60 py-16 md:py-24 border-y border-gray-200" id="benefits">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdbe50]/30 border border-[#fdbe50] text-[#7e5700] text-xs font-semibold mb-3">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>COMPETITIVE ADVANTAGE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0d1c2f] font-bold tracking-tight mb-4">
            원흥 모터스만의 6가지 확고한 약속
          </h2>
          <p className="text-sm md:text-base text-[#44474a] leading-relaxed">
            불필요한 과잉 정비 없이, 제조사 공식 매뉴얼에 입각한 정직하고 투명한 오토케어
            스탠다드를 고집합니다.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BENEFITS_DATA.map((benefit: BenefitItem) => (
            <div
              key={benefit.id}
              className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 hover:border-[#7e5700] transition-all shadow-sm hover:shadow-md group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#fdbe50]/20 border border-[#fdbe50]/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {getIcon(benefit.iconName)}
              </div>
              <h3 className="text-lg font-bold text-[#0d1c2f] mb-2.5">{benefit.title}</h3>
              <p className="text-xs sm:text-sm text-[#44474a] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
