# World Cup Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first working Korean-language 2026 World Cup team intelligence dashboard with groups, teams, star players, videos, matchup analysis, and a Round of 32 simulator skeleton.

**Architecture:** Use a dependency-free static web app so the user can open it immediately. Keep data in `data.js`, domain logic in `app.js`, and visual styling in `styles.css`; this preserves a clean path to migrate to React or a database later.

**Tech Stack:** HTML, CSS, vanilla JavaScript, local structured data, external YouTube links/thumbnails.

---

## File Structure

- Create `index.html`: app shell, navigation tabs, dashboard sections, modal root.
- Create `styles.css`: responsive dashboard layout, cards, tables, probability bars, modal, mobile rules.
- Create `data.js`: tournament format, groups A-L, representative team/player/video data, sample predictions.
- Create `app.js`: render functions, filtering, team selection, player/video panels, matchup controls, simulator projection.
- Modify `README.md`: how to open the app and what the first version includes.

## Task 1: Static App Shell

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `README.md`

- [ ] **Step 1: Create the HTML shell**

Add `index.html` with a Korean title, tab navigation for groups, teams, players, matchups, bracket, and sources, plus containers with stable ids:

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>2026 월드컵 팀 인텔리전스</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <main class="app-shell">
      <header class="topbar">
        <div>
          <p class="eyebrow">FIFA World Cup 2026</p>
          <h1>월드컵 팀 인텔리전스</h1>
          <p class="subhead">조별 현황, 스타 플레이어, 영상, 매치업 승률을 한 화면에서 확인합니다.</p>
        </div>
        <div class="summary-strip" id="summaryStrip"></div>
      </header>
      <nav class="tabs" aria-label="주요 보기">
        <button class="tab is-active" data-tab="groups">조별 현황</button>
        <button class="tab" data-tab="teams">팀 탐색</button>
        <button class="tab" data-tab="players">스타 플레이어</button>
        <button class="tab" data-tab="matchups">매치업</button>
        <button class="tab" data-tab="bracket">32강</button>
        <button class="tab" data-tab="sources">출처</button>
      </nav>
      <section class="toolbar">
        <input id="searchInput" type="search" placeholder="팀, 선수, 조 검색" />
        <select id="statusFilter" aria-label="진출 상태">
          <option value="all">전체 상태</option>
          <option value="Top 2">Top 2</option>
          <option value="3rd race">3위 경쟁</option>
          <option value="At risk">위험</option>
        </select>
      </section>
      <section id="groupsView" class="view is-active"></section>
      <section id="teamsView" class="view"></section>
      <section id="playersView" class="view"></section>
      <section id="matchupsView" class="view"></section>
      <section id="bracketView" class="view"></section>
      <section id="sourcesView" class="view"></section>
    </main>
    <dialog id="teamDialog" class="team-dialog"></dialog>
    <script src="./data.js"></script>
    <script src="./app.js"></script>
  </body>
</html>
```

- [ ] **Step 2: Create base CSS**

Add `styles.css` with responsive layout, dashboard cards, buttons, badges, progress bars, and modal styling.

- [ ] **Step 3: Create README**

Add `README.md` explaining that the app can be opened via `index.html`.

- [ ] **Step 4: Verify shell**

Run: `Get-ChildItem index.html,styles.css,README.md`

Expected: all three files are listed.

## Task 2: Tournament Data

**Files:**
- Create: `data.js`

- [ ] **Step 1: Define tournament and team data**

Create `window.WORLD_CUP_DATA` containing:

- Tournament metadata: 48 teams, 12 groups, Round of 32 rule, last updated date.
- 12 groups A-L.
- Four team slots per group.
- Researched sample details for at least 12 teams.
- Placeholder entries for teams not yet expanded.
- Star players, videos, rankings, style notes, predictions, and sources.

- [ ] **Step 2: Verify data shape**

Run: `Select-String -Path data.js -Pattern "groups|teams|players|videos|predictions"`

Expected: all major keys appear.

## Task 3: Rendering And Interaction

**Files:**
- Create: `app.js`

- [ ] **Step 1: Render summary and tabs**

Implement DOM helpers, tab switching, summary cards, search/filter state.

- [ ] **Step 2: Render group dashboard**

Render all 12 groups with four team rows each. Each row opens the team dialog.

- [ ] **Step 3: Render team and player views**

Render team cards, player cards, video cards, and empty states.

- [ ] **Step 4: Render matchup view**

Provide two team selectors, probability bars, source split, tactical notes, and sample-data labeling.

- [ ] **Step 5: Render bracket skeleton**

Show projected Round of 32 teams: group top two plus best third-place line, clearly labeled as scenario data.

- [ ] **Step 6: Verify app code references**

Run: `Select-String -Path app.js -Pattern "renderGroups|renderMatchups|renderBracket|openTeamDialog"`

Expected: all render functions are present.

## Task 4: Manual Verification

**Files:**
- Read: `index.html`
- Read: `app.js`
- Read: `styles.css`

- [ ] **Step 1: Static sanity check**

Run: `Get-ChildItem index.html,styles.css,data.js,app.js,README.md`

Expected: all app files are present.

- [ ] **Step 2: Content coverage check**

Run: `Select-String -Path data.js -Pattern "Group A|Group L|Son Heung-min|Kylian Mbappe|Lionel Messi|YouTube"`

Expected: groups and sample star-player/video content are present.

- [ ] **Step 3: Browser-open fallback**

If browser tooling is available, open `index.html` and visually verify desktop/mobile layout. If unavailable, report that file-based verification was done.

## Task 5: Commit

**Files:**
- Add: `index.html`
- Add: `styles.css`
- Add: `data.js`
- Add: `app.js`
- Add: `README.md`
- Add: `docs/superpowers/plans/2026-06-03-world-cup-dashboard-implementation.md`

- [ ] **Step 1: Review status**

Run: `git status --short`

Expected: app files and plan are untracked or modified.

- [ ] **Step 2: Stage changes**

Run: `git add index.html styles.css data.js app.js README.md docs/superpowers/plans/2026-06-03-world-cup-dashboard-implementation.md`

Expected: files are staged.

- [ ] **Step 3: Commit changes**

Run: `git commit -m "Build World Cup dashboard prototype"`

Expected: commit succeeds.

