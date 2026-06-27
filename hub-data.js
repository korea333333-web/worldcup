(function extendWorldCupHubData() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  data.sources.push(
    {
      id: "fifa-results-2026-06-13",
      title: "FIFA World Cup 2026 일정·결과·하이라이트",
      publisher: "FIFA",
      url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
      checkedAt: "2026-06-13",
      reliability: "official"
    },
    {
      id: "fifa-standings-2026-06-13",
      title: "FIFA World Cup 2026 조별 순위",
      publisher: "FIFA",
      url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
      checkedAt: "2026-06-13",
      reliability: "official"
    },
    {
      id: "fifa-opening-ceremony-2026",
      title: "FIFA 월드컵 2026 개막 세리머니 기사",
      publisher: "FIFA",
      url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/opening-ceremony-usa",
      checkedAt: "2026-06-13",
      reliability: "official"
    },
    {
      id: "fifa-canada-ceremony-2026",
      title: "캐나다 개막 세리머니 추가 라인업",
      publisher: "Inside FIFA",
      url: "https://inside.fifa.com/media-releases/expanded-lineup-revealed-world-cup-2026-tm-ceremonies-canada",
      checkedAt: "2026-06-13",
      reliability: "official"
    },
    {
      id: "youtube-interviews-curated",
      title: "인터뷰 및 세리머니 영상 후보 검색",
      publisher: "YouTube",
      url: "https://www.youtube.com",
      checkedAt: "2026-06-13",
      reliability: "curated"
    }
  );

  data.openingCeremony = {
    updatedAt: "2026-06-13",
    title: "개막 세리머니",
    sourceNote: "개막식과 개최국 세리머니는 FIFA 공식 기사와 Inside FIFA 보도 기준으로 정리했습니다. 공식 풀영상이 없으면 검색 후보 링크를 남깁니다.",
    items: [
      {
        id: "opening-ceremony-mexico-city",
        type: "event",
        categoryLabel: "멕시코시티 개막식",
        headline: "멕시코시티 메인 오프닝 출연진",
        summary: "FIFA 기사 기준 핵심 라인업은 Katy Perry, Future, Anitta, LISA, Rema, Tyla였습니다.",
        performer: "Katy Perry · Future · Anitta · LISA · Rema · Tyla",
        songTitle: "공식 공연 하이라이트 후보",
        thumbnailMode: "search-candidate",
        thumbnailSource: "개막식 영상 후보",
        url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/opening-ceremony-usa",
        source: {
          label: "FIFA",
          url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/opening-ceremony-usa",
          checkedAt: "2026-06-13",
          reliability: "official"
        },
        videoCandidates: [
          {
            title: "FIFA World Cup 2026 opening ceremony",
            url: "https://www.youtube.com/results?search_query=FIFA+World+Cup+2026+opening+ceremony"
          }
        ]
      },
      {
        id: "opening-ceremony-toronto",
        type: "event",
        categoryLabel: "토론토 세리머니",
        headline: "캐나다 첫 경기 세리머니 라인업",
        summary: "Inside FIFA 보도 기준으로 Alanis Morissette, Alessia Cara, Jessie Reyez, Michael Bublé, Will Arnett 등이 참여했습니다.",
        performer: "Alanis Morissette · Alessia Cara · Jessie Reyez · Michael Bublé",
        songTitle: "Will Arnett 등장 포함",
        thumbnailMode: "search-candidate",
        thumbnailSource: "세리머니 영상 후보",
        url: "https://inside.fifa.com/media-releases/expanded-lineup-revealed-world-cup-2026-tm-ceremonies-canada",
        source: {
          label: "Inside FIFA",
          url: "https://inside.fifa.com/media-releases/expanded-lineup-revealed-world-cup-2026-tm-ceremonies-canada",
          checkedAt: "2026-06-13",
          reliability: "official"
        },
        videoCandidates: [
          {
            title: "Toronto World Cup 2026 opening ceremony",
            url: "https://www.youtube.com/results?search_query=Toronto+World+Cup+2026+opening+ceremony"
          }
        ]
      }
    ]
  };

  data.statsCenter = {
    updatedAt: "2026-06-13",
    playerStats: [
      { label: "폴라린 발로건", value: "2골 vs 파라과이" },
      { label: "황인범", value: "1골 1도움 vs 체코" },
      { label: "오현규", value: "대한민국 결승골" },
      { label: "훌리안 키뇨네스", value: "대회 개막전 첫 골" },
      { label: "사일 라린", value: "캐나다 월드컵 첫 승점 동점골" }
    ],
    teamStats: [
      { label: "A조 선두권", value: "멕시코 +2, 대한민국 +1, 두 팀 모두 승점 3" },
      { label: "B조 현황", value: "캐나다 1점, 보스니아 1점" },
      { label: "D조 현황", value: "미국 3점, 골득실 +3" },
      { label: "개막전 카드", value: "남아공 퇴장 2명, 멕시코 퇴장 1명" }
    ],
    emptyState: "경기 후 공식 결과와 주요 스탯을 반영했습니다."
  };
})();

