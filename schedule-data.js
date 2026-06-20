(function addWorldCupSchedule() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  data.matchSchedule = {
    updatedAt: "2026-06-13",
    sourceNote: "FIFA 공식 일정과 결과 페이지를 기준으로 개막 직후 경기 상태를 갱신했습니다. 일정 카드는 킥오프 기준 형식을 유지하되 이미 끝난 경기는 note에 최종 스코어를 적었습니다.",
    sources: [
      {
        id: "fifa-schedule",
        title: "FIFA World Cup 2026 match schedule, fixtures and stadiums",
        url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
        checkedAt: "2026-06-13"
      },
      {
        id: "fifa-standings",
        title: "FIFA World Cup 2026 standings",
        url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
        checkedAt: "2026-06-13"
      }
    ],
    venues: [
      venue("mexico-city", "Mexico City Stadium", "멕시코시티", "멕시코", "UTC-6"),
      venue("guadalajara", "Guadalajara Stadium", "과달라하라", "멕시코", "UTC-6"),
      venue("monterrey", "Monterrey Stadium", "몬테레이", "멕시코", "UTC-6"),
      venue("toronto", "Toronto Stadium", "토론토", "캐나다", "UTC-4"),
      venue("vancouver", "Vancouver Stadium", "밴쿠버", "캐나다", "UTC-7"),
      venue("new-york-new-jersey", "New York New Jersey Stadium", "뉴욕·뉴저지", "미국", "UTC-4"),
      venue("los-angeles", "Los Angeles Stadium", "로스앤젤레스", "미국", "UTC-7"),
      venue("dallas", "Dallas Stadium", "댈러스", "미국", "UTC-5"),
      venue("miami", "Miami Stadium", "마이애미", "미국", "UTC-4"),
      venue("atlanta", "Atlanta Stadium", "애틀랜타", "미국", "UTC-4"),
      venue("seattle", "Seattle Stadium", "시애틀", "미국", "UTC-7"),
      venue("houston", "Houston Stadium", "휴스턴", "미국", "UTC-5")
    ],
    matches: [
      match(1, "Group A", "2026-06-11", "13:00", "2026-06-12 04:00", "mexico-city", "mexico", "south-africa", "official", "종료: 멕시코 2-0 남아공"),
      match(2, "Group A", "2026-06-11", "20:00", "2026-06-12 11:00", "guadalajara", "korea", "czechia", "official", "종료: 대한민국 2-1 체코"),
      match(3, "Group B", "2026-06-12", "15:00", "2026-06-13 04:00", "toronto", "canada", "bosnia", "official", "종료: 캐나다 1-1 보스니아"),
      match(4, "Group D", "2026-06-12", "18:00", "2026-06-13 10:00", "los-angeles", "usa", "paraguay", "official", "종료: 미국 4-1 파라과이"),
      match(5, "Group C", "2026-06-13", "18:00", "2026-06-14 07:00", "new-york-new-jersey", "brazil", "morocco", "official", "브라질 대회 첫 경기"),
      match(6, "Group F", "2026-06-14", "15:00", "2026-06-15 05:00", "dallas", "netherlands", "japan", "official", "일본 조별리그 1차전"),
      match(7, "Group I", "2026-06-16", "15:00", "2026-06-17 04:00", "new-york-new-jersey", "france", "senegal", "official", "프랑스 조별리그 1차전"),
      match(8, "Group A", "2026-06-18", "19:00", "2026-06-19 10:00", "guadalajara", "mexico", "korea", "official", "A조 핵심 매치업"),
      match(9, "Group A", "2026-06-18", "12:00", "2026-06-19 01:00", "atlanta", "czechia", "south-africa", "official", "A조 2차전"),
      match(10, "Group A", "2026-06-24", "19:00", "2026-06-25 10:00", "monterrey", "south-africa", "korea", "official", "대한민국 조별리그 최종전"),
      match(11, "Group A", "2026-06-24", "19:00", "2026-06-25 10:00", "mexico-city", "czechia", "mexico", "official", "A조 최종전"),
      match(101, "Third Place", "2026-07-18", "14:00", "2026-07-19 03:00", "miami", null, null, "official-slot", "3위 결정전"),
      match(104, "Final", "2026-07-19", "15:00", "2026-07-20 04:00", "new-york-new-jersey", null, null, "official-slot", "결승전")
    ]
  };

  function venue(id, name, cityKo, countryKo, timezone) {
    return { id, name, cityKo, countryKo, timezone };
  }

  function match(number, stage, date, localTime, kstDateTime, venueId, teamA, teamB, status, note) {
    return {
      number,
      stage,
      date,
      localTime,
      kstDateTime,
      venueId,
      teamA,
      teamB,
      status,
      note
    };
  }
})();

