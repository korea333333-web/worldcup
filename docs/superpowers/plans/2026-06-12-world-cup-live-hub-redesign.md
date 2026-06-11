# World Cup Live Hub Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 월드컵 대시보드를 경기 유무에 따라 동작하는 라이브 허브로 재구성하고, 개막식/인터뷰/스탯 센터/모바일 메뉴/선수 이미지/연봉 정보를 한 번에 정비한다.

**Architecture:** 기존 정적 JS 데이터 구조를 유지하되, `daily-data.js`를 경기 전용 허브에서 날짜 중심 복합 허브로 확장하고, `app.js`에서 메인 허브 섹션 렌더링과 모바일 메뉴 진입 구조를 분리한다. 개막식/인터뷰/스탯 센터는 로컬 데이터 모듈에 명시적으로 저장하고, 선수 이미지는 curated image 우선 전략으로 바꾸며, 연봉은 클럽 급여만 노출하도록 데이터와 UI를 함께 정리한다.

**Tech Stack:** 정적 JavaScript 데이터 파일, vanilla JS UI 렌더링, Node 내장 테스트 러너, git, Vercel

---

### Task 1: 허브 데이터 스키마를 라이브 허브 구조로 확장

**Files:**
- Modify: `C:\Users\kikuk\Documents\월드컵\daily-data.js`
- Modify: `C:\Users\kikuk\Documents\월드컵\data.js`
- Test: `C:\Users\kikuk\Documents\월드컵\tests\live-hub-data.test.js`

- [ ] **Step 1: 허브 데이터 기대 구조를 테스트로 고정**

```javascript
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

function loadWorldCupData() {
  const ctx = { window: {} };
  ["data.js", "rich-data.js", "schedule-data.js", "daily-data.js"].forEach((file) => {
    vm.runInNewContext(fs.readFileSync(file, "utf8"), ctx, { filename: file });
  });
  return ctx.window.WORLD_CUP_DATA;
}

test("daily hub exposes sectioned live hub cards", () => {
  const data = loadWorldCupData();
  assert.ok(data.dailyMatchHub);
  assert.equal(data.dailyMatchHub.mode, "live-hub");
  assert.ok(Array.isArray(data.dailyMatchHub.sections));
  assert.ok(data.dailyMatchHub.sections.some((section) => section.id === "matches"));
  assert.ok(data.dailyMatchHub.sections.some((section) => section.id === "interviews"));
});

test("daily hub can hide friendlies from the lead area in tournament mode", () => {
  const data = loadWorldCupData();
  assert.equal(data.dailyMatchHub.archive?.friendliesHiddenFromLead, true);
});
```

- [ ] **Step 2: 테스트를 실행해 새 허브 구조가 아직 없어서 실패하는지 확인**

Run: `node --test tests\live-hub-data.test.js`

Expected: `FAIL` because `mode` is not `live-hub` and `sections` does not exist yet.

- [ ] **Step 3: `daily-data.js`를 섹션형 허브 구조로 최소 구현**

```javascript
data.dailyMatchHub = {
  updatedAt: "2026-06-12",
  mode: "live-hub",
  title: "오늘의 하이라이트",
  kicker: "WORLD CUP LIVE HUB",
  leadMode: "match-priority",
  sourceNote: "...",
  featuredMatchId: "wc-opener-mex-rsa-2026-06-12",
  sections: [
    { id: "matches", title: "오늘 경기", items: [...] },
    { id: "interviews", title: "인터뷰", items: [...] },
    { id: "events", title: "개막식·이벤트", items: [...] },
    { id: "videos", title: "영상 후보", items: [...] }
  ],
  archive: {
    friendliesHiddenFromLead: true,
    recentFriendlies: [...]
  }
};
```

- [ ] **Step 4: `data.js`에 개막식/인터뷰/스탯 센터/이미지/연봉 출처용 source 엔트리를 추가**

```javascript
{
  id: "fifa-opening-ceremony",
  title: "FIFA World Cup opening ceremony coverage",
  publisher: "FIFA",
  url: "https://www.fifa.com/",
  checkedAt: "2026-06-12",
  reliability: "official"
}
```

- [ ] **Step 5: 테스트를 다시 실행해 새 허브 스키마가 통과하는지 확인**

