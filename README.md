# MBTI 성격 유형 테스트 애플리케이션

이 프로젝트는 [Next.js](https://nextjs.org), [Supabase](https://supabase.com), [shadcn/ui](https://ui.shadcn.com)를 사용하여 구축된 **사용자 인증 기반** MBTI 성격 유형 테스트 웹 애플리케이션입니다.

## 📋 프로젝트 개요

로그인한 사용자만 이용할 수 있는 안전하고 개인화된 MBTI 성격 유형 테스트 웹 애플리케이션입니다. 이메일/비밀번호 인증과 Google, GitHub 소셜 로그인을 지원하며, 사용자별로 테스트 결과를 안전하게 저장합니다.

## 🛠️ 기술 스택

- **Frontend**: Next.js 15.3.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Animation**: Framer Motion
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **Icons**: React Icons
- **Runtime**: React 19
- **Package Manager**: npm

## 📁 프로젝트 구조

```
mbti_test/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # 앱 레이아웃
│   │   ├── page.tsx                # 랜딩 페이지
│   │   ├── test/
│   │   │   └── page.tsx            # 테스트 페이지
│   │   ├── result/
│   │   │   └── [type]/
│   │   │       └── page.tsx        # 상세 결과 페이지
│   │   └── auth/
│   │       └── callback/
│   │           └── page.tsx        # 소셜 인증 콜백
│   ├── components/
│   │   ├── AuthProvider.tsx        # 인증 상태 관리
│   │   ├── AuthDialog.tsx          # 로그인/회원가입 모달
│   │   ├── UserMenu.tsx            # 사용자 메뉴
│   │   ├── MBTITest.tsx            # MBTI 테스트 컴포넌트
│   │   ├── SupabaseTest.tsx        # Supabase 연결 테스트
│   │   └── ui/                     # shadcn/ui 컴포넌트들
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
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

### Supabase 설정

1. **Authentication 설정**
   - Supabase 대시보드 > Authentication > Settings
   - Site URL: `http://localhost:3000` (개발용)
   - Redirect URLs: `http://localhost:3000/auth/callback`

2. **소셜 로그인 설정 (선택사항)**
   
   **Google OAuth:**
   - Google Cloud Console에서 OAuth 2.0 클라이언트 ID 생성
   - Supabase > Authentication > Providers > Google 활성화
   - Client ID와 Client Secret 입력

   **GitHub OAuth:**
   - GitHub > Settings > Developer settings > OAuth Apps
   - New OAuth App 생성
   - Supabase > Authentication > Providers > GitHub 활성화
   - Client ID와 Client Secret 입력

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
- `age_group`: 연령대 (VARCHAR) - 'general'

### `mbti_results` 테이블
- `id`: 결과 고유 ID (SERIAL PRIMARY KEY)
- `user_id`: 사용자 ID (UUID, auth.users 참조)
- `personality_type`: 성격 유형 (VARCHAR) - 16가지 MBTI 유형
- `scores`: 차원별 점수 (JSONB)
- `answers`: 사용자 응답 (JSONB)
- `created_at`: 생성 시간 (TIMESTAMP)

### RLS (Row Level Security) 정책
- 사용자는 자신의 결과만 조회/수정 가능
- 모든 사용자는 질문 테이블 읽기 가능

## ✨ 주요 기능

### 🔐 사용자 인증 시스템
- **이메일/비밀번호 회원가입**: 안전한 계정 생성
- **이메일/비밀번호 로그인**: 기본 인증 방식
- **Google 소셜 로그인**: 원클릭 Google 계정 연동
- **GitHub 소셜 로그인**: 개발자 친화적 GitHub 연동
- **자동 세션 관리**: 로그인 상태 유지 및 자동 갱신
- **안전한 로그아웃**: 세션 완전 삭제

### 🎯 개인화된 테스트 경험
- **로그인 필수**: 인증된 사용자만 테스트 접근 가능
- **개인별 결과 저장**: 사용자 ID 기반 결과 저장
- **테스트 이력 관리**: 개인별 테스트 기록 보관
- **데이터 보안**: RLS 정책으로 개인 데이터 보호

### 🎨 현대적인 UI/UX
- **랜딩 페이지**: 로그인/회원가입 버튼, 16가지 성격 유형 소개
- **인증 모달**: 로그인/회원가입 통합 다이얼로그
- **소셜 로그인 버튼**: Google, GitHub 브랜드 아이콘 적용
- **사용자 메뉴**: 프로필 표시 및 로그아웃 기능
- **테스트 인터페이스**: 진행률 표시, 이전 문제 기능
- **결과 페이지**: 상세한 성격 분석, 차원별 점수 시각화

### 🔧 핵심 기능
- **5점 리커트 척도**: 매우 그렇다 ~ 전혀 그렇지 않다
- **실시간 점수 계산**: EI, SN, TF, JP 차원별 점수 산정
- **16가지 성격 유형**: 각 유형별 상세 설명, 특성, 강점, 약점, 추천 직업
- **안전한 결과 저장**: 사용자별 암호화된 데이터 저장
- **반응형 디자인**: 모든 디바이스에서 최적화된 UI

### 🎭 인터랙티브 요소
- **Framer Motion**: 부드러운 애니메이션과 전환 효과
- **그라데이션 버튼**: 시각적으로 매력적인 버튼 디자인
- **호버 효과**: 마우스 오버 시 스케일 및 그림자 효과
- **로딩 상태**: 인증 및 데이터 로딩 시 스피너 표시

## 🎪 사용자 여정

1. **랜딩 페이지**: 로그인 또는 회원가입 선택
2. **인증 과정**: 이메일/비밀번호 또는 소셜 로그인
3. **테스트 페이지**: 20개 질문 응답 (로그인 사용자만 접근)
4. **결과 페이지**: 성격 유형 및 상세 분석 결과 확인
5. **상세 결과**: 강점, 약점, 추천 직업 등 심층 분석

## 🔧 사용 가능한 스크립트

- `npm run dev`: 개발 서버 실행 (Turbopack 사용)
- `npm run build`: 프로덕션 빌드
- `npm run start`: 프로덕션 서버 실행
- `npm run lint`: ESLint를 사용한 코드 검사

## 🎯 완성된 기능

- ✅ **사용자 인증 시스템 (이메일/비밀번호)**
- ✅ **소셜 로그인 (Google, GitHub)**
- ✅ **회원가입 기능**
- ✅ **사용자 세션 관리**
- ✅ **MBTI 테스트 로직 구현**
- ✅ **개인별 결과 저장**
- ✅ **상세 결과 페이지**
- ✅ **16가지 성격 유형별 상세 설명**
- ✅ **데이터베이스 보안 (RLS 정책)**
- ✅ **반응형 디자인**
- ✅ **애니메이션 효과**
- ✅ **shadcn/ui 컴포넌트 적용**

## 🔒 보안 기능

- **Row Level Security (RLS)**: 사용자별 데이터 접근 제어
- **JWT 토큰 인증**: 안전한 세션 관리
- **비밀번호 암호화**: Supabase 내장 보안 기능
- **OAuth 2.0**: 표준 소셜 로그인 프로토콜
- **CSRF 보호**: Next.js 내장 보안 기능

## 🚀 향후 개선 계획

- [ ] 다국어 지원 (영어, 일본어 등)
- [ ] 테스트 이력 조회 페이지
- [ ] 성격 유형별 추천 콘텐츠
- [ ] 테스트 결과 PDF 다운로드
- [ ] 이메일 인증 확인 시스템
- [ ] 비밀번호 재설정 기능
- [ ] 프로필 수정 기능
- [ ] 관리자 대시보드
- [ ] 테스트 결과 공유 기능

## 📱 지원 플랫폼

- **Desktop**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Android Chrome
- **Tablet**: iPad, Android 태블릿

## 🔧 배포 시 주의사항

1. **환경 변수 설정**: 프로덕션 환경에 맞는 Supabase URL 설정
2. **리다이렉트 URL 업데이트**: 실제 도메인으로 콜백 URL 변경
3. **소셜 로그인 설정**: Google, GitHub OAuth 앱의 도메인 설정 업데이트
4. **HTTPS 필수**: 소셜 로그인을 위해 HTTPS 환경 필요

## 📝 라이선스

이 프로젝트는 개인 프로젝트입니다.

## 🤝 기여하기

이 프로젝트에 기여하고 싶으시다면 이슈를 생성하거나 풀 리퀘스트를 제출해 주세요.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 통해 연락해 주세요.
