(function addDailyMatchHub() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  data.dailyMatchHub = {
    updatedAt: "2026-06-05",
    mode: "warmup",
    title: "오늘의 매치 허브",
    kicker: "WORLD CUP WARM-UP",
    summary: "월드컵 개막 전에는 각 국가대표의 친선경기 결과와 컨디션 리포트를 보여주고, 대회가 시작되면 실제 경기 결과와 하이라이트 중심으로 자동 전환합니다.",
    sourceNote: "친선경기 결과는 Korea JoongAng Daily, U.S. Soccer, FIFA 일정 페이지처럼 출처가 분명한 항목부터 반영합니다.",
    featuredMatchId: "warmup-kor-slv-2026-06-04",
    matches: [
      {
        id: "warmup-kor-slv-2026-06-04",
        status: "result",
        phaseLabel: "친선경기 결과",
        competition: "Pre-World Cup Friendly",
        teamA: "korea",
        teamBName: "엘살바도르",
        teamBFlag: "sv",
        score: "1 - 0",
        dateLabel: "2026-06-04 KST",
        localTimeLabel: "2026-06-03 19:00 local",
        venue: "BYU South Field",
        city: "Provo, Utah",
        headline: "한국, 엘살바도르전 1-0 승리로 월드컵 직전 튠업 마무리",
        recap: "이동경의 프리킥 결승골로 한국이 2연승으로 친선 일정을 마쳤습니다. 대표팀은 이후 과달라하라로 이동해 체코와의 조별리그 1차전을 준비합니다.",
        scorers: ["이동경 57분"],
        notes: ["조유민 이탈 뒤 수비 조합 점검", "이강인 합류 후 컨디션 조율", "2연승으로 베이스캠프 이동"],
        highlightUrl: "https://www.youtube.com/results?search_query=Korea+Republic+El+Salvador+2026+highlights",
        source: {
          label: "Korea JoongAng Daily",
          url: "https://koreajoongangdaily.joins.com/news/2026-06-04/sports/football/Korea-beats-El-Salvador-in-final-friendly-before-World-Cup/2608530"
        },
        modelPick: { teamA: 61, draw: 24, teamB: 15 }
      },
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
        highlightVideos: [
          {
            title: "대한민국 vs 트리니다드토바고 하이라이트",
            channel: "KFATV 대한민국 축구 국가대표팀",
            type: "highlight",
            youtubeId: "LZAdpDpslcc",
            duration: "13:25",
            meta: "공식 채널 하이라이트"
          },
          {
            title: "South Korea 5-0 Trinidad and Tobago 리뷰",
            channel: "YouTube search",
            type: "analysis",
            url: "https://www.youtube.com/results?search_query=South+Korea+5-0+Trinidad+and+Tobago+review+2026",
            duration: "분석",
            meta: "경기 리뷰 검색"
          },
          {
            title: "손흥민 멀티골 장면 모아보기",
            channel: "YouTube search",
            type: "highlight",
            url: "https://www.youtube.com/results?search_query=Son+Heung-min+Trinidad+and+Tobago+goals+2026",
            duration: "골 장면",
            meta: "선수 하이라이트 검색"
          }
        ],
        source: {
          label: "Korea JoongAng Daily",
          url: "https://koreajoongangdaily.joins.com/news/2026-05-31/sports/football/Korea-secures-50-victory-over-Trinidad-and-Tobago-in-friendly/2604849"
        },
        modelPick: { teamA: 68, draw: 18, teamB: 14 }
      },
      {
        id: "warmup-usa-sen-2026-05-31",
        status: "result",
        phaseLabel: "친선경기 결과",
        competition: "Pre-World Cup Friendly",
        teamA: "usa",
        teamBName: "세네갈",
        teamBFlag: "sn",
        score: "3 - 2",
        dateLabel: "2026-06-01 KST",
        localTimeLabel: "2026-05-31 15:30 local",
        venue: "Bank of America Stadium",
        city: "Charlotte, North Carolina",
        headline: "미국, 세네갈에 3-2 승리로 홈 월드컵 리허설 순항",
        recap: "세르지뇨 데스트, 크리스천 풀리식, 폴라린 발로건의 득점으로 미국이 세네갈을 3-2로 꺾었습니다. U.S. Soccer 공식 리캡에서 선발, 교체, 경기 스탯까지 확인됐습니다.",
        scorers: ["세르지뇨 데스트 7분", "크리스천 풀리식 20분", "폴라린 발로건 63분"],
        notes: ["선발: Turner; Dest, McKenzie, Ream, Robinson; Adams, Berhalter; Freeman, Reyna, Pulisic; Pepi", "슈팅 15-7, 유효슈팅 5-3", "Chris Richards는 발목 관리로 원정 제외"],
        highlightUrl: "https://www.ussoccer.com/stories/2026/05/usmnt/match-recap-goals-highlights-vs-senegal",
        source: {
          label: "U.S. Soccer Match Recap",
          url: "https://www.ussoccer.com/stories/2026/05/usmnt/match-recap-goals-highlights-vs-senegal"
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
