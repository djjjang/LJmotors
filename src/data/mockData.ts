import { ServiceItem, BenefitItem, BrandItem, ReviewItem } from '../types';
import heroBgImage from '../assets/images/lj_motors_hero_1789097454695.jpg';

export const HERO_BACKGROUND_IMAGE = heroBgImage;

export const MAP_PREVIEW_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAjlSISREQRtONVawc5KwDyF2K9bcJOdoZuPeRsTC3Nnb96nRabvAsZXhpUTvMlrRZoheXKNTveMU4FvjODmR_WTWX5WmdwYT5_lRH2om1RpYEdq5CoJV0irrWEEWU_AupYzS6CNwchPS1k2Z1_XwPjGVW5RE6N6JCvoYFWt2QNI3FwZ3hIZfrc1b11pEzvoxpPjsMrmm57RQee5tzbZ0UZ1a33v8M1Ssz_oRtWjCxl-v52785McAm9';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'engine-transmission',
    code: 'SERVICE 01',
    title: '엔진 · 미션 정밀 정비',
    description:
      '국산·수입 전 차종 엔진 경고등 점검 및 미션 이상 증상을 정밀 스캐너로 분석하고, 원인을 규명해 정품 부품으로 완벽 정비합니다.',
    iconName: 'Settings',
    categoryValue: '01',
    features: [
      '체크엔진 경고등 / 부조 / 출력 저하 진단',
      '흡기 밸브 카본 클리닝 & 인젝터 영점 조율',
      'ZF, DSG, 듀얼클러치 미션 오일 정밀 레벨링',
    ],
    ctaText: '정밀 진단 문의하기',
    estimatedTime: '소요시간: 1~3시간 (정밀 진단 기준)',
    warranty: '1년 20,000km 보증',
  },
  {
    id: 'maintenance-package',
    code: 'SERVICE 02',
    title: '제조사 규격 정기 점검',
    description:
      '제조사 및 필수 권장 기준에 맞춘 체계적인 정기 점검으로 차량 수명 연장과 예방 정비를 통한 안전 운행을 보장합니다.',
    iconName: 'ClipboardCheck',
    categoryValue: '02',
    features: [
      '합성 엔진오일 & 소모품 30개 기본 전수점검',
      '브레이크 패드, 디스크 로터 마모도 측정',
      '하체 부싱, 링크, 쇼크업소버 유격 정밀 검사',
    ],
    ctaText: '점검 패키지 예약',
    estimatedTime: '소요시간: 약 40분~1시간',
    warranty: '정품 오일 및 필터 보증',
  },
  {
    id: 'body-paint',
    code: 'SERVICE 03',
    title: '1급 공업사 판금 도장',
    description:
      '완벽 복원 도장과 최신형 도장 부스에서 이색 현상 없는 신차 출고 당시의 광택과 차체 라인을 완벽히 복원합니다.',
    iconName: 'Paintbrush',
    categoryValue: '03',
    features: [
      '컴퓨터 조색 시스템 기반 무이색 도색',
      '고온 열처리 전용 프리미엄 클린 도장 부스',
      '자차/대물 보험수리 자기부담금 지원 상담',
    ],
    ctaText: '사진 견적 문의',
    estimatedTime: '소요시간: 1~2일 (보험수리 대차 지원)',
    warranty: '도장면 3년 품질 보증',
  },
  {
    id: 'electronics-ac',
    code: 'SERVICE 04',
    title: '전자장비 & 공조 에어컨',
    description:
      '최신 전자 제어 시스템 오류 정밀 진단 및 센서 점검, 쾌적한 실내 에어컨 가스 정량 충전 및 컴프레셔를 점검합니다.',
    iconName: 'Wind',
    categoryValue: '04',
    features: [
      '신냉매(R-1234yf) 및 구냉매(R-134a) 정량 주입',
      '에바포레이터 클리닝 및 냄새 원인 완벽 제거',
      'CAN 통신 결함 및 ECU/배터리 센서 제어',
    ],
    ctaText: '에어컨 점검 신청',
    estimatedTime: '소요시간: 약 50분',
    warranty: '가스 충전 정량 보증',
  },
  {
    id: 'tire-alignment',
    code: 'SERVICE 05',
    title: '타이어 & 휠 얼라인먼트',
    description:
      '정밀 3D 얼라인먼트 교정 및 타이어 편마모 분석을 통해 고속 주행 안정성과 편안한 승차감, 연비 향상을 약속합니다.',
    iconName: 'Disc',
    categoryValue: '05',
    features: [
      '헌터(Hunter) 초정밀 3D 휠 얼라인먼트 시스템',
      '고속 휠 밸런스 및 핸들 떨림 보정',
      '미쉐린, 콘티넨탈, 한국, 금호 전 규격 최저가 공급',
    ],
    ctaText: '얼라인먼트 예약',
    estimatedTime: '소요시간: 약 45분',
    warranty: '얼라인먼트 3개월 재교정 보증',
  },
];

