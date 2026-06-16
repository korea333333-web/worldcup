(function addDailyMatchHub() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  const sourceSchedule = {
    label: "FIFA 일정/결과",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-13",
    reliability: "official"
  };

  const sourceMexico = {
    label: "FIFA 멕시코-남아공 리포트",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/mexico-south-africa-highlights-match-report",
    checkedAt: "2026-06-13",
    reliability: "official"
  };

  const sourceKorea = {
    label: "FIFA 대한민국-체코 리포트",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/korea-republic-czechia-highlights-match-report",
    checkedAt: "2026-06-13",
    reliability: "official"
  };

  const sourceCanada = {
    label: "FIFA 캐나다-보스니아 리포트",
    url: "https://www.fifa.com/en/articles/canada-bosnia-and-herzegovina-highlights-match-report",
    checkedAt: "2026-06-13",
    reliability: "official"
  };

  const sourceUsa = {
    label: "FIFA 미국-파라과이 리포트",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/usa-paraguay-highlights-match-report",
    checkedAt: "2026-06-13",
    reliability: "official"
  };

  data.dailyMatchHub = {
    updatedAt: "2026-06-13",
    mode: "live-hub",
    title: "오늘의 월드컵 허브",
    kicker: "WORLD CUP LIVE HUB",
    summary: "전날과 오늘 끝난 공식 경기 결과, 득점, 카드, 주요 장면과 하이라이트 링크를 신뢰 가능한 출처 기준으로 묶었습니다.",
    sourceNote: "경기 결과와 하이라이트는 FIFA 공식 페이지를 우선 반영했습니다. 인터뷰와 추가 영상 후보는 검색 링크를 유지하며 확인일과 신뢰도를 함께 표시합니다.",
    leadMode: "match-priority",
    featuredMatchId: "group-a-kor-cze-2026-06-12",
    matches: [
      {
        id: "group-a-kor-cze-2026-06-12",
        type: "match",
        status: "final",
        phaseLabel: "조별리그 A조",
        competition: "FIFA World Cup 2026",
        teamA: "korea",
        teamB: "czechia",
        score: "대한민국 2-1 체코",
        dateLabel: "2026-06-12 KST",
        localTimeLabel: "2026-06-11 20:00 local",
        venue: "Guadalajara Stadium",
        city: "Guadalajara",
        headline: "대한민국, 체코에 역전승",
        recap: "대한민국이 선제 실점 뒤 황인범의 동점골과 오현규의 결승골로 2-1 역전승을 거뒀습니다.",
        scorers: ["라디슬라프 크레이치 31'", "황인범 66'", "오현규 82'"],
        notes: ["황인범 1골 1도움", "대한민국은 A조 승점 3 확보", "FIFA 공식 하이라이트 공개"],
        highlightUrl: "https://www.fifa.com/en/watch/1iidGe97khg8lmdSRopdh4",
        source: sourceKorea,
        modelPick: { teamA: 52, draw: 28, teamB: 20 },
        highlightVideos: [
          {
            title: "Korea Republic v Czechia | Highlights",
            channel: "FIFA",
            type: "highlight",
            url: "https://www.fifa.com/en/watch/1iidGe97khg8lmdSRopdh4",
            duration: "official",
            meta: "FIFA 공식 하이라이트"
          }
        ]
      },
      {
        id: "wc-opener-mex-rsa-2026-06-12",
        type: "match",
        status: "final",
        phaseLabel: "개막전",
        competition: "FIFA World Cup 2026",
        teamA: "mexico",
        teamB: "south-africa",
        score: "멕시코 2-0 남아공",
        dateLabel: "2026-06-12 KST",
        localTimeLabel: "2026-06-11 13:00 local",
        venue: "Mexico City Stadium",
        city: "Mexico City",
        headline: "멕시코, 개막전 승리",
        recap: "멕시코가 개막전에서 남아공을 2-0으로 꺾었습니다. 훌리안 키뇨네스와 라울 히메네스가 득점했습니다.",
        scorers: ["훌리안 키뇨네스 9'", "라울 히메네스 67'"],
        notes: ["남아공 퇴장 2명: 시톨레, 즈와네", "멕시코도 몬테스 퇴장", "FIFA 공식 하이라이트 공개"],
        highlightUrl: "https://www.fifa.com/en/watch/7wv3jFr0T2wczSuQbhgrSW",
        source: sourceMexico,
        modelPick: { teamA: 52, draw: 28, teamB: 20 },
        highlightVideos: [
          {
            title: "Mexico v South Africa | Highlights",
            channel: "FIFA",
            type: "highlight",
            url: "https://www.fifa.com/en/watch/7wv3jFr0T2wczSuQbhgrSW",
            duration: "official",
            meta: "FIFA 공식 하이라이트"
          }
        ]
      },
      {
        id: "group-b-can-bih-2026-06-13",
        type: "match",
        status: "final",
        phaseLabel: "조별리그 B조",
        competition: "FIFA World Cup 2026",
        teamA: "canada",
        teamB: "bosnia",
        score: "캐나다 1-1 보스니아",
        dateLabel: "2026-06-13 KST",
        localTimeLabel: "2026-06-12 15:00 local",
        venue: "Toronto Stadium",
        city: "Toronto",
        headline: "캐나다, 후반 동점으로 승점 1",
        recap: "캐나다가 보스니아에 먼저 실점했지만 후반 교체 투입된 사일 라린의 골로 1-1을 만들었습니다.",
        scorers: ["요보 루키치 21'", "사일 라린 78'"],
        notes: ["캐나다 남자 월드컵 역사상 첫 승점", "프로미스 데이비드가 동점골 전개 관여", "FIFA 공식 하이라이트 공개"],
        highlightUrl: "https://www.fifa.com/en/watch/5ekSKA6XJZqv9Fag9pI7sH",
        source: sourceCanada,
        modelPick: { teamA: 45, draw: 29, teamB: 26 },
        highlightVideos: [
          {
            title: "Canada v Bosnia and Herzegovina | Highlights",
            channel: "FIFA",
            type: "highlight",
            url: "https://www.fifa.com/en/watch/5ekSKA6XJZqv9Fag9pI7sH",
            duration: "official",
            meta: "FIFA 공식 하이라이트"
          }
        ]
      },
      {
        id: "group-d-usa-par-2026-06-13",
        type: "match",
        status: "final",
        phaseLabel: "조별리그 D조",
        competition: "FIFA World Cup 2026",
        teamA: "usa",
        teamB: "paraguay",
        score: "미국 4-1 파라과이",
        dateLabel: "2026-06-13 KST",
        localTimeLabel: "2026-06-12 18:00 local",
        venue: "Los Angeles Stadium",
        city: "Los Angeles",
        headline: "미국, 파라과이 상대로 4골",
        recap: "미국이 파라과이를 4-1로 꺾고 대회 첫 경기를 강하게 출발했습니다. 발로건이 멀티골을 넣었습니다.",
        scorers: ["웨스턴 맥케니 14'", "폴라린 발로건 24', 42'", "마우리시우 73'", "지오 레이나 90+1'"],
        notes: ["발로건 멀티골", "후반 시작과 함께 풀리식 교체 아웃", "FIFA 공식 하이라이트 공개"],
        highlightUrl: "https://www.fifa.com/en/watch/6jzgitUqP6YyXpwwuY6VRc",
        source: sourceUsa,
        modelPick: { teamA: 54, draw: 25, teamB: 21 },
        highlightVideos: [
          {
            title: "USA v Paraguay | Highlights",
            channel: "FIFA",
            type: "highlight",
            url: "https://www.fifa.com/en/watch/6jzgitUqP6YyXpwwuY6VRc",
            duration: "official",
            meta: "FIFA 공식 하이라이트"
          }
        ]
      }
    ],
    sections: [
      {
        id: "matches",
        title: "주요 경기",
        items: [
          {
            id: "group-a-kor-cze-2026-06-12",
            type: "match",
            status: "final",
            phaseLabel: "A조 종료",
            competition: "FIFA World Cup 2026",
            teamA: "korea",
            teamB: "czechia",
            dateLabel: "2026-06-12 KST",
            score: "2-1",
            headline: "대한민국 vs 체코",
            summary: "황인범 1골 1도움, 오현규 결승골로 한국이 역전승했습니다.",
            source: sourceKorea
          },
          {
            id: "wc-opener-mex-rsa-2026-06-12",
            type: "match",
            status: "final",
            phaseLabel: "개막전 종료",
            competition: "FIFA World Cup 2026",
            teamA: "mexico",
            teamB: "south-africa",
            dateLabel: "2026-06-12 KST",
            score: "2-0",
            headline: "멕시코 vs 남아공",
            summary: "키뇨네스와 히메네스의 골, 남아공 2퇴장으로 개막전이 정리됐습니다.",
            source: sourceMexico
          },
          {
            id: "group-b-can-bih-2026-06-13",
            type: "match",
            status: "final",
            phaseLabel: "B조 종료",
            competition: "FIFA World Cup 2026",
            teamA: "canada",
            teamB: "bosnia",
            dateLabel: "2026-06-13 KST",
            score: "1-1",
            headline: "캐나다 vs 보스니아",
            summary: "라린의 후반 동점골로 캐나다가 승점 1을 챙겼습니다.",
            source: sourceCanada
          },
          {
            id: "group-d-usa-par-2026-06-13",
            type: "match",
            status: "final",
            phaseLabel: "D조 종료",
            competition: "FIFA World Cup 2026",
            teamA: "usa",
            teamB: "paraguay",
            dateLabel: "2026-06-13 KST",
            score: "4-1",
            headline: "미국 vs 파라과이",
            summary: "맥케니, 발로건 2골, 레이나 득점으로 미국이 4-1 완승했습니다.",
            source: sourceUsa
          }
        ]
      },
      {
        id: "interviews",
        title: "인터뷰/반응",
        items: [
          {
            id: "interview-son-world-cup-start",
            type: "interview",
            phaseLabel: "대한민국 관련 영상 후보",
            personName: "손흥민",
            role: "대한민국 주장",
            teamId: "korea",
            headline: "손흥민 경기 전후 인터뷰 후보",
            summary: "공식 업로드 전까지는 YouTube 검색 후보를 유지합니다. 경기 후 반응 영상이 올라오면 교체할 수 있습니다.",
            thumbnailUrl: "./assets/son-kbs-top-interview.png",
            verifiedThumbnail: true,
            thumbnailSource: "KBS Sports YouTube",
            selectedVideoTitle: "\"The team atmosphere is excellent\" - Son Heung-min official interview candidate",
            selectedChannel: "KBS Sports",
            selectedViews: "41K views",
            selectedPublishedAt: "1 day ago",
            url: "https://www.youtube.com/results?search_query=Son+Heung-min+World+Cup+2026+interview",
            source: {
              label: "YouTube search",
              url: "https://www.youtube.com/results?search_query=Son+Heung-min+World+Cup+2026+interview",
              checkedAt: "2026-06-13",
              reliability: "curated"
            }
          },
          {
            id: "interview-pulisic-post-match",
            type: "interview",
            phaseLabel: "미국 경기 후 영상 후보",
            personName: "Christian Pulisic",
            role: "United States forward",
            teamId: "usa",
            headline: "풀리식/미국 경기 후 인터뷰 후보",
            summary: "미국의 4-1 승리 직후 인터뷰와 하이라이트 쇼 클립을 찾기 위한 검색 링크입니다.",
            thumbnailMode: "search-candidate",
            thumbnailSource: "인터뷰 영상 후보",
            url: "https://www.youtube.com/results?search_query=Christian+Pulisic+USA+Paraguay+2026+interview",
            source: {
              label: "YouTube search",
              url: "https://www.youtube.com/results?search_query=Christian+Pulisic+USA+Paraguay+2026+interview",
              checkedAt: "2026-06-13",
              reliability: "curated"
            }
          },
          {
            id: "interview-balogun-post-match",
            type: "interview",
            phaseLabel: "선수 반응 후보",
            personName: "Folarin Balogun",
            role: "United States forward",
            teamId: "usa",
            headline: "발로건 멀티골 반응 영상 후보",
            summary: "멀티골 직후 현장 인터뷰, 믹스트존 반응, FIFA 또는 방송사 업로드 후보를 추적합니다.",
            thumbnailMode: "search-candidate",
            thumbnailSource: "인터뷰 영상 후보",
            url: "https://www.youtube.com/results?search_query=Folarin+Balogun+World+Cup+2026+interview",
            source: {
              label: "YouTube search",
              url: "https://www.youtube.com/results?search_query=Folarin+Balogun+World+Cup+2026+interview",
              checkedAt: "2026-06-13",
              reliability: "curated"
            }
          }
        ]
      },
      {
        id: "events",
        title: "개막 세리머니",
        items: [
          {
            id: "opening-ceremony-main",
            type: "event",
            categoryLabel: "개막 세리머니",
            headline: "개막식 핵심 출연진 정리",
            summary: "FIFA 공식 기사 기준으로 멕시코시티 개막식의 핵심 출연진과 추가 세리머니 링크를 묶었습니다.",
            thumbnailMode: "search-candidate",
            thumbnailSource: "공식 영상 후보",
            url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/opening-ceremony-usa",
            source: {
              label: "FIFA 개막식 기사",
              url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/opening-ceremony-usa",
              checkedAt: "2026-06-13",
              reliability: "official"
            }
          }
        ]
      },
      {
        id: "videos",
        title: "영상 후보",
        items: [
          {
            id: "video-kor-cze-highlight",
            type: "video",
            headline: "대한민국 vs 체코 공식 하이라이트",
            summary: "FIFA 공식 하이라이트 페이지로 연결됩니다.",
            url: "https://www.fifa.com/en/watch/1iidGe97khg8lmdSRopdh4",
            source: sourceKorea
          },
          {
            id: "video-mex-rsa-highlight",
            type: "video",
            headline: "멕시코 vs 남아공 공식 하이라이트",
            summary: "개막전 하이라이트 공식 링크입니다.",
            url: "https://www.fifa.com/en/watch/7wv3jFr0T2wczSuQbhgrSW",
            source: sourceMexico
          },
          {
            id: "video-can-bih-highlight",
            type: "video",
            headline: "캐나다 vs 보스니아 공식 하이라이트",
            summary: "캐나다의 첫 승점 경기 공식 링크입니다.",
            url: "https://www.fifa.com/en/watch/5ekSKA6XJZqv9Fag9pI7sH",
            source: sourceCanada
          },
          {
            id: "video-usa-par-highlight",
            type: "video",
            headline: "미국 vs 파라과이 공식 하이라이트",
            summary: "미국의 4-1 승리 하이라이트 공식 링크입니다.",
            url: "https://www.fifa.com/en/watch/6jzgitUqP6YyXpwwuY6VRc",
            source: sourceUsa
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
          summary: "월드컵 개막 전 마지막 평가전 기록입니다.",
          url: "https://koreajoongangdaily.joins.com/news/2026-06-04/sports/football/Korea-beats-El-Salvador-in-final-friendly-before-World-Cup/2608530"
        },
        {
          id: "warmup-usa-ger-2026-06-07",
          headline: "미국 1-2 독일",
          summary: "미국의 월드컵 직전 최종 리허설 경기 기록입니다.",
          url: "https://www.ussoccer.com/stories/2026/06/usmnt/match-recap-antonee-robinson-goal-highlights-vs-germany"
        }
      ],
      officialResultsCheckedAt: "2026-06-13",
      source: sourceSchedule
    }
  };
})();