(function finalizeWorldCupScheduleJune18() {
  const data = window.WORLD_CUP_DATA;
  const schedule = data?.matchSchedule;
  if (!schedule) return;

  schedule.updatedAt = "2026-06-18";
  schedule.sourceNote = "FIFA official results and standings were rechecked at the 2026-06-18 07:00 KST automation cutoff. Completed matches before that cutoff were written back into the scenario schedule with trusted report notes where detailed official match reports were not yet pinned.";

  (schedule.sources || []).forEach((source) => {
    source.checkedAt = "2026-06-18";
  });

  const iraqNorway = schedule.matches.find((item) => item.teamA === "iraq" && item.teamB === "norway");
  if (iraqNorway) {
    iraqNorway.note = "Final: Iraq 1-4 Norway";
  }
})();

(function extendWorldCupScheduleJune18() {
  const data = window.WORLD_CUP_DATA;
  const schedule = data?.matchSchedule;
  if (!schedule) return;

  schedule.updatedAt = "2026-06-18";
  schedule.sourceNote = "FIFA official results and standings were rechecked at the 2026-06-18 07:00 KST automation cutoff. Completed matches before that cutoff were written back into the scenario schedule with trusted report notes where detailed official match reports were not yet pinned.";

  (schedule.sources || []).forEach((source) => {
    source.checkedAt = "2026-06-18";
  });

  const ensureVenue = (id, name, cityKo, countryKo, timezone) => {
    if (schedule.venues.some((venue) => venue.id === id)) return;
    schedule.venues.push({ id, name, cityKo, countryKo, timezone });
  };

  const upsertMatchByDateTeams = (match) => {
    const index = schedule.matches.findIndex((item) =>
      item.date === match.date &&
      item.teamA === match.teamA &&
      item.teamB === match.teamB
    );

    if (index >= 0) {
      schedule.matches[index] = { ...schedule.matches[index], ...match };
      return;
    }

    schedule.matches.push(match);
  };

  ensureVenue("kansas-city", "Kansas City Stadium", "Kansas City", "USA", "UTC-5");

  upsertMatchByDateTeams({
    number: 18,
    stage: "Group I",
    date: "2026-06-16",
    localTime: "18:00",
    kstDateTime: "2026-06-17 07:00",
    venueId: "boston",
    teamA: "iraq",
    teamB: "norway",
    status: "official",
    note: "Final: Iraq 1-4 Norway"
  });

  upsertMatchByDateTeams({
    number: 19,
    stage: "Group J",
    date: "2026-06-16",
    localTime: "18:00",
    kstDateTime: "2026-06-17 08:00",
    venueId: "kansas-city",
    teamA: "argentina",
    teamB: "algeria",
    status: "official",
    note: "Final: Argentina 3-0 Algeria"
  });

  upsertMatchByDateTeams({
    number: 20,
    stage: "Group J",
    date: "2026-06-16",
    localTime: "18:00",
    kstDateTime: "2026-06-17 10:00",
    venueId: "san-francisco-bay-area",
    teamA: "austria",
    teamB: "jordan",
    status: "official",
    note: "Final: Austria 3-1 Jordan"
  });

  upsertMatchByDateTeams({
    number: 23,
    stage: "Group K",
    date: "2026-06-17",
    localTime: "13:00",
    kstDateTime: "2026-06-18 01:00",
    venueId: "houston",
    teamA: "portugal",
    teamB: "dr-congo",
    status: "official",
    note: "Final: Portugal 1-1 DR Congo"
  });

  upsertMatchByDateTeams({
    number: 24,
    stage: "Group L",
    date: "2026-06-17",
    localTime: "14:00",
    kstDateTime: "2026-06-18 04:00",
    venueId: "dallas",
    teamA: "england",
    teamB: "croatia",
    status: "official",
    note: "Final: England 4-2 Croatia"
  });

  schedule.matches.sort((a, b) => {
    if (a.kstDateTime === b.kstDateTime) return a.number - b.number;
    return a.kstDateTime.localeCompare(b.kstDateTime);
  });
})();