(function finalizeWorldCupHubDataJune27() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  data.tournament.updatedAt = "2026-06-27";
  data.tournament.scenarioNote = "At the 2026-06-27 07:00 KST automation cutoff, FIFA official results and standings were rechecked and the live scenario surfaces were advanced through the latest completed Group D, E and F finales available before the run.";

  const upsertSource = (source) => {
    const index = data.sources.findIndex((item) => item.id === source.id);
    if (index >= 0) {
      data.sources[index] = source;
      return;
    }
    data.sources.push(source);
  };

  upsertSource({
    id: "fifa-results-2026-06-27",
    title: "FIFA World Cup 2026 schedule and results",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-27",
    reliability: "official"
  });

  upsertSource({
    id: "fifa-standings-2026-06-27",
    title: "FIFA World Cup 2026 standings",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
    checkedAt: "2026-06-27",
    reliability: "official"
  });

  upsertSource({
    id: "guardian-match-reports-2026-06-27",
    title: "Guardian World Cup 2026 Group D, E and F final-day reports",
    publisher: "The Guardian",
    url: "https://www.theguardian.com/football/live/2026/jun/25/germany-v-ecuador-world-cup-2026-live",
    checkedAt: "2026-06-27",
    reliability: "trusted"
  });

  if (data.openingCeremony) {
    data.openingCeremony.updatedAt = "2026-06-27";
  }

  data.statsCenter = {
    updatedAt: "2026-06-27",
    playerStats: [
      { label: "Gonzalo Plata", value: "77' winner vs Germany" },
      { label: "Jose Angulo", value: "quick equaliser in Ecuador's comeback" },
      { label: "Sebastian Berhalter", value: "goal and assist vs Turkiye" },
      { label: "Daizen Maeda", value: "opened Japan's qualification-clinching draw" },
      { label: "Anthony Elanga", value: "61' reply that sent Sweden through" }
    ],
    teamStats: [
      { label: "Group D", value: "USA still finished first on 6 points; Australia advanced in second after a 0-0 draw with Paraguay" },
      { label: "Group E", value: "Germany stayed top despite losing 2-1, while Ecuador surged into the last 32" },
      { label: "Group F", value: "Netherlands won the group; Japan progressed second and Sweden advanced from third" },
      { label: "Scenario delta", value: "USA-Turkiye, Paraguay-Australia, Ecuador-Germany and Japan-Sweden changed from future-state watch items to final results" },
      { label: "Cutoff note", value: "Only matches completed before the 2026-06-27 07:00 KST cutoff were merged in this run" }
    ],
    emptyState: "Latest official results available before the automation cutoff are reflected here."
  };
})();