export const BENEFITS_DATA: BenefitItem[] = [
  {
    id: 'warranty',
    title: '1년 2만 km 정비 보증제',
    description:
      'LJ 모터스에서 정비한 모든 주요 파츠에 대해 1년 또는 20,000km 이내 무상 AS 보증서를 발급하여 끝까지 책임집니다.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'genuine-parts',
    title: '100% 정품 부품 사용 (OEM/순정)',
    description:
      '제조사 순정 정품 파츠 및 독일 1차 벤더(BOSCH, Lemförder, Mahle) 인증 부품만을 정직하게 고집합니다.',
    iconName: 'CheckCircle2',
  },
  {
    id: 'transparent-quote',
    title: '투명한 사전 견적 공개',
    description:
      '고객님의 명확한 사전 동의 없는 임의 수리 및 추가 과금은 일체 없습니다. 작업 전 부품대와 공임을 투명하게 공개합니다.',
    iconName: 'FileSpreadsheet',
  },
  {
    id: 'master-technician',
    title: '베테랑 1급 정비사 직접 시공',
    description:
      '초보 실습생에게 차량을 맡기지 않습니다. 20년 경력의 국가공인 1급 자동차 정비 책임 마스터가 직접 전담 집도합니다.',
    iconName: 'Wrench',
  },
  {
    id: 'fair-pricing',
    title: '공식센터 대비 30% 이상 절감',
    description:
      '공식 딜러 서비스센터와 완전히 동일한 수준의 장비와 정품 부품을 사용하면서도 본사 거품을 뺀 합리적 표준 공임을 책정합니다.',
    iconName: 'Coins',
  },
  {
    id: 'free-delivery',
    title: '일산·고양 전역 무료 픽업&딜리버리',
    description:
      '바쁜 직장인 및 고객님을 위해 자택이나 직장 앞까지 안전하게 찾아가 차량을 인도하고 정비 완료 후 다시 안전하게 전달합니다.',
    iconName: 'Truck',
  },
];

