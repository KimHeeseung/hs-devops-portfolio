"use client";

import { useEffect } from "react";
import { additionalSkills, additionalProjects, incidents } from "@/lib/portfolio-additions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle2,
  Github,
  Mail,
  Server,
  Settings,
  Boxes,
  Cpu,
  Activity,
  Network,
  TerminalSquare,
  Shield,
  GitBranch,
} from "lucide-react";

export default function Portfolio() {
  useEffect(() => {
    // Smooth scroll for in-page anchors (typed & SSR-safe)
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!target) return;

      const href = target.getAttribute("href");
      const id = href ? href.slice(1) : null;
      const el = id ? document.getElementById(id) : null;

      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      }
    };

    if (typeof document !== "undefined") {
      document.addEventListener("click", handleClick as EventListener);
      return () =>
        document.removeEventListener("click", handleClick as EventListener);
    }
    return;
  }, []);

  // 이력서 SKILLS 기준으로 정리
  const skills = [
    ...additionalSkills,
    {
      title: "Back-End",
      items: [
        "Java, PHP",
        "Spring Framework / Spring Boot",
        "Spring Security, JPA, MyBatis",
        "RESTful API (JSON 기반 설계/개발)",
        "Batch Processing",
        "Next.js / Node.js 백엔드 구성",
        "Node.js / Express / TypeScript, JWT 인증 (개인 프로젝트)",
        "PHP GNUBOARD 레거시 운영",
      ],
    },
    {
      title: "Front-End / Mobile",
      items: [
        "JavaScript(ES6), jQuery, AJAX",
        "HTML5, CSS3",
        "React Native Android 유지보수, APK 빌드·배포",
        "React Native / TypeScript, React Navigation, AsyncStorage (개인 프로젝트)",
        "Thymeleaf",
        "반응형 웹 (Media Query, CSS Grid/Flexbox)",
      ],
    },
    {
      title: "Database",
      items: [
        "MySQL 8, MariaDB",
        "Redis 대화 캐싱 (개인 프로젝트)",
        "인덱스 설계·SQL 튜닝, 데이터 마이그레이션·정합성 검증",
        "Oracle DB, PostgreSQL",
        "MS SQL Server",
      ],
    },
    {
      title: "Server & Infra",
      items: [
        "Ubuntu, CentOS (Linux 서버 관리)",
        "Apache, Nginx, Tomcat",
        "iwinv Cloud, AWS EC2",
        "로드밸런싱 구성, 보안 정책(UFW, IP 화이트리스트)",
      ],
    },
    {
      title: "Tools",
      items: [
        "Git, GitLab, GitHub",
        "Jenkins(CI/CD), Postman, Swagger",
        "IntelliJ, Eclipse, VS Code",
        "phpMyAdmin, DBeaver",
      ],
    },
    {
      title: "Collaboration & Design",
      items: [
        "Notion, Slack, Google Drive",
        "Figma",
        "MS Office(Word, Excel, PowerPoint)",
      ],
    },
  ];

  // 이력서 PROJECTS 내용 기반으로 과장된 스택/툴 제거하고 정리
  const projects = [
    ...additionalProjects,
    {
      id: "pth",
      title: "블록체인 기반 PET 수거 리워드 시스템",
      subtitle: "Hyperledger Besu 기반 PTH 메인넷 · PET 수거 데이터 연동",
      impact: [
        "키오스크에서 수집된 PET 수거 데이터를 기반으로 실시간 PTH 코인 전송 요청 처리",
        "수거 데이터와 보상 트랜잭션을 연결하고 요청부터 결과 반영까지 추적하는 구조 구축",
      ],
      stack: [
        "PHP",
        "Java",
        "Spring Boot",
        "MySQL",
        "Hyperledger Besu(QBFT)",
        "REST API",
        "Ubuntu",
        "Shell/Cron",
      ],
      responsibilities: [
        "키오스크 수거 데이터 수신 API 및 블록체인 전송 요청 API 설계·구현",
        "tx_hash·UUID 기반 이중 지급 방지 로직 및 실패 트랜잭션 자동 재처리(5분 주기 배치) 구현",
        "블록체인 콜백 API를 통해 확정 트랜잭션 결과 수신 후 DB 반영 및 전체 로그 추적 구조 설계",
        "Main Network ↔ ERC-20 Bridge 연계",
      ],
      architecture: [
        "Kiosk → API 서버 → PTH 전송 요청 → Besu 메인넷 → 콜백 API → 보상/로그 테이블 반영",
        "요청/응답/콜백 전 주기를 테이블로 설계하여 장애 시 원인 추적 가능",
      ],
      results: [
        "회원·비회원 모두에 대해 보상 체계를 구축하여 서비스 접근성 및 신뢰도 향상",
        "트랜잭션 재처리 배치 도입으로 실패 케이스 감소 및 운영 안정성 강화",
      ],
      links: {
        repo: "",
        doc: "",
      },
    },
    {
      id: "welfare",
      title: "복지몰 연동 (포인트 및 기프티쇼)",
      subtitle: "포인트 연동 API · 기프티쇼 주문/취소 · 자동 배치",
      impact: [
        "복지몰–사내 시스템–기프티쇼 간 포인트/주문 흐름을 하나의 API 구조로 통합",
        "포인트 차감·적립, 주문/취소 결과를 DB에 적재해 정산·추적이 가능한 체계 확보",
      ],
      stack: [
        "PHP",
        "MySQL",
        "REST API(JSON)",
        "Ubuntu",
        "Shell Script",
        "Cron",
      ],
      responsibilities: [
        "회원 식별값 기반 포인트 조회/차감/적립 API 설계 및 구현",
        "복지몰 주문 수신 후 기프티쇼 API 호출(주문/취소/재전송) 및 결과 DB 반영",
        "특정 시각에 상품·브랜드 리스트를 자동 업데이트하는 배치(Cron) 구현",
        "포인트 거래 이상 징후를 줄이기 위한 데이터 검증 로직 설계",
      ],
      architecture: [
        "복지몰 → 포인트/주문 API → 내부 DB → 기프티쇼 API → 결과 콜백/조회 → 정산 테이블 반영",
        "일별 배치로 상품/브랜드 정보 동기화 및 로그 파일 관리",
      ],
      results: [
        "포인트·기프티콘 사용 이력의 추적이 가능해져, 정산 및 CS 대응 효율 향상",
        "포인트·주문 결과 검증 및 거래 이력 확인 기능 제공",
      ],
      links: { repo: "", doc: "" },
    },
    {
      id: "bigdata",
      title: "대용량 데이터 추출·집계 화면 및 엑셀 다운로드",
      subtitle: "1억+ 데이터 집계 · 쿼리 튜닝 · Apache POI",
      impact: [
        "1억 건 이상의 키오스크 데이터를 조건 검색·집계할 수 있는 관리 화면 제공",
        "대용량 데이터 엑셀 다운로드 기능으로 운영/분석 업무 효율 상승",
      ],
      stack: ["Java", "Spring Boot", "MySQL/MariaDB", "MyBatis", "Apache POI"],
      responsibilities: [
        "조건별 집계 쿼리 설계 및 인덱스/파티셔닝을 통한 성능 최적화",
        "Apache POI 기반 대용량 엑셀 다운로드 기능 구현",
        "RESTful API로 데이터를 외부 시스템에서도 활용 가능하도록 설계",
      ],
      architecture: [
        "Admin UI → Spring Boot API → MySQL 집계 쿼리 → POI 변환 → 엑셀 파일 응답",
      ],
      results: [
        "대용량 데이터 처리 속도 개선 및 운영자가 직접 통계/리포트를 추출할 수 있는 환경 제공",
      ],
      links: { repo: "", doc: "" },
    },
    {
      id: "monitor",
      title: "웹 기반 관제시스템(Spring Boot 전환)",
      subtitle: "PHP → Spring Boot 전환 · CI/CD · 권한 관리",
      impact: [
        "기존 PHP 관제시스템을 Spring Boot 기반으로 전환해 유지보수성과 확장성 향상",
        "CI/CD 파이프라인 도입으로 배포 속도와 안정성 개선",
      ],
      stack: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "MySQL",
        "GitLab",
        "Jenkins",
      ],
      responsibilities: [
        "MVC 패턴 기반 신규 관제 시스템 API/화면 설계 및 구현",
        "Spring Security를 활용한 사용자 인증·권한 관리 로직 구현",
        "GitLab → Jenkins → Maven → Spring Boot 자동 빌드/배포 파이프라인 구성",
      ],
      architecture: [
        "GitLab → Jenkins Build → 테스트 → 서버(Spring Boot/Tomcat) 배포",
        "관리자/일반 사용자 권한에 따른 메뉴/기능 접근 제어",
      ],
      results: [
        "운영/개발 브랜치 분리 및 자동 배포로 배포 리스크 감소",
        "장애 대응 및 기능 추가 시 리드타임 단축",
      ],
      links: { repo: "", doc: "" },
    },
    {
      id: "camp24",
      title: "Camp24 – 캠핑 플랫폼",
      subtitle: "로그인/마이페이지/중고거래 · KakaoPay 연동",
      impact: [
        "캠핑 정보를 제공하고 중고 거래 기능을 포함한 사용자 커뮤니티 구성",
        "KakaoPay 결제 연동으로 실제 결제 플로우 경험 축적",
      ],
      stack: [
        "Java",
        "JSP",
        "Spring",
        "Oracle DB",
        "JavaScript",
        "jQuery",
        "Ajax",
      ],
      responsibilities: [
        "로그인/로그아웃, 마이페이지, 중고 거래 게시판 기능 구현",
        "i’mport를 활용한 KakaoPay 결제 연동 및 결제 후 알림/거래내역 관리",
        "팀 내 역할 분담, 코드 리뷰, Git을 통한 버전 관리",
      ],
      architecture: [
        "Web UI(JSP) → Spring Controller → Service/DAO → Oracle DB",
        "결제 요청 → i’mport/KakaoPay → 결제 결과 콜백 처리",
      ],
      results: [
        "실제 결제와 게시판 기능이 결합된 서비스 구현 경험 확보",
        "협업 환경에서 요구사항 반영·코드 통합 경험",
      ],
      links: { repo: "", doc: "" },
    },
  ];

  const contacts = [
    { label: "Email", icon: Mail, href: "mailto:akwlsrkek@naver.com" },
    { label: "GitHub", icon: Github, href: "https://github.com/KimHeeseung" },
    {
      label: "Velog",
      icon: TerminalSquare,
      href: "https://velog.io/@akwlsrkek/posts",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-3 items-center justify-between">
          <a href="#home" className="font-semibold text-slate-900">
            김희승
          </a>
          <nav aria-label="주요 섹션" className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a href="#skills" className="hover:underline">
              Skills
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#architecture" className="hover:underline">
              Architecture
            </a>
            <a href="#troubleshooting" className="hover:underline">
              Troubleshooting
            </a>
            <a href="#additional-projects" className="hover:underline">
              More
            </a>
            <a href="#personal-projects" className="hover:underline">
              Personal
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
          <div className="flex gap-2"></div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              김희승 |{" "}
              <span className="text-slate-900">Backend &amp; DevOps Engineer</span>
            </h1>
            <p className="mt-5 text-slate-600 leading-relaxed">
              키오스크·앱·API·포인트·통계 시스템을 개발하고 운영하며,
              AWS 인프라와 배포 자동화까지 함께 다룹니다.
              <br />
              안정적인 API와 배치, 모니터링이 가능한 백엔드/인프라 환경을
              설계하는 데 집중합니다.
            </p>
            <p className="mt-4 text-sm font-medium text-slate-600">
              Java · Spring Boot · PHP · MySQL · AWS · Jenkins · Linux · Hyperledger Besu
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="rounded-full" variant="secondary">
                <GitBranch className="h-3.5 w-3.5 mr-1" />
                CI/CD
              </Badge>
              <Badge className="rounded-full" variant="secondary">
                <Boxes className="h-3.5 w-3.5 mr-1" />
                REST API
              </Badge>
              <Badge className="rounded-full" variant="secondary">
                <Cpu className="h-3.5 w-3.5 mr-1" />
                Hyperledger Besu
              </Badge>
              <Badge className="rounded-full" variant="secondary">
                <Activity className="h-3.5 w-3.5 mr-1" />
                모니터링/배치
              </Badge>
            </div>
            <div className="mt-8 flex gap-3">
              <Button asChild>
                <a href="#projects">프로젝트 보기</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#skills">보유 기술</a>
              </Button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Server, title: "Production Backend", text: "키오스크·앱·API·포인트·상품·통계 시스템 개발 및 운영" },
              { icon: Network, title: "Cloud & Infrastructure", text: "AWS Aurora Serverless v2 · EC2 · S3 · SNS · Linux · Apache · SSL" },
              { icon: Settings, title: "DevOps & Automation", text: "GitLab · Jenkins · Maven · Shell · Cron · 배포·운영 자동화" },
              { icon: Shield, title: "Blockchain", text: "Hyperledger Besu · PTH Transaction · Callback · Retry · Bridge" },
            ].map((item) => (
              <Card key={item.title} className="shadow-sm">
                <CardContent className="p-5 space-y-3">
                  <item.icon className="h-5 w-5 text-slate-600" />
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold">Skills & Tools</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <Card key={s.title} className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">플라스틱히어로코리아</CardTitle>
              <CardDescription>
                Engineer (Backend / DevOps) · 2024.05 – 재직 중
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
                <li>콘솔 및 웹 모니터링 솔루션 개발</li>
                <li>Spring 기반 웹 애플리케이션 및 API 개발/유지보수</li>
                <li>실시간 데이터 모니터링 및 관리</li>
                <li>WEB & APP 운영 및 사내 서버 관리</li>
                <li>팜스몰 상품·포인트 주문·배송·CS 관리 시스템 단독 개발</li>
                <li>MySQL 집계·쿼리 개선, 데이터 정합성 검증 및 배치 작업 운영</li>
                <li>Aurora Serverless v2·EC2·S3 운영 및 DB 접근·비용 관리</li>
                <li>키오스크 영상 자동배포 및 React Native Android 앱 유지보수</li>
                <li>Jenkins 배포 자동화, Linux·SSL·도메인 운영 장애 대응</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">
                에코센트레 (기업부설연구소)
              </CardTitle>
              <CardDescription>
                Engineer (Full-stack) · 2023.04 – 2024.04
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
                <li>웹 기반 관제시스템 개발/유지보수</li>
                <li>서버–기기 간 API 개발 및 재활용 기기 데이터 관리</li>
                <li>운영 모니터링 및 고객 요청 대응</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold">Projects · Case Studies</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card id={p.id} key={p.id} className="scroll-mt-28 hover:shadow-md transition">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm">Impact</h4>
                  <ul className="mt-2 text-sm text-slate-700 space-y-2">
                    {p.impact.map((x) => (
                      <li key={x} className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Stack</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="rounded-full"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">
                    Role & Responsibilities
                  </h4>
                  <ul className="mt-2 text-sm text-slate-700 space-y-2">
                    {p.responsibilities.map((r) => (
                      <li key={r} className="list-disc ml-5">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Architecture Notes</h4>
                  <ul className="mt-2 text-sm text-slate-700 space-y-2">
                    {p.architecture.map((a) => (
                      <li key={a} className="list-disc ml-5">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Results</h4>
                  <ul className="mt-2 text-sm text-slate-700 space-y-2">
                    {p.results.map((a) => (
                      <li key={a} className="list-disc ml-5">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                {p.links.repo && (
                  <Button variant="outline" asChild>
                    <a href={p.links.repo} target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Repo
                    </a>
                  </Button>
                )}
                {p.links.doc && (
                  <Button variant="outline" asChild>
                    <a href={p.links.doc} target="_blank" rel="noreferrer">
                      <TerminalSquare className="h-4 w-4 mr-1" />
                      Docs
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Architecture */}
      <section id="architecture" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold">Architecture · 운영 방식</h2>
        <p className="text-slate-600 mt-2">
          실제로 운영 중인 서비스에서 사용했던 배포/운영/모니터링 패턴을
          요약했습니다.
        </p>
        <div className="mt-6 grid lg:grid-cols-3 gap-4">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">
                CI/CD 기반 배포 파이프라인
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <p>GitLab → Jenkins → Maven 빌드 → Spring Boot 서버 배포</p>
              <p>Spring Boot/Tomcat 기반 서비스에 대한 자동 배포 및 롤백 절차 정리</p>
              <p>운영/개발 브랜치 분리로 안정적인 배포 플로우 유지</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">로그 & 모니터링</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <p>서버 로그와 MySQL Slow Query Log를 활용한 성능·장애 분석</p>
              <p>배치 작업 및 주요 API에 대한 실패 로그 기록 및 점검 루틴 운영</p>
              <p>자원(CPU·메모리·디스크) 상태 점검으로 선제적 장애 예방</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">
                블록체인 연동 서비스 운영
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <p>Hyperledger Besu 노드와의 RPC 연동 및 트랜잭션 전송/조회 처리</p>
              <p>tx_hash·UUID 기준의 결과 검증 및 콜백 처리 플로우 운영</p>
              <p>오류·지연 발생 시 재시도/보상 트랜잭션 등 대응 절차 정의</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      <section id="troubleshooting" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold">Troubleshooting · Production Incidents</h2>
        <p className="text-slate-600 mt-2">운영 중 다룬 문제와 대응 내용을 정리했습니다.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {incidents.map((incident) => (
            <Card key={incident.title} className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">{incident.title}</CardTitle>
                <CardDescription>{incident.symptom}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-slate-700">{incident.response}</CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Separator className="max-w-6xl mx-auto" />

      {/* Runbooks */}
      <section id="runbooks" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold">Runbooks · 운영 가이드</h2>
        <p className="text-slate-600 mt-2">
          반복적으로 발생할 수 있는 이슈에 대한 대응 절차를 정리한 내용입니다.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">
                블록체인 연동 지연/오류 대응
              </CardTitle>
              <CardDescription>
                전송 실패·지연 · 콜백 누락 케이스 처리
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <ul className="list-disc ml-5 space-y-1">
                <li>요청/응답/콜백 로그를 UUID·tx_hash 기준으로 교차 조회</li>
                <li>실패 코드/예외 유형에 따라 재시도 여부 및 보상 트랜잭션 결정</li>
                <li>지속 실패 시 수동 처리 및 관련 데이터 백업 절차 수행</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">
                배치/스케줄러 작업 장애 대응
              </CardTitle>
              <CardDescription>
                자정 백업·데이터 전환·재처리 배치 실패 시 대응
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <ul className="list-disc ml-5 space-y-1">
                <li>Cron 로그 및 애플리케이션 로그를 통해 실패 지점 파악</li>
                <li>중복 삽입 방지 로직(키 기준 비교) 점검 후 재실행</li>
                <li>장애 재발 방지를 위한 예외 처리 및 모니터링 포인트 보완</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Additional Projects – 이력서 PROJECTS 요약 카드들 */}
      <section
        id="additional-projects"
        className="max-w-6xl mx-auto px-4 py-14"
      >
        <h2 className="text-2xl font-bold">Additional Projects</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle>클라우드 서버 환경 구축 및 로드밸런싱</CardTitle>
              <CardDescription>
                iwinv Cloud · Ubuntu · Nginx/Tomcat · UFW/Whitelist (2025.05)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-700">
              <ul className="list-disc ml-5 space-y-1">
                <li>서비스별 포트 분리 및 로드밸런싱으로 트래픽 분산</li>
                <li>IP 화이트리스트/UFW 적용, binlog 관리 및 자동 백업 스케줄링</li>
                <li>서버 자원/로그 모니터링으로 무중단 운영을 지원</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle>데이터 백업 및 전환 스케줄링 시스템</CardTitle>
            <CardDescription>
              Spring Boot · @Scheduled · 대량 API 백업/전환 (2024.11–2024.12)
            </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-700">
              <ul className="list-disc ml-5 space-y-1">
                <li>외부 API 연동으로 자정에 대량 데이터 백업 수행</li>
                <li>버퍼/메모리 튜닝 및 중복 제거·배치 삽입으로 성능 최적화</li>
                <li>오류 로깅과 예외 처리로 안정적인 스케줄링 환경 구축</li>
              </ul>
            </CardContent>
          </Card>


        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Personal Projects */}
      <section id="personal-projects" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold">Personal Projects</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card id="harudama" className="scroll-mt-28 hover:shadow-md transition">
            <CardHeader>
              <div className="mb-2 flex flex-wrap gap-2">
                <Badge variant="secondary">개인 프로젝트</Badge>
                <Badge variant="outline">개발 진행 중</Badge>
              </div>
              <CardTitle>하루다마 (Harudama) — AI 라이프로그 서비스</CardTitle>
              <CardDescription>React Native CLI · Express(Node.js) · TypeScript 기반 AI 대화형 일상 기록 서비스</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-700">
              <p className="leading-relaxed">
                AI와 대화하며 일상과 일정을 기록하고, 과거 대화와 기록을 다시 조회할 수 있는 모바일 서비스를 개발하고 있습니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React Native CLI", "TypeScript", "Node.js", "Express", "JWT", "MySQL", "Redis", "OpenAI Responses API", "React Navigation", "AsyncStorage", "Docker"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="rounded-full">{tech}</Badge>
                ))}
              </div>
              <div>
                <h3 className="font-semibold">Role & Responsibilities</h3>
                <ul className="mt-2 list-disc ml-5 space-y-2">
                  <li>React Native / TypeScript 모바일 화면 및 백엔드 API 연동 개발</li>
                  <li>Node.js / Express / TypeScript 기반 API와 JWT 인증·사용자별 데이터 접근 검사 구현</li>
                  <li>MySQL 기반 사용자·채팅방·메시지 저장 및 대화 내역 조회</li>
                  <li>Redis List·TTL 기반 최근 대화 캐싱과 사용자 기억 Context 관리</li>
                  <li>OpenAI Responses API에 대화·기억 Context를 전달하는 AI 응답 기능 구현</li>
                  <li>대화 의도에 따른 일정 처리 및 기간별 과거 기록 조회 흐름 개발</li>
                  <li>React Navigation 화면 전환과 AsyncStorage 기반 로컬 데이터 관리</li>
                  <li>React Native CLI 기반 Android·iOS 빌드 설정 및 Docker 기반 서버 실행 환경 구성</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Architecture Notes</h3>
                <p className="mt-2 leading-relaxed">React Native 앱 → Express 인증·대화 API → MySQL 기록 저장 / Redis Context 조회 → OpenAI Responses API → 응답 저장·표시</p>
              </div>
            </CardContent>
          </Card>
          <Card id="jarvis" className="scroll-mt-28 hover:shadow-md transition">
            <CardHeader>
              <div className="mb-2">
                <Badge variant="secondary">개인 프로젝트</Badge>
              </div>
              <CardTitle>자비스 포켓 (Jarvis Pocket) — 개인 Mac 작업 비서</CardTitle>
              <CardDescription>React Native CLI · Node.js · 모바일–서버–Mac 에이전트 연동</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed text-slate-700">
                iPhone에서 텍스트·음성으로 작업을 요청하고, Mac의 Codex 실행 에이전트가 처리한 결과를 앱에서 확인하는 개인 비서 프로젝트입니다. 파일 작성·코드 수정·테스트 요청을 전달하는 실행 흐름과 작업 상태 관리 기능을 개발했습니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React Native CLI", "TypeScript", "Node.js HTTP", "Codex CLI", "Apple Speech", "TTS", "Tailscale"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="rounded-full">{tech}</Badge>
                ))}
              </div>
              <div className="text-sm text-slate-700">
                <h3 className="font-semibold">Role & Responsibilities</h3>
                <ul className="mt-2 list-disc ml-5 space-y-2">
                  <li>React Native CLI / TypeScript 기반 대화·작업 결과 화면과 연결 설정, 인증 실패·오프라인 상태 표시 구현</li>
                  <li>Node.js 기본 HTTP 모듈 기반 서버와 Mac 작업 실행 에이전트 구성, 앱·에이전트 연결 토큰 분리</li>
                  <li>Codex CLI를 별도 프로세스로 실행하고 사용자 요청을 표준 입력으로 전달, 작업 폴더와 실행 시간 제한 적용</li>
                  <li>작업 임대 갱신과 결과·실행 기록 저장으로 중복 실행 방지, 완료·차단·실패 결과 구분</li>
                  <li>Apple 한국어 음성 인식 네이티브 모듈 및 TTS 출력·음소거·취소 처리 구현</li>
                  <li>TTS·오디오 라이브러리의 네이티브 호환 문제를 재설치 시 적용되는 패치로 관리</li>
                  <li>Tailscale Serve 기반 HTTPS 연결 설정 스크립트와 iOS 개인용 Release 빌드 스킴 구성</li>
                </ul>
              </div>
              <div className="text-sm text-slate-700">
                <h3 className="font-semibold">Architecture Notes</h3>
                <p className="mt-2 leading-relaxed">iPhone → Node.js 서버 → Mac 에이전트 → Codex CLI → 실행 결과 저장 → 모바일 결과 표시·음성 출력</p>
                <p className="mt-2 leading-relaxed">JSON 파일 기반 대화·작업 상태 저장, 실행 권한 부족과 처리 실패를 완료 상태와 구분</p>
              </div>
              <div className="text-sm text-slate-700">
                <h3 className="font-semibold">Validation & Scope</h3>
                <p className="mt-2 leading-relaxed">저장소 검증 기록 기준으로 서버·에이전트 처리 흐름과 실제 Codex 응답 연동을 확인했습니다. 실기기 음성 입출력, 외부망 연결 및 실제 코드 수정·테스트의 전체 실행 흐름은 추가 검증 대상입니다.</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <a href="https://github.com/KimHeeseung/jarvis-pocket" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4 mr-1" /> GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold">Contact</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {contacts.map((c) => (
            <Button key={c.label} variant="outline" size="sm" asChild>
              <a href={c.href} target="_blank" rel="noreferrer">
                <c.icon className="h-4 w-4 mr-1" />
                {c.label}
              </a>
            </Button>
          ))}
        </div>
      </section>

      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-xs text-slate-500 flex flex-wrap items-center gap-3">
          <span>© {new Date().getFullYear()} 김희승 – Backend & DevOps Engineer</span>
          <span className="hidden md:inline">·</span>
          <span>포트폴리오는 실제 운영·개발 경험을 바탕으로 작성되었습니다.</span>
        </div>
      </footer>
    </div>
  );
}