(function extendWorldCupHubDataJune27() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  data.tournament.updatedAt = "2026-06-27";
  data.tournament.scenarioNote = "At the 2026-06-27 07:00 KST automation cutoff, FIFA official results and standings were rechecked and the live scenario surfaces were advanced through the latest completed Group D, E and F finales available before the run.";

  const upsertSource = (source) => {
    const index = data.sources.findIndex((item) => item.id === source.id);
    if (index >= 0) {
      data.sources[index] = source;
      return;
    }
    data.sources.push(source);
  };

  upsertSource({
    id: "fifa-results-2026-06-27",
    title: "FIFA World Cup 2026 schedule and results",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-27",
    reliability: "official"
  });

  upsertSource({
    id: "fifa-standings-2026-06-27",
    title: "FIFA World Cup 2026 standings",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
    checkedAt: "2026-06-27",
    reliability: "official"
  });

  upsertSource({
    id: "guardian-match-reports-2026-06-27",
    title: "Guardian World Cup 2026 Group D, E and F final-day reports",
    publisher: "The Guardian",
    url: "https://www.theguardian.com/football/live/2026/jun/25/germany-v-ecuador-world-cup-2026-live",
    checkedAt: "2026-06-27",
    reliability: "trusted"
  });

  if (data.openingCeremony) {
    data.openingCeremony.updatedAt = "2026-06-27";
  }

  data.statsCenter = {
    updatedAt: "2026-06-27",
    playerStats: [
      { label: "Gonzalo Plata", value: "77' winner vs Germany" },
      { label: "Jose Angulo", value: "quick equaliser in Ecuador's comeback" },
      { label: "Sebastian Berhalter", value: "goal and assist vs Turkiye" },
      { label: "Daizen Maeda", value: "opened Japan's qualification-clinching draw" },
      { label: "Anthony Elanga", value: "61' reply that sent Sweden through" }
    ],
    teamStats: [
      { label: "Group D", value: "USA still finished first on 6 points; Australia advanced in second after a 0-0 draw with Paraguay" },
      { label: "Group E", value: "Germany stayed top despite losing 2-1, while Ecuador surged into the last 32" },
      { label: "Group F", value: "Netherlands won the group; Japan progressed second and Sweden advanced from third" },
      { label: "Scenario delta", value: "USA-Turkiye, Paraguay-Australia, Ecuador-Germany and Japan-Sweden changed from future-state watch items to final results" },
      { label: "Cutoff note", value: "Only matches completed before the 2026-06-27 07:00 KST cutoff were merged in this run" }
    ],
    emptyState: "Latest official results available before the automation cutoff are reflected here."
  };
})();

(function finalizeWorldCupHubDataJune18() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  data.tournament.updatedAt = "2026-06-18";
  data.tournament.scenarioNote = "At the 2026-06-18 07:00 KST automation cutoff, FIFA official results and standings were rechecked and the scenario data was brought forward through the completed Group I, J, K and L openers available before the cutoff. Later matches on 2026-06-18 KST were intentionally left out of this run.";

  data.statsCenter = {
    updatedAt: "2026-06-18",
    playerStats: [
      { label: "Lionel Messi", value: "hat-trick vs Algeria" },
      { label: "Erling Haaland", value: "2 goals vs Iraq" },
      { label: "Harry Kane", value: "2 goals vs Croatia" },
      { label: "Yoane Wissa", value: "45+5' equaliser vs Portugal" },
      { label: "Jude Bellingham", value: "go-ahead goal in England opener" }
    ],
    teamStats: [
      { label: "Group I", value: "France and Norway lead after opening wins" },
      { label: "Group J", value: "Argentina 3-0 Algeria, Austria 3-1 Jordan" },
      { label: "Group K", value: "Portugal and DR Congo share points before Colombia opener" },
      { label: "Group L", value: "England open with a 4-2 win; later matches were outside cutoff" },
      { label: "Cutoff note", value: "Only matches finished before 07:00 KST were merged in this run" }
    ],
    emptyState: "Latest official results available before the automation cutoff are reflected here."
  };
})();

