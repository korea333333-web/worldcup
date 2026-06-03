(function addDailyMatchHub() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  data.dailyMatchHub = {
    updatedAt: "2026-06-04",
    mode: "warmup",
    title: "오늘의 매치 허브",
    kicker: "WORLD CUP WARM-UP",
    summary: "월드컵 개막 전에는 각 국가대표의 친선경기 결과와 컨디션 리포트를 보여주고, 대회가 시작되면 실제 경기 결과와 하이라이트 중심으로 자동 전환합니다.",
    sourceNote: "친선경기 결과는 확인된 보도와 공식 일정이 확보되는 항목부터 업데이트합니다.",
    featuredMatchId: "warmup-kor-tri-2026-05-31",
    matches: [
      {
        id: "warmup-kor-tri-2026-05-31",
        status: "result",
        phaseLabel: "친선경기 결과",
        competition: "Pre-World Cup Friendly",
        teamA: "korea",
        teamBName: "트리니다드토바고",
        teamBFlag: "tt",
        score: "5 - 0",
        dateLabel: "2026-05-31 KST",
        localTimeLabel: "2026-05-30 10:00 local",
        venue: "BYU South Field",
        city: "Provo, Utah",
        headline: "한국, 월드컵 튠업 첫 경기에서 5골 완승",
        recap: "손흥민과 조규성이 각각 멀티골을 기록했고, 황희찬이 페널티킥으로 마무리했습니다. 공격 전환 속도와 후반 교체 자원의 결정력이 돋보인 경기입니다.",
        scorers: ["손흥민 2골", "조규성 2골", "황희찬 1골"],
        notes: ["전반 손흥민 중심 공격", "후반 조규성 투입 후 박스 장악", "무실점으로 수비 안정감 확보"],
        highlightUrl: "https://www.youtube.com/results?search_query=Korea+Republic+Trinidad+and+Tobago+5-0+highlights",
        source: {
          label: "Korea JoongAng Daily",
          url: "https://koreajoongangdaily.joins.com/news/2026-05-31/sports/football/Korea-secures-50-victory-over-Trinidad-and-Tobago-in-friendly/2604849"
        },
        modelPick: { teamA: 68, draw: 18, teamB: 14 }
      },
      {
        id: "warmup-usa-sen-2026-05-31",
        status: "monitoring",
        phaseLabel: "하이라이트 대기",
        competition: "Pre-World Cup Friendly",
        teamA: "usa",
        teamBName: "세네갈",
        teamBFlag: "sn",
        score: "업데이트 대기",
        dateLabel: "결과 확인 중",
        localTimeLabel: "현지 경기 후 업데이트",
        venue: "TBD",
        city: "United States",
        headline: "미국 대표팀 워밍업 매치 모니터링",
        recap: "공식 결과와 신뢰 가능한 하이라이트 링크가 확인되면 오늘의 매치 허브에 반영합니다.",
        scorers: ["득점자 확인 대기"],
        notes: ["선발 명단 확인 대기", "교체 및 경기 통계 확인 대기"],
        highlightUrl: "https://www.youtube.com/results?search_query=USA+Senegal+2026+friendly+highlights",
        source: {
          label: "YouTube search",
          url: "https://www.youtube.com/results?search_query=USA+Senegal+2026+friendly+highlights"
        },
        modelPick: { teamA: 44, draw: 27, teamB: 29 }
      },
      {
        id: "wc-opener-mex-rsa-2026-06-12",
        status: "scheduled",
        phaseLabel: "월드컵 공식 슬롯",
        competition: "FIFA World Cup 2026",
        teamA: "mexico",
        teamB: "south-africa",
        score: "2026-06-12 04:00 KST",
        dateLabel: "2026-06-12 KST",
        localTimeLabel: "2026-06-11 13:00 local",
        venue: "Mexico City Stadium",
        city: "Mexico City",
        headline: "개막전 대기 슬롯",
        recap: "대회가 시작되면 이 영역이 실제 득점, 선발, 교체, 하이라이트 링크로 바뀝니다.",
        scorers: ["경기 전"],
        notes: ["공식 슬롯", "한국 시간 표시", "경기 후 결과 자동 업데이트 대상"],
        highlightUrl: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026",
        source: {
          label: "FIFA schedule",
          url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums"
        },
        modelPick: { teamA: 52, draw: 28, teamB: 20 }
      }
    ]
  };
})();
