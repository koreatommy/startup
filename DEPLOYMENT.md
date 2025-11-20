# 배포 가이드

이 문서는 Next.js SaaS 템플릿을 Vercel에 배포하는 상세한 절차를 설명합니다.

## 📋 사전 준비

1. **GitHub 계정** 및 레포지토리
2. **Vercel 계정** (GitHub 연동)
3. **Supabase 프로젝트** (프로덕션 환경)
4. **Clerk 애플리케이션** (프로덕션 환경)

## 🚀 배포 단계

### 1단계: Git 저장소 설정

```bash
# 프로젝트 디렉토리에서
git init
git add .
git commit -m "Initial commit: Next.js SaaS template"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2단계: Vercel 프로젝트 생성

1. [Vercel 대시보드](https://vercel.com/dashboard)에 로그인
2. "Add New..." → "Project" 클릭
3. GitHub 레포지토리 선택
4. 프로젝트 설정:
   - **Framework Preset**: Next.js (자동 감지)
   - **Root Directory**: `./` (기본값)
   - **Build Command**: `next build` (기본값)
   - **Output Directory**: `.next` (기본값)
   - **Install Command**: `npm install` (기본값)

### 3단계: 환경 변수 설정

Vercel 대시보드 → Project Settings → Environment Variables에서 다음 변수들을 추가:

#### 필수 환경 변수

| 변수명 | 설명 | 예시 |
|--------|------|------|
| `DATABASE_URL` | Supabase PostgreSQL 연결 문자열 | `postgresql://user:pass@host:5432/db?sslmode=require` |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk 공개 키 | `pk_live_xxx` |
| `CLERK_SECRET_KEY` | Clerk 비밀 키 | `sk_live_xxx` |
| `NEXT_PUBLIC_APP_URL` | 프로덕션 앱 URL | `https://your-app.vercel.app` |

#### 환경 변수 설정 방법

1. Vercel 프로젝트 → Settings → Environment Variables
2. 각 변수를 추가:
   - **Key**: 변수명 입력
   - **Value**: 실제 값 입력
   - **Environment**: Production, Preview, Development 모두 선택 (또는 필요에 따라 선택)
3. "Save" 클릭

### 4단계: Supabase 프로덕션 설정

1. **Supabase 프로젝트 생성** (프로덕션용)
   - [Supabase Dashboard](https://app.supabase.com)에서 새 프로젝트 생성
   - 또는 기존 프로젝트의 Production 환경 사용

2. **데이터베이스 연결 문자열 복사**
   - Settings → Database → Connection string
   - Connection pooling 또는 Direct connection 선택
   - Vercel 환경 변수 `DATABASE_URL`에 설정

3. **Prisma 마이그레이션 실행** (선택사항)
   - 로컬에서 프로덕션 데이터베이스로 마이그레이션:
   ```bash
   DATABASE_URL="your-production-url" npm run db:push
   ```
   - 또는 Vercel Build Command에 추가:
   ```json
   {
     "buildCommand": "prisma generate && prisma db push && next build"
   }
   ```

### 5단계: Clerk 프로덕션 설정

1. **Clerk 프로덕션 키 발급**
   - [Clerk Dashboard](https://dashboard.clerk.com)
   - 프로덕션 환경에서 API Keys 복사

2. **Redirect URLs 설정** (중요!)
   - Configure → Redirect URLs
   - 다음 URL들을 추가:
     ```
     https://your-app.vercel.app
     https://your-app.vercel.app/sign-in
     https://your-app.vercel.app/sign-up
     ```
   - 개발 환경용 (선택):
     ```
     http://localhost:3000
     http://localhost:3000/sign-in
     http://localhost:3000/sign-up
     ```

3. **Allowed Origins 설정**
   - Configure → Allowed Origins
   - `https://your-app.vercel.app` 추가

### 6단계: 첫 배포 실행

1. Vercel 대시보드에서 "Deploy" 버튼 클릭
2. 배포 로그 확인:
   - Build 단계에서 오류가 없는지 확인
   - Prisma 클라이언트 생성 확인
   - Next.js 빌드 성공 확인

3. 배포 완료 후:
   - 제공된 URL로 접속 테스트
   - 로그인/회원가입 기능 테스트
   - API 엔드포인트 테스트

### 7단계: 자동 배포 설정 확인

- `main` 브랜치에 푸시하면 자동으로 배포됩니다
- Pull Request 생성 시 Preview 배포가 자동 생성됩니다

## 🔧 문제 해결

### 빌드 오류

**문제**: Prisma 클라이언트 생성 실패
**해결**: Build Command에 `prisma generate` 추가

```json
{
  "buildCommand": "prisma generate && next build"
}
```

**문제**: 환경 변수 누락
**해결**: Vercel Settings → Environment Variables에서 모든 필수 변수 확인

### 런타임 오류

**문제**: 데이터베이스 연결 실패
**해결**:
- `DATABASE_URL` 형식 확인
- Supabase 프로젝트 상태 확인
- IP 화이트리스트 확인 (필요한 경우)

**문제**: Clerk 인증 실패
**해결**:
- Redirect URLs에 프로덕션 도메인 추가 확인
- 환경 변수 키가 올바른지 확인 (프로덕션 키 사용)

## 📝 체크리스트

배포 전 확인사항:

- [ ] Git 저장소에 코드 푸시 완료
- [ ] Vercel 프로젝트 생성 완료
- [ ] 모든 환경 변수 설정 완료
- [ ] Supabase 프로덕션 데이터베이스 준비 완료
- [ ] Clerk 프로덕션 키 발급 완료
- [ ] Clerk Redirect URLs 설정 완료
- [ ] 첫 배포 성공 확인
- [ ] 로그인/회원가입 기능 테스트 완료
- [ ] API 엔드포인트 테스트 완료

## 🔄 업데이트 배포

코드 변경 후 배포:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Vercel이 자동으로 감지하여 재배포합니다.

## 🌍 도메인 연결 (선택사항)

1. Vercel 프로젝트 → Settings → Domains
2. 커스텀 도메인 추가
3. DNS 설정 (Vercel 가이드 따르기)
4. Clerk 및 Supabase에 새 도메인 추가

## 📞 지원

문제가 발생하면:
1. Vercel 배포 로그 확인
2. 브라우저 콘솔 오류 확인
3. Supabase 로그 확인
4. Clerk 대시보드 이벤트 확인