(function extendWorldCupHubDataJune18() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  data.tournament.updatedAt = "2026-06-18";
  data.tournament.scenarioNote = "At the 2026-06-18 07:00 KST automation cutoff, FIFA official results and standings were rechecked and the scenario data was brought forward through the completed Group I, J, K and L openers available before the cutoff. Later matches on 2026-06-18 KST were intentionally left out of this run.";

  const upsertSource = (source) => {
    const index = data.sources.findIndex((item) => item.id === source.id);
    if (index >= 0) {
      data.sources[index] = source;
      return;
    }
    data.sources.push(source);
  };

  upsertSource({
    id: "fifa-results-2026-06-18",
    title: "FIFA World Cup 2026 schedule and results",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-18",
    reliability: "official"
  });

  upsertSource({
    id: "fifa-standings-2026-06-18",
    title: "FIFA World Cup 2026 standings",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
    checkedAt: "2026-06-18",
    reliability: "official"
  });

  upsertSource({
    id: "guardian-match-reports-2026-06-18",
    title: "Guardian World Cup 2026 match reports and live blogs",
    publisher: "The Guardian",
    url: "https://www.theguardian.com/football/2026/jun/17/england-croatia-world-cup-2026-group-l-match-report",
    checkedAt: "2026-06-18",
    reliability: "trusted"
  });

  if (data.openingCeremony) {
    data.openingCeremony.updatedAt = "2026-06-18";
  }

  data.statsCenter = {
    updatedAt: "2026-06-18",
    playerStats: [
      { label: "Lionel Messi", value: "hat-trick vs Algeria" },
      { label: "Erling Haaland", value: "2 goals vs Iraq" },
      { label: "Harry Kane", value: "2 goals vs Croatia" },
      { label: "Yoane Wissa", value: "45+5' equaliser vs Portugal" },
      { label: "Jude Bellingham", value: "go-ahead goal in England opener" }
    ],
    teamStats: [
      { label: "Group I", value: "France +2 and Norway +3 lead after opening wins" },
      { label: "Group J", value: "Argentina 3-0 Algeria, Austria 3-1 Jordan" },
      { label: "Group K", value: "Portugal and DR Congo share points before Colombia opener" },
      { label: "Group L", value: "England open with a 4-2 win; Ghana and Panama were outside cutoff" },
      { label: "Cutoff note", value: "Only matches finished before 07:00 KST were merged in this run" }
    ],
    emptyState: "Latest official results available before the automation cutoff are reflected here."
  };
})();

(function extendWorldCupHubDataJune14() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  data.tournament.updatedAt = "2026-06-14";
  data.tournament.scenarioNote = "2026-06-14 기준 FIFA 공식 조 편성과 개막 2일 차까지 끝난 조별리그 결과를 반영했습니다. 승률과 일부 전력 평가는 여전히 UI 검증용 시나리오입니다.";

  const upsertSource = (source) => {
    const index = data.sources.findIndex((item) => item.id === source.id);
    if (index >= 0) {
      data.sources[index] = source;
      return;
    }
    data.sources.push(source);
  };

  upsertSource({
    id: "fifa-results-2026-06-14",
    title: "FIFA World Cup 2026 일정·결과·하이라이트",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-14",
    reliability: "official"
  });

  upsertSource({
    id: "fifa-standings-2026-06-14",
    title: "FIFA World Cup 2026 조별 순위",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
    checkedAt: "2026-06-14",
    reliability: "official"
  });

  upsertSource({
    id: "espn-match-summaries-2026-06-14",
    title: "ESPN FIFA World Cup 2026 match summaries",
    publisher: "ESPN",
    url: "https://www.espn.com/soccer/league/_/name/fifa.world",
    checkedAt: "2026-06-14",
    reliability: "trusted"
  });

  if (data.openingCeremony) {
    data.openingCeremony.updatedAt = "2026-06-14";
  }

  data.statsCenter = {
    updatedAt: "2026-06-14",
    playerStats: [
      { label: "폴라린 발로건", value: "2골 vs 파라과이" },
      { label: "비니시우스 주니오르", value: "브라질 월드컵 첫 골 vs 모로코" },
      { label: "존 맥긴", value: "스코틀랜드 결승골 vs 아이티" },
      { label: "브릴 엠볼로", value: "스위스 선제 PK 골 vs 카타르" },
      { label: "황인범", value: "1골 1도움 vs 체코" }
    ],
    teamStats: [
      { label: "A조 선두권", value: "멕시코 +2, 대한민국 +1, 두 팀 모두 승점 3" },
      { label: "B조 현황", value: "캐나다 1점, 보스니아 1점, 카타르 1점, 스위스 1점" },
      { label: "C조 현황", value: "스코틀랜드 3점, 브라질 1점, 모로코 1점, 아이티 0점" },
      { label: "D조 현황", value: "미국 3점, 골득실 +3, 호주-튀르키예 킥오프 대기" }
    ],
    emptyState: "공식 경기 결과와 주요 스탯을 반영했습니다."
  };
})();