Run: `node --test tests\live-hub-data.test.js`

Expected: `PASS`

- [ ] **Step 6: 첫 데이터 스키마 확장 커밋**

```bash
git add tests/live-hub-data.test.js daily-data.js data.js
git commit -m "라이브 허브 데이터 스키마 추가"
```

### Task 2: 메인 허브 UI를 경기/인터뷰/이벤트 구조로 재구성

**Files:**
- Modify: `C:\Users\kikuk\Documents\월드컵\app.js`
- Modify: `C:\Users\kikuk\Documents\월드컵\styles.css`
- Test: `C:\Users\kikuk\Documents\월드컵\tests\live-hub-render.test.js`

- [ ] **Step 1: 허브 렌더링 분리 요구사항을 테스트로 정의**

```javascript
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

test("app.js contains dedicated renderers for live hub sections", () => {
  const app = fs.readFileSync("app.js", "utf8");
  assert.match(app, /function renderMatchHero/);
  assert.match(app, /function renderLiveHubSection/);
  assert.match(app, /function renderInterviewCard/);
  assert.match(app, /function renderEventCard/);
});
```

- [ ] **Step 2: 테스트를 실행해 아직 분리 렌더러가 없어서 실패하는지 확인**

Run: `node --test tests\live-hub-render.test.js`

Expected: `FAIL` because `renderLiveHubSection`, `renderInterviewCard`, and `renderEventCard` do not exist yet.

- [ ] **Step 3: `app.js`에서 기존 hero 렌더링을 섹션형 허브 렌더링으로 분리**

```javascript
function renderMatchHero() {
  const target = document.querySelector("#matchHero");
  const hub = DATA.dailyMatchHub;
  if (!target || !hub) return;

  const matchSection = hub.sections.find((section) => section.id === "matches");
  const interviewSection = hub.sections.find((section) => section.id === "interviews");
  const eventSection = hub.sections.find((section) => section.id === "events");

  target.innerHTML = `
    <div class="match-hero-copy">...</div>
    <section class="live-hub-sections">
      ${renderLiveHubSection(matchSection)}
      ${renderLiveHubSection(interviewSection)}
      ${renderLiveHubSection(eventSection)}
    </section>
  `;
}

function renderLiveHubSection(section) {
  if (!section) return "";
  const cards = section.items.map((item) => {
    if (item.type === "interview") return renderInterviewCard(item);
    if (item.type === "event") return renderEventCard(item);
    return renderMatchHubCard(item);
  }).join("");
  return `<section class="live-hub-block"><h3>${escapeHtml(section.title)}</h3>${cards}</section>`;
}
```

- [ ] **Step 4: 인터뷰/이벤트 카드 전용 UI와 썸네일 fallback을 추가**

```javascript
function renderInterviewCard(item) {
  return `
    <article class="hub-story-card interview">
      ${storyThumbnail(item)}
      <div>
        <span class="badge sample">${escapeHtml(item.phaseLabel)}</span>
        <strong>${escapeHtml(item.personName)}</strong>
        <p>${escapeHtml(item.summary)}</p>
      </div>
    </article>
  `;
}

function renderEventCard(item) {
  return `
    <article class="hub-story-card event">
      ${storyThumbnail(item)}
      <div>
        <span class="badge race">${escapeHtml(item.categoryLabel)}</span>
        <strong>${escapeHtml(item.headline)}</strong>
        <p>${escapeHtml(item.summary)}</p>
      </div>
    </article>
  `;
}
```

- [ ] **Step 5: CSS에서 허브 블록과 가로 썸네일 카드를 정의**

```css
.live-hub-sections {
  display: grid;
  gap: 16px;
}

.hub-story-card {
  display: grid;
  grid-template-columns: 132px 1fr;
  gap: 12px;
}

.hub-story-thumb {
  aspect-ratio: 16 / 9;
  border-radius: 14px;
  overflow: hidden;
}
```

- [ ] **Step 6: 테스트를 다시 실행해 렌더러 분리가 통과하는지 확인**

Run: `node --test tests\live-hub-render.test.js`

Expected: `PASS`

- [ ] **Step 7: 메인 허브 UI 재구성 커밋**