(function extendWorldCupScheduleJune14() {
  const data = window.WORLD_CUP_DATA;
  const schedule = data?.matchSchedule;
  if (!schedule) return;

  schedule.updatedAt = "2026-06-14";
  schedule.sourceNote = "FIFA 공식 일정과 결과 페이지를 기준으로 개막 2일 차까지 반영했습니다. 일정 카드는 킥오프 기준 형식을 유지하되 이미 끝난 경기는 note에 최종 스코어를 적었습니다.";

  (schedule.sources || []).forEach((source) => {
    source.checkedAt = "2026-06-14";
  });

  const ensureVenue = (id, name, cityKo, countryKo, timezone) => {
    if (schedule.venues.some((venue) => venue.id === id)) return;
    schedule.venues.push({ id, name, cityKo, countryKo, timezone });
  };

  const upsertMatch = (match) => {
    const index = schedule.matches.findIndex((item) => item.number === match.number);
    if (index >= 0) {
      schedule.matches[index] = match;
      return;
    }
    schedule.matches.push(match);
  };

  ensureVenue("san-francisco-bay-area", "San Francisco Bay Area Stadium", "샌타클래라", "미국", "UTC-7");
  ensureVenue("boston", "Boston Stadium", "폭스버러", "미국", "UTC-4");

  upsertMatch({
    number: 5,
    stage: "Group B",
    date: "2026-06-13",
    localTime: "12:00",
    kstDateTime: "2026-06-14 04:00",
    venueId: "san-francisco-bay-area",
    teamA: "qatar",
    teamB: "switzerland",
    status: "official",
    note: "종료: 카타르 1-1 스위스"
  });

  upsertMatch({
    number: 6,
    stage: "Group C",
    date: "2026-06-13",
    localTime: "18:00",
    kstDateTime: "2026-06-14 07:00",
    venueId: "new-york-new-jersey",
    teamA: "brazil",
    teamB: "morocco",
    status: "official",
    note: "종료: 브라질 1-1 모로코"
  });

  upsertMatch({
    number: 7,
    stage: "Group C",
    date: "2026-06-13",
    localTime: "21:00",
    kstDateTime: "2026-06-14 10:00",
    venueId: "boston",
    teamA: "haiti",
    teamB: "scotland",
    status: "official",
    note: "종료: 아이티 0-1 스코틀랜드"
  });

  upsertMatch({
    number: 8,
    stage: "Group D",
    date: "2026-06-13",
    localTime: "21:00",
    kstDateTime: "2026-06-14 13:00",
    venueId: "vancouver",
    teamA: "australia",
    teamB: "turkiye",
    status: "official",
    note: "6월 14일 오후 킥오프 예정"
  });

  schedule.matches.sort((a, b) => a.number - b.number);
})();