(function extendWorldCupHubDataJune17() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  data.tournament.updatedAt = "2026-06-18";
  data.tournament.scenarioNote = "2026-06-17 KST 기준 FIFA 공식 일정/결과 페이지와 최근 매치 리포트를 대조해 6월 15일~17일 종료 경기 결과를 반영했습니다. 일부 승률/전력 평가는 여전히 UI 검증용 시나리오입니다.";

  const upsertSource = (source) => {
    const index = data.sources.findIndex((item) => item.id === source.id);
    if (index >= 0) {
      data.sources[index] = source;
      return;
    }
    data.sources.push(source);
  };

  upsertSource({
    id: "fifa-results-2026-06-17",
    title: "FIFA World Cup 2026 일정·결과",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-18",
    reliability: "official"
  });

  upsertSource({
    id: "fifa-standings-2026-06-17",
    title: "FIFA World Cup 2026 조별 순위",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
    checkedAt: "2026-06-18",
    reliability: "official"
  });

  upsertSource({
    id: "guardian-match-reports-2026-06-17",
    title: "Guardian World Cup 2026 match reports",
    publisher: "The Guardian",
    url: "https://www.theguardian.com/football/2026/jun/16/france-senegal-world-cup-group-i-match-report",
    checkedAt: "2026-06-18",
    reliability: "trusted"
  });

  if (data.openingCeremony) {
    data.openingCeremony.updatedAt = "2026-06-18";
  }

  data.statsCenter = {
    updatedAt: "2026-06-18",
    playerStats: [
      { label: "킬리안 음바페", value: "세네갈전 2골" },
      { label: "다이치 가마다", value: "네덜란드전 89분 동점골" },
      { label: "아마드 디알로", value: "에콰도르전 결승골" },
      { label: "야신 아야리", value: "튀니지전 2골" },
      { label: "이맘 아슈르", value: "벨기에전 선제골" }
    ],
    teamStats: [
      { label: "E조 흐름", value: "독일 +6, 코트디부아르 +1로 초반 우위" },
      { label: "F조 흐름", value: "일본과 네덜란드가 2-2, 스웨덴은 5-1 대승" },
      { label: "G조 흐름", value: "벨기에-이집트 1-1, 이란-뉴질랜드 2-2" },
      { label: "H조 흐름", value: "스페인 0-0 카보베르데, 사우디 1-1 우루과이" },
      { label: "I조 첫 경기", value: "프랑스 3-1 세네갈, 이라크-노르웨이는 별도 확인 중" }
    ],
    emptyState: "공식 경기 결과와 주요 스탯을 최신 확인 시점 기준으로 반영했습니다."
  };
})();

