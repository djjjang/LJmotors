export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  ctaText: string;
  categoryValue: string;
  estimatedTime?: string;
  warranty?: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BrandItem {
  name: string;
  koreanName: string;
  country: string;
  diagnosticTool: string;
  keySpecialties: string[];
  description: string;
}

export interface ReviewItem {
  id: string;
  rating: number;
  content: string;
  author: string;
  vehicle: string;
  verified: boolean;
  date: string;
  serviceType: string;
}

export interface QuoteFormData {
  customerName: string;
  phone: string;
  carModel: string;
  carYearAndMileage: string;
  serviceCategory: string;
  symptoms: string;
  agreePrivacy: boolean;
  preferredDate?: string;
}

export interface ReservationRecord {
  id: string;
  customerName: string;
  phone: string;
  carModel: string;
  serviceCategory: string;
  preferredDate?: string;
  preferredTime?: string;
  notes?: string;
  createdAt: string;
  status: '접수완료' | '상담확정' | '정비완료';
}
