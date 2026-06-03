const DATA = window.WORLD_CUP_DATA;
const state = {
  activeTab: "groups",
  query: "",
  status: "all",
  matchupA: "korea",
  matchupB: "mexico"
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
    .map((team) => `
      <article class="team-card team-card-rich">
        <div class="team-card-header">
          ${flag(team, "big-flag")}
          <div>
            <h3 class="card-title">${escapeHtml(team.nameKo)}</h3>
            <p class="team-meta">${escapeHtml(groupFor(team.id).name)} · ${escapeHtml(team.confederation)} · FIFA ${team.rank}</p>
          </div>
        </div>
        <div class="player-face-stack" aria-label="${escapeHtml(team.nameKo)} 핵심 선수">
          ${team.players.slice(0, 5).map((player) => playerPortrait(player, "small")).join("")}
        </div>
        <div class="tag-row">${(team.styleTags || []).slice(0, 4).map(tag).join("")}</div>
        <ul class="compact-list">
          ${team.players.slice(0, 3).map((player) => `
            <li><strong>${escapeHtml(player.nameKo || player.name)}</strong> · ${escapeHtml(player.position)} · ${escapeHtml(player.club)}</li>
          `).join("")}
          <li><strong>주목 경기:</strong> ${escapeHtml(team.watchMatch || "업데이트 예정")}</li>
        </ul>
        <div class="rating-mini">
          ${ratingBar("공격", team.ratings.attack)}
          ${ratingBar("중원", team.ratings.midfield)}
          ${ratingBar("수비", team.ratings.defense)}
        </div>
        <div class="probability" aria-label="${escapeHtml(team.nameKo)} 진출 확률">
          <span class="team-meta">32강 시나리오 ${team.advance}% · ${escapeHtml(team.dataStatus)}</span>
          ${bar(team.advance)}
        </div>
        <button class="primary-button open-team" data-team-id="${team.id}" type="button">스카우팅 리포트</button>
      </article>
    `)
    .join("");

  views.teams.innerHTML = `
    ${sectionHeading("팀 탐색", "핵심 선수, 소속 클럽, 역할, 능력치, 32강 시나리오를 한 카드에서 확인합니다.")}
    <div class="team-grid">${cards || `<div class="empty-state">조건에 맞는 팀이 없습니다.</div>`}</div>
  `;
  bindTeamButtons(views.teams);
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
  const videos = [
    ...(team.videos || []),
    ...team.players.slice(0, 4).flatMap((player) => player.videos || [])
  ];

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

function playerShowcase(player) {
  return `
    <article class="star-card">
      ${playerPortrait(player, "large")}
      <div>
        <span class="badge top">${escapeHtml(player.tag || "핵심")}</span>
        <h4>${escapeHtml(player.nameKo || player.name)}</h4>
        <p class="team-meta">${escapeHtml(player.name)} · ${escapeHtml(player.position)} · ${escapeHtml(player.club)}</p>
      </div>
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
      </div>
      <div class="squad-stat">
        <span>${escapeHtml(player.seasonStats.season)}</span>
        <strong>${escapeHtml(player.seasonStats.status)}</strong>
      </div>
    </article>
  `;
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
  const label = video.type === "tactical" ? "전술 분석" : video.type === "interview" ? "인터뷰" : "하이라이트";
  return `
    <article class="video-card">
      <a class="video-thumb video-thumb-generated" href="${escapeAttr(video.url)}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(video.title)} 보기">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(video.title)}</strong>
      </a>
      <span class="badge sample">${escapeHtml(video.type)}</span>
      <h3 class="card-title">${escapeHtml(video.title)}</h3>
      <p class="team-meta">${escapeHtml(video.channel)} · YouTube search</p>
      <a href="${escapeAttr(video.url)}" target="_blank" rel="noreferrer">유튜브에서 보기</a>
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