(function extendWorldCupHubDataJune19() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  data.tournament.updatedAt = "2026-06-19";
  data.tournament.scenarioNote = "At the 2026-06-19 07:00 KST automation cutoff, FIFA official results and standings were rechecked and the scenario data was brought forward through both completed Group A second-matchday finals from 2026-06-18 local time.";

  const upsertSource = (source) => {
    const index = data.sources.findIndex((item) => item.id === source.id);
    if (index >= 0) {
      data.sources[index] = source;
      return;
    }
    data.sources.push(source);
  };

  upsertSource({
    id: "fifa-results-2026-06-19",
    title: "FIFA World Cup 2026 schedule and results",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-19",
    reliability: "official"
  });

  upsertSource({
    id: "fifa-standings-2026-06-19",
    title: "FIFA World Cup 2026 standings",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
    checkedAt: "2026-06-19",
    reliability: "official"
  });

  upsertSource({
    id: "guardian-match-reports-2026-06-19",
    title: "Guardian World Cup 2026 Group A live reports",
    publisher: "The Guardian",
    url: "https://www.theguardian.com/football/live/2026/jun/19/fifa-world-cup-2026-live-mexico-v-south-korea-updates-mex-vs-kor-group-a-match-score-latest",
    checkedAt: "2026-06-19",
    reliability: "trusted"
  });

  if (data.openingCeremony) {
    data.openingCeremony.updatedAt = "2026-06-19";
  }

  data.statsCenter = {
    updatedAt: "2026-06-19",
    playerStats: [
      { label: "Luis Romo", value: "50' winner vs Korea Republic" },
      { label: "Raul Rangel", value: "late double save to seal Mexico win" },
      { label: "Teboho Mokoena", value: "83' penalty vs Czechia" },
      { label: "Michal Sadilek", value: "5' opener for Czechia" },
      { label: "Group A note", value: "Lee Kang-in and Paik Seung-ho both booked vs Mexico" }
    ],
    teamStats: [
      { label: "Group A leaders", value: "Mexico 6 points, 2 wins, 2 clean sheets" },
      { label: "Korea Republic", value: "3 points after two matches; final match decides qualification" },
      { label: "Czechia and South Africa", value: "both move to 1 point after the 1-1 draw" },
      { label: "Scenario delta", value: "Match 8 and 9 changed from scheduled placeholders to final results" },
      { label: "Cutoff note", value: "Group C and D second-matchday games were outside this 07:00 KST run" }
    ],
    emptyState: "Latest official results available before the automation cutoff are reflected here."
  };
})();

(function extendWorldCupHubDataJune20() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  data.tournament.updatedAt = "2026-06-20";
  data.tournament.scenarioNote = "At the 2026-06-20 07:00 KST automation cutoff, FIFA official results and standings were rechecked and the scenario data was brought forward through Canada's Group B win over Qatar and the USA's Group D win over Australia. Matches that kicked off at or after the cutoff remain for the next run.";

  const upsertSource = (source) => {
    const index = data.sources.findIndex((item) => item.id === source.id);
    if (index >= 0) {
      data.sources[index] = source;
      return;
    }
    data.sources.push(source);
  };

  upsertSource({
    id: "fifa-results-2026-06-20",
    title: "FIFA World Cup 2026 schedule and results",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-20",
    reliability: "official"
  });

  upsertSource({
    id: "fifa-standings-2026-06-20",
    title: "FIFA World Cup 2026 standings",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
    checkedAt: "2026-06-20",
    reliability: "official"
  });

  upsertSource({
    id: "guardian-match-reports-2026-06-20",
    title: "Guardian World Cup 2026 Canada and USA match reports",
    publisher: "The Guardian",
    url: "https://www.theguardian.com/football/2026/jun/19/usa-australia-world-cup-2026-group-d-match-report",
    checkedAt: "2026-06-20",
    reliability: "trusted"
  });

  if (data.openingCeremony) {
    data.openingCeremony.updatedAt = "2026-06-20";
  }

  data.statsCenter = {
    updatedAt: "2026-06-20",
    playerStats: [
      { label: "Jonathan David", value: "hat-trick vs Qatar" },
      { label: "Alex Freeman", value: "43' goal vs Australia" },
      { label: "Cyle Larin", value: "opened Canada's 6-0 win" },
      { label: "Nathan Saliba", value: "64' free-kick tribute after Kone injury" },
      { label: "Cameron Burgess", value: "11' own goal under US pressure" }
    ],
    teamStats: [
      { label: "Group B leaders", value: "Canada move top on goal difference after a 6-0 win" },
      { label: "Group D leaders", value: "USA reach 6 points and secure a knockout berth" },
      { label: "Qatar discipline", value: "Homam Ahmed and Assim Madibo both saw red cards" },
      { label: "Scenario delta", value: "Canada-Qatar and USA-Australia changed from future fixtures to final results" },
      { label: "Cutoff note", value: "Scotland-Morocco and later 2026-06-20 KST kickoffs were outside this run" }
    ],
    emptyState: "Latest official results available before the automation cutoff are reflected here."
  };
})();

