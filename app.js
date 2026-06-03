const DATA = window.WORLD_CUP_DATA;
const state = {
  activeTab: "groups",
  query: "",
  status: "all",
  matchupA: "korea",
  matchupB: "mexico",
  teamCardTabs: {},
  votes: {}
};
const photoCache = new Map();

const views = {
  groups: document.querySelector("#groupsView"),
  teams: document.querySelector("#teamsView"),
  players: document.querySelector("#playersView"),
  schedule: document.querySelector("#scheduleView"),
  matchups: document.querySelector("#matchupsView"),
  bracket: document.querySelector("#bracketView"),
  sources: document.querySelector("#sourcesView")
};

document.addEventListener("DOMContentLoaded", () => {
  wireControls();
  renderApp();
});

function wireControls() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      state.activeTab = tab.dataset.tab;
      document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("is-active", item === tab));
      Object.entries(views).forEach(([key, view]) => view.classList.toggle("is-active", key === state.activeTab));
      renderApp();
    });
  });

  document.querySelector("#searchInput").addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderApp();
  });

  document.querySelector("#statusFilter").addEventListener("change", (event) => {
    state.status = event.target.value;
    renderApp();
  });
}

function renderApp() {
  renderMatchHero();
  renderSummary();
  renderGroups();
  renderTeams();
  renderPlayers();
  renderSchedule();
  renderMatchups();
  renderBracket();
  renderSources();
  hydrateWikiPhotos();
}

function renderMatchHero() {
  const target = document.querySelector("#matchHero");
  const hub = DATA.dailyMatchHub;
  if (!target || !hub) return;

  const featured = hub.matches.find((matchItem) => matchItem.id === hub.featuredMatchId) || hub.matches[0];
  const sideMatches = hub.matches.filter((matchItem) => matchItem.id !== featured.id).slice(0, 3);
  const teamA = DATA.teams[featured.teamA];
  const teamB = featured.teamB ? DATA.teams[featured.teamB] : null;

  target.innerHTML = `
    <div class="match-hero-copy">
      <span class="eyebrow">${escapeHtml(hub.kicker)}</span>
      <h2>${escapeHtml(hub.title)}</h2>
      <p>${escapeHtml(hub.summary)}</p>
      <div class="hero-source-line">
        <span>${escapeHtml(featured.phaseLabel)}</span>
        <a href="${escapeAttr(featured.source.url)}" target="_blank" rel="noreferrer">${escapeHtml(featured.source.label)}</a>
      </div>
    </div>
    <article class="feature-match-card" data-match-id="${escapeAttr(featured.id)}">
      <div class="match-status-row">
        <span class="badge ${featured.status === "result" ? "top" : featured.status === "scheduled" ? "race" : "sample"}">${escapeHtml(featured.phaseLabel)}</span>
        <strong>${escapeHtml(featured.competition)}</strong>
      </div>
      <div class="feature-scoreboard">
        ${heroFixtureTeam(teamA, featured.teamAName, featured.teamAFlag)}
        <div class="score-core">
          <span>${escapeHtml(featured.dateLabel)}</span>
          <strong>${escapeHtml(featured.score)}</strong>
          <small>${escapeHtml(featured.venue)} · ${escapeHtml(featured.city)}</small>
        </div>
        ${heroFixtureTeam(teamB, featured.teamBName, featured.teamBFlag)}
      </div>
      <h3>${escapeHtml(featured.headline)}</h3>
      <p>${escapeHtml(featured.recap)}</p>
      <div class="match-chip-row">
        ${(featured.scorers || []).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
      ${highlightReel(featured)}
      ${votePanel(featured)}
      <div class="hero-actions">
        <a class="primary-button hero-link" href="${escapeAttr(featured.highlightUrl)}" target="_blank" rel="noreferrer">하이라이트 보기</a>
        <span>${escapeHtml(featured.localTimeLabel)}</span>
      </div>
    </article>
    <aside class="hero-match-queue" aria-label="추가 경기 로그">
      ${sideMatches.map(heroQueueCard).join("")}
    </aside>
  `;

  bindVoteButtons(target);
  loadVoteSummary(featured.id, featured);
}

