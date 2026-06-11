(function addDailyMatchHub() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  const sourceOfficial = {
    label: "FIFA",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-12",
    reliability: "official"
  };

  data.dailyMatchHub = {
    updatedAt: "2026-06-12",
    mode: "live-hub",
    title: "오늘의 하이라이트",
    kicker: "WORLD CUP LIVE HUB",
    summary: "경기, 인터뷰, 개막식, 영상 후보를 날짜 기준으로 묶어 보는 월드컵 라이브 허브입니다.",
    sourceNote: "본선이 시작되면 친선경기는 메인 전면에서 내리고, 공식 경기와 인터뷰, 개막식, 영상 후보 중심으로 보여줍니다.",
    leadMode: "match-priority",
    featuredMatchId: "wc-opener-mex-rsa-2026-06-12",
    matches: [
      {
        id: "wc-opener-mex-rsa-2026-06-12",
        type: "match",
        status: "scheduled",
        phaseLabel: "개막전",
        competition: "FIFA World Cup 2026",
        teamA: "mexico",
        teamB: "south-africa",
        score: "2026-06-12 04:00 KST",
        dateLabel: "2026-06-12 KST",
        localTimeLabel: "2026-06-11 13:00 local",
        venue: "Mexico City Stadium",
        city: "Mexico City",
        headline: "멕시코 vs 남아공 개막전",
        recap: "개막전이 시작되면 이 카드에 공식 결과, 선발, 득점, 교체, 주요 스탯, 하이라이트가 우선 반영됩니다.",
        scorers: ["공식 킥오프 대기", "개막식 연계 노출", "실시간 업데이트 예정"],
        notes: ["공식 일정 기준", "개막식 후 경기 시작", "결과 반영 시 본 카드가 최상단 유지"],
        highlightUrl: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026",
        source: sourceOfficial,
        modelPick: { teamA: 52, draw: 28, teamB: 20 },
        highlightVideos: [
          {
            title: "FIFA World Cup 2026 opening match coverage",
            channel: "FIFA",
            type: "highlight",
            url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026",
            duration: "LIVE",
            meta: "공식 대회 페이지"
          }
        ]
      }
    ],
    sections: [
      {
        id: "matches",
        title: "오늘 경기",
        items: [
          {
            id: "wc-opener-mex-rsa-2026-06-12",
            type: "match",
            status: "scheduled",
            phaseLabel: "개막전",
            competition: "FIFA World Cup 2026",
            teamA: "mexico",
            teamB: "south-africa",
            dateLabel: "2026-06-12 KST",
            score: "04:00",
            headline: "멕시코 vs 남아공",
            summary: "개막식 이후 이어지는 본선 첫 경기입니다.",
            source: sourceOfficial
          },
          {
            id: "group-a-kor-cze-2026-06-12",
            type: "match",
            status: "scheduled",
            phaseLabel: "조별리그",
            competition: "FIFA World Cup 2026",
            teamA: "korea",
            teamB: "czechia",
            dateLabel: "2026-06-12 KST",
            score: "11:00",
            headline: "대한민국 vs 체코",
            summary: "한국의 첫 경기로, 경기 전 인터뷰와 전술 카드가 함께 노출됩니다.",
            source: sourceOfficial
          }
        ]
      },
      {
        id: "interviews",
        title: "인터뷰",
        items: [
          {
            id: "interview-son-world-cup-start",
            type: "interview",
            phaseLabel: "경기 전 인터뷰",
            personName: "손흥민",
            role: "대한민국 주장",
            teamId: "korea",
            headline: "손흥민 각오",
            summary: "높은 기대보다 팀 완성도와 첫 경기 집중력을 강조한 발언을 먼저 보여줍니다.",
            thumbnailMode: "search-candidate",
            thumbnailSource: "인터뷰 영상 후보",
            selectedVideoTitle: "[D-1 Interview] South Korea vs. Czech Republic World Cup 26",
            selectedChannel: "JTBC Sports",
            selectedViews: "4.4K views",
            selectedPublishedAt: "6 hours ago",
            url: "https://www.youtube.com/results?search_query=Son+Heung-min+World+Cup+2026+interview",
            source: {
              label: "YouTube search",
              url: "https://www.youtube.com/results?search_query=Son+Heung-min+World+Cup+2026+interview",
              checkedAt: "2026-06-12",
              reliability: "curated"
            }
          },
          {
            id: "interview-pulisic-opener-week",
            type: "interview",
            phaseLabel: "경기 전 인터뷰",
            personName: "Christian Pulisic",
            role: "United States forward",
            teamId: "usa",
            headline: "풀리식 대회 첫 주 인터뷰",
            summary: "개최국 분위기와 첫 경기 책임감을 짧게 요약한 카드입니다.",
            thumbnailMode: "search-candidate",
            thumbnailSource: "인터뷰 영상 후보",
            url: "https://www.youtube.com/results?search_query=Christian+Pulisic+World+Cup+2026+interview",
            source: {
              label: "YouTube search",
              url: "https://www.youtube.com/results?search_query=Christian+Pulisic+World+Cup+2026+interview",
              checkedAt: "2026-06-12",
              reliability: "curated"
            }
          },
          {
            id: "interview-mbappe-big-match",
            type: "interview",
            phaseLabel: "빅매치 인터뷰",
            personName: "Kylian Mbappe",
            role: "France forward",
            teamId: "france",
            headline: "음바페 대회 각오",
            summary: "우승 후보 프랑스의 압박감과 책임을 압축한 한줄 요약입니다.",
            thumbnailMode: "search-candidate",
            thumbnailSource: "인터뷰 영상 후보",
            url: "https://www.youtube.com/results?search_query=Kylian+Mbappe+World+Cup+2026+interview",
            source: {
              label: "YouTube search",
              url: "https://www.youtube.com/results?search_query=Kylian+Mbappe+World+Cup+2026+interview",
              checkedAt: "2026-06-12",
              reliability: "curated"
            }
          }
        ]
      },
      {
        id: "events",
        title: "개막식·이벤트",
        items: [
          {
            id: "opening-ceremony-main",
            type: "event",
            categoryLabel: "개막식",
            headline: "개막식 출연자와 무대 정리",
            summary: "공식 기사와 신뢰 가능한 보도를 바탕으로 출연자, 곡, 주요 장면을 모읍니다.",
            thumbnailMode: "search-candidate",
            thumbnailSource: "개막식 영상 후보",
            url: "https://www.youtube.com/results?search_query=FIFA+World+Cup+2026+opening+ceremony",
            source: sourceOfficial
          }
        ]
      },
      {
        id: "videos",
        title: "영상 후보",
        items: [
          {
            id: "video-opening-ceremony-search",
            type: "video",
            headline: "개막식 영상 후보",
            summary: "공식 업로드 또는 신뢰 가능한 하이라이트가 나오면 썸네일과 함께 교체됩니다.",
            thumbnailMode: "search-candidate",
            thumbnailSource: "영상 후보",
            url: "https://www.youtube.com/results?search_query=FIFA+World+Cup+2026+opening+ceremony",
            source: {
              label: "YouTube search",
              url: "https://www.youtube.com/results?search_query=FIFA+World+Cup+2026+opening+ceremony",
              checkedAt: "2026-06-12",
              reliability: "curated"
            }
          }
        ]
      }
    ],
    archive: {
      friendliesHiddenFromLead: true,
      recentFriendlies: [
        {
          id: "warmup-kor-slv-2026-06-04",
          headline: "대한민국 1-0 엘살바도르",
          summary: "본선 시작 이후 메인 전면에서 빠진 최근 친선 경기 기록입니다.",
          url: "https://koreajoongangdaily.joins.com/news/2026-06-04/sports/football/Korea-beats-El-Salvador-in-final-friendly-before-World-Cup/2608530"
        },
        {
          id: "warmup-usa-ger-2026-06-07",
          headline: "미국 1-2 독일",
          summary: "개최국 미국의 최종 점검 경기 기록입니다.",
          url: "https://www.ussoccer.com/stories/2026/06/usmnt/match-recap-antonee-robinson-goal-highlights-vs-germany"
        }
      ]
    }
  };
})();