(function extendWorldCupHubDataJune21() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  data.tournament.updatedAt = "2026-06-21";
  data.tournament.scenarioNote = "At the 2026-06-21 07:00 KST automation cutoff, FIFA official results and standings were rechecked and the scenario data was brought forward through Morocco's win over Scotland, Brazil's win over Haiti and Paraguay's win over Turkiye. Matches kicking off at or after the cutoff remain for the next run.";

  const upsertSource = (source) => {
    const index = data.sources.findIndex((item) => item.id === source.id);
    if (index >= 0) {
      data.sources[index] = source;
      return;
    }
    data.sources.push(source);
  };

  upsertSource({
    id: "fifa-results-2026-06-21",
    title: "FIFA World Cup 2026 schedule and results",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-21",
    reliability: "official"
  });

  upsertSource({
    id: "fifa-standings-2026-06-21",
    title: "FIFA World Cup 2026 standings",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
    checkedAt: "2026-06-21",
    reliability: "official"
  });

  upsertSource({
    id: "guardian-match-reports-2026-06-21",
    title: "Guardian World Cup 2026 Group C and D reports",
    publisher: "The Guardian",
    url: "https://www.theguardian.com/football/2026/jun/20/scotland-morocco-world-cup-match-report",
    checkedAt: "2026-06-21",
    reliability: "trusted"
  });

  if (data.openingCeremony) {
    data.openingCeremony.updatedAt = "2026-06-21";
  }

  data.statsCenter = {
    updatedAt: "2026-06-21",
    playerStats: [
      { label: "Ismael Saibari", value: "71-second winner vs Scotland" },
      { label: "Matheus Cunha", value: "brace vs Haiti" },
      { label: "Vinicius Junior", value: "sealed Brazil's 3-0 win before half-time" },
      { label: "Matias Galarza", value: "65-second opener vs Turkiye" },
      { label: "Miguel Almiron", value: "red card in Paraguay's win" }
    ],
    teamStats: [
      { label: "Group C leaders", value: "Brazil and Morocco move to 4 points, Scotland stay on 3" },
      { label: "Group D table", value: "USA lead with 6 points; Australia and Paraguay have 3 each" },
      { label: "Turkiye", value: "0 points from 2 matches and eliminated before facing the USA" },
      { label: "Scenario delta", value: "Scotland-Morocco, Brazil-Haiti and Turkiye-Paraguay changed from future fixtures to final results" },
      { label: "Cutoff note", value: "Netherlands-Sweden and later fixtures kicked off at or after the 07:00 KST cutoff" }
    ],
    emptyState: "Latest official results available before the automation cutoff are reflected here."
  };
})();

