import { ReservationRecord } from '../types';

const STORAGE_KEY = 'lj_motors_reservations_v1';

export function getStoredReservations(): ReservationRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Seed default sample record for demonstration
      const initial: ReservationRecord[] = [
        {
          id: 'LJ-260910-8192',
          customerName: '김민준',
          phone: '010-8848-6134',
          carModel: 'BMW 520d (2020년형)',
          serviceCategory: '제조사 규격 소모품 및 오일 교환',
          preferredDate: '2026-09-12',
          preferredTime: '10:30',
          notes: '엔진오일 교환 및 브레이크 패드 잔량 점검 요청',
          createdAt: '2026-09-10 14:20',
          status: '상담확정',
        },
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse reservations:', err);
    return [];
  }
}

export function saveReservation(record: Omit<ReservationRecord, 'id' | 'createdAt' | 'status'>): ReservationRecord {
  const current = getStoredReservations();
  const dateObj = new Date();
  const dateStr = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')} ${String(dateObj.getHours()).padStart(2, '0')}:${String(dateObj.getMinutes()).padStart(2, '0')}`;
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const id = `LJ-${String(dateObj.getFullYear()).slice(2)}${String(dateObj.getMonth() + 1).padStart(2, '0')}${String(dateObj.getDate()).padStart(2, '0')}-${randomSuffix}`;

  const newRecord: ReservationRecord = {
    ...record,
    id,
    createdAt: dateStr,
    status: '접수완료',
  };

  const updated = [newRecord, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save reservation:', err);
  }

  return newRecord;
}

export function searchReservations(query: string): ReservationRecord[] {
  const all = getStoredReservations();
  const cleanQuery = query.trim().replace(/[-\s]/g, '');
  if (!cleanQuery) return all;

  return all.filter((item) => {
    const cleanPhone = item.phone.replace(/[-\s]/g, '');
    const cleanName = item.customerName.replace(/\s/g, '');
    const cleanId = item.id.replace(/[-\s]/g, '');

    return (
      cleanPhone.includes(cleanQuery) ||
      cleanName.includes(cleanQuery) ||
      cleanId.includes(cleanQuery) ||
      item.carModel.toLowerCase().includes(query.toLowerCase())
    );
  });
}
