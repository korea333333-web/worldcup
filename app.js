const DATA = window.WORLD_CUP_DATA;
const state = {
  activeTab: "groups",
  query: "",
  status: "all",
  matchupA: "korea",
  matchupB: "mexico"
};

const views = {
  groups: document.querySelector("#groupsView"),
  teams: document.querySelector("#teamsView"),
  players: document.querySelector("#playersView"),
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
  renderMatchups();
  renderBracket();
  renderSources();
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
      <article class="team-card">
        <div class="team-card-header">
          ${flag(team, "big-flag")}
          <div>
            <h3 class="card-title">${escapeHtml(team.nameKo)}</h3>
            <p class="team-meta">${escapeHtml(team.nameEn)} · ${escapeHtml(team.confederation)} · FIFA ${team.rank}</p>
          </div>
        </div>
        <ul class="compact-list">
          <li><strong>핵심:</strong> ${escapeHtml(team.players[0].name)} (${escapeHtml(team.players[0].position)})</li>
          <li><strong>강점:</strong> ${escapeHtml(team.strength)}</li>
          <li><strong>리스크:</strong> ${escapeHtml(team.weakness)}</li>
        </ul>
        <div class="probability" aria-label="${escapeHtml(team.nameKo)} 진출 확률">
          <span class="team-meta">32강 시나리오 ${team.advance}%</span>
          ${bar(team.advance)}
        </div>
        <button class="primary-button open-team" data-team-id="${team.id}" type="button">팀 상세</button>
      </article>
    `)
    .join("");

  views.teams.innerHTML = `
    ${sectionHeading("팀 탐색", "48개 팀을 카드로 훑고, 핵심 선수와 진출 시나리오를 빠르게 확인합니다.")}
    <div class="team-grid">${cards || `<div class="empty-state">조건에 맞는 팀이 없습니다.</div>`}</div>
  `;
  bindTeamButtons(views.teams);
}

function renderPlayers() {
  const cards = allTeams()
    .filter(matchesFilters)
    .flatMap((team) => team.players.map((player) => ({ team, player })))
    .map(({ team, player }) => `
      <article class="player-card">
        <div class="player-card-header">
          ${flag(team, "flag-img")}
          <div>
            <h3 class="card-title">${escapeHtml(player.name)}</h3>
            <p class="team-meta">${escapeHtml(team.nameKo)} · ${escapeHtml(player.club)} · ${escapeHtml(player.position)}</p>
          </div>
        </div>
        <p class="source-note">${escapeHtml(player.summary)}</p>
        <ul class="compact-list">
          <li><strong>역할:</strong> ${escapeHtml(player.role)}</li>
          <li><strong>영상:</strong> ${player.videos.length}개 큐레이션 링크</li>
        </ul>
        <button class="ghost-button open-team" data-team-id="${team.id}" type="button">팀에서 보기</button>
      </article>
    `)
    .join("");

  views.players.innerHTML = `
    ${sectionHeading("스타 플레이어", "각 대표팀의 첫 번째 핵심 선수를 중심으로 영상과 전력 메모를 연결합니다.")}
    <div class="player-grid">${cards || `<div class="empty-state">조건에 맞는 선수가 없습니다.</div>`}</div>
  `;
  bindTeamButtons(views.players);
}

function renderMatchups() {
  const teams = allTeams();
  const teamA = DATA.teams[state.matchupA] || teams[0];
  const teamB = DATA.teams[state.matchupB] || teams[1];
  const prediction = findPrediction(teamA.id, teamB.id) || generatedPrediction(teamA, teamB);
  const options = teams.map((team) => `<option value="${team.id}">${escapeHtml(team.nameKo)}</option>`).join("");

  views.matchups.innerHTML = `
    ${sectionHeading("매치업 분석", "두 팀을 선택하면 샘플/랭킹 기반 승률, 핵심 선수 대결, 근거를 분리해서 보여줍니다.")}
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
        <p class="source-note">숫자는 출처 유형과 함께 표시됩니다. sample은 화면 검증용입니다.</p>
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
          <li><strong>스타 대결:</strong> ${escapeHtml(teamA.players[0].name)} vs ${escapeHtml(teamB.players[0].name)}</li>
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
    ${sectionHeading("자료 출처", "공식 형식과 참가팀 정보는 FIFA 자료를 우선으로 두고, 영상은 큐레이션 링크로 시작합니다.")}
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
  const videos = team.players.flatMap((player) => player.videos.map((video) => ({ player, video })));

  dialog.innerHTML = `
    <div class="dialog-inner">
      <header class="dialog-head">
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
      <div class="dialog-grid">
        <section class="panel">
          <h3>전력 요약</h3>
          <ul class="compact-list">
            <li><strong>감독:</strong> ${escapeHtml(team.coach)}</li>
            <li><strong>FIFA 랭킹:</strong> ${team.rank}</li>
            <li><strong>32강 시나리오:</strong> ${team.advance}% · ${statusBadge(team.status)}</li>
            <li><strong>강점:</strong> ${escapeHtml(team.strength)}</li>
            <li><strong>리스크:</strong> ${escapeHtml(team.weakness)}</li>
          </ul>
          <div class="probability">
            <span class="team-meta">진출 확률 시나리오</span>
            ${bar(team.advance)}
          </div>
        </section>
        <section class="panel">
          <h3>스타 플레이어</h3>
          ${team.players.map((player) => `
            <article>
              <h4>${escapeHtml(player.name)}</h4>
              <p class="team-meta">${escapeHtml(player.position)} · ${escapeHtml(player.club)}</p>
              <p>${escapeHtml(player.summary)}</p>
            </article>
          `).join("")}
        </section>
      </div>
      <section class="video-grid" aria-label="관련 유튜브 영상">
        ${videos.map(({ player, video }) => videoCard(player, video)).join("") || `<div class="empty-state">영상 큐레이션이 아직 없습니다.</div>`}
      </section>
    </div>
  `;

  dialog.querySelector(".close-button").addEventListener("click", () => dialog.close());
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
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
  const playerText = team.players.map((player) => `${player.name} ${player.club}`).join(" ");
  const groupText = groupFor(team.id).name;
  const haystack = `${team.nameKo} ${team.nameEn} ${team.confederation} ${playerText} ${groupText}`.toLowerCase();
  const queryOk = !state.query || haystack.includes(state.query);
  const statusOk = state.status === "all" || team.status === state.status;
  return queryOk && statusOk;
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
            <span class="team-meta">${team.advance}%</span>
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
        <span class="team-meta">${escapeHtml(team.players[0].name)} · FIFA ${team.rank} · ${team.advance}%</span>
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

function videoCard(player, video) {
  return `
    <article class="video-card">
      <div class="video-thumb" aria-hidden="true">PLAY</div>
      <span class="badge sample">${escapeHtml(video.type)}</span>
      <h3 class="card-title">${escapeHtml(video.title)}</h3>
      <p class="team-meta">${escapeHtml(player.name)} · ${escapeHtml(video.channel)} · ${escapeHtml(video.language)}</p>
      <a href="${video.url}" target="_blank" rel="noreferrer">유튜브에서 보기</a>
    </article>
  `;
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

function statusBadge(status) {
  const className = status === "Top 2" ? "top" : status === "3rd race" ? "race" : "risk";
  const label = status === "Top 2" ? "Top 2" : status === "3rd race" ? "3위 경쟁" : "위험";
  return `<span class="badge ${className}">${label}</span>`;
}

function bar(value) {
  return `<span class="bar"><span style="width:${Math.max(0, Math.min(100, value))}%"></span></span>`;
}

function flag(team, className) {
  const code = escapeHtml(team.flagCode);
  return `<img class="${className}" src="https://flagcdn.com/w80/${code}.png" alt="${escapeHtml(team.nameKo)} 국기" loading="lazy" />`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