```bash
git add tests/live-hub-render.test.js app.js styles.css
git commit -m "메인 라이브 허브 섹션 구조 적용"
```

### Task 3: 개막식 전용 섹션과 인터뷰 데이터 렌더링 추가

**Files:**
- Modify: `C:\Users\kikuk\Documents\월드컵\data.js`
- Modify: `C:\Users\kikuk\Documents\월드컵\app.js`
- Modify: `C:\Users\kikuk\Documents\월드컵\index.html`
- Test: `C:\Users\kikuk\Documents\월드컵\tests\ceremony-data.test.js`

- [ ] **Step 1: 개막식 데이터 구조를 테스트로 고정**

```javascript
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

function loadWorldCupData() {
  const ctx = { window: {} };
  ["data.js", "rich-data.js", "schedule-data.js", "daily-data.js"].forEach((file) => {
    vm.runInNewContext(fs.readFileSync(file, "utf8"), ctx, { filename: file });
  });
  return ctx.window.WORLD_CUP_DATA;
}

test("opening ceremony section exists with performers and songs", () => {
  const data = loadWorldCupData();
  assert.ok(data.openingCeremony);
  assert.ok(Array.isArray(data.openingCeremony.items));
  assert.ok(data.openingCeremony.items.every((item) => item.source?.url));
});
```

- [ ] **Step 2: 테스트를 실행해 개막식 섹션 부재로 실패하는지 확인**

Run: `node --test tests\ceremony-data.test.js`

Expected: `FAIL` because `openingCeremony` does not exist yet.

- [ ] **Step 3: `data.js`에 개막식 섹션과 인터뷰 기사 데이터를 추가**

```javascript
window.WORLD_CUP_DATA.openingCeremony = {
  updatedAt: "2026-06-12",
  title: "개막식",
  items: [
    {
      id: "opening-performer-1",
      category: "performance",
      performer: "Artist Name",
      songTitle: "Song Title",
      headline: "개막식 주요 무대",
      summary: "기사 기반 한줄 요약",
      source: { label: "FIFA", url: "https://..." },
      videoCandidates: []
    }
  ]
};
```

- [ ] **Step 4: `index.html`에 개막식 뷰 진입점과 컨테이너를 추가**

```html
<button class="tab" data-tab="ceremony">개막식</button>
...
<section id="ceremonyView" class="view"></section>
```

- [ ] **Step 5: `app.js`에 `renderCeremony()`를 추가하고 탭 렌더링에 연결**

```javascript
function renderCeremony() {
  const ceremony = DATA.openingCeremony;
  if (!ceremony) {
    views.ceremony.innerHTML = `<div class="empty-state">개막식 정보 준비 중입니다.</div>`;
    return;
  }

  views.ceremony.innerHTML = `
    ${sectionHeading("개막식", "출연자, 곡, 기사, 영상 후보를 정리합니다.")}
    <div class="story-grid">
      ${ceremony.items.map(renderEventCard).join("")}
    </div>
  `;
}
```

- [ ] **Step 6: 테스트를 다시 실행해 개막식 섹션 데이터가 통과하는지 확인**

Run: `node --test tests\ceremony-data.test.js`

Expected: `PASS`

- [ ] **Step 7: 개막식/인터뷰 콘텐츠 기반 추가 커밋**

```bash
git add tests/ceremony-data.test.js data.js app.js index.html
git commit -m "개막식 섹션과 인터뷰 데이터 추가"
```

### Task 4: 모바일 메뉴 기반 진입 구조와 친선경기 후퇴 로직 적용

**Files:**
- Modify: `C:\Users\kikuk\Documents\월드컵\app.js`
- Modify: `C:\Users\kikuk\Documents\월드컵\index.html`
- Modify: `C:\Users\kikuk\Documents\월드컵\styles.css`
- Test: `C:\Users\kikuk\Documents\월드컵\tests\mobile-nav.test.js`

- [ ] **Step 1: 모바일 메뉴 진입 구조를 테스트로 정의**

```javascript
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

test("index includes dedicated ceremony and stats entry points", () => {
  const html = fs.readFileSync("index.html", "utf8");
  assert.match(html, /data-tab="ceremony"/);
  assert.match(html, /data-tab="stats"/);
});

test("app includes mobile menu toggling helpers", () => {
  const app = fs.readFileSync("app.js", "utf8");
  assert.match(app, /function wireMobileMenu/);
  assert.match(app, /function toggleMobileMenu/);
});
```

