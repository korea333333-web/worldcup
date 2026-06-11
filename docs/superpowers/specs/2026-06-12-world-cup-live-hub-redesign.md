# 2026 World Cup Live Hub Redesign

## Context

The current dashboard already shows groups, teams, players, schedules, and source-backed static World Cup context, but it is still shaped like a pre-tournament prototype.

The approved redesign direction is:

> The product should stop feeling like a one-time preview page and start behaving like a day-by-day World Cup command center.

The user approved the following product changes in conversation:

- The main experience should be a date-aware hub, not a page that assumes an important match exists every day.
- Opening ceremony content matters and should have its own dedicated section.
- Match-related interviews, coach comments, player quotes, and short media summaries should surface in the main hub.
- Once the tournament starts, pre-World Cup friendlies should leave the main surface and only remain as archive or supporting context.
- Mobile should not rely on one endlessly long page; it should use a clearer menu-based entry model.
- A separate stats center should appear once tournament results accumulate.
- Player salary information should be refreshed and limited to club salary only, with explicit source labeling.
- Player portrait quality must be improved materially; the current weak fallback-only experience is not acceptable.

## Goals

- Rebuild the first screen into a daily World Cup hub that still works well on days with no matches.
- Add a dedicated opening ceremony section for coverage, performers, songs, article summaries, and later video links.
- Add interview coverage before and after matches with article-backed one-line summaries and thumbnail cards.
- Preserve match coverage as a first-class part of the main hub when matches exist.
- Improve mobile navigation so users can jump directly to key sections.
- Add a tournament stats center for player and team leaderboards once live results exist.
- Improve player portraits across the important teams so the experience feels researched rather than placeholder-driven.
- Tighten salary presentation so it is clearer, more trustworthy, and easier to maintain.

## Non-Goals

- No fully automated scraping system in this phase.
- No promise that every player in all 48 squads will always have a perfect portrait.
- No mixing of total endorsement income into salary displays.
- No attempt to make the opening ceremony section a full long-form news archive.
- No redesign of unrelated parts of the existing data model beyond what is needed for this hub upgrade.

## Primary User Experience

The user should be able to open the app and immediately understand:

- What matters today, even if no match is happening right now.
- Which matches are upcoming or just completed.
- Which player or coach interviews are worth checking before and after matches.
- What happened at the opening ceremony and where to look for later official or credible video coverage.
- Which players and teams lead key tournament categories as results accumulate.
- Where to jump next on mobile without scrolling through one massive page.

The product should feel like a Korean-language tournament desk:

- factual first,
- visually richer than the current prototype,
- source-labeled,
- useful both before kickoff and between matchdays.

## Information Architecture

### 1. Main Hub: Today’s Highlights

The main screen becomes a date-aware hub called `오늘의 하이라이트`.

It is not just a match hero. It is a mixed stream of tournament-relevant cards grouped by content type.

Approved priority logic:

- If there are important matches today, match coverage appears first.
- If there are no major matches today, interview and event coverage can lead.
- Friendlies should disappear from the main surface once the World Cup proper is underway.

Main hub content buckets:

- Match cards
- Pre-match interview cards
- Post-match reaction cards
- Opening ceremony or tournament event cards
- Video candidate cards

Each card should show:

- headline,
- one-line summary,
- teams or people involved,
- source label,
- checked date,
- reliability label,
- thumbnail or visual fallback.

### 2. Opening Ceremony Section

The opening ceremony gets its own dedicated section rather than being mixed into the general team or schedule views.

This section should support:

- headline summary of the ceremony,
- named performers,
- songs performed,
- notable guests or special appearances,
- article-based narrative cards,
- later video links and thumbnails when those become available.

It must be article-first initially:

- use reliable coverage and official sources first,
- attach video candidates later when official or credible uploads appear,
- clearly distinguish article cards from video cards.

### 3. Interview Coverage In Main Hub

Interview material should live inside the main hub because it matters on both match and non-match days.

Coverage scope approved by the user:

- Korea
- opening-match related teams
- major World Cup big-match teams

Interview card types:

- `경기 전 인터뷰`
- `경기 후 인터뷰`
- `감독 코멘트`
- `선수 각오`
- `믹스트존 반응`

Every interview card should include:

- person name,
- team,
- role,
- one-line Korean summary,
- article or video source,
- date,
- thumbnail.

Display rule:

- player profile cards keep small square headshots,
- interview or article cards can use wider media thumbnails such as YouTube thumbnails or article lead images.

### 4. Stats Center

The stats center becomes a dedicated section that is more valuable once official results accumulate.

Approved structure:

- top-level section: `스탯 센터`
- tab 1: `선수`
- tab 2: `팀`

Player stats tab should support:

- goals
- assists
- clean sheets
- cards
- player of the match

Team stats tab should support:

- group standings
- goals for
- goals against
- goal difference
- shots
- possession
- form or recent trend

Pre-tournament behavior:

- the section can exist before enough data is available,
- but it should clearly show `아직 공식 경기 데이터 없음` style empty states instead of fake numbers.

### 5. Mobile Navigation

The current long-scroll mobile behavior should be replaced or softened with clearer menu-driven navigation.

Approved mobile direction:

- a menu entry point instead of forcing endless vertical scrolling,
- fast access to sections such as:
  - 오늘의 하이라이트
  - 조별 현황
  - 경기 일정
  - 개막식
  - 인터뷰
  - 스탯 센터
  - 출처

This does not require a completely separate mobile app structure.

It does require:

- clearer section boundaries,
- stronger navigation affordances,
- better section ordering,
- reduced “everything in one giant page” behavior on phones.

## Content Lifecycle Rules

### Friendlies

Before the tournament:

- friendlies can appear in the daily context if they are the newest relevant team updates.

After the tournament starts:

- friendlies should be removed from the main highlight surface,
- they may remain in a smaller archive or supporting area if still useful,
- they should not compete visually with official World Cup content.

### Match Priority

On match days:

- match cards lead,
- pre-match and post-match reaction cards sit alongside them,
- ceremony or event content remains available but secondary unless truly headline-level.

On non-match days:

- interviews,
- ceremony/event updates,
- tactical or player-focused content,
- upcoming fixture preparation cards

can take the lead.

## Data Model Additions

The existing local static-data approach can remain, but the schema needs new content types.

### New or expanded entities

- `HighlightHubDay`
  - date
  - title
  - leadMode
  - cards
  - sourceNote

- `HighlightCard`
  - id
  - type
  - phase
  - headline
  - summary
  - teams
  - people
  - source
  - checkedAt
  - reliability
  - thumbnail
  - links

- `CeremonyItem`
  - id
  - category
  - performer
  - songTitle
  - summary
  - source
  - articleUrl
  - videoCandidates

- `InterviewItem`
  - id
  - stage
  - teamId
  - personName
  - role
  - summaryKo
  - quoteSnippet
  - articleUrl
  - videoUrl
  - thumbnail
  - source
  - checkedAt
  - reliability

- `StatEntry`
  - id
  - statType
  - entityType
  - entityId
  - value
  - secondaryValue
  - updatedAt
  - source

### Player image fields

Players should gain better portrait support, such as:

- `imageUrl`
- `imageSource`
- `imageCheckedAt`
- `imageReliability`

This allows the app to prefer curated headshots before any automatic fallback.

### Salary fields

Salary data should be normalized around club salary only:

- `annualUsd`
- `weeklyUsd`
- `annualKrw`
- `season`
- `source`
- `confidence`
- `updatedAt`
- `basis`

No endorsement or total-income number should be mixed into this same object.

## Media Rules

### Player Portraits

The current portrait approach is insufficient because it relies too heavily on one Wikipedia thumbnail path and then collapses to initials.

Approved replacement strategy:

- first try curated player image URLs stored in data,
- then fall back to stable public image sources already associated with the player,
- then use the current automatic wiki-style fallback,
- only then fall back to initials.

Portrait display rules:

- square crop,
- face-focused,
- used in player cards and roster modules,
- not mixed with article-style landscape thumbnails.

### Article / Interview / Video Thumbnails

Interview and article-like content should use wider thumbnails.

Preferred order:

- official or article image if available,
- YouTube thumbnail when the content is a video or interview clip,
- generated or text-only fallback if no media is available.

## Salary Rules

Salary refresh should follow stricter trust rules.

Priority order:

- official club, league, or player-union published salary when available,
- reputable structured salary source marked as estimate,
- reliable media report only when no better structured source exists.

Every salary display must show:

- amount,
- source,
- checked date,
- reliability label.

The product should never imply that estimated salary is official salary.

## Source And Reliability System

The new content types need consistent labels.

Recommended labels:

- `official`
- `trusted-media`
- `estimate`
- `curated`
- `pending`

These labels should appear in:

- ceremony coverage,
- interview cards,
- salary cards,
- stat cards where needed.

## Desktop And Mobile UI Behavior

### Desktop

- main hub can retain a richer multi-column feel,
- ceremony and stats can remain as major sections or tabs,
- interviews can sit in a structured grid or rail.

### Mobile

- the first screen should not become an infinitely long feed,
- users should reach primary destinations from a menu quickly,
- the section currently visible should feel focused rather than overwhelming.

Recommended mobile behavior:

- menu drawer or strong tab/section chooser,
- one major section visible at a time,
- smaller card stacks within that section,
- important hero card only when justified by the day’s content.

## Empty States And Freshness Rules

The redesign must stay honest.

Examples:

- no ceremony video yet -> show article-backed card plus `영상 대기`
- no official player photo found -> use fallback portrait and avoid pretending it is verified
- no stats yet -> show `아직 공식 경기 데이터 없음`
- stale interview source -> show last checked date

## First Implementation Scope

The first implementation of this redesign should focus on structure, not unlimited content volume.

Recommended first slice:

1. Rebuild the main hub into mixed content sections.
2. Add opening ceremony data and dedicated rendering.
3. Add interview card support in the hub.
4. Remove friendlies from the primary lead area once tournament mode is active.
5. Add a mobile-first menu structure for major sections.
6. Add a stats center skeleton with empty states and initial structure.
7. Improve player portrait data and rendering for:
   - Korea
   - opening-match teams
   - a small approved set of big-match teams
8. Refresh player salary data with club salary only and stronger labels.

## Testing And Verification

The implementation should verify:

- main hub still renders when there are matches,
- main hub still renders well when there are no matches,
- ceremony section renders article-first cards,
- interview cards render one-line summaries and thumbnails,
- friendlies disappear from the main lead when tournament mode is active,
- mobile navigation exposes all major sections clearly,
- stats center shows clean empty states before enough data exists,
- player portraits prefer curated images when available,
- salary cards show source and reliability consistently,
- no section crashes when article images or thumbnails are missing.

## Final Approved Decisions

- Opening ceremony gets its own section.
- Interviews live in the main hub.
- Main hub content should adapt to whether matches exist that day.
- Friendlies should leave the main surface once the World Cup starts.
- Mobile should move toward menu-first navigation.
- Stats center should be split into player and team tabs.
- Salary should show club salary only.
- Player profile images stay as small square portraits.
- Article and interview content can use wider thumbnails such as YouTube thumbnails.
- Image coverage should be widened beyond only a few stars, especially for Korea, opening-match teams, and major big-match teams.
