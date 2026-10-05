# 류윤성 | Information Security Portfolio

현대오토에버 지원용 공개 웹 포트폴리오입니다. 1지망 글로벌 인프라 진단, 2지망 보안 솔루션 운영을 기준으로 인프라 진단·위험평가, 조치 이행점검, SOC 경험을 앞에 배치했습니다.

[포트폴리오 웹사이트](https://ryuyunseong.github.io/hyundai-autoever-portfolio/) · [공개용 PDF](https://ryuyunseong.github.io/hyundai-autoever-portfolio/assets/portfolio.pdf)

HTML/CSS/vanilla JavaScript로 구성한 정적 사이트입니다. 설치·빌드·서버 API·DB가 필요하지 않습니다. 모든 내용과 링크는 JavaScript 없이도 읽고 사용할 수 있습니다. JavaScript는 테마 변경과 테마 선택 저장에만 사용합니다.

## 파일 구조

```text
hyundai-autoever-portfolio/
├── index.html                  # 공개 포트폴리오
├── styles.css                  # 반응형·명암 테마·인쇄 스타일
├── script.js                   # 선택한 테마 저장
├── favicon.svg
├── .nojekyll                   # 정적 파일 직접 제공
├── .gitignore
├── README.md
├── assets/
│   └── portfolio.pdf           # 익명화한 공개용 PDF
├── portfolio.pdf               # 원본: 로컬 보관, 공개 금지, Git 제외
├── IMPLEMENTATION_PLAN.md      # 근거·공개 기준: 로컬 검토용, Git 제외
├── REVIEW_NOTES.md             # 검증·인수인계: 로컬 검토용, Git 제외
└── tmp/                       # 검증 도구·중간 결과: Git 제외
```

## 로컬 실행

프로젝트 폴더에서 실행합니다. Python은 로컬 미리보기에만 사용하며 사이트의 배포 의존성이 아닙니다.

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

[로컬 미리보기](http://127.0.0.1:8000/)를 엽니다. 종료는 실행한 터미널에서 `Ctrl+C`입니다. `index.html`을 직접 열어도 핵심 내용을 확인할 수 있습니다.

## GitHub Pages 게시

게시 소스는 `main` 브랜치의 루트입니다. 아래 공개 파일만 저장소에 포함하며, 원본 PDF와 로컬 검토 자료는 제외합니다.

1. 아래 공개 전 체크리스트와 `REVIEW_NOTES.md`의 미확인 사항을 검토합니다.
2. GitHub에 게시할 저장소를 선택하거나 생성합니다. 개인 사이트와 프로젝트 사이트 모두 지원합니다. 상대경로를 사용하므로 저장소 하위 경로에서도 동작합니다.
3. 게시할 파일은 `index.html`, `styles.css`, `script.js`, `favicon.svg`, `.nojekyll`, `.gitignore`, `README.md`, `assets/portfolio.pdf`입니다. 웹 업로드를 사용하면 `.gitignore`가 파일 선택을 막아주지 않으므로 **이 목록에 있는 파일만 직접 선택**합니다.
4. 파일을 `main` 브랜치 루트에 넣은 뒤, 저장소의 **Settings → Pages → Build and deployment → Source → Deploy from a branch**에서 `main`과 `/ (root)`를 선택합니다.
5. GitHub가 표시한 사이트 URL에서 첫 화면, 메뉴, 모바일 화면과 `PDF Portfolio` 링크를 확인합니다.
6. 확인한 웹사이트 URL을 지원서의 포트폴리오/개인웹페이지 항목에 입력합니다.

설정 절차는 [GitHub 공식 게시 소스 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)를 참고합니다. 사이트 주소는 게시 결과에서 확인해야 하며, 여기에서는 임의로 확정하지 않습니다.

## 수정과 TODO

- **연락처**: 사용자 제공 이메일과 공개 제보자 GitHub를 반영했습니다. 변경할 때 `index.html`의 두 이메일 링크와 GitHub 링크를 함께 수정합니다.
- **미확인 경험**: IoT/AP, Python·Burp Suite·Nmap 사용 범위, 탐지 패턴 최적화, 추가 금융권 진단, 네트워크관리사 2급 및 추가 교육은 원본에서 확인되지 않아 사이트에 넣지 않았습니다. 근거를 확인한 항목만 추가합니다.
- **기간**: 웹·모바일 업무는 자료에 있는 `2026.01 ~ 2026.09`입니다. 현재 진행 중인 업무인지 확인하지 않았으므로 임의로 ‘현재’로 바꾸지 않습니다.
- **교육**: 확인된 과정 이름만 사용했습니다. 정확한 이수일과 교육시간은 원본 수료증 확인 후 반영합니다.
- **최종 URL**: 실제 게시 후 `og:url`과 canonical URL을 추가할 수 있습니다. OG title/description/type/locale는 이미 제공하며, 공유 이미지와 최종 URL은 확정되지 않아 넣지 않았습니다.
- **PDF 동기화**: 본문을 수정하면 공개 PDF도 갱신합니다. 브라우저 인쇄에서 A4, 배율 100%, 배경 그래픽 활성화, 여백 16mm를 사용하고 PDF의 모든 페이지를 확인합니다. 기존 원본 PDF를 공개 PDF로 덮어씌우지 않습니다.

## 공개 전 보안 점검

- [ ] 루트의 원본 `portfolio.pdf`와 `tmp/`가 공개 파일 목록에 없는지 확인.
- [ ] 고객사 실명, 내부 IP/URL, 계정, 토큰, 원문 요청·응답, 내부 화면·구성도가 웹과 PDF에 없는지 확인.
- [ ] 이메일 공개 범위와 연락처 최신성 확인. 전화번호·주소는 제공하지 않음.
- [ ] 역할·지원·공동 작업·교육 프로젝트 표현이 실제 수행 범위와 일치하는지 확인.
- [ ] Ubuntu의 72/44/28은 공동 작업 전체 결과인지 확인.
- [ ] AWS는 교육 팀 프로젝트의 설정 참여로 표현하고 개인 운영 성과로 확장하지 않았는지 확인.
- [ ] CVE/GHSA는 하나의 취약점이며, 분석·제보자와 CNA의 역할을 구분했는지 확인.
- [ ] 최종 게시 주소와 공개용 PDF 다운로드가 로그인 없이 정상 동작하는지 확인.

공개 연구의 출처는 [GitHub 보안 권고](https://github.com/go-vikunja/vikunja/security/advisories/GHSA-vvcv-vpph-h844), [공식 CVE 기록](https://www.cve.org/CVERecord?id=CVE-2026-68581), [VulnCheck 권고](https://www.vulncheck.com/advisories/vikunja-through-authentication-bypass-via-principal-id-collision)입니다. 2026-10-05 확인 기준입니다. CVE 링크는 방문자가 읽을 수 있는 공식 상세 페이지이며, 해당 외부 사이트는 JavaScript를 요구합니다. 사이트에는 공격용 PoC나 상세 재현 절차를 싣지 않았습니다.