(function extendDailyMatchHubJune14() {
  const data = window.WORLD_CUP_DATA;
  const hub = data?.dailyMatchHub;
  if (!hub) return;

  const sourceSchedule = {
    label: "FIFA 일정/결과",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-14",
    reliability: "official"
  };

  const sourceBrazil = {
    label: "FIFA 브라질-모로코 리포트",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/brazil-morocco-highlights-match-report",
    checkedAt: "2026-06-14",
    reliability: "official"
  };

  const sourceEspn = {
    label: "ESPN match summary",
    url: "https://www.espn.com/soccer/league/_/name/fifa.world",
    checkedAt: "2026-06-14",
    reliability: "trusted"
  };

  hub.updatedAt = "2026-06-14";
  hub.summary = "전날과 당일(2026-06-14 KST 12:23 기준) 종료된 공식 경기 결과, 득점, 카드, 선발, 주요 스탯, 영상 후보를 신뢰 가능한 출처로 보강했습니다.";
  hub.sourceNote = "결과와 순위는 FIFA 공식 일정·결과·순위 페이지를 우선 반영했고, 선발 명단·교체·팀 스탯은 ESPN 매치 서머리로 교차 확인했습니다. 공식 하이라이트가 없으면 YouTube 검색 후보를 유지합니다.";

  const upsertMatch = (match) => {
    const index = hub.matches.findIndex((item) => item.id === match.id);
    if (index >= 0) {
      hub.matches[index] = match;
      return;
    }
    hub.matches.push(match);
  };

  const upsertSectionItem = (sectionId, item) => {
    const section = hub.sections.find((entry) => entry.id === sectionId);
    if (!section) return;
    const index = section.items.findIndex((entry) => entry.id === item.id);
    if (index >= 0) {
      section.items[index] = item;
      return;
    }
    section.items.push(item);
  };

  const upsertVideo = (item) => upsertSectionItem("videos", item);

  upsertMatch({
    id: "group-b-qat-sui-2026-06-14",
    type: "match",
    status: "final",
    phaseLabel: "조별리그 B조",
    competition: "FIFA World Cup 2026",
    teamA: "qatar",
    teamB: "switzerland",
    score: "카타르 1-1 스위스",
    dateLabel: "2026-06-14 KST",
    localTimeLabel: "2026-06-13 12:00 local",
    venue: "San Francisco Bay Area Stadium (Levi's Stadium)",
    city: "Santa Clara",
    headline: "카타르가 종료 직전 자책골 유도로 승점 1 확보",
    recap: "스위스가 브릴 엠볼로의 페널티킥으로 앞섰지만, 후반 추가시간 미로 무하임 자책골로 카타르가 1-1을 만들었습니다.",
    scorers: ["브릴 엠볼로 17' (PK)", "미로 무하임 90+4' (OG)"],
    notes: ["카타르 점유율 32.0%, 슈팅 6-26 열세", "카타르는 옐로카드 2장", "공식 하이라이트 URL은 확인 대기"],
    highlightUrl: "https://www.youtube.com/results?search_query=Qatar+Switzerland+2026+World+Cup+highlights",
    source: sourceSchedule,
    detailSource: sourceEspn,
    modelPick: { teamA: 24, draw: 30, teamB: 46 },
    highlightVideos: [
      {
        title: "Qatar v Switzerland highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Qatar+Switzerland+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "공식 업로드 확인 전 후보 링크"
      }
    ]
  });

  upsertMatch({
    id: "group-c-bra-mar-2026-06-14",
    type: "match",
    status: "final",
    phaseLabel: "조별리그 C조",
    competition: "FIFA World Cup 2026",
    teamA: "brazil",
    teamB: "morocco",
    score: "브라질 1-1 모로코",
    dateLabel: "2026-06-14 KST",
    localTimeLabel: "2026-06-13 18:00 local",
    venue: "New York New Jersey Stadium (MetLife Stadium)",
    city: "East Rutherford",
    headline: "비니시우스 동점골, 브라질과 모로코 무승부",
    recap: "모로코가 이스마엘 사이바리 선제골로 앞섰지만, 브라질은 비니시우스 주니오르가 전반 32분 동점골을 넣어 1-1로 마쳤습니다.",
    scorers: ["이스마엘 사이바리 21'", "비니시우스 주니오르 32'"],
    notes: ["브루누 기마랑이스 동점골 도움", "브라질 점유율 51.4%, 슈팅 12-14", "브라질 경고 2장: 카세미루, 호제르 이바녜스"],
    highlightUrl: sourceBrazil.url,
    source: sourceBrazil,
    detailSource: sourceEspn,
    modelPick: { teamA: 53, draw: 25, teamB: 22 },
    highlightVideos: [
      {
        title: "Brazil v Morocco | Match report",
        channel: "FIFA",
        type: "report",
        url: sourceBrazil.url,
        duration: "official",
        meta: "FIFA 공식 리포트"
      },
      {
        title: "Brazil v Morocco highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Brazil+Morocco+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "공식 업로드 확인 전 후보 링크"
      }
    ]
  });

  upsertMatch({
    id: "group-c-hai-sco-2026-06-14",
    type: "match",
    status: "final",
    phaseLabel: "조별리그 C조",
    competition: "FIFA World Cup 2026",
    teamA: "haiti",
    teamB: "scotland",
    score: "아이티 0-1 스코틀랜드",
    dateLabel: "2026-06-14 KST",
    localTimeLabel: "2026-06-13 21:00 local",
    venue: "Boston Stadium (Gillette Stadium)",
    city: "Foxborough",
    headline: "존 맥긴 결승골로 스코틀랜드 첫 승",
    recap: "스코틀랜드는 전반 28분 존 맥긴의 결승골을 지켜 아이티를 1-0으로 꺾고 C조 선두로 출발했습니다.",
    scorers: ["존 맥긴 28'"],
    notes: ["아이티 점유율 53.8%, 슈팅 15-9 우세에도 무득점", "스코틀랜드 경고 3장", "공식 하이라이트 URL은 확인 대기"],
    highlightUrl: "https://www.youtube.com/results?search_query=Haiti+Scotland+2026+World+Cup+highlights",
    source: sourceSchedule,
    detailSource: sourceEspn,
    modelPick: { teamA: 23, draw: 29, teamB: 48 },
    highlightVideos: [
      {
        title: "Haiti v Scotland highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Haiti+Scotland+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "공식 업로드 확인 전 후보 링크"
      }
    ]
  });

  upsertSectionItem("matches", {
    id: "group-b-qat-sui-2026-06-14",
    type: "match",
    status: "final",
    phaseLabel: "B조 종료",
    competition: "FIFA World Cup 2026",
    teamA: "qatar",
    teamB: "switzerland",
    dateLabel: "2026-06-14 KST",
    score: "1-1",
    headline: "카타르 vs 스위스",
    summary: "엠볼로 PK 이후 후반 추가시간 자책골로 1-1 무승부가 됐습니다.",
    source: sourceSchedule
  });

  upsertSectionItem("matches", {
    id: "group-c-bra-mar-2026-06-14",
    type: "match",
    status: "final",
    phaseLabel: "C조 종료",
    competition: "FIFA World Cup 2026",
    teamA: "brazil",
    teamB: "morocco",
    dateLabel: "2026-06-14 KST",
    score: "1-1",
    headline: "브라질 vs 모로코",
    summary: "사이바리 선제골과 비니시우스 동점골로 승점 1씩 나눴습니다.",
    source: sourceBrazil
  });

  upsertSectionItem("matches", {
    id: "group-c-hai-sco-2026-06-14",
    type: "match",
    status: "final",
    phaseLabel: "C조 종료",
    competition: "FIFA World Cup 2026",
    teamA: "haiti",
    teamB: "scotland",
    dateLabel: "2026-06-14 KST",
    score: "0-1",
    headline: "아이티 vs 스코틀랜드",
    summary: "존 맥긴 결승골로 스코틀랜드가 C조 선두가 됐습니다.",
    source: sourceSchedule
  });

  upsertVideo({
    id: "video-bra-mar-report",
    type: "video",
    headline: "브라질 vs 모로코 공식 리포트",
    summary: "FIFA 공식 경기 리포트 링크입니다. 하이라이트는 별도 확인 중입니다.",
    url: sourceBrazil.url,
    source: sourceBrazil
  });

  upsertVideo({
    id: "video-qat-sui-candidate",
    type: "video",
    headline: "카타르 vs 스위스 하이라이트 후보",
    summary: "공식 업로드 전 YouTube 검색 후보 링크를 유지합니다.",
    url: "https://www.youtube.com/results?search_query=Qatar+Switzerland+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Qatar+Switzerland+2026+World+Cup+highlights",
      checkedAt: "2026-06-14",
      reliability: "curated"
    }
  });

  upsertVideo({
    id: "video-hai-sco-candidate",
    type: "video",
    headline: "아이티 vs 스코틀랜드 하이라이트 후보",
    summary: "공식 업로드 전 YouTube 검색 후보 링크를 유지합니다.",
    url: "https://www.youtube.com/results?search_query=Haiti+Scotland+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Haiti+Scotland+2026+World+Cup+highlights",
      checkedAt: "2026-06-14",
      reliability: "curated"
    }
  });

  if (hub.archive) {
    hub.archive.officialResultsCheckedAt = "2026-06-14";
    hub.archive.source = sourceSchedule;
  }
})();