(function extendWorldCupScheduleJune17() {
  const data = window.WORLD_CUP_DATA;
  const schedule = data?.matchSchedule;
  if (!schedule) return;

  schedule.updatedAt = "2026-06-18";
  schedule.sourceNote = "FIFA official results and standings were rechecked at the 2026-06-18 07:00 KST automation cutoff. Completed matches before that cutoff were written back into the scenario schedule with trusted report notes where detailed official match reports were not yet pinned.";

  (schedule.sources || []).forEach((source) => {
    source.checkedAt = "2026-06-18";
  });

  const ensureVenue = (id, name, cityKo, countryKo, timezone) => {
    if (schedule.venues.some((venue) => venue.id === id)) return;
    schedule.venues.push({ id, name, cityKo, countryKo, timezone });
  };

  const upsertMatchByDateTeams = (match) => {
    const index = schedule.matches.findIndex((item) =>
      item.date === match.date &&
      item.teamA === match.teamA &&
      item.teamB === match.teamB
    );

    if (index >= 0) {
      schedule.matches[index] = { ...schedule.matches[index], ...match };
      return;
    }

    schedule.matches.push(match);
  };

  ensureVenue("philadelphia", "Philadelphia Stadium", "필라델피아", "미국", "UTC-4");

  upsertMatchByDateTeams({
    number: 9,
    stage: "Group E",
    date: "2026-06-14",
    localTime: "12:00",
    kstDateTime: "2026-06-15 01:00",
    venueId: "philadelphia",
    teamA: "ivory-coast",
    teamB: "ecuador",
    status: "official",
    note: "종료: 코트디부아르 1-0 에콰도르"
  });

  upsertMatchByDateTeams({
    number: 10,
    stage: "Group E",
    date: "2026-06-14",
    localTime: "18:00",
    kstDateTime: "2026-06-15 08:00",
    venueId: "houston",
    teamA: "germany",
    teamB: "curacao",
    status: "official",
    note: "종료: 독일 7-1 퀴라소"
  });

  upsertMatchByDateTeams({
    number: 11,
    stage: "Group F",
    date: "2026-06-14",
    localTime: "15:00",
    kstDateTime: "2026-06-15 05:00",
    venueId: "dallas",
    teamA: "netherlands",
    teamB: "japan",
    status: "official",
    note: "종료: 네덜란드 2-2 일본"
  });

  upsertMatchByDateTeams({
    number: 12,
    stage: "Group F",
    date: "2026-06-14",
    localTime: "18:00",
    kstDateTime: "2026-06-15 09:00",
    venueId: "monterrey",
    teamA: "sweden",
    teamB: "tunisia",
    status: "official",
    note: "종료: 스웨덴 5-1 튀니지"
  });

  upsertMatchByDateTeams({
    number: 13,
    stage: "Group H",
    date: "2026-06-15",
    localTime: "12:00",
    kstDateTime: "2026-06-16 01:00",
    venueId: "atlanta",
    teamA: "spain",
    teamB: "cabo-verde",
    status: "official",
    note: "종료: 스페인 0-0 카보베르데"
  });

  upsertMatchByDateTeams({
    number: 14,
    stage: "Group G",
    date: "2026-06-15",
    localTime: "15:00",
    kstDateTime: "2026-06-16 07:00",
    venueId: "seattle",
    teamA: "belgium",
    teamB: "egypt",
    status: "official",
    note: "종료: 벨기에 1-1 이집트"
  });

  upsertMatchByDateTeams({
    number: 15,
    stage: "Group H",
    date: "2026-06-15",
    localTime: "18:00",
    kstDateTime: "2026-06-16 09:00",
    venueId: "miami",
    teamA: "saudi-arabia",
    teamB: "uruguay",
    status: "official",
    note: "종료: 사우디아라비아 1-1 우루과이"
  });

  upsertMatchByDateTeams({
    number: 16,
    stage: "Group G",
    date: "2026-06-15",
    localTime: "21:00",
    kstDateTime: "2026-06-16 12:00",
    venueId: "los-angeles",
    teamA: "iran",
    teamB: "new-zealand",
    status: "official",
    note: "종료: 이란 2-2 뉴질랜드"
  });

  upsertMatchByDateTeams({
    number: 17,
    stage: "Group I",
    date: "2026-06-16",
    localTime: "15:00",
    kstDateTime: "2026-06-17 04:00",
    venueId: "new-york-new-jersey",
    teamA: "france",
    teamB: "senegal",
    status: "official",
    note: "종료: 프랑스 3-1 세네갈"
  });

  upsertMatchByDateTeams({
    number: 18,
    stage: "Group I",
    date: "2026-06-16",
    localTime: "18:00",
    kstDateTime: "2026-06-17 07:00",
    venueId: "boston",
    teamA: "iraq",
    teamB: "norway",
    status: "official",
    note: "Final: Iraq 1-4 Norway"
  });

  schedule.matches.sort((a, b) => {
    if (a.kstDateTime === b.kstDateTime) return a.number - b.number;
    return a.kstDateTime.localeCompare(b.kstDateTime);
  });
})();