- [ ] **Step 2: 테스트를 실행해 모바일 메뉴 관련 구조가 없어서 실패하는지 확인**

Run: `node --test tests\mobile-nav.test.js`

Expected: `FAIL`

- [ ] **Step 3: `index.html`에 모바일 메뉴 버튼과 새 탭 진입점을 추가**

```html
<button id="mobileMenuToggle" class="mobile-menu-toggle" type="button">메뉴</button>
<nav id="mobileQuickNav" class="mobile-quick-nav">
  <button class="tab" data-tab="groups">조별 현황</button>
  <button class="tab" data-tab="schedule">경기 일정</button>
  <button class="tab" data-tab="ceremony">개막식</button>
  <button class="tab" data-tab="stats">스탯 센터</button>
</nav>
```

- [ ] **Step 4: `app.js`에 모바일 메뉴 토글과 본선 모드 친선경기 제외 로직을 추가**

```javascript
function wireMobileMenu() {
  const toggle = document.querySelector("#mobileMenuToggle");
  if (!toggle) return;
  toggle.addEventListener("click", toggleMobileMenu);
}

function toggleMobileMenu() {
  document.body.classList.toggle("mobile-menu-open");
}

function leadMatches(hub) {
  const matches = hub.sections.find((section) => section.id === "matches")?.items || [];
  return matches.filter((item) => item.competition === "FIFA World Cup 2026");
}
```

- [ ] **Step 5: `styles.css`에 모바일 메뉴/오버레이 스타일을 추가**

```css
.mobile-menu-toggle {
  display: none;
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: inline-flex;
  }

  .mobile-quick-nav {
    position: fixed;
    inset: 72px 16px auto 16px;
    display: none;
  }

  .mobile-menu-open .mobile-quick-nav {
    display: grid;
  }
}
```

- [ ] **Step 6: 테스트를 다시 실행해 모바일 메뉴 구조가 통과하는지 확인**

Run: `node --test tests\mobile-nav.test.js`

Expected: `PASS`

- [ ] **Step 7: 모바일 진입 구조 커밋**

```bash
git add tests/mobile-nav.test.js index.html app.js styles.css
git commit -m "모바일 메뉴형 탐색 구조 추가"
```

### Task 5: 스탯 센터 섹션과 empty state를 추가

**Files:**
- Modify: `C:\Users\kikuk\Documents\월드컵\data.js`
- Modify: `C:\Users\kikuk\Documents\월드컵\app.js`
- Modify: `C:\Users\kikuk\Documents\월드컵\index.html`
- Test: `C:\Users\kikuk\Documents\월드컵\tests\stats-center.test.js`

- [ ] **Step 1: 스탯 센터 존재와 탭 구조를 테스트로 정의**

```javascript
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

function loadWorldCupData() {
  const ctx = { window: {} };
  ["data.js", "rich-data.js", "schedule-data.js", "daily-data.js"].forEach((file) => {
    vm.runInNewContext(fs.readFileSync(file, "utf8"), ctx, { filename: file });
  });
  return ctx.window.WORLD_CUP_DATA;
}

test("stats center exists with player and team tabs", () => {
  const data = loadWorldCupData();
  assert.ok(data.statsCenter);
  assert.ok(Array.isArray(data.statsCenter.playerStats));
  assert.ok(Array.isArray(data.statsCenter.teamStats));
});
```

- [ ] **Step 2: 테스트를 실행해 스탯 센터 부재로 실패하는지 확인**

Run: `node --test tests\stats-center.test.js`

Expected: `FAIL`

- [ ] **Step 3: `data.js`에 스탯 센터 skeleton을 추가**

```javascript
window.WORLD_CUP_DATA.statsCenter = {
  updatedAt: "2026-06-12",
  playerStats: [],
  teamStats: [],
  emptyState: "아직 공식 경기 데이터 없음"
};
```

- [ ] **Step 4: `index.html`과 `app.js`에 stats view와 선수/팀 탭을 추가**

```html
<button class="tab" data-tab="stats">스탯 센터</button>
...
<section id="statsView" class="view"></section>
```