function highlightReel(matchItem) {
  const videos = (matchItem.highlightVideos || [
    {
      title: `${matchItem.headline} 하이라이트`,
      channel: matchItem.source?.label || "YouTube",
      type: "highlight",
      url: matchItem.highlightUrl,
      duration: "PLAY",
      meta: "하이라이트 링크"
    }
  ]).map(normalizeVideo);
  const lead = videos[0];
  const queue = videos.slice(1, 4);

  return `
    <section class="highlight-reel" aria-label="하이라이트 영상">
      <a class="highlight-lead" href="${escapeAttr(lead.url)}" target="_blank" rel="noreferrer">
        ${videoThumbnailMedia(lead)}
        <span class="play-chip">PLAY</span>
        <span class="video-duration">${escapeHtml(lead.duration || "영상")}</span>
        <div class="highlight-lead-copy">
          <span>${escapeHtml(lead.channel)}</span>
          <strong>${escapeHtml(lead.title)}</strong>
          <small>${escapeHtml(lead.meta || lead.thumbnailSource || "YouTube")}</small>
        </div>
      </a>
      <div class="highlight-queue">
        ${queue.map((video) => `
          <a class="highlight-mini" href="${escapeAttr(video.url)}" target="_blank" rel="noreferrer">
            ${videoThumbnailMedia(video)}
            <div>
              <strong>${escapeHtml(video.title)}</strong>
              <span>${escapeHtml(video.channel)} · ${escapeHtml(video.duration || "영상")}</span>
            </div>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function normalizeVideo(video) {
  return (window.VIDEO_UTILS?.normalizeVideoEntry || ((item) => item))(video);
}

function videoThumbnailMedia(video) {
  if (video.thumbnailUrl) {
    return `<img src="${escapeAttr(video.thumbnailUrl)}" alt="${escapeAttr(video.title)} 썸네일" loading="lazy" referrerpolicy="no-referrer" />`;
  }
  return `
    <div class="video-thumb-fallback">
      <span>${escapeHtml(video.type || "video")}</span>
      <strong>${escapeHtml(video.duration || "PLAY")}</strong>
    </div>
  `;
}

function heroFixtureTeam(team, fallbackName, fallbackFlag) {
  if (team) {
    return `
      <div class="hero-team">
        ${flag(team, "big-flag")}
        <strong>${escapeHtml(team.nameKo)}</strong>
        <span>${escapeHtml(team.nameEn)}</span>
      </div>
    `;
  }
  const code = fallbackFlag || "un";
  return `
    <div class="hero-team">
      <img class="big-flag" src="https://flagcdn.com/w80/${escapeAttr(code)}.png" alt="${escapeAttr(fallbackName || "상대 팀")} 국기" loading="lazy" />
      <strong>${escapeHtml(fallbackName || "상대 팀")}</strong>
      <span>Opponent</span>
    </div>
  `;
}

function heroQueueCard(matchItem) {
  const teamA = DATA.teams[matchItem.teamA];
  const teamB = matchItem.teamB ? DATA.teams[matchItem.teamB] : null;
  return `
    <article class="queue-card">
      <span class="badge ${matchItem.status === "scheduled" ? "race" : "sample"}">${escapeHtml(matchItem.phaseLabel)}</span>
      <strong>${escapeHtml(matchTitleFromHub(matchItem, teamA, teamB))}</strong>
      <small>${escapeHtml(matchItem.score)} · ${escapeHtml(matchItem.dateLabel)}</small>
      <p>${escapeHtml(matchItem.headline)}</p>
    </article>
  `;
}

function matchTitleFromHub(matchItem, teamA, teamB) {
  const left = teamA?.nameKo || matchItem.teamAName || "TBD";
  const right = teamB?.nameKo || matchItem.teamBName || "TBD";
  return `${left} vs ${right}`;
}

function votePanel(matchItem) {
  const summary = state.votes[matchItem.id] || fallbackVoteSummary(matchItem);
  const teamA = DATA.teams[matchItem.teamA];
  const teamB = matchItem.teamB ? DATA.teams[matchItem.teamB] : null;
  const labels = {
    teamA: `${teamA?.nameKo || matchItem.teamAName || "A팀"} 승`,
    draw: "무승부",
    teamB: `${teamB?.nameKo || matchItem.teamBName || "B팀"} 승`
  };
  const userVote = getStoredVote(matchItem.id);
  const status = summary.loading ? "투표 집계 불러오는 중" : summary.storage === "fallback" ? "샘플 집계" : "실시간 팬 투표";

  return `
    <div class="vote-console" data-match-id="${escapeAttr(matchItem.id)}">
      <div class="vote-console-head">
        <div>
          <strong>누가 이길까?</strong>
          <span>${escapeHtml(status)} · ${summary.counts.total}명 참여</span>
        </div>
        <small>모델 ${matchItem.modelPick.teamA}% / ${matchItem.modelPick.draw}% / ${matchItem.modelPick.teamB}%</small>
      </div>
      <div class="vote-options">
        ${voteButton(matchItem.id, "teamA", labels.teamA, summary, userVote)}
        ${voteButton(matchItem.id, "draw", labels.draw, summary, userVote)}
        ${voteButton(matchItem.id, "teamB", labels.teamB, summary, userVote)}
      </div>
      <p class="vote-help">${userVote ? "투표가 저장됐습니다. 같은 브라우저에서는 선택을 바꿔 다시 저장할 수 있어요." : "회원가입 없이 익명 ID로 저장됩니다."}</p>
    </div>
  `;
}

function voteButton(matchId, option, label, summary, userVote) {
  const percent = summary.percentages[option] || 0;
  const count = summary.counts[option] || 0;
  return `
    <button class="vote-button ${userVote === option ? "is-selected" : ""}" data-vote-match="${escapeAttr(matchId)}" data-vote-option="${option}" type="button">
      <span>${escapeHtml(label)}</span>
      <strong>${percent}%</strong>
      <small>${count}표</small>
      ${bar(percent)}
    </button>
  `;
}

function fallbackVoteSummary(matchItem) {
  const pick = matchItem.modelPick || { teamA: 34, draw: 33, teamB: 33 };
  return {
    loading: true,
    storage: "loading",
    counts: { teamA: pick.teamA, draw: pick.draw, teamB: pick.teamB, total: pick.teamA + pick.draw + pick.teamB },
    percentages: { teamA: pick.teamA, draw: pick.draw, teamB: pick.teamB }
  };
}

function bindVoteButtons(root) {
  root.querySelectorAll(".vote-button").forEach((button) => {
    button.addEventListener("click", () => submitVote(button.dataset.voteMatch, button.dataset.voteOption));
  });
}

async function loadVoteSummary(matchId, matchItem) {
  const current = state.votes[matchId];
  if (current?.loaded || current?.loadingRequest) return;
  state.votes[matchId] = { ...(current || fallbackVoteSummary(matchItem)), loadingRequest: true };

  try {
    const response = await fetch(`/api/votes?matchId=${encodeURIComponent(matchId)}`);
    if (!response.ok) throw new Error("vote summary failed");
    const summary = await response.json();
    state.votes[matchId] = { ...summary, loaded: true };
  } catch (_error) {
    state.votes[matchId] = { ...fallbackVoteSummary(matchItem), storage: "fallback", loaded: true, loading: false };
  }

  renderMatchHero();
}

async function submitVote(matchId, voteOption) {
  const matchItem = DATA.dailyMatchHub?.matches.find((item) => item.id === matchId);
  if (!matchItem) return;
  state.votes[matchId] = { ...(state.votes[matchId] || fallbackVoteSummary(matchItem)), loading: true };
  renderMatchHero();

  try {
    const response = await fetch("/api/votes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ matchId, voteOption, voterKey: getVoterKey() })
    });
    if (!response.ok) throw new Error("vote failed");
    const summary = await response.json();
    localStorage.setItem(`wc_vote_${matchId}`, voteOption);
    state.votes[matchId] = { ...summary, loaded: true };
  } catch (_error) {
    const fallback = fallbackVoteSummary(matchItem);
    const counts = { ...fallback.counts, [voteOption]: fallback.counts[voteOption] + 1, total: fallback.counts.total + 1 };
    localStorage.setItem(`wc_vote_${matchId}`, voteOption);
    state.votes[matchId] = {
      storage: "fallback",
      loaded: true,
      counts,
      percentages: votePercentages(counts)
    };
  }

  renderMatchHero();
}

function votePercentages(counts) {
  const total = counts.total || 1;
  return {
    teamA: Math.round((counts.teamA / total) * 100),
    draw: Math.round((counts.draw / total) * 100),
    teamB: Math.round((counts.teamB / total) * 100)
  };
}

function getVoterKey() {
  const key = "wc_voter_key";
  const existing = localStorage.getItem(key);
  if (existing) return existing;
  const next = `wc_${crypto.randomUUID().replace(/-/g, "")}`;
  localStorage.setItem(key, next);
  return next;
}

