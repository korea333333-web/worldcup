# 2026 World Cup Team Intelligence Dashboard Design

## Context

This project will be a Korean-language web app for exploring the FIFA World Cup 2026 teams, star players, related YouTube videos, group-stage advancement outlooks, and later knockout-round matchup probabilities.

The product direction approved in conversation is:

> The first screen is a group-status dashboard. From each group or team, the user can open team details, star players, YouTube videos, and matchup probability analysis.

The app should start useful before every prediction data source is mature. It will combine researched factual data with clearly labeled sample or model-based projections, then replace those projections as better sources become available.

Official competition-format references:

- FIFA group qualification and tiebreaker explainer: https://www.fifa.com/en/articles/groups-how-teams-qualify-tie-breakers
- FIFA tournament format overview: https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/fifa-world-cup-2026-hosts-cities-dates-usa-mexico-canada

## Goals

- Show all 12 groups in a scannable first screen.
- Make the Round of 32 path obvious: group top two plus the eight best third-place teams.
- Provide team pages with country context, current squad story, star players, strengths, weaknesses, and data freshness.
- Provide star-player pages or panels with role, club, position, representative highlights, and related YouTube links.
- Provide matchup analysis between two teams with probability, reasoning, and source categories.
- Separate objective indicators from subjective fan or media sentiment.
- Keep the data model ready for real updates from FIFA, ranking, odds, media, YouTube, and manually curated scouting notes.

## Non-Goals For The First Version

- No live automated scraping pipeline.
- No user accounts.
- No paid data-provider integration.
- No claim that sample prediction percentages are final or authoritative.
- No full historical statistics database beyond the fields needed for the first UI.

## Primary User Experience

The user lands on a group dashboard and can immediately answer:

- Which teams are in each group?
- Which teams are currently projected to advance?
- Which third-place teams are close to the Round of 32 line?
- Who is the star player for each team?
- What matchup looks dangerous or favorable?
- What evidence supports a given prediction?

The app should feel like a calm sports analysis tool, not a marketing page. It should prioritize readable cards, compact tables, comparison bars, player media, source labels, and fast movement between group, team, player, and matchup views.

## Information Architecture

### 1. Group Dashboard

The first screen shows:

- Header summary: tournament status, data updated date, number of teams, number of groups, current stage.
- Group grid: Groups A-L, each with four team rows.
- Team row fields: flag, team name, FIFA rank or power score, projected group position, advancement probability, star player, form indicator.
- Advancement badges: `Top 2`, `3rd race`, `At risk`, `Eliminated`, or `Qualified`.
- Third-place race strip: the eight projected best third-place teams and the next teams below the line.
- Featured matches: selected group-stage matches with predicted win/draw/loss percentages.

Interaction:

- Clicking a team opens the team detail view.
- Clicking a star player opens the player panel.
- Clicking a match opens the matchup analysis view.
- Filters allow searching by team, group, continent, advancement status, and player.

### 2. Team Detail

Team detail shows:

- Country identity: flag, confederation, group, coach, ranking, squad update date.
- Team snapshot: short Korean summary of playing style, key strength, key weakness, and current narrative.
- Star players: 1 primary star plus 2-4 supporting players.
- Video section: curated YouTube videos with title, channel, type, and external link or embed.
- Group outlook: remaining or scheduled matches, projected points, advancement probability.
- Potential knockout path: likely Round of 32 or Round of 16 opponents when known, otherwise scenario cards clearly marked as assumptions.
- Evidence panel: sources used and last checked date.

### 3. Player Detail

Player detail shows:

- Name, country, club, position, age, preferred foot when available, and shirt number when available.
- Why the player matters to the national team.
- Role tags such as finisher, creator, press leader, set-piece taker, defensive anchor, goalkeeper, or transition outlet.
- Video cards: highlights, tactical analysis, national-team moments, interviews.
- Related matchup notes: which opponents or tactical setups affect this player.

### 4. Matchup Analysis

The matchup view compares two teams.

It shows:

- Headline probability: win/draw/loss for group-stage style matches, or advance probability for knockout matches.
- Source split:
  - Objective model estimate.
  - Ranking or Elo-based estimate.
  - Market or odds estimate when available.
  - Media consensus when available.
  - Fan sentiment when available.
- Explanation cards: why Team A can win, why Team B can win, key tactical pressure points.
- Star-player battle: the most important player-vs-player or player-vs-unit comparison.
- Confidence label: low, medium, or high depending on source quality.

