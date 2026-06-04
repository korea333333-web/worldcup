(function attachGroupUtils(root) {
  const ROUND32_ROUTE = {
    A: {
      winner: route("A 1위", "32강", "Match 79", "1A vs 3C/E/F/H/I", "2026-07-01", "Mexico City Stadium", "Mexico City", "시나리오 슬롯"),
      runnerUp: route("A 2위", "32강", "Match 73", "2A vs 2B", "2026-06-28", "Los Angeles Stadium", "Inglewood", "시나리오 슬롯"),
      third: route("A 3위", "32강 가능", "3위 상위권", "상위 8개 3위 안에 들면 32강", "2026-06-28~07-03", "TBD", "TBD", "3위 경쟁")
    }
  };

  const DEFAULT_ROUTE = {
    winner: route("조 1위", "32강", "공식 브래킷 슬롯", "조 1위 배정 슬롯", "2026-06-28~07-03", "TBD", "TBD", "시나리오"),
    runnerUp: route("조 2위", "32강", "공식 브래킷 슬롯", "조 2위 배정 슬롯", "2026-06-28~07-03", "TBD", "TBD", "시나리오"),
    third: route("조 3위", "32강 가능", "3위 상위권", "상위 8개 3위 안에 들면 32강", "2026-06-28~07-03", "TBD", "TBD", "3위 경쟁")
  };

  const DEEP_ROUTE = [
    route("32강 승자", "16강", "Winner route", "32강을 이긴 팀끼리 다음 라운드", "2026-07-04~07-07", "TBD", "TBD", "결과 연동 예정"),
    route("16강 승자", "8강", "Quarter-final", "16강 승자끼리 8강", "2026-07-09~07-11", "TBD", "TBD", "결과 연동 예정"),
    route("8강 승자", "4강", "Semi-final", "8강 승자끼리 4강", "2026-07-14~07-15", "TBD", "TBD", "결과 연동 예정"),
    route("4강 승자", "결승", "Match 104", "준결승 승자끼리 결승", "2026-07-19", "New York New Jersey Stadium", "East Rutherford", "공식 슬롯")
  ];

  function buildGroupMatches(group, matches = []) {
    return matches
      .filter((matchItem) => matchItem.stage === group.name)
      .sort((a, b) => String(a.date).localeCompare(String(b.date)) || Number(a.number) - Number(b.number));
  }

  function buildProjectedGroupTable(group, teamsById = {}) {
    return group.teams
      .map((teamId) => teamsById[teamId])
      .filter(Boolean)
      .sort((a, b) => (b.advance || 0) - (a.advance || 0))
      .map((team, index) => ({
        team,
        rank: index + 1,
        label: index === 0 ? "1위 예상" : index === 1 ? "2위 예상" : index === 2 ? "3위 경쟁" : "탈락권"
      }));
  }

  function buildGroupRouteSlots(group, projectedTable) {
    const template = ROUND32_ROUTE[group.id] || DEFAULT_ROUTE;
    const seeds = [template.winner, template.runnerUp, template.third];
    return seeds.map((slot, index) => ({
      ...slot,
      seed: slot.seed.replace(/^조/, `${group.id}`),
      team: projectedTable[index]?.team || null
    }));
  }

  function buildDeepRoute() {
    return DEEP_ROUTE.slice();
  }

  function route(seed, stage, matchLabel, opponent, date, venue, city, status) {
    return { seed, stage, matchLabel, opponent, date, venue, city, status };
  }

  const api = {
    buildGroupMatches,
    buildProjectedGroupTable,
    buildGroupRouteSlots,
    buildDeepRoute
  };

  root.GROUP_UTILS = api;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
