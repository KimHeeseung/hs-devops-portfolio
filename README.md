# 김희승 | Backend & DevOps Engineer

키오스크·앱·API·포인트·통계 시스템 개발 및 운영, AWS 인프라, CI/CD 자동화 경험을 정리한 포트폴리오입니다.

Java · Spring Boot · PHP · MySQL · AWS · Jenkins · Linux · Hyperledger Besu

## 주요 경험

- **팜스몰 — 회사 프로젝트 / 단독 개발**: 플라스틱히어로코리아 업무로 상품 관리, 포인트 주문 트랜잭션, 취소·반품·교환 및 검수 후 환불, CJ 배송상태 자동 갱신, 관리자 화면·백엔드와 앱 연동 명세 개발
- **Production Backend**: 키오스크 수거 API, 회원/비회원 보상, 복지몰 포인트·주문 연동, 통계·엑셀 다운로드
- **Cloud & Infrastructure**: Aurora MySQL Serverless v2, Writer/Reader Endpoint, VPC·Security Group, Secrets Manager, CloudWatch, ACU·비용 검토
- **DevOps & Automation**: GitLab → Jenkins → Maven → Spring Boot, dev/prod 분리, Shell·Cron, S3·PowerShell 키오스크 영상 자동배포
- **Blockchain**: Hyperledger Besu QBFT, PTH 트랜잭션, UUID·tx_hash 매핑, Callback, 중복 지급 방지, 실패 재처리, Bridge 연계
- **Application & Operations**: React Native Android 유지보수·APK 배포, PHP GNUBOARD·Spring Boot 병행 운영, Linux·Apache·SSL·DNS 관리

## 포트폴리오 구성

Skills & Tools → Experience → Projects → Architecture → Troubleshooting → Runbooks → Additional Projects → Contact

Aurora 중앙 DB 구축, 키오스크 영상 자동배포, IoT 수거 API, Android 앱 유지보수, SSL·서버 운영을 독립 프로젝트로 정리했습니다. 장애 대응 섹션에는 DB 잠금·접속·집계 오류, 디스크 공간, 인증서, Jenkins 배포, 영상 동기화 문제를 담았습니다.

## 개인 프로젝트

- **하루다마 (Harudama) — 개발 진행 중**: React Native CLI·Express(Node.js)·TypeScript 기반 AI 라이프로그. JWT 인증, MySQL 대화 저장, Redis List·TTL 대화 캐싱, OpenAI Responses API 기반 Context 응답, 일정·과거 기록 조회 및 Docker 서버 실행 구성. 지정 저장소의 dev 브랜치 소스 기준으로 정리.
- **[자비스 포켓 (Jarvis Pocket)](https://github.com/KimHeeseung/jarvis-pocket)**: React Native CLI·TypeScript 앱, Node.js HTTP 서버, Mac Codex CLI 에이전트를 연결한 개인 작업 비서. 작업 임대·중복 실행 방지·결과 상태 관리, Apple 음성 인식·TTS 연동, 네이티브 호환 패치 및 Tailscale HTTPS 설정 스크립트 구현. 저장소 검증 기록 기준 실제 Codex 응답 연동을 확인했으며, 실기기 음성·외부망 및 실제 코드 작업 전체 흐름은 추가 검증 대상입니다.

## 개발 환경

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Radix UI · Lucide

```bash
npm ci
npm run dev
```

[로컬 포트폴리오 열기](http://localhost:3000)

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## 소스 구성

- `src/app/page.tsx`: 화면, 기존 경력·프로젝트, 연락처
- `src/lib/portfolio-additions.ts`: 추가 기술·프로젝트·장애 대응 내용
- `src/app/layout.tsx`: 페이지 제목·설명·문서 언어
- `src/app/globals.css`: 공통 스타일

## 연락처

- [Email](mailto:akwlsrkek@naver.com)
- [GitHub](https://github.com/KimHeeseung)
- [Velog](https://velog.io/@akwlsrkek/posts)