```javascript
function renderStatsCenter() {
  const stats = DATA.statsCenter;
  if (!stats || (!stats.playerStats.length && !stats.teamStats.length)) {
    views.stats.innerHTML = `
      ${sectionHeading("스탯 센터", "득점, 도움, 팀 지표를 모아 봅니다.")}
      <div class="empty-state">${escapeHtml(stats?.emptyState || "데이터 없음")}</div>
    `;
    return;
  }
}
```

- [ ] **Step 5: 테스트를 다시 실행해 스탯 센터 skeleton이 통과하는지 확인**

Run: `node --test tests\stats-center.test.js`

Expected: `PASS`

- [ ] **Step 6: 스탯 센터 기반 커밋**

```bash
git add tests/stats-center.test.js data.js app.js index.html
git commit -m "스탯 센터 기본 구조 추가"
```

### Task 6: 선수 이미지 품질을 curated-first로 개편

**Files:**
- Modify: `C:\Users\kikuk\Documents\월드컵\rich-data.js`
- Modify: `C:\Users\kikuk\Documents\월드컵\app.js`
- Test: `C:\Users\kikuk\Documents\월드컵\tests\player-images.test.js`

- [ ] **Step 1: 선수 이미지 우선순위를 테스트로 정의**

```javascript
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

test("player portrait renderer prefers explicit imageUrl before wiki slug", () => {
  const app = fs.readFileSync("app.js", "utf8");
  assert.match(app, /player\.imageUrl/);
  assert.match(app, /data-image-source/);
});
```

- [ ] **Step 2: 테스트를 실행해 curated 이미지 처리 부재로 실패하는지 확인**

Run: `node --test tests\player-images.test.js`

Expected: `FAIL`

- [ ] **Step 3: `rich-data.js`에 주요 선수 이미지 필드를 추가**

```javascript
player("Son Heung-min", "손흥민", "FW/LW", "LAFC", "대표 스타", "...", "...", "공격", { ... }, "Son_Heung-min", {
  imageUrl: "https://...",
  imageSource: "official",
  imageCheckedAt: "2026-06-12",
  imageReliability: "official"
});
```

- [ ] **Step 4: `player()` 헬퍼가 추가 이미지 메타데이터를 받도록 최소 수정**

```javascript
function player(name, nameKo, position, club, tag, clubRole, nationalRole, category, scouting, wikiSlug, media = {}) {
  return {
    id: slug(name),
    name,
    nameKo,
    position,
    club,
    wikiSlug,
    imageUrl: media.imageUrl || "",
    imageSource: media.imageSource || "",
    imageCheckedAt: media.imageCheckedAt || "",
    imageReliability: media.imageReliability || "pending",
    ...
  };
}
```

- [ ] **Step 5: `app.js`에서 portrait 렌더러가 `imageUrl`을 우선 사용하도록 수정**

```javascript
function playerPortrait(player, size = "medium") {
  if (player.imageUrl) {
    return `
      <div class="player-portrait ${size} photo-ready" data-image-source="${escapeAttr(player.imageSource || "curated")}">
        <img src="${escapeAttr(player.imageUrl)}" alt="${escapeAttr(player.name)} 선수 사진" loading="lazy" referrerpolicy="no-referrer" />
      </div>
    `;
  }
  ...
}
```

- [ ] **Step 6: 테스트를 다시 실행해 curated-first 구조가 통과하는지 확인**

Run: `node --test tests\player-images.test.js`

Expected: `PASS`

- [ ] **Step 7: 선수 이미지 품질 개선 커밋**

```bash
git add tests/player-images.test.js rich-data.js app.js
git commit -m "주요 선수 이미지 우선 로딩 적용"
```

### Task 7: 클럽 급여 기준으로 연봉 데이터를 재정비

**Files:**
- Modify: `C:\Users\kikuk\Documents\월드컵\rich-data.js`
- Modify: `C:\Users\kikuk\Documents\월드컵\app.js`
- Test: `C:\Users\kikuk\Documents\월드컵\tests\salary-data.test.js`

- [ ] **Step 1: 연봉 노출 규칙을 테스트로 정의**