function getStoredVote(matchId) {
  return localStorage.getItem(`wc_vote_${matchId}`) || "";
}

function renderSummary() {
  const t = DATA.tournament;
  document.querySelector("#summaryStrip").innerHTML = [
    metric(t.teams, "본선 참가팀"),
    metric(t.groups, "조"),
    metric("32", "토너먼트 진출"),
    metric(t.updatedAt, "데이터 기준")
  ].join("");
}

function renderGroups() {
  const groupCards = DATA.groups.map((group) => {
    const rows = group.teams
      .map((id) => DATA.teams[id])
      .filter(matchesFilters)
      .map(teamRow)
      .join("");

    return `
      <article class="group-card">
        <header class="group-head">
          <h3>${escapeHtml(group.name)}</h3>
          <span class="badge sample">시나리오</span>
        </header>
        ${rows || `<div class="empty-state">현재 검색 조건에 맞는 팀이 없습니다.</div>`}
      </article>
    `;
  });

  views.groups.innerHTML = `
    ${sectionHeading("조별 현황", DATA.tournament.formatNote, DATA.tournament.scenarioNote)}
    ${thirdRaceStrip()}
    <div class="group-grid">${groupCards.join("")}</div>
  `;
  bindTeamButtons(views.groups);
}

function renderTeams() {
  const cards = allTeams()
    .filter(matchesFilters)
    .map(teamHubCard)
    .join("");

  views.teams.innerHTML = `
    ${sectionHeading("국가 허브", "카드 안에서 개요, 선수단, 일정, 전망을 탭으로 넘겨보는 팀별 미니 대시보드입니다.")}
    <div class="team-grid">${cards || `<div class="empty-state">조건에 맞는 팀이 없습니다.</div>`}</div>
  `;
  bindTeamButtons(views.teams);
  bindTeamCardTabs(views.teams);
  hydrateWikiPhotos();
}

function renderPlayers() {
  const cards = allTeams()
    .filter(matchesFilters)
    .flatMap((team) => team.players.map((player) => ({ team, player })))
    .map(({ team, player }) => `
      <article class="player-card player-card-rich">
        <div class="player-card-header">
          ${playerPortrait(player, "medium")}
          <div>
            <span class="badge sample">${escapeHtml(player.tag || player.category || "핵심")}</span>
            <h3 class="card-title">${escapeHtml(player.nameKo || player.name)}</h3>
            <p class="team-meta">${escapeHtml(player.name)} · ${escapeHtml(team.nameKo)} · ${escapeHtml(player.position)}</p>
          </div>
        </div>
        <p class="club-line">${escapeHtml(player.club)}</p>
        ${moneyChip(player)}
        <p class="source-note">${escapeHtml(player.clubRole)}</p>
        <div class="scouting-grid">
          ${scoutingPill("공격", player.scouting.attack)}
          ${scoutingPill("창의", player.scouting.creation)}
          ${scoutingPill("압박", player.scouting.press)}
          ${scoutingPill("수비", player.scouting.defense)}
        </div>
        ${seasonStats(player)}
        <button class="ghost-button open-team" data-team-id="${team.id}" type="button">팀 리포트에서 보기</button>
      </article>
    `)
    .join("");

  views.players.innerHTML = `
    ${sectionHeading("선수단 보드", "선수 얼굴, 소속 클럽, 클럽 역할, 대표팀 역할, 성적표 슬롯을 선수별로 보여줍니다.")}
    <div class="player-grid">${cards || `<div class="empty-state">조건에 맞는 선수가 없습니다.</div>`}</div>
  `;
  bindTeamButtons(views.players);
  hydrateWikiPhotos();
}

function renderSchedule() {
  const schedule = DATA.matchSchedule;
  if (!schedule) {
    views.schedule.innerHTML = `<div class="empty-state">경기 일정 데이터가 아직 없습니다.</div>`;
    return;
  }

  const cards = schedule.matches
    .filter(matchesScheduleFilters)
    .map((matchItem) => scheduleCard(matchItem))
    .join("");

  views.schedule.innerHTML = `
    ${sectionHeading("경기 일정", "경기 날짜, 현지 킥오프 시간, 한국 시간, 경기장과 도시를 함께 보여줍니다.", schedule.sourceNote)}
    <div class="schedule-summary">
      <div class="panel">
        <h3>일정 기준</h3>
        <p class="source-note">업데이트: ${escapeHtml(schedule.updatedAt)} · 공식 경기 슬롯과 앱 조편성 시나리오를 구분해서 표시합니다.</p>
      </div>
      <div class="panel">
        <h3>시간 표시</h3>
        <p class="source-note">현지 시간은 개최 도시 기준, 한국 시간은 KST 기준입니다. 공식 확정 전 시나리오 경기는 배지로 표시됩니다.</p>
      </div>
    </div>
    <div class="schedule-grid">${cards || `<div class="empty-state">검색 조건에 맞는 일정이 없습니다.</div>`}</div>
  `;
}