export const BRANDS_DATA: BrandItem[] = [
  {
    name: 'HYUNDAI',
    koreanName: '현대 전차종',
    country: '대한민국',
    diagnosticTool: 'G-Scan M / 현대 공식 KDS 정밀 진단기',
    keySpecialties: ['스마트스트림 엔진 누유/부조 교정', '하이브리드 시스템 고전압 점검', '8단 자동변속기 오일 레벨링'],
    description: '아반떼, 쏘나타, 그랜저부터 팰리세이드, 싼타페, 아이오닉까지 현대 전 모델 전용 데이터로 정비합니다.',
  },
  {
    name: 'KIA',
    koreanName: '기아 전차종',
    country: '대한민국',
    diagnosticTool: '기아 공식 KDS / 최신 전장 스캐너',
    keySpecialties: ['카니발 하체 부싱 및 미션 충격 개선', '쏘렌토/스포티지 DCT 클러치 점검', 'CVVD/터보차저 정밀 세팅'],
    description: '기아 세단 및 RV 라인업의 고질적인 하체 소음과 전자장비 오류를 공식 매뉴얼대로 해결합니다.',
  },
  {
    name: 'GENESIS',
    koreanName: '제네시스 전차종',
    country: '대한민국',
    diagnosticTool: '제네시스 플래그십 전용 KDS 플래티넘',
    keySpecialties: ['GV80/G80 전자제어 서스펜션(ECS) 세팅', '3.5T/3.3T 트윈터보 흡기 정밀케어', '정숙성 하체 풀패키지 오버홀'],
    description: '제네시스 프리미엄 라인업의 민감한 승차감과 전자제어 서스펜션 세팅을 본사급 퀄리티로 관리합니다.',
  },
  {
    name: 'MERCEDES-BENZ',
    koreanName: '메르세데스 벤츠',
    country: '독일',
    diagnosticTool: '벤츠 공식 전용 스캐너 Xentry & DAS',
    keySpecialties: ['OM651/OM654 디젤 누유 및 DPF 케어', '7G-Tronic / 9G-Tronic 미션오일 정밀 교환', '에어매틱(Airmatic) 서스펜션 수리'],
    description: 'E클래스(W213), C클래스, S클래스, GLC/GLE 등 벤츠 공식 센터 출신 정비사가 꼼꼼히 진단합니다.',
  },
  {
    name: 'BMW',
    koreanName: 'BMW M시리즈 포함',
    country: '독일',
    diagnosticTool: 'BMW 공식 엔지니어링 진단 시스템 ISTA/D, ISTA/P',
    keySpecialties: ['B48/B58 로커암 커버 및 오일필터 하우징 누유 교정', 'ZF 8단 미션 오일 정품 레벨링', 'M 시리즈 디퍼렌셜 & 하체 튜닝 정비'],
    description: '5시리즈(G30/F10), 3시리즈, X3/X5, M3/M5 등 BMW 특유의 누유와 하체 잡소리를 완벽하게 잡아냅니다.',
  },
  {
    name: 'AUDI',
    koreanName: '아우디 전차종',
    country: '독일',
    diagnosticTool: 'VAG 공식 ODIS 진단 소프트웨어',
    keySpecialties: ['S-Tronic 7단 듀얼클러치 플라이휠 교환', '2.0 TDI/45 TFSI 타이밍 벨트 & 워터펌프 오버홀', '콰트로(Quattro) 구동계 오일 세팅'],
    description: 'A6, A4, A7, Q5/Q7 등 아우디의 미션 떨림 및 콰트로 구동계 오일을 전용 규격 정품으로 서비스합니다.',
  },
  {
    name: 'VOLKSWAGEN',
    koreanName: '폭스바겐',
    country: '독일',
    diagnosticTool: '폭스바겐 VAG ODIS 진단 시스템',
    keySpecialties: ['골프/파사트/티구안 DSG 플라이휠 소음 수리', '2.0 TDI 인젝터 영점조정 및 DPF 클리닝', '타이밍 벨트 세트 신속 교체'],
    description: '티구안, 골프, 아테온의 실속 있는 유지보수를 위해 공식센터 대비 30% 이상 합리적인 정비를 제공합니다.',
  },
  {
    name: 'PORSCHE',
    koreanName: '포르쉐 스포츠/SUV',
    country: '독일',
    diagnosticTool: 'PIWIS III 포르쉐 전용 진단기',
    keySpecialties: ['PDK 듀얼클러치 미션 캘리브레이션', '파나메라/카이엔 에어 서스펜션 누설 점검', '고성능 카본 세라믹/스틸 브레이크 정밀 점검'],
    description: '카이엔, 마칸, 파나메라, 911까지 포르쉐의 정교한 하이퍼포먼스 엔지니어링을 정확하게 컨트롤합니다.',
  },
  {
    name: 'LEXUS',
    koreanName: '렉서스 하이브리드',
    country: '일본',
    diagnosticTool: '토요타/렉서스 Techstream 정밀 스캐너',
    keySpecialties: ['e-CVT 무단변속기 오일 관리', '하이브리드 배터리 셀 밸런싱 및 냉각팬 클리닝', '정숙성 극대화 하체 부싱 정비'],
    description: 'ES300h, RX450h, NX300h 등 내구성 높은 렉서스 차량의 20만km+ 장수명 관리를 지원합니다.',
  },
  {
    name: 'VOLVO',
    koreanName: '볼보 세단 및 XC라인',
    country: '스웨덴',
    diagnosticTool: '볼보 공식 VIDA 정밀 시스템',
    keySpecialties: ['D4/D5 디젤 EGR 및 흡기 밸브 카본 제거', 'T6/B5 마일드 하이브리드 전자제어 진단', 'XC60/XC90 AWD 할덱스 오일 교환'],
    description: '안전의 대명사 볼보 XC90, XC60, S90 차주님들을 위한 전용 진단 장비와 정품 부품을 상시 준비합니다.',
  },
  {
    name: 'LAND ROVER',
    koreanName: '랜드로버/레인지로버',
    country: '영국',
    diagnosticTool: 'JLR 공식 Pathfinder & SDD 시스템',
    keySpecialties: ['인제니움(Ingenium) 엔진 타이밍 체인 마모 점검', '에어 서스펜션 콤프레셔 및 밸브블럭 수리', '전자식 지형반응 시스템(Terrain Response) 오류 해결'],
    description: '레인지로버, 보그, 디스커버리 등 고난도 전자제어와 하체 에어쇼바 계통을 완벽 복원합니다.',
  },
  {
    name: 'JEEP',
    koreanName: '지프 사륜구동 정밀케어',
    country: '미국',
    diagnosticTool: 'FCA/Stellantis WiTECH 2.0',
    keySpecialties: ['랭글러/그랜드체로키 4WD 트랜스퍼케이스 점검', '3.6 펜타스타 엔진 오일쿨러 하우징 교환', '하체 섀시 링크 유격 강화'],
    description: '랭글러, 그랜드 체로키의 오프로드 및 고속 주행 시 발생하는 유격과 누유를 정밀하게 예방 정비합니다.',
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    rating: 5,
    content:
      '"공식 서비스센터에서 엔진오일 누유 견적 받고 깜짝 놀랐는데, LJ 모터스에서 35% 이상 저렴하게 완벽 수리했습니다. 정비 과정 사진을 메신저로 꼼꼼하게 다 보내주셔서 정말 안심이 되었습니다. 일산에서 수입차 정비는 무조건 여깁니다."',
    author: '김*우',
    vehicle: '메르세데스 벤츠 E300 (W213) 차주',
    verified: true,
    date: '2025.04.12',
    serviceType: '엔진 누유 가스켓 & 미션오일 교환',
  },
  {
    id: 'rev-2',
    rating: 5,
    content:
      '"방지턱 넘을 때마다 나던 찌걱거리는 하체 소음 때문에 몇 주를 스트레스 받았는데, 원흥 모터스 대표님이 직접 시운전해보시더니 원인을 10분 만에 짚어내시더군요. 정확한 부품 교체로 잡소리 깔끔히 사라졌습니다. 실력이 대단하십니다."',
    author: '이*정',
    vehicle: '제네시스 GV80 3.5T 차주',
    verified: true,
    date: '2025.04.08',
    serviceType: '프론트 로어암 & 스테빌라이저 링크 교체',
  },
  {
    id: 'rev-3',
    rating: 5,
    content:
      '"출퇴근 때문에 시간이 도저히 안 났는데, 무료 픽업&딜리버리 서비스 덕분에 사무실에서 일하면서 편하게 에어컨 가스 및 정기 점검 받았습니다. 폐차할 때까지 여기 원흥 모터스에만 제 차 맡길 예정입니다. 번창하세요!"',
    author: '박*철',
    vehicle: '아우디 A6 40 TDI 차주',
    verified: true,
    date: '2025.03.29',
    serviceType: '신냉매 충전 & 30가지 전수 무상점검',
  },
  {
    id: 'rev-4',
    rating: 5,
    content:
      '"BMW 5시리즈 하부 찌그덕 소리와 브레이크 패드 교체로 방문했습니다. 다른 곳에선 디스크 로터까지 통째로 갈아야 한다고 했는데, 여기 마스터님은 마모도 정확히 실측해서 패드만 갈아도 충분하다고 정직하게 말씀해주셔서 감동했습니다."',
    author: '최*민',
    vehicle: 'BMW 520d (G30) 차주',
    verified: true,
    date: '2025.03.18',
    serviceType: '브레이크 패드 & 센서 정품 교환',
  },
  {
    id: 'rev-5',
    rating: 5,
    content:
      '"주차장 기둥에 문짝을 긁혀서 마음이 아팠는데, 1급 판금 도장 맡기고 신차 출고 때처럼 완벽한 광택으로 되돌아왔습니다. 색상 이색도 전혀 없고 단차도 칼같이 맞춰주셨네요. 자차 보험 처리도 친절히 도와주셨습니다."',
    author: '정*훈',
    vehicle: '포르쉐 카이엔 쿠페 차주',
    verified: true,
    date: '2025.03.02',
    serviceType: '도어 판금 도색 & 클린 부스 열처리',
  },
];
