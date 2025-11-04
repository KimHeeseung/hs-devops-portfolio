"use client";

import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Github, Linkedin, Mail, Server, Settings, Boxes, Cpu, Activity, Network, TerminalSquare, Cloud, Shield, GitBranch } from "lucide-react";

export default function Portfolio() {
  useEffect(() => {
    // Smooth scroll for in-page anchors (typed & SSR-safe)
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!target) return;
  
      const href = target.getAttribute("href");
      const id = href ? href.slice(1) : null;
      const el = id ? document.getElementById(id) : null;
  
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  
    if (typeof document !== "undefined") {
      document.addEventListener("click", handleClick as EventListener);
      return () => document.removeEventListener("click", handleClick as EventListener);
    }
    return;
  }, []);

  const skills = [
    { title: '플랫폼·인프라', items: ['Ubuntu(On‑prem/AWS/GCP)', 'Nginx', 'Hyperledger Besu', 'Redis', 'MySQL/TiDB'] },
    { title: '컨테이너·오케스트레이션', items: ['Docker', 'Kubernetes', 'Helm(옵션)', 'Ingress 기본기'] },
    { title: 'CI/CD·자동화', items: ['GitLab CI', 'Jenkins', 'ArgoCD(GitOps)', 'Shell 스크립팅', 'Cron 배치'] },
    { title: 'IaC', items: ['Terraform', 'Ansible(Playbook)'] },
    { title: '관측 가능성', items: ['Prometheus', 'Grafana', 'ELK(Elastic·Logstash·Kibana)', 'SLO/SLI 설계'] },
    { title: 'Backend 배경', items: ['Java/Spring Boot', 'PHP', 'REST API 설계', 'JWT/Spring Security 기본기'] },
  ];

  const projects = [
    {
      id: 'pth',
      title: '블록체인 트랜잭션 자동 처리/재처리 플랫폼',
      subtitle: 'Hyperledger Besu 메인넷 · 중복 지급 방지 · 자동화 배치',
      impact: [
        '일일 수십만 건 트랜잭션 안정 처리, 성공률 99%+',
        'UUID·tx_hash 기반 중복 지급 방지, 콜백 API·리트라이 루프 설계',
        '장애 시 수동개입 최소화(운영 효율 ↑)',
      ],
      stack: ['Hyperledger Besu', 'PHP·Spring Boot', 'MySQL→TiDB', 'Redis', 'Prometheus·Grafana', 'Shell/Cron'],
      responsibilities: [
        'RPC 트랜잭션 흐름 분석 및 예외 패턴 정의',
        '재시도 정책(백오프, 최대 재시도, 보상 트랜잭션) 수립',
        '콜백 API/로그 트레이스 표준화, 운영 대시보드 연동',
      ],
      architecture: [
        'Client → API(Gateway) → Worker(Batch) → Besu Node → Callback → Ledger DB',
        '메시지 아이들포인트 감지 및 자동 재처리 큐 동작',
      ],
      results: [
        '오류/중복 지급률 유의미하게 감소, 운영 안정화',
        '트랜잭션 관측 지표(성공률·지연·오류 코드) 상시 모니터링',
      ],
      links: {
        repo: '',
        doc: '',
      },
    },
    {
      id: 'cicd',
      title: 'CI/CD·성능 최적화 기반 서비스 전환',
      subtitle: 'GitOps 파이프라인 · 대용량 데이터 1억+ · 응답 60s→3s',
      impact: [
        '서비스 전환(기존 PHP → Spring Boot)으로 유지보수성·보안성 강화',
        '쿼리 튜닝/파티셔닝/인덱스 최적화로 평균 응답 60s→3s',
        '빌드·배포 표준화로 배포 리드타임 단축',
      ],
      stack: ['Spring Boot', 'GitLab CI', 'Jenkins', 'Docker', 'MySQL', 'ELK', 'FileStorageService 모듈'],
      responsibilities: [
        '브랜치 전략·파이프라인(Job/Stage) 설계 및 공통 템플릿화',
        '컨테이너 이미지 표준화(취약점 스캔 포함) 및 환경변수 시크릿 관리',
        '슬로우쿼리 모니터링·인덱스 재설계·월별 파티셔닝 적용',
      ],
      architecture: [
        'Dev → CI(Build/Test) → Artifact → CD(Argo/Jenkins) → K8s/VM',
        '로그→ELK, 메트릭→Prometheus, 알림→Alertmanager/Slack',
      ],
      results: [
        '배포 실패율 감소, 롤백 시간 단축',
        '운영 가시성 향상(대시보드 표준 템플릿 배포)',
      ],
      links: { repo: '', doc: '' },
    },
    {
      id: 'giftishow',
      title: '외부 복지몰·기프티쇼 연동 및 주문/취소 플로우 안정화',
      subtitle: 'Partner API 통합 · 암호화 토큰 · 주문/취소/정산 전 주기 자동화',
      impact: [
        '하루 수천 건 파트너 주문·취소 요청 안전 처리',
        '금액권/품목 필터링 및 트래픽 최소화로 비용 절감',
        '오류 시 재처리·콜백 검증으로 고객 CS 감소',
      ],
      stack: ['PHP', 'AES-256 암복호화', 'REST API', 'MySQL', 'Batch/Cron', 'ELK'],
      responsibilities: [
        '주문·취소 API 설계/구현, 암호화 키 관리, 로그 표준화',
        '재시도/중복 방지 정책과 파트너별 예외 처리 분기 설계',
        '일일 품목/브랜드 동기화 배치 및 캐싱 도입',
      ],
      architecture: [
        'Client → API → Partner Gateway → Callback → Settlement DB',
        '에러코드 맵핑 및 보상 트랜잭션(취소/재요청) 자동화',
      ],
      results: [
        '파트너 연동 안정화, 타임아웃·중복 처리 이슈 대폭 감소',
        '운영 모니터링 대시보드로 문제 발생 시 신속 진단',
      ],
      links: { repo: '', doc: '' },
    },
    {
      id: 'kiosk-admin',
      title: '키오스크 모니터링 & 관리자 콘솔 리뉴얼',
      subtitle: '파일 업로드 파이프라인 개선 · UI/UX 정비 · 운영자동화',
      impact: [
        'FileStorageService로 파일 저장 경로 표준화 및 권한/정리 자동화',
        '업데이트 시 구파일 물리/논리 동시 삭제로 디스크 누수 방지',
        '운영자 작업 시간 감소 및 오류율 하락',
      ],
      stack: ['Spring Boot', 'Thymeleaf', 'jQuery', 'MyBatis', 'Linux', 'Nginx'],
      responsibilities: [
        '업로드/교체/삭제 단일 API 설계(@RequestPart 멀티파트)',
        '저장소 서브디렉토리 권한/에러 핸들링 강화',
        '프론트 UI(파일명 동기화, 진행 표시, 예외 메시지) 개선',
      ],
      architecture: [
        'Admin UI → API → FileStorageService → /data/upload/kiosk',
        '교체 시 트랜잭션 내 DB/파일 동기 삭제 보장',
      ],
      results: [
        '파일 누락/잔존 이슈 해소, 운영 편의성 향상',
      ],
      links: { repo: '', doc: '' },
    },
    {
      id: 'dbops',
      title: 'MySQL 운영·DataOps: 파티셔닝·레플리카·대용량 배치',
      subtitle: '1억+ 데이터 테이블 운영 · 파티션 설계 · 슬로우쿼리 튜닝',
      impact: [
        '월별 RANGE 파티션과 인덱스 재설계로 조회 성능 대폭 개선',
        '배치 작업(재처리/동기화) 성능/안정성 향상',
        '운영 정책(로그/바이너리 로그/백업) 정비',
      ],
      stack: ['MySQL/MariaDB', 'DBeaver', 'Slow Query Log', 'Shell', 'UFW'],
      responsibilities: [
        '파티션 DDL 수립 및 마이그레이션 순서 정의',
        '대량 배치 LIMIT+OFFSET/키셋 페이징 전략 설계',
        'binlog/slowlog 경로·용량 정책 및 알림 설정',
      ],
      architecture: [
        'OLTP DB ↔ 배치/리포팅 흐름 분리, 로그 보존 정책 적용',
      ],
      results: [
        '응답 60s→3s, 운영 장애 포인트 제거, 확장성 기반 마련',
      ],
      links: { repo: '', doc: '' },
    },
  ];

  const contacts = [
    { label: 'Email', icon: Mail, href: 'mailto:akwlsrkek@naver.com' },
    { label: 'GitHub', icon: Github, href: 'https://github.com/KimHeeseung' },
    { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/your-id' },
    { label: 'Velog', icon: TerminalSquare, href: 'https://velog.io/@akwlsrkek/posts' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold text-slate-900">김희승 · DevOps</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#architecture" className="hover:underline">Architecture</a>
            <a href="#insights" className="hover:underline">Insights</a>
            <a href="#runbooks" className="hover:underline">Runbooks</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="flex gap-2">
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              안정성과 확장성을 추구하는 <span className="text-slate-900">DevOps · 개발자</span>
            </h1>
            <p className="mt-5 text-slate-600 leading-relaxed">
              하루 수십만 건 블록체인 트랜잭션과 1억+ 데이터 처리 경험을 기반으로,
              GitOps/자동화/관측 가능성으로 서비스의 <b>예방형 안정화</b>를 지향합니다.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="rounded-full" variant="secondary"><GitBranch className="h-3.5 w-3.5 mr-1"/>GitOps</Badge>
              <Badge className="rounded-full" variant="secondary"><Boxes className="h-3.5 w-3.5 mr-1"/>Kubernetes</Badge>
              <Badge className="rounded-full" variant="secondary"><Cpu className="h-3.5 w-3.5 mr-1"/>Hyperledger Besu</Badge>
              <Badge className="rounded-full" variant="secondary"><Activity className="h-3.5 w-3.5 mr-1"/>Prometheus·Grafana</Badge>
            </div>
            <div className="mt-8 flex gap-3">
              <Button asChild><a href="#projects">프로젝트 보기</a></Button>
              <Button asChild variant="outline"><a href="#skills">보유 기술</a></Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="shadow-sm"><CardContent className="p-4 flex items-center gap-3"><Server/> 안정적 배포</CardContent></Card>
            <Card className="shadow-sm"><CardContent className="p-4 flex items-center gap-3"><Settings/> 자동화</CardContent></Card>
            <Card className="shadow-sm"><CardContent className="p-4 flex items-center gap-3"><Network/> 관측 가능성</CardContent></Card>
            <Card className="shadow-sm"><CardContent className="p-4 flex items-center gap-3"><Shield/> 신뢰성</CardContent></Card>
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto"/>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold">Skills & Tools</h2>
        <p className="text-slate-600 mt-2">DevOps/SRE 필수 역량과 블록체인 인프라 운영 경험을 중심으로 구성했습니다.</p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <Card key={s.title} className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/>{i}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto"/>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">플라스틱히어로코리아</CardTitle>
              <CardDescription>Engineer (Full‑stack/DevOps) · 2024.05 – 재직 중</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
                <li>콘솔/웹 모니터링 솔루션 개발, 실시간 데이터 관리</li>
                <li>Spring 기반 백엔드·API 개발/운영, DB 관리(DBA)</li>
                <li>사내 서버 관리, 웹 & 앱 운영</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">에코센트레 (기업부설연구소)</CardTitle>
              <CardDescription>Engineer (Full‑stack) · 2023.04 – 2024.04</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
                <li>웹 기반 관제시스템 개발/유지보수</li>
                <li>서버–기기 API 개발, 재활용 기기 데이터 관리</li>
                <li>운영 모니터링 및 고객 요청 대응</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto"/>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold">Projects · Case Studies</h2>
        <p className="text-slate-600 mt-2">직무 적합성이 높은 2개 사례를 중심으로 문제·접근·성과를 정리했습니다.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card key={p.id} className="hover:shadow-md transition">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm">Impact</h4>
                  <ul className="mt-2 text-sm text-slate-700 space-y-2">
                    {p.impact.map((x) => (<li key={x} className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/>{x}</li>))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Stack</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.stack.map((t) => (<Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Role & Responsibilities</h4>
                  <ul className="mt-2 text-sm text-slate-700 space-y-2">
                    {p.responsibilities.map((r) => (<li key={r} className="list-disc ml-5">{r}</li>))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Architecture Notes</h4>
                  <ul className="mt-2 text-sm text-slate-700 space-y-2">
                    {p.architecture.map((a) => (<li key={a} className="list-disc ml-5">{a}</li>))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Results</h4>
                  <ul className="mt-2 text-sm text-slate-700 space-y-2">
                    {p.results.map((a) => (<li key={a} className="list-disc ml-5">{a}</li>))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                {p.links.repo && (<Button variant="outline" asChild><a href={p.links.repo} target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-1"/>Repo</a></Button>)}
                {p.links.doc && (<Button variant="outline" asChild><a href={p.links.doc} target="_blank" rel="noreferrer"><TerminalSquare className="h-4 w-4 mr-1"/>Docs</a></Button>)}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto"/>

      {/* Architecture */}
      <section id="architecture" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold">Architecture · 운영 다이어그램</h2>
        <p className="text-slate-600 mt-2">실제 운영에 사용했던 구성 요소와 흐름을 텍스트로 요약했습니다. (필요 시 SVG/이미지 다이어그램 교체)</p>
        <div className="mt-6 grid lg:grid-cols-3 gap-4">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">GitOps 기반 배포 파이프라인</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <p>Repo → CI(Build/Test) → Artifact Registry → CD(Argo/Jenkins) → K8s/VM</p>
              <p>롤백: 이미지 태그 고정/이전 리비전 재배포, 헬스체크/프로브 구성</p>
              <p>시크릿: Vault/환경변수 템플릿</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">관측 가능성(Observability)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <p>메트릭: Prometheus → Grafana 대시보드</p>
              <p>로그: Filebeat/Fluentd → ELK</p>
              <p>알림: Alertmanager → Slack·Email</p>
              <p>SLI/SLO: 성공률·지연·에러율 임계치 운영</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">블록체인 노드 운영</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <p>Hyperledger Besu 풀노드 다중 인스턴스 운영</p>
              <p>노드 헬스체크·자동 복구 스크립트 / 롤링 업데이트</p>
              <p>트랜잭션 큐·재처리 정책 / 중복 지급 방지</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto"/>

      {/* Insights */}
      <section id="insights" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold">Insights · 글/발표</h2>
        <p className="text-slate-600 mt-2">운영에서 얻은 인사이트를 간략 포스트로 정리 (외부 링크 연결)</p>
      </section>

      <Separator className="max-w-6xl mx-auto"/>

      {/* Runbooks */}
      <section id="runbooks" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold">Runbooks · 운영 가이드</h2>
        <p className="text-slate-600 mt-2">반복 이슈에 대한 표준 대응 절차와 점검 체크리스트</p>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">블록체인 노드 헬스체크 & 자동 복구</CardTitle>
              <CardDescription>RPC 지연·동기화 정체 탐지 → 롤링 재시작</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <ul className="list-disc ml-5 space-y-1">
                <li>프로메테우스 지표 임계치 초과 시 Alert</li>
                <li>노드 상태 점검(Sync, Peers, Disk)</li>
                <li>안전 재배치/롤링 업데이트 수행</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">트랜잭션 재처리 배치 실패 대응</CardTitle>
              <CardDescription>UUID/tx_hash 불일치·중복 감지</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <ul className="list-disc ml-5 space-y-1">
                <li>콜백 로그 상관관계 조회(ELK)</li>
                <li>재시도 정책 점검(백오프/한도)</li>
                <li>보상 트랜잭션 또는 큐 재등록</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto"/>

      {/* Additional Projects */}
      <section id="additional-projects" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold">Additional Projects</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle>클라우드 서버 환경 구축 및 로드밸런싱</CardTitle>
              <CardDescription>iwinv Cloud · Ubuntu · Nginx/Tomcat · UFW/Whitelist (2025.05)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-700">
              <ul className="list-disc ml-5 space-y-1">
                <li>서비스별 포트 분리, 로드밸런싱으로 트래픽 분산</li>
                <li>IP 화이트리스트/UFW 보안, binlog 관리/백업 자동화</li>
                <li>자원 모니터링·로그 관리로 무중단 운영 지원</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle>데이터 백업 및 전환 스케줄링 시스템</CardTitle>
              <CardDescription>Spring Boot · @Scheduled · 대량 API 백업/전환 (2024.11–2024.12)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-700">
              <ul className="list-disc ml-5 space-y-1">
                <li>자정 스케줄링, 버퍼/메모리 튜닝, 중복 제거·배치 삽입</li>
                <li>오류 로깅 및 재시도 설계</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle>대용량 데이터 추출·집계 & 엑셀 다운로드</CardTitle>
              <CardDescription>1억+ 레코드 · 비동기 · Apache POI (2024.05–2024.09)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-700">
              <ul className="list-disc ml-5 space-y-1">
                <li>인덱스/쿼리 튜닝, 실시간 모니터링, 엑셀 내보내기</li>
                <li>필터/정렬 옵션, API로 외부 시스템 연동</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle>웹 기반 관제시스템 (Spring Boot 전환)</CardTitle>
              <CardDescription>MVC · REST · CI/CD · Security (2023.11–2024.02)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-700">
              <ul className="list-disc ml-5 space-y-1">
                <li>PHP→Spring Boot 전환, 유지보수성/보안성 강화</li>
                <li>Jenkins/GitLab CI 기반 자동화 빌드·배포</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle>Camp24 – 캠핑 플랫폼</CardTitle>
              <CardDescription>로그인/마이페이지/중고거래 · KakaoPay(i’mpart) (2022.02–2022.08)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-700">
              <ul className="list-disc ml-5 space-y-1">
                <li>비동기 UI(AJAX), 결제 후 알림/거래 내역 관리</li>
                <li>팀 협업·코드 리뷰·Git 워크플로</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto"/>

      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-xs text-slate-500 flex flex-wrap items-center gap-3">
          <span>© {new Date().getFullYear()} Hiseung – DevOps/Blockchain</span>
          <span className="hidden md:inline">·</span>
          <span>포트폴리오는 실제 운영 경험을 바탕으로 작성되었습니다.</span>
        </div>
      </footer>
    </div>
  );
}