function renderMatchups() {
  const teams = allTeams();
  const teamA = DATA.teams[state.matchupA] || teams[0];
  const teamB = DATA.teams[state.matchupB] || teams[1];
  const prediction = findPrediction(teamA.id, teamB.id) || generatedPrediction(teamA, teamB);
  const options = teams.map((team) => `<option value="${team.id}">${escapeHtml(team.nameKo)}</option>`).join("");

  views.matchups.innerHTML = `
    ${sectionHeading("매치업 분석", "두 팀을 선택하면 승률, 핵심 선수 대결, 전술 포인트를 분리해서 보여줍니다.")}
    <div class="match-layout">
      <aside class="panel selector-stack">
        <label class="select-box">
          <span>팀 A</span>
          <select id="matchupA">${options}</select>
        </label>
        <label class="select-box">
          <span>팀 B</span>
          <select id="matchupB">${options}</select>
        </label>
        <p class="source-note">sample은 화면 검증용이며, 실제 승률 데이터가 나오면 출처와 함께 교체합니다.</p>
      </aside>
      <article class="match-card">
        <div class="team-card-header">
          ${flag(teamA, "big-flag")}
          <div>
            <h3 class="card-title">${escapeHtml(teamA.nameKo)} vs ${escapeHtml(teamB.nameKo)}</h3>
            <p class="team-meta">${escapeHtml(prediction.sourceType)} · 신뢰도 ${escapeHtml(prediction.confidence)} · ${escapeHtml(prediction.updatedAt)}</p>
          </div>
          ${flag(teamB, "big-flag")}
        </div>
        <div class="prob-grid">
          ${probBox(teamA.nameKo, prediction.teamAWin)}
          ${probBox("무승부", prediction.draw)}
          ${probBox(teamB.nameKo, prediction.teamBWin)}
        </div>
        <p>${escapeHtml(prediction.explanation)}</p>
        <ul class="compact-list">
          <li><strong>${escapeHtml(teamA.nameKo)} 포인트:</strong> ${escapeHtml(teamA.strength)} / 리스크 ${escapeHtml(teamA.weakness)}</li>
          <li><strong>${escapeHtml(teamB.nameKo)} 포인트:</strong> ${escapeHtml(teamB.strength)} / 리스크 ${escapeHtml(teamB.weakness)}</li>
          <li><strong>스타 대결:</strong> ${escapeHtml(teamA.players[0].nameKo || teamA.players[0].name)} vs ${escapeHtml(teamB.players[0].nameKo || teamB.players[0].name)}</li>
        </ul>
      </article>
    </div>
  `;

  const matchupA = document.querySelector("#matchupA");
  const matchupB = document.querySelector("#matchupB");
  matchupA.value = teamA.id;
  matchupB.value = teamB.id;
  matchupA.addEventListener("change", (event) => {
    state.matchupA = event.target.value;
    if (state.matchupA === state.matchupB) state.matchupB = teams.find((team) => team.id !== state.matchupA).id;
    renderMatchups();
  });
  matchupB.addEventListener("change", (event) => {
    state.matchupB = event.target.value;
    if (state.matchupA === state.matchupB) state.matchupA = teams.find((team) => team.id !== state.matchupB).id;
    renderMatchups();
  });
}