(function extendWorldCupHubDataJune26() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  data.tournament.updatedAt = "2026-06-26";
  data.tournament.scenarioNote = "At the 2026-06-26 07:00 KST automation cutoff, FIFA official results and standings were rechecked and the scenario data was brought forward through both completed Group A final-matchday fixtures from 2026-06-24 local time.";

  const upsertSource = (source) => {
    const index = data.sources.findIndex((item) => item.id === source.id);
    if (index >= 0) {
      data.sources[index] = source;
      return;
    }
    data.sources.push(source);
  };

  upsertSource({
    id: "fifa-results-2026-06-26",
    title: "FIFA World Cup 2026 schedule and results",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-26",
    reliability: "official"
  });

  upsertSource({
    id: "fifa-standings-2026-06-26",
    title: "FIFA World Cup 2026 standings",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
    checkedAt: "2026-06-26",
    reliability: "official"
  });

  upsertSource({
    id: "guardian-match-reports-2026-06-26",
    title: "Guardian World Cup 2026 Group A final-matchday reports",
    publisher: "The Guardian",
    url: "https://www.theguardian.com/football/live/2026/jun/24/south-africa-v-south-korea-world-cup-2026-live",
    checkedAt: "2026-06-26",
    reliability: "trusted"
  });

  if (data.openingCeremony) {
    data.openingCeremony.updatedAt = "2026-06-26";
  }

  data.statsCenter = {
    updatedAt: "2026-06-26",
    playerStats: [
      { label: "Thapelo Maseko", value: "63' winner vs South Korea" },
      { label: "Mateo Chavez", value: "first Mexico goal vs Czechia" },
      { label: "Julian Quinones", value: "61' insurance goal vs Czechia" },
      { label: "Alvaro Fidalgo", value: "first international goal at 90+4'" },
      { label: "Guillermo Ochoa", value: "154th Mexico cap in late cameo" }
    ],
    teamStats: [
      { label: "Group A winners", value: "Mexico finished first with 9 points and three clean sheets" },
      { label: "Group A runners-up", value: "South Africa reached 4 points and advanced in second place" },
      { label: "South Korea", value: "3 points and -1 goal difference after the final-matchday defeat" },
      { label: "Scenario delta", value: "South Africa-South Korea and Czechia-Mexico changed from scheduled fixtures to final results" },
      { label: "Cutoff note", value: "Only matches completed before the 2026-06-26 07:00 KST cutoff were merged in this run" }
    ],
    emptyState: "Latest official results available before the automation cutoff are reflected here."
  };
})();

(function finalizeWorldCupHubDataJune27() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  data.tournament.updatedAt = "2026-06-27";
  data.tournament.scenarioNote = "At the 2026-06-27 07:00 KST automation cutoff, FIFA official results and standings were rechecked and the live scenario surfaces were advanced through the latest completed Group D, E and F finales available before the run.";

  const upsertSource = (source) => {
    const index = data.sources.findIndex((item) => item.id === source.id);
    if (index >= 0) {
      data.sources[index] = source;
      return;
    }
    data.sources.push(source);
  };

  upsertSource({
    id: "fifa-results-2026-06-27",
    title: "FIFA World Cup 2026 schedule and results",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-27",
    reliability: "official"
  });

  upsertSource({
    id: "fifa-standings-2026-06-27",
    title: "FIFA World Cup 2026 standings",
    publisher: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
    checkedAt: "2026-06-27",
    reliability: "official"
  });

  upsertSource({
    id: "guardian-match-reports-2026-06-27",
    title: "Guardian World Cup 2026 Group D, E and F final-day reports",
    publisher: "The Guardian",
    url: "https://www.theguardian.com/football/live/2026/jun/25/germany-v-ecuador-world-cup-2026-live",
    checkedAt: "2026-06-27",
    reliability: "trusted"
  });

  if (data.openingCeremony) {
    data.openingCeremony.updatedAt = "2026-06-27";
  }

  data.statsCenter = {
    updatedAt: "2026-06-27",
    playerStats: [
      { label: "Gonzalo Plata", value: "77' winner vs Germany" },
      { label: "Jose Angulo", value: "quick equaliser in Ecuador's comeback" },
      { label: "Sebastian Berhalter", value: "goal and assist vs Turkiye" },
      { label: "Daizen Maeda", value: "opened Japan's qualification-clinching draw" },
      { label: "Anthony Elanga", value: "61' reply that sent Sweden through" }
    ],
    teamStats: [
      { label: "Group D", value: "USA still finished first on 6 points; Australia advanced in second after a 0-0 draw with Paraguay" },
      { label: "Group E", value: "Germany stayed top despite losing 2-1, while Ecuador surged into the last 32" },
      { label: "Group F", value: "Netherlands won the group; Japan progressed second and Sweden advanced from third" },
      { label: "Scenario delta", value: "USA-Turkiye, Paraguay-Australia, Ecuador-Germany and Japan-Sweden changed from future-state watch items to final results" },
      { label: "Cutoff note", value: "Only matches completed before the 2026-06-27 07:00 KST cutoff were merged in this run" }
    ],
    emptyState: "Latest official results available before the automation cutoff are reflected here."
  };
})();