Probabilities must always show source and update date. Placeholder numbers must be visibly labeled as sample data.

### 5. Tournament Simulator

The simulator starts as a simple scenario tool.

First version:

- User chooses teams advancing from each group.
- App fills a Round of 32 bracket.
- User can open each pairing and view projected advance probability.

Later versions:

- Auto-generate scenarios from the latest group projections.
- Save multiple scenarios locally.
- Compare Korean fan expectations against global market or model expectations.

## Data Model

Core entities:

- `Tournament`: name, year, format, current stage, updated date.
- `Group`: id, name, teams, standings, projection summary.
- `Team`: id, nameKo, nameEn, flag, confederation, groupId, coach, rankings, style summary, strengths, weaknesses, players, videos, sources.
- `Player`: id, name, country, club, position, role tags, summary, videos, sources.
- `Video`: id, title, channel, platform, url, embedUrl, type, language, relatedTeamId, relatedPlayerId.
- `Match`: id, stage, groupId, teamAId, teamBId, kickoff, venue, result, prediction.
- `Prediction`: matchId or scenarioId, sourceType, teamAWin, draw, teamBWin, confidence, explanation, updatedAt.
- `Source`: id, title, publisher, url, checkedAt, reliabilityCategory, notes.

The app should keep data in local structured files for the first version, such as TypeScript or JSON modules. This keeps the prototype fast while preserving a clean path to a database later.

## Prediction Method

The first version should not pretend to know the future. It should support several source types:

- `sample`: manually entered placeholder for UI development.
- `ranking`: FIFA ranking or comparable ranking-based estimate.
- `elo`: football Elo style rating estimate.
- `market`: betting odds or market-implied probability when available.
- `media`: expert or press prediction summary.
- `sentiment`: fan poll, social signal, or community opinion.

Every prediction display should include:

- Source type.
- Last updated date.
- Confidence level.
- Short explanation.
- A visual distinction between real data and sample data.

## YouTube Handling

The first version will use curated video links rather than automated YouTube search.

Each video card should show:

- Title.
- Channel.
- Type: highlight, tactical analysis, interview, match clip, profile.
- Language if known.
- Related team or player.
- External open button.

If embedding is allowed for a video, the app can show an embedded player. If embedding is blocked, it should show a thumbnail-style card with an external link.

## UI Principles

- Korean-first interface.
- Dense but readable dashboard layout.
- No landing page; the dashboard is the first screen.
- Use tabs for major views: groups, teams, players, matchups, bracket, sources.
- Use badges for advancement status and source quality.
- Use compact progress bars for probabilities.
- Use cards only for repeated items such as groups, teams, players, and videos.
- Keep the visual style sporty but analytical: strong contrast, flags, restrained color, clear hierarchy.
- Mobile view should prioritize one group at a time, search, and sticky navigation.

## Error And Empty States

- Missing team data: show the team row with a `data needed` badge.
- Missing player data: show the team but leave player panel as `research pending`.
- Missing video: show an empty video section with room for curated links.
- Missing prediction: show `prediction unavailable` instead of inventing a number.
- Old data: show `last checked` and warn if the source is stale.

## Testing And Verification

The first implementation should verify:

- The dashboard renders all 12 groups.
- Each group supports four team slots.
- The Round of 32 advancement rule is represented correctly.
- Team detail opens from a group row.
- Player and video panels render from team data.
- Matchup view distinguishes sample predictions from sourced predictions.
- Missing data states are visible and do not break layout.
- Mobile and desktop layouts do not overlap text or controls.

## First Implementation Slice

Build the first version in this order:

1. Static data schema with a small researched sample: 3-4 groups, 8-12 teams, 1-2 players per team, and a few video links.
2. Group dashboard layout with projected advancement badges.
3. Team detail view.
4. Player and video sections.
5. Matchup comparison view using labeled sample predictions.
6. Tournament simulator skeleton for Round of 32 scenarios.
7. Expand data toward all 48 teams after the UI structure is stable.

## Decisions For The First Implementation

- Data should start as local TypeScript or JSON files. A database can be added after the UI and schema settle.
- YouTube videos should open externally by default. Embeds can appear only when the curated video supports embedding cleanly.
- The first non-sample prediction estimate should be ranking-based because it is explainable and easy to replace later with Elo or market data.
- Korea should have a small quick-access shortcut in the Korean UI, but the data model and core views should treat all teams consistently.
