import { useState } from 'react';
import { Star, MessageSquareQuote, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { REVIEWS_DATA } from '../data/mockData';

export default function ReviewsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? REVIEWS_DATA : REVIEWS_DATA.slice(0, 3);

  return (
    <section className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="reviews">
      {/* Title & Overall Rating */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdbe50]/20 border border-[#fdbe50] text-[#7e5700] text-xs font-semibold mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>REAL CUSTOMER VOICES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0d1c2f] font-bold tracking-tight">
            일산·고양 차주님들의 생생한 정비 후기
          </h2>
        </div>

        {/* Aggregate Rating */}
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm w-fit">
          <div className="flex text-[#fdbe50]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#fdbe50] text-[#fdbe50]" />
            ))}
          </div>
          <span className="text-lg font-bold text-[#0d1c2f]">4.98</span>
          <span className="text-xs text-[#44474a]">(누적 후기 1,280건)</span>
        </div>
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayedReviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-[#7e5700]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#7e5700] text-[#7e5700]" />
                  ))}
                </div>
                {rev.verified && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#eff4ff] text-[11px] text-[#44474a] font-semibold border border-blue-100">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    수리 영수증 인증
                  </span>
                )}
              </div>

              <p className="text-sm text-[#0d1c2f] leading-relaxed mb-6 italic">
                {rev.content}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#181c20] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-inner">
                  {rev.author}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0d1c2f]">{rev.author} 고객님</div>
                  <div className="text-xs text-[#44474a]">{rev.vehicle}</div>
                </div>
              </div>
              <div className="mt-2 text-[11px] text-gray-400 flex items-center justify-between">
                <span>정비: {rev.serviceType}</span>
                <span>{rev.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle View More Reviews */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-sm font-semibold text-[#0d1c2f] hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
        >
          {showAll ? (
            <>
              <span>후기 접기</span>
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              <span>더 많은 차주 후기 보기 (전체 {REVIEWS_DATA.length}건)</span>
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </section>
  );
}
