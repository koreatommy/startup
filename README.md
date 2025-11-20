# Next.js 15 풀스택 SaaS 템플릿

Next.js 15 + Supabase + Prisma + Clerk + Tailwind CSS + shadcn/ui 기반의 풀스택 SaaS 애플리케이션 템플릿입니다.

## 🚀 기술 스택

- **Framework**: Next.js 15 (App Router, TypeScript)
- **UI**: Tailwind CSS + shadcn/ui
- **Auth**: Clerk (email / social 로그인 지원)
- **DB**: Supabase PostgreSQL + Prisma ORM
- **배포**: Vercel (GitHub 연동, 자동 배포)
- **코드 품질**: ESLint + Prettier

## 📁 프로젝트 구조

```
startup/
├── app/
│   ├── (public)/          # 공개 페이지
│   │   ├── page.tsx       # 홈 페이지
│   │   ├── sign-in/       # 로그인 페이지
│   │   └── sign-up/       # 회원가입 페이지
│   ├── (protected)/       # 인증 필요 페이지
│   │   └── dashboard/     # 대시보드
│   ├── api/               # API 라우트
│   │   └── todos/         # Todo CRUD API
│   ├── globals.css        # 전역 스타일
│   └── layout.tsx         # 루트 레이아웃
├── components/
│   ├── ui/                # shadcn/ui 컴포넌트
│   └── shared/            # 공용 컴포넌트
├── lib/
│   ├── prisma.ts          # Prisma 클라이언트
│   ├── clerk.ts           # Clerk 헬퍼 함수
│   └── utils.ts           # 유틸리티 함수
├── prisma/
│   └── schema.prisma      # Prisma 스키마
└── middleware.ts          # Clerk 미들웨어
```

## 🛠️ 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.example` 파일을 복사하여 `.env` 파일을 생성하고 실제 값으로 채워주세요:

```bash
cp .env.example .env
```

`.env` 파일에 다음 값들을 설정하세요:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_xxx"
CLERK_SECRET_KEY="sk_test_xxx"

# Supabase PostgreSQL Database
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=require"

# Next.js
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. 데이터베이스 설정

#### Supabase 프로젝트 생성

1. [Supabase](https://supabase.com)에 가입하고 새 프로젝트 생성
2. 프로젝트 설정 → Database → Connection string에서 연결 문자열 복사
3. `.env` 파일의 `DATABASE_URL`에 붙여넣기

#### Prisma 마이그레이션 실행

```bash
# Prisma 클라이언트 생성
npm run db:generate

# 데이터베이스에 스키마 적용
npm run db:push

# 또는 마이그레이션 파일 생성 및 적용
npm run db:migrate
```

### 4. Clerk 인증 설정

1. [Clerk](https://clerk.com)에 가입하고 새 애플리케이션 생성
2. API Keys 페이지에서 키 복사
3. `.env` 파일에 키 설정
4. **중요**: Redirect URLs 설정
   - Development: `http://localhost:3000`
   - Production: Vercel 배포 후 도메인 추가

### 5. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📝 사용 가능한 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 실행
- `npm run format` - Prettier로 코드 포맷팅
- `npm run db:generate` - Prisma 클라이언트 생성
- `npm run db:push` - 데이터베이스에 스키마 적용
- `npm run db:migrate` - 마이그레이션 생성 및 적용
- `npm run db:studio` - Prisma Studio 실행 (데이터베이스 GUI)

## 🚢 Vercel 배포

### GitHub 연동 및 자동 배포

1. **Git 저장소 초기화 및 푸시**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Vercel 프로젝트 생성**
   - [Vercel](https://vercel.com)에 로그인
   - "New Project" 클릭
   - GitHub 레포지토리 선택
   - 프로젝트 설정 확인 후 "Deploy" 클릭

3. **환경 변수 설정**
   Vercel 대시보드 → Project Settings → Environment Variables에서 다음 변수 추가:
   - `DATABASE_URL` - Supabase 연결 문자열
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk 공개 키
   - `CLERK_SECRET_KEY` - Clerk 비밀 키
   - `NEXT_PUBLIC_APP_URL` - 프로덕션 URL (예: `https://your-app.vercel.app`)

4. **Clerk 및 Supabase 설정 업데이트**
   - **Clerk**: Dashboard → Configure → Redirect URLs에 Vercel 도메인 추가
   - **Supabase**: Settings → API → Allowed URLs에 Vercel 도메인 추가 (필요한 경우)

5. **자동 배포**
   - `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다
   - Pull Request를 생성하면 Preview 배포가 생성됩니다

### 주의사항

- Supabase와 Clerk의 Redirect/Callback URL에 프로덕션 도메인을 반드시 추가해야 합니다
- 환경 변수는 Vercel 대시보드에서 설정해야 하며, 코드에 직접 포함하지 마세요
- 첫 배포 후 Prisma 마이그레이션을 실행해야 할 수 있습니다 (Vercel Build Command에 추가 가능)

## 🎨 주요 기능

- ✅ 사용자 인증 (Clerk)
- ✅ Todo CRUD 기능 (예시)
- ✅ 반응형 디자인 (Tailwind CSS)
- ✅ 다크 모드 지원
- ✅ TypeScript 타입 안정성
- ✅ Prisma ORM을 통한 데이터베이스 접근
- ✅ API 라우트 (App Router)

## 📚 추가 리소스

- [Next.js 문서](https://nextjs.org/docs)
- [Clerk 문서](https://clerk.com/docs)
- [Supabase 문서](https://supabase.com/docs)
- [Prisma 문서](https://www.prisma.io/docs)
- [shadcn/ui 문서](https://ui.shadcn.com)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)

## 📄 라이선스

MIT