function renderBracket() {
  const qualifiers = projectedQualifiers();
  const pairings = [];
  for (let i = 0; i < 16; i += 1) {
    pairings.push([qualifiers[i], qualifiers[31 - i]]);
  }

  views.bracket.innerHTML = `
    ${sectionHeading("32강 시나리오", "각 조 상위 2팀과 3위 상위 8팀을 뽑아 만든 프로토타입 대진입니다.")}
    <div class="bracket-grid">
      ${pairings.map((pair, index) => `
        <article class="panel">
          <span class="badge sample">R32-${index + 1}</span>
          <div class="compact-list">
            ${miniTeam(pair[0])}
            ${miniTeam(pair[1])}
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderSources() {
  views.sources.innerHTML = `
    ${sectionHeading("자료 출처", "공식 형식과 참가팀 정보는 FIFA 자료를 우선으로 두고, 선수 사진은 Wikipedia/Wikimedia 썸네일을 우선 사용합니다.")}
    <div class="source-grid">
      ${DATA.sources.map((source) => `
        <article class="source-card">
          <span class="badge ${source.reliability === "official" ? "top" : "sample"}">${escapeHtml(source.reliability)}</span>
          <h3 class="card-title">${escapeHtml(source.title)}</h3>
          <p class="team-meta">${escapeHtml(source.publisher)} · 확인 ${escapeHtml(source.checkedAt)}</p>
          <a href="${source.url}" target="_blank" rel="noreferrer">출처 열기</a>
        </article>
      `).join("")}
    </div>
  `;
}

function openTeamDialog(teamId) {
  const team = DATA.teams[teamId];
  const dialog = document.querySelector("#teamDialog");
  const videos = collectTeamVideos(team);

  dialog.innerHTML = `
    <div class="dialog-inner">
      <header class="dialog-head scouting-head">
        <div class="dialog-title">
          ${flag(team, "big-flag")}
          <div>
            <p class="eyebrow">${escapeHtml(team.confederation)} · ${escapeHtml(groupFor(team.id).name)}</p>
            <h2>${escapeHtml(team.nameKo)}</h2>
            <p class="source-note">${escapeHtml(team.summary)}</p>
          </div>
        </div>
        <button class="close-button" type="button">닫기</button>
      </header>

      <section class="scouting-hero">
        <div class="panel">
          <h3>전력 요약</h3>
          <ul class="compact-list">
            <li><strong>감독:</strong> ${escapeHtml(team.coach)}</li>
            <li><strong>FIFA 랭킹:</strong> ${team.rank}</li>
            <li><strong>32강 시나리오:</strong> ${team.advance}% · ${statusBadge(team.status)}</li>
            <li><strong>주목 경기:</strong> ${escapeHtml(team.watchMatch)}</li>
            <li><strong>데이터 상태:</strong> ${escapeHtml(team.dataStatus)} · ${escapeHtml(team.lastChecked)}</li>
          </ul>
          <div class="tag-row">${(team.styleTags || []).map(tag).join("")}</div>
          <div class="probability">
            <span class="team-meta">진출 확률 시나리오</span>
            ${bar(team.advance)}
          </div>
        </div>

        <div class="panel">
          <h3>팀 능력치</h3>
          <div class="rating-board">
            ${ratingBar("공격", team.ratings.attack)}
            ${ratingBar("중원", team.ratings.midfield)}
            ${ratingBar("수비", team.ratings.defense)}
            ${ratingBar("속도", team.ratings.speed)}
            ${ratingBar("경험", team.ratings.experience)}
          </div>
        </div>
      </section>

      <section class="panel">
        <div class="section-heading compact-heading">
          <div>
            <h3>Road to Final</h3>
            <p>모델, 자국 팬 기대, 전세계 시각을 나눠서 라운드별 전망을 표시합니다.</p>
          </div>
        </div>
        ${roundOddsPanel(team, "detail")}
      </section>

      <section class="panel">
        <div class="section-heading compact-heading">
          <div>
            <h3>다가오는 경기</h3>
            <p>경기장, 개최 도시, 현지 시간과 한국 시간을 함께 확인합니다.</p>
          </div>
        </div>
        <div class="schedule-strip">
          ${teamSchedule(team.id).slice(0, 4).map(scheduleCardCompact).join("") || `<div class="empty-state">이 팀의 일정이 아직 연결되지 않았습니다.</div>`}
        </div>
      </section>

      <section class="panel">
        <div class="section-heading compact-heading">
          <div>
            <h3>대표 스타 라인</h3>
            <p>얼굴, 소속 클럽, 클럽 역할, 대표팀 역할을 함께 표시합니다.</p>
          </div>
        </div>
        <div class="star-line">
          ${team.players.slice(0, 3).map(playerShowcase).join("")}
        </div>
      </section>

      <section class="dialog-grid">
        <div class="panel">
          <h3>전체 선수단 보드</h3>
          <div class="squad-board">
            ${team.players.map(playerRow).join("")}
          </div>
        </div>
        <div class="panel">
          <h3>전술 메모</h3>
          <ul class="compact-list">
            ${(team.tacticalNotes || []).map((note) => `<li>${escapeHtml(note)}</li>`).join("")}
          </ul>
        </div>
      </section>

      <section class="panel">
        <div class="section-heading compact-heading">
          <div>
            <h3>경기 기록 센터</h3>
            <p>경기 종료 후 선발, 교체, 득점, 카드, 슈팅, xG, 하이라이트가 이 영역에 쌓입니다.</p>
          </div>
        </div>
        <div class="match-record-grid">
          ${(team.matchRecords || []).map(matchRecordCard).join("")}
        </div>
      </section>

      <section class="video-grid" aria-label="관련 유튜브 영상">
        ${videos.slice(0, 6).map(videoCard).join("") || `<div class="empty-state">영상 큐레이션이 아직 없습니다.</div>`}
      </section>
    </div>
  `;

  dialog.querySelector(".close-button").addEventListener("click", () => dialog.close());
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
  hydrateWikiPhotos();
}

function teamHubCard(team) {
  const active = state.teamCardTabs[team.id] || "overview";
  return `
    <article class="team-card team-card-rich team-hub-card" data-team-id="${team.id}">
      <div class="team-card-header">
        ${flag(team, "big-flag")}
        <div>
          <h3 class="card-title">${escapeHtml(team.nameKo)}</h3>
          <p class="team-meta">${escapeHtml(groupFor(team.id).name)} · ${escapeHtml(team.confederation)} · FIFA ${team.rank}</p>
        </div>
      </div>
      <div class="team-card-tabs" role="tablist" aria-label="${escapeHtml(team.nameKo)} 카드 정보">
        ${teamCardTabButton(team, active, "overview", "개요")}
        ${teamCardTabButton(team, active, "squad", "선수단")}
        ${teamCardTabButton(team, active, "schedule", "일정")}
        ${teamCardTabButton(team, active, "odds", "전망")}
      </div>
      <div class="team-card-panel">
        ${teamCardPanel(team, active)}
      </div>
      <button class="primary-button open-team" data-team-id="${team.id}" type="button">전체 리포트 열기</button>
    </article>
  `;
}

function teamCardTabButton(team, active, tabId, label) {
  return `<button class="team-card-tab ${active === tabId ? "is-active" : ""}" data-team-card-tab="${tabId}" data-team-id="${team.id}" type="button">${escapeHtml(label)}</button>`;
}

function teamCardPanel(team, active) {
  if (active === "squad") return teamCardSquad(team);
  if (active === "schedule") return teamCardSchedule(team);
  if (active === "odds") return roundOddsPanel(team, "card");
  return teamCardOverview(team);
}

function teamCardOverview(team) {
  const leadVideo = collectTeamVideos(team)[0];
  return `
    ${leadVideo ? compactVideoPreview(leadVideo, "team-overview-video") : ""}
    <div class="player-face-stack" aria-label="${escapeHtml(team.nameKo)} 핵심 선수">
      ${team.players.slice(0, 6).map((player) => playerPortrait(player, "small")).join("")}
    </div>
    <div class="tag-row">${(team.styleTags || []).slice(0, 5).map(tag).join("")}</div>
    <div class="rating-mini">
      ${ratingBar("공격", team.ratings.attack)}
      ${ratingBar("중원", team.ratings.midfield)}
      ${ratingBar("수비", team.ratings.defense)}
    </div>
        <ul class="compact-list">
          <li><strong>강점:</strong> ${escapeHtml(team.strength)}</li>
      <li><strong>리스크:</strong> ${escapeHtml(team.weakness)}</li>
      <li><strong>주목 경기:</strong> ${escapeHtml(team.watchMatch || "업데이트 예정")}</li>
    </ul>
    <div class="probability" aria-label="${escapeHtml(team.nameKo)} 진출 확률">
      <span class="team-meta">32강 시나리오 ${team.advance}% · ${escapeHtml(team.dataStatus)}</span>
      ${bar(team.advance)}
    </div>
  `;
}

function teamCardSquad(team) {
  return `
    <div class="mini-squad-list">
      ${team.players.slice(0, 7).map((player) => `
        <article class="mini-player-line">
          ${playerPortrait(player, "small")}
          <div>
            <strong>${escapeHtml(player.nameKo || player.name)}</strong>
            <span>${escapeHtml(player.position)} · ${escapeHtml(player.club)}</span>
            <small>${escapeHtml(player.tag || player.category || "핵심")}</small>
            ${moneyChip(player, "mini")}
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function collectTeamVideos(team) {
  return [
    ...(team.videos || []),
    ...team.players.slice(0, 3).flatMap((player) => player.videos || [])
  ].map(normalizeVideo);
}

function compactVideoPreview(video, className = "") {
  const item = normalizeVideo(video);
  return `
    <a class="compact-video ${className}" href="${escapeAttr(item.url)}" target="_blank" rel="noreferrer">
      <div class="compact-video-thumb">
        ${videoThumbnailMedia(item)}
        <span>PLAY</span>
      </div>
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(item.channel)} · ${escapeHtml(item.thumbnailSource || "YouTube search")}</small>
      </div>
    </a>
  `;
}

function teamCardSchedule(team) {
  const matches = teamSchedule(team.id);
  return `
    <div class="mini-schedule-list">
      ${matches.slice(0, 3).map(scheduleCardCompact).join("") || `<div class="empty-state">연결된 일정이 아직 없습니다.</div>`}
    </div>
  `;
}

function bindTeamCardTabs(root) {
  root.querySelectorAll(".team-card-tab").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      state.teamCardTabs[button.dataset.teamId] = button.dataset.teamCardTab;
      renderTeams();
    });
  });
}

function playerShowcase(player) {
  return `
    <article class="star-card">
      ${playerPortrait(player, "large")}
      <div>
        <span class="badge top">${escapeHtml(player.tag || "핵심")}</span>
        <h4>${escapeHtml(player.nameKo || player.name)}</h4>
        <p class="team-meta">${escapeHtml(player.name)} · ${escapeHtml(player.position)} · ${escapeHtml(player.club)}</p>
      </div>
      ${moneyChip(player)}
      <p>${escapeHtml(player.nationalRole)}</p>
      <div class="scouting-grid">
        ${scoutingPill("공격", player.scouting.attack)}
        ${scoutingPill("창의", player.scouting.creation)}
        ${scoutingPill("압박", player.scouting.press)}
        ${scoutingPill("수비", player.scouting.defense)}
      </div>
    </article>
  `;
}