(function extendWorldCupScheduleJune19() {
  const data = window.WORLD_CUP_DATA;
  const schedule = data?.matchSchedule;
  if (!schedule) return;

  schedule.updatedAt = "2026-06-19";
  schedule.sourceNote = "FIFA official results and standings were rechecked at the 2026-06-19 07:00 KST automation cutoff. Group A second-matchday finals available by the cutoff were written back into the scenario schedule, with trusted live reports used only for scorer and match-context notes.";

  (schedule.sources || []).forEach((source) => {
    source.checkedAt = "2026-06-19";
  });

  const upsertMatchByDateTeams = (match) => {
    const index = schedule.matches.findIndex((item) =>
      item.date === match.date &&
      item.teamA === match.teamA &&
      item.teamB === match.teamB
    );

    if (index >= 0) {
      schedule.matches[index] = { ...schedule.matches[index], ...match };
      return;
    }

    schedule.matches.push(match);
  };

  upsertMatchByDateTeams({
    number: 8,
    stage: "Group A",
    date: "2026-06-18",
    localTime: "19:00",
    kstDateTime: "2026-06-19 10:00",
    venueId: "guadalajara",
    teamA: "mexico",
    teamB: "korea",
    status: "official",
    note: "Final: Mexico 1-0 Korea Republic"
  });

  upsertMatchByDateTeams({
    number: 9,
    stage: "Group A",
    date: "2026-06-18",
    localTime: "12:00",
    kstDateTime: "2026-06-19 01:00",
    venueId: "atlanta",
    teamA: "czechia",
    teamB: "south-africa",
    status: "official",
    note: "Final: Czechia 1-1 South Africa"
  });

  schedule.matches.sort((a, b) => {
    if (a.kstDateTime === b.kstDateTime) return a.number - b.number;
    return a.kstDateTime.localeCompare(b.kstDateTime);
  });
})();

(function extendWorldCupScheduleJune20() {
  const data = window.WORLD_CUP_DATA;
  const schedule = data?.matchSchedule;
  if (!schedule) return;

  schedule.updatedAt = "2026-06-20";
  schedule.sourceNote = "FIFA official results and standings were rechecked at the 2026-06-20 07:00 KST automation cutoff. Completed Group B and Group D matches available by that cutoff were written back into the scenario schedule, with trusted match reports used only for scorer, card and injury context.";

  (schedule.sources || []).forEach((source) => {
    source.checkedAt = "2026-06-20";
  });

  const upsertMatchByDateTeams = (match) => {
    const index = schedule.matches.findIndex((item) =>
      item.date === match.date &&
      item.teamA === match.teamA &&
      item.teamB === match.teamB
    );

    if (index >= 0) {
      schedule.matches[index] = { ...schedule.matches[index], ...match };
      return;
    }

    schedule.matches.push(match);
  };

  upsertMatchByDateTeams({
    stage: "Group B",
    date: "2026-06-18",
    localTime: "15:00",
    kstDateTime: "2026-06-19 07:00",
    venueId: "vancouver",
    teamA: "canada",
    teamB: "qatar",
    status: "official",
    note: "Final: Canada 6-0 Qatar"
  });

  upsertMatchByDateTeams({
    stage: "Group D",
    date: "2026-06-19",
    localTime: "12:00",
    kstDateTime: "2026-06-20 04:00",
    venueId: "seattle",
    teamA: "usa",
    teamB: "australia",
    status: "official",
    note: "Final: USA 2-0 Australia"
  });

  schedule.matches.sort((a, b) => {
    if (a.kstDateTime === b.kstDateTime) return (a.number ?? 0) - (b.number ?? 0);
    return a.kstDateTime.localeCompare(b.kstDateTime);
  });
})();
