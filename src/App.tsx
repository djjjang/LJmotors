import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutExpert from './components/AboutExpert';
import ServicesSection from './components/ServicesSection';
import BenefitsSection from './components/BenefitsSection';
import BrandsSection from './components/BrandsSection';
import ProcessSection from './components/ProcessSection';
import ReviewsSection from './components/ReviewsSection';
import LocationAndQuoteSection from './components/LocationAndQuoteSection';
import Footer from './components/Footer';
import QuickReservationModal from './components/QuickReservationModal';
import BrandDetailModal from './components/BrandDetailModal';
import PolicyModal from './components/PolicyModal';
import DirectionsModal from './components/DirectionsModal';
import ReservationLookupModal from './components/ReservationLookupModal';
import { ServiceItem, BrandItem, QuoteFormData } from './types';
import { Phone, Calendar, ArrowUp, MessageCircle, Search } from 'lucide-react';

export default function App() {
  // Modal states
  const [reservationOpen, setReservationOpen] = useState(false);
  const [directionsOpen, setDirectionsOpen] = useState(false);
  const [lookupOpen, setLookupOpen] = useState(false);
  const [lookupInitialQuery, setLookupInitialQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('01');
  const [selectedBrandName, setSelectedBrandName] = useState<string>('');
  const [activeBrandModal, setActiveBrandModal] = useState<BrandItem | null>(null);

  // Policy Modal
  const [policyModal, setPolicyModal] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
  }>({
    isOpen: false,
    title: '',
    content: '',
  });

  // Quote form section preselection
  const [quoteCategory, setQuoteCategory] = useState<string>('01');

  // Handle service selection from service cards
  const handleSelectService = (service: ServiceItem) => {
    setSelectedCategory(service.categoryValue);
    setQuoteCategory(service.categoryValue);

    // Smooth scroll directly to quote form or open fast reservation modal
    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setReservationOpen(true);
    }
  };

  // Open reservation modal from Header or Hero
  const handleOpenReservation = (category = '01') => {
    setSelectedCategory(category);
    setSelectedBrandName('');
    setReservationOpen(true);
  };

  // Open directions / schematic map modal
  const handleOpenDirections = () => {
    setDirectionsOpen(true);
  };

  // Open brand detail
  const handleSelectBrand = (brand: BrandItem) => {
    setActiveBrandModal(brand);
  };

  // Open reservation lookup modal
  const handleOpenLookup = (query = '') => {
    setLookupInitialQuery(query);
    setLookupOpen(true);
  };

  // When user decides to book from brand modal
  const handleBookForBrand = (brandName: string) => {
    setSelectedBrandName(brandName);
    setReservationOpen(true);
  };

  const handleOpenPolicy = (title: string, content: string) => {
    setPolicyModal({
      isOpen: true,
      title,
      content,
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#0d1c2f] selection:bg-[#fdbe50] selection:text-[#281900]">
      {/* Top App Bar Navigation */}
      <Header
        onOpenReservation={handleOpenReservation}
        onOpenDirections={handleOpenDirections}
        onOpenLookup={() => handleOpenLookup()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenReservation={handleOpenReservation}
          onOpenDirections={handleOpenDirections}
        />

        {/* 20-Year Master Technician Philosophy & Core Principles */}
        <AboutExpert onOpenReservation={handleOpenReservation} />

        {/* 5 Core Auto Care Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 6 Core Commitments & Benefits */}
        <BenefitsSection />

        {/* Supported Brands & Specialized Diagnostics */}
        <BrandsSection onSelectBrand={handleSelectBrand} />

        {/* 4-Step Transparent Workflow */}
        <ProcessSection />

        {/* Real Customer Verified Reviews */}
        <ReviewsSection />

        {/* Location Map & Online Quote Form */}
        <LocationAndQuoteSection
          preselectedCategory={quoteCategory}
          onOpenDirections={handleOpenDirections}
          onOpenLookup={(q) => handleOpenLookup(q)}
          onSubmittedSuccess={(data: QuoteFormData) => {
            console.log('Quotation submitted:', data);
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPolicyModal={handleOpenPolicy}
        onOpenDirections={handleOpenDirections}
      />

      {/* Floating Quick Action Widget (Mobile/Desktop) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white text-gray-700 shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-transform active:scale-95 cursor-pointer"
          aria-label="맨 위로 가기"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        {/* KakaoTalk 1:1 Direct Chat Consultation Floating Button */}
        <a
          href="https://pf.kakao.com/_xncxlrX/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#fee500] text-[#191919] border border-[#e6ce00] shadow-xl hover:bg-[#fad800] transition-all hover:scale-105 active:scale-95 group"
          aria-label="카카오톡 1:1 상담 채팅 바로가기"
        >
          <MessageCircle className="w-4 h-4 text-[#191919] fill-[#191919] group-hover:scale-110 transition-transform" />
          <span className="text-xs font-black text-[#191919] tracking-tight hidden sm:inline">카카오톡 상담</span>
          <span className="text-xs font-black text-[#191919] tracking-tight sm:hidden">카톡상담</span>
        </a>

        {/* Check Reservation Floating Button */}
        <button
          onClick={() => handleOpenLookup()}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#0d1c2f] border border-gray-300 shadow-xl hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Search className="w-4 h-4 text-[#7e5700]" />
          <span className="text-xs font-bold hidden sm:inline">예약내역 확인</span>
          <span className="text-xs font-bold sm:hidden">예약확인</span>
        </button>

        <a
          href="tel:010-8848-6134"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#181c20] text-[#fdbe50] border border-[#fdbe50]/40 shadow-xl hover:bg-black transition-all hover:scale-105 active:scale-95"
        >
          <Phone className="w-4 h-4" />
          <span className="text-xs font-bold text-white hidden sm:inline">010-8848-6134</span>
          <span className="text-xs font-bold sm:hidden">전화상담</span>
        </a>

        <button
          onClick={() => handleOpenReservation()}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#7e5700] text-white shadow-xl hover:bg-[#604100] transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-xs font-bold">간편 예약</span>
        </button>
      </div>

      {/* Directions & Schematic Map Modal */}
      <DirectionsModal
        isOpen={directionsOpen}
        onClose={() => setDirectionsOpen(false)}
        onOpenReservation={() => handleOpenReservation()}
      />

      {/* Quick Reservation Modal */}
      <QuickReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
        defaultCategory={selectedCategory}
        defaultBrand={selectedBrandName}
        onOpenLookup={(q) => handleOpenLookup(q)}
      />

      {/* Reservation Lookup / Verification Modal */}
      <ReservationLookupModal
        isOpen={lookupOpen}
        onClose={() => setLookupOpen(false)}
        initialQuery={lookupInitialQuery}
        onOpenNewReservation={() => handleOpenReservation()}
      />

      {/* Brand Detail Modal */}
      <BrandDetailModal
        brand={activeBrandModal}
        onClose={() => setActiveBrandModal(null)}
        onBookForBrand={handleBookForBrand}
      />

      {/* Policy Modal */}
      <PolicyModal
        isOpen={policyModal.isOpen}
        title={policyModal.title}
        content={policyModal.content}
        onClose={() => setPolicyModal((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}