function playerRow(player) {
  return `
    <article class="squad-row">
      ${playerPortrait(player, "small")}
      <div class="squad-main">
        <strong>${escapeHtml(player.nameKo || player.name)}</strong>
        <span>${escapeHtml(player.position)} · ${escapeHtml(player.club)}</span>
        <small>${escapeHtml(player.clubRole)}</small>
        ${moneyChip(player, "mini")}
      </div>
      <div class="squad-stat">
        <span>${escapeHtml(player.seasonStats.season)}</span>
        <strong>${escapeHtml(player.seasonStats.status)}</strong>
      </div>
    </article>
  `;
}

function roundOddsPanel(team, mode = "card") {
  const odds = team.roundOdds || defaultRoundOdds(team);
  const rows = [
    ["32강", "r32"],
    ["16강", "r16"],
    ["8강", "qf"],
    ["4강", "sf"],
    ["결승", "final"],
    ["우승", "champion"]
  ];
  return `
    <div class="round-odds ${mode === "detail" ? "detail" : ""}">
      ${rows.map(([label, key]) => `
        <div class="round-odds-row">
          <strong>${label}</strong>
          <div class="odds-lines">
            ${oddsLine("모델", odds.model[key], "model")}
            ${oddsLine("자국", odds.home[key], "home")}
            ${oddsLine("세계", odds.global[key], "global")}
          </div>
        </div>
      `).join("")}
      <p class="team-meta">${escapeHtml(odds.note || "샘플 전망입니다. 실제 배당/여론/모델 데이터가 나오면 교체됩니다.")}</p>
    </div>
  `;
}

function oddsLine(label, value, tone) {
  return `
    <div class="odds-line ${tone}">
      <span>${escapeHtml(label)}</span>
      ${bar(value)}
      <strong>${value}%</strong>
    </div>
  `;
}

function matchRecordCard(record) {
  return `
    <article class="match-record-card">
      <div class="schedule-card-top">
        <span class="badge ${record.status === "played" ? "top" : "sample"}">${record.status === "played" ? "경기 종료" : "경기 후 업데이트"}</span>
        <strong>${escapeHtml(record.matchLabel)}</strong>
      </div>
      <h4>${escapeHtml(record.score || "스코어 대기")}</h4>
      <div class="record-columns">
        <div>
          <span>선발</span>
          <p>${escapeHtml((record.startingXI || []).join(", ") || "경기 종료 후 입력")}</p>
        </div>
        <div>
          <span>교체</span>
          <p>${escapeHtml((record.substitutions || []).join(", ") || "경기 종료 후 입력")}</p>
        </div>
      </div>
      <div class="schedule-info">
        <div><span>슈팅</span><strong>${escapeHtml(record.stats?.shots || "대기")}</strong></div>
        <div><span>점유율</span><strong>${escapeHtml(record.stats?.possession || "대기")}</strong></div>
        <div><span>xG</span><strong>${escapeHtml(record.stats?.xg || "대기")}</strong></div>
        <div><span>MOM</span><strong>${escapeHtml(record.mom || "대기")}</strong></div>
      </div>
    </article>
  `;
}

function defaultRoundOdds(team) {
  const base = Math.max(8, Math.min(94, team.advance || 40));
  const r16 = Math.max(2, Math.round(base * 0.58));
  const qf = Math.max(1, Math.round(r16 * 0.52));
  const sf = Math.max(1, Math.round(qf * 0.45));
  const final = Math.max(1, Math.round(sf * 0.42));
  const champion = Math.max(1, Math.round(final * 0.42));
  return {
    model: { r32: base, r16, qf, sf, final, champion },
    home: boostOdds({ r32: base, r16, qf, sf, final, champion }, 1.16),
    global: boostOdds({ r32: base, r16, qf, sf, final, champion }, 0.92),
    note: "랭킹과 현재 진출 시나리오를 기반으로 한 샘플 전망입니다."
  };
}

function boostOdds(source, factor) {
  return Object.fromEntries(Object.entries(source).map(([key, value]) => [key, Math.max(1, Math.min(98, Math.round(value * factor)))]));
}

function bindTeamButtons(root) {
  root.querySelectorAll(".open-team, .team-row").forEach((button) => {
    button.addEventListener("click", () => openTeamDialog(button.dataset.teamId));
  });
}

function allTeams() {
  return DATA.groups.flatMap((group) => group.teams.map((id) => DATA.teams[id]));
}

function matchesFilters(team) {
  const playerText = team.players.map((player) => `${player.name} ${player.nameKo || ""} ${player.club} ${player.position}`).join(" ");
  const groupText = groupFor(team.id).name;
  const tags = (team.styleTags || []).join(" ");
  const haystack = `${team.nameKo} ${team.nameEn} ${team.confederation} ${playerText} ${groupText} ${tags}`.toLowerCase();
  const queryOk = !state.query || haystack.includes(state.query);
  const statusOk = state.status === "all" || team.status === state.status;
  return queryOk && statusOk;
}

function matchesScheduleFilters(matchItem) {
  if (!state.query) return true;
  const venue = venueFor(matchItem.venueId);
  const teamA = matchItem.teamA ? DATA.teams[matchItem.teamA] : null;
  const teamB = matchItem.teamB ? DATA.teams[matchItem.teamB] : null;
  const haystack = [
    matchItem.stage,
    matchItem.note,
    matchItem.status,
    venue?.name,
    venue?.cityKo,
    venue?.countryKo,
    teamA?.nameKo,
    teamA?.nameEn,
    teamB?.nameKo,
    teamB?.nameEn
  ].filter(Boolean).join(" ").toLowerCase();
  return haystack.includes(state.query);
}

function teamSchedule(teamId) {
  return (DATA.matchSchedule?.matches || []).filter((matchItem) => matchItem.teamA === teamId || matchItem.teamB === teamId);
}

function venueFor(venueId) {
  return DATA.matchSchedule?.venues.find((venue) => venue.id === venueId);
}

function groupFor(teamId) {
  return DATA.groups.find((group) => group.teams.includes(teamId));
}

