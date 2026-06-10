# World Cup Automation Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the World Cup dashboard's daily hub and verification state for the June 10, 2026 automation run using reliable sources.

**Architecture:** Verify whether official FIFA tournament data changed since the last run, then make the smallest possible static-data update. If a stale recent match summary exists, update the daily hub entry and surface source reliability metadata in the UI without disturbing the broader scenario dataset.

**Tech Stack:** Static JavaScript data files, vanilla JS UI rendering, Node syntax checks, git, Vercel CLI

---

### Task 1: Audit current dashboard data against live sources

**Files:**
- Modify: `C:/Users/kikuk/Documents/월드컵/daily-data.js`
- Modify: `C:/Users/kikuk/Documents/월드컵/app.js`
- Test: live sources only

- [ ] **Step 1: Confirm whether FIFA World Cup 2026 has started**

Check FIFA schedule and scores pages for opening date and whether any official results exist as of the run date.

- [ ] **Step 2: Confirm whether recent warm-up data in the dashboard is stale**

Compare `daily-data.js` warm-up entries with official federation recaps and lineup notes for any missing June 6, 2026 updates.

- [ ] **Step 3: Record only actionable deltas**

Limit code edits to items where a trustworthy source shows the app is stale.

### Task 2: Apply the smallest safe data/UI patch

**Files:**
- Modify: `C:/Users/kikuk/Documents/월드컵/daily-data.js`
- Modify: `C:/Users/kikuk/Documents/월드컵/app.js`

- [ ] **Step 1: Update `daily-data.js`**

Refresh `updatedAt`, the countdown summary, and add the missing recent match entry plus source metadata.

- [ ] **Step 2: Update `app.js`**

Render optional source reliability and checked-date metadata for daily hub entries when present.

- [ ] **Step 3: Keep schema backward compatible**

Do not require new fields for existing entries; UI should render safely when metadata is absent.

### Task 3: Verify, ship, and document

**Files:**
- Modify: `C:/Users/kikuk/Documents/월드컵/docs/superpowers/plans/2026-06-10-world-cup-automation-refresh.md`
- Modify: `C:/Users/kikuk/Documents/월드컵/docs` (none expected unless needed)

- [ ] **Step 1: Run syntax/integrity checks**

Validate `app.js`, `daily-data.js`, `rich-data.js`, and `schedule-data.js` with Node parsing and smoke tests.

- [ ] **Step 2: Commit and push if files changed**

Use a Korean commit message that describes the refreshed dashboard data state.

- [ ] **Step 3: Verify deployment**

Check Vercel deployment status and fetch the production URL to confirm it responds successfully.