```javascript
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

test("salary rendering uses club salary labels only", () => {
  const app = fs.readFileSync("app.js", "utf8");
  assert.match(app, /salary\.source/);
  assert.match(app, /salary\.confidence/);
  assert.doesNotMatch(app, /endorsement/i);
});
```

- [ ] **Step 2: 테스트를 실행해 현재 노출이 규칙을 만족하는지 확인하고 실패 시점 파악**

Run: `node --test tests\salary-data.test.js`

Expected: `FAIL` if club-salary labeling is not yet explicit enough.

- [ ] **Step 3: `rich-data.js`의 주요 선수 급여 데이터를 다시 정리하고 확인일/신뢰도/시즌을 통일**

```javascript
function salary(annualUsd, weeklyUsd, source, confidence, updatedAt = "2026-06-12") {
  return {
    annualUsd,
    weeklyUsd,
    annualKrw: Math.round(annualUsd * 1380),
    exchangeRate: 1380,
    season: "2025-26",
    basis: "클럽 급여 기준",
    source,
    confidence,
    updatedAt
  };
}
```

- [ ] **Step 4: `app.js`의 급여 UI에 클럽 급여 기준 문구와 신뢰도 표시를 추가**

```javascript
<small>${escapeHtml(salary.basis)} · ${escapeHtml(salary.source)} · ${escapeHtml(salary.confidence)}</small>
```

- [ ] **Step 5: 테스트를 다시 실행해 급여 노출 규칙이 통과하는지 확인**

Run: `node --test tests\salary-data.test.js`

Expected: `PASS`

- [ ] **Step 6: 연봉 데이터 정비 커밋**

```bash
git add tests/salary-data.test.js rich-data.js app.js
git commit -m "선수 클럽 급여 표기 기준 정비"
```

### Task 8: 전체 검증과 배포 준비

**Files:**
- Modify: `C:\Users\kikuk\Documents\월드컵\docs\superpowers\plans\2026-06-12-world-cup-live-hub-redesign.md`
- Test: `C:\Users\kikuk\Documents\월드컵\app.js`
- Test: `C:\Users\kikuk\Documents\월드컵\data.js`
- Test: `C:\Users\kikuk\Documents\월드컵\daily-data.js`
- Test: `C:\Users\kikuk\Documents\월드컵\rich-data.js`
- Test: `C:\Users\kikuk\Documents\월드컵\schedule-data.js`

- [ ] **Step 1: 전체 테스트를 한 번에 실행**

Run: `node --test tests\group-utils.test.js tests\video-utils.test.js tests\vote-utils.test.js tests\live-hub-data.test.js tests\live-hub-render.test.js tests\ceremony-data.test.js tests\mobile-nav.test.js tests\stats-center.test.js tests\player-images.test.js tests\salary-data.test.js`

Expected: all tests pass.

- [ ] **Step 2: 정적 파일 문법 검사를 실행**

Run: `node --check app.js && node --check data.js && node --check rich-data.js && node --check daily-data.js && node --check schedule-data.js`

Expected: exit code `0`

- [ ] **Step 3: VM 기반 데이터 무결성 스모크 테스트를 실행**

```bash
@'
const fs = require("fs");
const vm = require("vm");
const ctx = { window: {} };
["data.js", "rich-data.js", "schedule-data.js", "daily-data.js"].forEach((file) => {
  vm.runInNewContext(fs.readFileSync(file, "utf8"), ctx, { filename: file });
});
const data = ctx.window.WORLD_CUP_DATA;
if (!data.dailyMatchHub?.sections?.length) throw new Error("missing live hub sections");
if (!data.openingCeremony?.items?.length) throw new Error("missing opening ceremony items");
if (!data.statsCenter) throw new Error("missing stats center");
console.log("VM_OK");
'@ | node -
```

Expected: `VM_OK`

- [ ] **Step 4: 최종 변경을 커밋**

```bash
git add app.js data.js daily-data.js rich-data.js schedule-data.js styles.css index.html tests
git commit -m "월드컵 라이브 허브 개편 1차 적용"
```

- [ ] **Step 5: 원격 브랜치에 푸시**

```bash
git push origin codex/world-cup-dashboard-prototype
```

- [ ] **Step 6: 배포 상태와 대표 URL을 확인**

Run: `vercel ls worldcup`

Expected: latest production deployment is `Ready`