function projectedQualifiers() {
  const topTwo = DATA.groups.flatMap((group) =>
    group.teams
      .map((id) => DATA.teams[id])
      .sort((a, b) => b.advance - a.advance)
      .slice(0, 2)
  );
  const thirdTeams = DATA.groups
    .map((group) => group.teams.map((id) => DATA.teams[id]).sort((a, b) => b.advance - a.advance)[2])
    .sort((a, b) => b.advance - a.advance)
    .slice(0, 8);
  return [...topTwo, ...thirdTeams].slice(0, 32);
}

function thirdRaceStrip() {
  const thirdTeams = DATA.groups
    .map((group) => group.teams.map((id) => DATA.teams[id]).sort((a, b) => b.advance - a.advance)[2])
    .sort((a, b) => b.advance - a.advance);

  return `
    <div class="third-race" aria-label="3위 경쟁선">
      ${thirdTeams.map((team, index) => `
        <div class="mini-team">
          ${flag(team, "flag-img")}
          <div>
            <strong>${index < 8 ? "진출권" : "추격"} · ${escapeHtml(team.nameKo)}</strong>
            <span class="team-meta">${team.advance}% · ${escapeHtml(team.players[0].nameKo || team.players[0].name)}</span>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function findPrediction(a, b) {
  const direct = DATA.predictions.find((item) => item.teamA === a && item.teamB === b);
  if (direct) return direct;
  const reverse = DATA.predictions.find((item) => item.teamA === b && item.teamB === a);
  if (!reverse) return null;
  return {
    ...reverse,
    teamA: a,
    teamB: b,
    teamAWin: reverse.teamBWin,
    teamBWin: reverse.teamAWin
  };
}

function generatedPrediction(teamA, teamB) {
  const ratingA = 100 - teamA.rank + teamA.advance / 3;
  const ratingB = 100 - teamB.rank + teamB.advance / 3;
  const spread = Math.max(-28, Math.min(28, ratingA - ratingB));
  const teamAWin = Math.round(38 + spread / 2);
  const teamBWin = Math.round(38 - spread / 2);
  const draw = 100 - teamAWin - teamBWin;
  return {
    teamA: teamA.id,
    teamB: teamB.id,
    teamAWin,
    draw,
    teamBWin,
    sourceType: "sample",
    confidence: "low",
    updatedAt: DATA.tournament.updatedAt,
    explanation: "현재 화면 검증을 위한 샘플 모델입니다. FIFA 랭킹과 진출 시나리오를 단순 가중해 만들었습니다."
  };
}

function sectionHeading(title, copy, note = "") {
  return `
    <header class="section-heading">
      <div>
        <h2>${escapeHtml(title)}</h2>
        <p>${escapeHtml(copy)}</p>
      </div>
      ${note ? `<p class="source-note">${escapeHtml(note)}</p>` : ""}
    </header>
  `;
}

function metric(value, label) {
  return `<div class="metric"><strong>${escapeHtml(String(value))}</strong><span>${escapeHtml(label)}</span></div>`;
}

function teamRow(team) {
  return `
    <button class="team-row" data-team-id="${team.id}" type="button">
      ${flag(team, "flag-img")}
      <span>
        <span class="team-name">${escapeHtml(team.nameKo)}${team.koreaFocus ? " · 한국팀" : ""}</span>
        <span class="team-meta">${escapeHtml(team.players.slice(0, 3).map((p) => p.nameKo || p.name).join(" / "))} · ${team.advance}%</span>
      </span>
      ${statusBadge(team.status)}
    </button>
  `;
}

function miniTeam(team) {
  if (!team) return `<div class="mini-team"><span class="team-meta">대기</span></div>`;
  return `
    <div class="mini-team">
      ${flag(team, "flag-img")}
      <div>
        <strong>${escapeHtml(team.nameKo)}</strong>
        <span class="team-meta">${escapeHtml(groupFor(team.id).name)} · ${team.advance}%</span>
      </div>
    </div>
  `;
}

function videoCard(video) {
  const item = normalizeVideo(video);
  const label = video.type === "tactical" ? "전술 분석" : video.type === "interview" ? "인터뷰" : "하이라이트";
  return `
    <article class="video-card">
      <a class="video-thumb ${item.thumbnailUrl ? "video-thumb-image" : "video-thumb-generated"}" href="${escapeAttr(item.url)}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(item.title)} 보기">
        ${item.thumbnailUrl ? videoThumbnailMedia(item) : `<span>${escapeHtml(label)}</span><strong>${escapeHtml(item.title)}</strong>`}
      </a>
      <span class="badge sample">${escapeHtml(item.type || "video")}</span>
      <h3 class="card-title">${escapeHtml(item.title)}</h3>
      <p class="team-meta">${escapeHtml(item.channel)} · ${escapeHtml(item.thumbnailSource || "YouTube link")}</p>
      <a href="${escapeAttr(item.url)}" target="_blank" rel="noreferrer">유튜브에서 보기</a>
    </article>
  `;
}

function scheduleCard(matchItem) {
  const venue = venueFor(matchItem.venueId);
  const teamA = matchItem.teamA ? DATA.teams[matchItem.teamA] : null;
  const teamB = matchItem.teamB ? DATA.teams[matchItem.teamB] : null;
  return `
    <article class="schedule-card">
      <div class="schedule-card-top">
        <span class="badge ${matchItem.status === "official" || matchItem.status === "official-slot" ? "top" : "sample"}">${scheduleStatusLabel(matchItem.status)}</span>
        <strong>Match ${matchItem.number}</strong>
      </div>
      <h3 class="card-title">${escapeHtml(matchTitle(matchItem, teamA, teamB))}</h3>
      <p class="team-meta">${escapeHtml(matchItem.stage)} · ${escapeHtml(matchItem.note)}</p>
      <div class="fixture-teams">
        ${fixtureTeam(teamA, "TBD")}
        <span>VS</span>
        ${fixtureTeam(teamB, "TBD")}
      </div>
      <div class="schedule-info">
        <div><span>현지</span><strong>${escapeHtml(matchItem.date)} ${escapeHtml(matchItem.localTime)}</strong></div>
        <div><span>한국</span><strong>${escapeHtml(matchItem.kstDateTime)} KST</strong></div>
        <div><span>장소</span><strong>${escapeHtml(venue?.name || "Venue TBD")}</strong></div>
        <div><span>도시</span><strong>${escapeHtml(`${venue?.cityKo || ""}${venue?.countryKo ? ", " + venue.countryKo : ""}`)}</strong></div>
      </div>
    </article>
  `;
}

function scheduleCardCompact(matchItem) {
  const venue = venueFor(matchItem.venueId);
  const teamA = matchItem.teamA ? DATA.teams[matchItem.teamA] : null;
  const teamB = matchItem.teamB ? DATA.teams[matchItem.teamB] : null;
  const opponent = teamA && teamB ? `${teamA.nameKo} vs ${teamB.nameKo}` : matchTitle(matchItem, teamA, teamB);
  return `
    <article class="schedule-mini">
      <span class="badge ${matchItem.status === "official" ? "top" : "sample"}">${scheduleStatusLabel(matchItem.status)}</span>
      <strong>${escapeHtml(opponent)}</strong>
      <span>${escapeHtml(matchItem.kstDateTime)} KST</span>
      <small>${escapeHtml(venue?.name || "Venue TBD")} · ${escapeHtml(venue?.cityKo || "")}</small>
    </article>
  `;
}

function fixtureTeam(team, fallback) {
  if (!team) return `<div class="fixture-team tbd"><span>${escapeHtml(fallback)}</span></div>`;
  return `
    <div class="fixture-team">
      ${flag(team, "flag-img")}
      <span>${escapeHtml(team.nameKo)}</span>
    </div>
  `;
}

function matchTitle(matchItem, teamA, teamB) {
  if (teamA && teamB) return `${teamA.nameKo} vs ${teamB.nameKo}`;
  return matchItem.stage === "Final" ? "결승전" : matchItem.stage === "Third Place" ? "3위 결정전" : "대진 미정";
}

function scheduleStatusLabel(status) {
  if (status === "official") return "공식 확인";
  if (status === "official-slot") return "공식 슬롯";
  return "시나리오";
}

function probBox(label, value) {
  return `
    <div class="prob-box">
      <span class="team-meta">${escapeHtml(label)}</span>
      <strong>${value}%</strong>
      ${bar(value)}
    </div>
  `;
}

function seasonStats(player) {
  const stats = player.seasonStats;
  return `
    <div class="season-card">
      <span>${escapeHtml(stats.season)}</span>
      <strong>${escapeHtml(stats.status)}</strong>
      <small>출장 ${escapeHtml(stats.apps)} · 골 ${escapeHtml(stats.goals)} · 도움 ${escapeHtml(stats.assists)}</small>
    </div>
  `;
}

function moneyChip(player, size = "normal") {
  const salary = player.salary;
  if (!salary) return "";
  if (!salary.annualUsd) {
    return `
      <div class="money-chip ${size === "mini" ? "mini" : ""}">
        <strong>연봉 업데이트 필요</strong>
        <span>${escapeHtml(salary.source || "추정 데이터 대기")}</span>
      </div>
    `;
  }
  return `
    <div class="money-chip ${size === "mini" ? "mini" : ""}" title="${escapeAttr(`${salary.season} ${salary.basis} · ${salary.source}`)}">
      <strong>${formatUsd(salary.annualUsd)}</strong>
      <span>${formatKrw(salary.annualKrw)} · 주급 ${formatUsd(salary.weeklyUsd)}</span>
      <small>${escapeHtml(salary.basis)} · ${escapeHtml(salary.source)}</small>
    </div>
  `;
}

function formatUsd(value) {
  if (!value) return "-";
  if (value >= 1000000) return `$${trimNumber(value / 1000000)}M`;
  if (value >= 1000) return `$${trimNumber(value / 1000)}K`;
  return `$${value}`;
}

function formatKrw(value) {
  if (!value) return "-";
  const eok = value / 100000000;
  if (eok >= 1) return `약 ${trimNumber(eok)}억 원`;
  return `약 ${Math.round(value / 10000).toLocaleString("ko-KR")}만 원`;
}

function trimNumber(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1).replace(/\.0$/, "");
}

