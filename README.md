# MBTI 성격 유형 테스트 애플리케이션

이 프로젝트는 [Next.js](https://nextjs.org), [Supabase](https://supabase.com), [shadcn/ui](https://ui.shadcn.com)를 사용하여 구축된 **연령대별 맞춤형** MBTI 성격 유형 테스트 웹 애플리케이션입니다.

## 📋 프로젝트 개요

사용자의 연령대에 따라 맞춤형 질문을 제공하는 현대적인 MBTI 성격 유형 테스트 웹 애플리케이션입니다. 10대부터 60대 이상까지 각 연령대의 생활 환경과 경험에 맞는 질문으로 더욱 정확한 성격 분석을 제공합니다.

## 🛠️ 기술 스택

- **Frontend**: Next.js 15.3.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Animation**: Framer Motion
- **Database**: Supabase
- **Runtime**: React 19
- **Package Manager**: npm

## 📁 프로젝트 구조

```
mbti_test/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # 앱 레이아웃
│   │   ├── page.tsx                # 랜딩 페이지 (연령대 선택)
│   │   ├── test/
│   │   │   └── page.tsx            # 테스트 페이지
│   │   └── result/
│   │       └── [type]/
│   │           └── page.tsx        # 결과 페이지
│   ├── components/
│   │   ├── MBTITest.tsx            # MBTI 테스트 컴포넌트
│   │   ├── MBTIResult.tsx          # 결과 표시 컴포넌트
│   │   ├── SupabaseTest.tsx        # Supabase 연결 테스트
│   │   └── ui/                     # shadcn/ui 컴포넌트들
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── progress.tsx
│   │       ├── badge.tsx
│   │       ├── separator.tsx
│   │       └── avatar.tsx
│   └── lib/
│       ├── supabase.ts             # Supabase 클라이언트 설정
│       └── utils.ts                # 유틸리티 함수
├── public/                         # 정적 파일
├── components.json                 # shadcn/ui 설정
└── package.json                   # 의존성 및 스크립트
```

## 🚀 시작하기

### 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 환경 변수를 설정하세요:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 설치 및 실행

1. 의존성 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm run dev
```

3. 브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인하세요.

## 📊 데이터베이스 스키마

Supabase에서 다음과 같은 테이블 구조를 사용합니다:

### `mbti_questions` 테이블
- `id`: 질문 고유 ID (SERIAL PRIMARY KEY)
- `question_text`: 질문 내용 (TEXT)
- `dimension`: MBTI 차원 (VARCHAR) - 'EI', 'SN', 'TF', 'JP'
- `is_positive`: 긍정적 질문 여부 (BOOLEAN)
- `age_group`: 연령대 (VARCHAR) - 'teens', 'young_adult', 'middle_aged', 'senior', 'general'

### `mbti_results` 테이블
- `id`: 결과 고유 ID (SERIAL PRIMARY KEY)
- `personality_type`: 성격 유형 (VARCHAR) - 16가지 MBTI 유형
- `scores`: 차원별 점수 (JSONB)
- `answers`: 사용자 응답 (JSONB)
- `created_at`: 생성 시간 (TIMESTAMP)

## ✨ 주요 기능

### 🎯 연령대별 맞춤형 테스트
- **10대**: 학교생활, 친구관계, 수업, 동아리 활동 중심 질문
- **2~30대**: 직장생활, 사회활동, 연애, 커리어 중심 질문
- **4~50대**: 가족관계, 관리직 경험, 책임감, 자녀교육 중심 질문
- **60대 이상**: 여가활동, 손자녀 관계, 건강관리, 인생경험 중심 질문

### 🎨 현대적인 UI/UX
- **랜딩 페이지**: 연령대 선택, 16가지 성격 유형 소개, 애니메이션 효과
- **테스트 인터페이스**: 진행률 표시, 이전 문제 기능, 심플한 버튼 디자인
- **결과 페이지**: 상세한 성격 분석, 차원별 점수 시각화, 공유 기능

### 🔧 핵심 기능
- **5점 리커트 척도**: 매우 그렇다 ~ 전혀 그렇지 않다
- **실시간 점수 계산**: EI, SN, TF, JP 차원별 점수 산정
- **16가지 성격 유형**: 각 유형별 상세 설명, 특성, 강점, 약점, 추천 직업
- **결과 저장**: Supabase에 테스트 결과 자동 저장
- **반응형 디자인**: 모든 디바이스에서 최적화된 UI

### 🎭 인터랙티브 요소
- **Framer Motion**: 부드러운 애니메이션과 전환 효과
- **그라데이션 버튼**: 시각적으로 매력적인 버튼 디자인
- **호버 효과**: 마우스 오버 시 스케일 및 그림자 효과
- **스크롤 애니메이션**: 페이지 스크롤에 따른 요소 등장 효과

## 🎪 사용자 여정

1. **랜딩 페이지**: 연령대 선택 (10대, 2~30대, 4~50대, 60대 이상)
2. **테스트 페이지**: 선택된 연령대에 맞는 20개 질문 응답
3. **결과 페이지**: 성격 유형 및 상세 분석 결과 확인
4. **공유 기능**: 결과를 SNS나 링크로 공유

## 🔧 사용 가능한 스크립트

- `npm run dev`: 개발 서버 실행 (Turbopack 사용)
- `npm run build`: 프로덕션 빌드
- `npm run start`: 프로덕션 서버 실행
- `npm run lint`: ESLint를 사용한 코드 검사

## 🎯 완성된 기능

- ✅ **연령대별 맞춤형 질문 시스템**
- ✅ **MBTI 테스트 로직 구현**
- ✅ **결과 페이지 개발**
- ✅ **사용자 응답 저장 기능**
- ✅ **성격 유형별 상세 설명 페이지**
- ✅ **테스트 결과 공유 기능**
- ✅ **반응형 디자인**
- ✅ **애니메이션 효과**
- ✅ **shadcn/ui 컴포넌트 적용**

## 🚀 향후 개선 계획

- [ ] 다국어 지원 (영어, 일본어 등)
- [ ] 사용자 계정 시스템
- [ ] 테스트 이력 관리
- [ ] 성격 유형별 추천 콘텐츠
- [ ] 소셜 로그인 기능
- [ ] 테스트 결과 PDF 다운로드
- [ ] 관리자 대시보드

## 📱 지원 플랫폼

- **Desktop**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Android Chrome
- **Tablet**: iPad, Android 태블릿

## 📝 라이선스

이 프로젝트는 개인 프로젝트입니다.

## 🤝 기여하기

이 프로젝트에 기여하고 싶으시다면 이슈를 생성하거나 풀 리퀘스트를 제출해 주세요.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 통해 연락해 주세요.