(function extendDailyMatchHubJune17() {
  const data = window.WORLD_CUP_DATA;
  const hub = data?.dailyMatchHub;
  if (!hub) return;

  const sourceSchedule = {
    label: "FIFA 일정/결과",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-17",
    reliability: "official"
  };

  const sourceGuardianE = {
    label: "Guardian Group E/F reports",
    url: "https://www.theguardian.com/football/live/2026/jun/15/world-cup-2026-news-iran-arrive-in-us-amid-protests-spain-belgium-egypt-enter-tournament-live",
    checkedAt: "2026-06-17",
    reliability: "trusted"
  };

  const sourceGuardianG = {
    label: "Guardian Group G/H reports",
    url: "https://www.theguardian.com/football/live/2026/jun/16/world-cup-2026-news-france-enter-fray-iran-feel-oppressed-var-official-cleared-over-gesture-live",
    checkedAt: "2026-06-17",
    reliability: "trusted"
  };

  const sourceFrance = {
    label: "Guardian France v Senegal report",
    url: "https://www.theguardian.com/football/2026/jun/16/france-senegal-world-cup-group-i-match-report",
    checkedAt: "2026-06-17",
    reliability: "trusted"
  };

  hub.updatedAt = "2026-06-17";
  hub.summary = "2026-06-17 KST 08:45 기준 전날과 당일 종료 경기 가운데 공식 결과와 신뢰 가능한 매치 리포트를 확보한 경기들을 허브에 반영했습니다.";
  hub.sourceNote = "결과 확인은 FIFA 공식 일정/결과 페이지를 기준으로 유지했고, 세부 맥락과 주요 장면은 Guardian match report와 Reuters 전재 기사로 교차 확인했습니다. 공식 하이라이트가 바로 확인되지 않은 경기는 YouTube 검색 후보를 유지합니다.";
  hub.featuredMatchId = "group-i-fra-sen-2026-06-17";

  const upsertMatch = (match) => {
    const index = hub.matches.findIndex((item) => item.id === match.id);
    if (index >= 0) {
      hub.matches[index] = match;
      return;
    }
    hub.matches.push(match);
  };

  const upsertSectionItem = (sectionId, item) => {
    const section = hub.sections.find((entry) => entry.id === sectionId);
    if (!section) return;
    const index = section.items.findIndex((entry) => entry.id === item.id);
    if (index >= 0) {
      section.items[index] = item;
      return;
    }
    section.items.push(item);
  };

  const upsertVideo = (item) => upsertSectionItem("videos", item);

  upsertMatch({
    id: "group-e-ger-cur-2026-06-15",
    type: "match",
    status: "final",
    phaseLabel: "조별리그 E조",
    competition: "FIFA World Cup 2026",
    teamA: "germany",
    teamB: "curacao",
    score: "독일 7-1 퀴라소",
    dateLabel: "2026-06-15 KST",
    localTimeLabel: "2026-06-14 18:00 local",
    venue: "Houston Stadium",
    city: "Houston",
    headline: "독일이 퀴라소 데뷔전을 7-1로 제압",
    recap: "독일이 조기부터 주도권을 잡아 7골을 몰아쳤고, 퀴라소는 대회 첫 월드컵 본선 골을 남겼습니다.",
    scorers: ["독일 7골", "퀴라소 코멘엔시아 1골"],
    notes: ["Guardian match report 확인", "퀴라소 월드컵 본선 첫 득점", "공식 하이라이트 URL은 추후 보강 대상"],
    highlightUrl: "https://www.youtube.com/results?search_query=Germany+Curacao+2026+World+Cup+highlights",
    source: sourceSchedule,
    detailSource: sourceGuardianE,
    modelPick: { teamA: 79, draw: 13, teamB: 8 },
    highlightVideos: [
      {
        title: "Germany v Curacao highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Germany+Curacao+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "공식 업로드 확인 전 후보 링크"
      }
    ]
  });

  upsertMatch({
    id: "group-f-ned-jpn-2026-06-15",
    type: "match",
    status: "final",
    phaseLabel: "조별리그 F조",
    competition: "FIFA World Cup 2026",
    teamA: "netherlands",
    teamB: "japan",
    score: "네덜란드 2-2 일본",
    dateLabel: "2026-06-15 KST",
    localTimeLabel: "2026-06-14 15:00 local",
    venue: "Dallas Stadium",
    city: "Dallas",
    headline: "가마다 동점골로 일본이 네덜란드와 2-2 무승부",
    recap: "일본이 후반 막판 다이치 가마다의 동점골로 승점을 챙기며 F조 초반 흐름을 바꿨습니다.",
    scorers: ["네덜란드 2골", "일본 2골", "가마다 89' 동점골"],
    notes: ["Guardian match report 확인", "일본 late equaliser", "공식 하이라이트 URL은 추후 보강 대상"],
    highlightUrl: "https://www.youtube.com/results?search_query=Netherlands+Japan+2026+World+Cup+highlights",
    source: sourceSchedule,
    detailSource: sourceGuardianE,
    modelPick: { teamA: 45, draw: 26, teamB: 29 },
    highlightVideos: [
      {
        title: "Netherlands v Japan highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Netherlands+Japan+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "공식 업로드 확인 전 후보 링크"
      }
    ]
  });

  upsertMatch({
    id: "group-h-esp-cpv-2026-06-16",
    type: "match",
    status: "final",
    phaseLabel: "조별리그 H조",
    competition: "FIFA World Cup 2026",
    teamA: "spain",
    teamB: "cabo-verde",
    score: "스페인 0-0 카보베르데",
    dateLabel: "2026-06-16 KST",
    localTimeLabel: "2026-06-15 12:00 local",
    venue: "Atlanta Stadium",
    city: "Atlanta",
    headline: "카보베르데가 스페인을 0-0으로 막아낸 최대 이변",
    recap: "카보베르데가 스페인의 공세를 버텨내며 승점 1점을 챙겼고, H조가 초반부터 크게 흔들렸습니다.",
    scorers: [],
    notes: ["Guardian news blog 확인", "카보베르데 수비 집중", "하이라이트는 검색 후보 유지"],
    highlightUrl: "https://www.youtube.com/results?search_query=Spain+Cape+Verde+2026+World+Cup+highlights",
    source: sourceSchedule,
    detailSource: sourceGuardianG,
    modelPick: { teamA: 72, draw: 18, teamB: 10 },
    highlightVideos: [
      {
        title: "Spain v Cape Verde highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Spain+Cape+Verde+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "공식 업로드 확인 전 후보 링크"
      }
    ]
  });

  upsertMatch({
    id: "group-g-bel-egy-2026-06-16",
    type: "match",
    status: "final",
    phaseLabel: "조별리그 G조",
    competition: "FIFA World Cup 2026",
    teamA: "belgium",
    teamB: "egypt",
    score: "벨기에 1-1 이집트",
    dateLabel: "2026-06-16 KST",
    localTimeLabel: "2026-06-15 15:00 local",
    venue: "Seattle Stadium",
    city: "Seattle",
    headline: "루카쿠 투입 후 벨기에가 이집트와 1-1",
    recap: "이집트가 먼저 앞섰지만, 루카쿠 투입 직후 유도한 자책골로 벨기에가 균형을 맞췄습니다.",
    scorers: ["이맘 아슈르 19'", "모하메드 하니 66' 자책골"],
    notes: ["Guardian match report 확인", "루카쿠 교체 효과", "공식 하이라이트 URL은 추후 보강 대상"],
    highlightUrl: "https://www.youtube.com/results?search_query=Belgium+Egypt+2026+World+Cup+highlights",
    source: sourceSchedule,
    detailSource: sourceGuardianG,
    modelPick: { teamA: 52, draw: 26, teamB: 22 },
    highlightVideos: [
      {
        title: "Belgium v Egypt highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Belgium+Egypt+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "공식 업로드 확인 전 후보 링크"
      }
    ]
  });

  upsertMatch({
    id: "group-i-fra-sen-2026-06-17",
    type: "match",
    status: "final",
    phaseLabel: "조별리그 I조",
    competition: "FIFA World Cup 2026",
    teamA: "france",
    teamB: "senegal",
    score: "프랑스 3-1 세네갈",
    dateLabel: "2026-06-17 KST",
    localTimeLabel: "2026-06-16 15:00 local",
    venue: "New York New Jersey Stadium",
    city: "East Rutherford",
    headline: "음바페 멀티골, 프랑스가 세네갈을 3-1로 제압",
    recap: "프랑스가 후반 전술 조정 이후 흐름을 잡았고, 음바페가 멀티골로 개막전을 정리했습니다.",
    scorers: ["음바페 2골", "바르콜라 1골", "세네갈 이브라힘 음바예 1골"],
    notes: ["Guardian match report 확인", "음바페 프랑스 통산 기록 경신 맥락", "후반 전술 수정 후 경기 양상 반전"],
    highlightUrl: sourceFrance.url,
    source: sourceSchedule,
    detailSource: sourceFrance,
    modelPick: { teamA: 62, draw: 22, teamB: 16 },
    highlightVideos: [
      {
        title: "France v Senegal match report",
        channel: "The Guardian",
        type: "report",
        url: sourceFrance.url,
        duration: "article",
        meta: "세부 경기 흐름 확인용 매치 리포트"
      },
      {
        title: "France v Senegal highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=France+Senegal+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "공식 업로드 확인 전 후보 링크"
      }
    ]
  });

  upsertSectionItem("matches", {
    id: "group-i-fra-sen-2026-06-17",
    type: "match",
    status: "final",
    phaseLabel: "I조 종료",
    competition: "FIFA World Cup 2026",
    teamA: "france",
    teamB: "senegal",
    dateLabel: "2026-06-17 KST",
    score: "3-1",
    headline: "프랑스 vs 세네갈",
    summary: "음바페 멀티골과 후반 전술 수정으로 프랑스가 첫 승을 챙겼습니다.",
    source: sourceFrance
  });

  upsertSectionItem("matches", {
    id: "group-h-esp-cpv-2026-06-16",
    type: "match",
    status: "final",
    phaseLabel: "H조 종료",
    competition: "FIFA World Cup 2026",
    teamA: "spain",
    teamB: "cabo-verde",
    dateLabel: "2026-06-16 KST",
    score: "0-0",
    headline: "스페인 vs 카보베르데",
    summary: "이번 대회 초반 최대 이변 중 하나로 카보베르데가 승점 1점을 얻었습니다.",
    source: sourceGuardianG
  });

  upsertSectionItem("matches", {
    id: "group-f-ned-jpn-2026-06-15",
    type: "match",
    status: "final",
    phaseLabel: "F조 종료",
    competition: "FIFA World Cup 2026",
    teamA: "netherlands",
    teamB: "japan",
    dateLabel: "2026-06-15 KST",
    score: "2-2",
    headline: "네덜란드 vs 일본",
    summary: "가마다의 막판 동점골로 일본이 조 상위권 경쟁을 이어갔습니다.",
    source: sourceGuardianE
  });

  upsertVideo({
    id: "video-france-senegal-candidate",
    type: "video",
    headline: "프랑스 vs 세네갈 하이라이트 후보",
    summary: "공식 영상 URL이 바로 노출되지 않아 검색 후보를 유지합니다.",
    url: "https://www.youtube.com/results?search_query=France+Senegal+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=France+Senegal+2026+World+Cup+highlights",
      checkedAt: "2026-06-17",
      reliability: "curated"
    }
  });

  if (hub.archive) {
    hub.archive.officialResultsCheckedAt = "2026-06-17";
    hub.archive.source = sourceSchedule;
  }
})();