function statusBadge(status) {
  const className = status === "Top 2" ? "top" : status === "3rd race" ? "race" : "risk";
  const label = status === "Top 2" ? "Top 2" : status === "3rd race" ? "3위 경쟁" : "위험";
  return `<span class="badge ${className}">${label}</span>`;
}

function tag(value) {
  return `<span class="style-tag">${escapeHtml(value)}</span>`;
}

function ratingBar(label, value) {
  return `
    <div class="rating-row">
      <span>${escapeHtml(label)}</span>
      ${bar(value)}
      <strong>${value}</strong>
    </div>
  `;
}

function scoutingPill(label, value) {
  return `
    <div class="scout-pill">
      <span>${escapeHtml(label)}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function bar(value) {
  return `<span class="bar"><span style="width:${Math.max(0, Math.min(100, value))}%"></span></span>`;
}

function flag(team, className) {
  const code = escapeHtml(team.flagCode);
  return `<img class="${className}" src="https://flagcdn.com/w80/${code}.png" alt="${escapeHtml(team.nameKo)} 국기" loading="lazy" />`;
}

function playerPortrait(player, size = "medium") {
  const initials = getInitials(player.nameKo || player.name);
  const slug = player.wikiSlug ? ` data-wiki-slug="${escapeAttr(player.wikiSlug)}"` : "";
  const source = player.wikiSlug ? ` data-photo-source="Wikipedia"` : "";
  return `
    <div class="player-portrait ${size}"${slug}${source} title="${escapeAttr(player.name)}">
      <span>${escapeHtml(initials)}</span>
    </div>
  `;
}

async function hydrateWikiPhotos() {
  const targets = Array.from(document.querySelectorAll(".player-portrait[data-wiki-slug]:not(.photo-ready):not(.photo-loading)"));
  await Promise.all(targets.map(loadWikiPhoto));
}

async function loadWikiPhoto(target) {
  const slug = target.dataset.wikiSlug;
  if (!slug) return;
  target.classList.add("photo-loading");
  try {
    const source = await getWikiThumbnail(slug);
    if (!source) return;
    target.innerHTML = `<img src="${escapeAttr(source)}" alt="${escapeAttr(target.title)} 얼굴 사진" loading="lazy" referrerpolicy="no-referrer" />`;
    target.classList.add("photo-ready");
  } catch (error) {
    target.dataset.photoError = "true";
  } finally {
    target.classList.remove("photo-loading");
  }
}

async function getWikiThumbnail(slug) {
  if (photoCache.has(slug)) return photoCache.get(slug);
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${slug}`;
  const response = await fetch(url);
  if (!response.ok) {
    photoCache.set(slug, "");
    return "";
  }
  const json = await response.json();
  const source = json?.thumbnail?.source || "";
  photoCache.set(slug, source);
  return source;
}

function getInitials(value) {
  const text = String(value).trim();
  if (!text) return "P";
  if (/[\uac00-\ud7af]/.test(text)) return text.slice(0, 2);
  return text
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}
