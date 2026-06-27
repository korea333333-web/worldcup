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

(function finalizeDailyMatchHubJune27() {
  const data = window?.WORLD_CUP_DATA;
  const hub = data?.dailyMatchHub;
  if (!hub) return;

  const sourceSchedule = {
    label: "FIFA schedule/results",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-27",
    reliability: "official"
  };

  const sourceStandings = {
    label: "FIFA standings",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
    checkedAt: "2026-06-27",
    reliability: "official"
  };

  const sourceUsaTurkiye = {
    label: "Guardian USA 2-3 Turkiye report",
    url: "https://www.theguardian.com/football/2026/jun/26/usmnt-turkey-momentum",
    checkedAt: "2026-06-27",
    reliability: "trusted"
  };

  const sourceAustraliaParaguay = {
    label: "Guardian Paraguay 0-0 Australia live report",
    url: "https://www.theguardian.com/football/live/2026/jun/26/fifa-world-cup-2026-live-paraguay-v-australia-socceroos-updates-par-vs-aus-group-d-match-score-latest",
    checkedAt: "2026-06-27",
    reliability: "trusted"
  };

  const sourceEcuadorGermany = {
    label: "Guardian Ecuador 2-1 Germany live report",
    url: "https://www.theguardian.com/football/live/2026/jun/25/germany-v-ecuador-world-cup-2026-live",
    checkedAt: "2026-06-27",
    reliability: "trusted"
  };

  const sourceJapanSweden = {
    label: "Guardian Japan 1-1 Sweden live report",
    url: "https://www.theguardian.com/football/live/2026/jun/25/japan-v-sweden-world-cup-2026-live",
    checkedAt: "2026-06-27",
    reliability: "trusted"
  };

  hub.updatedAt = "2026-06-27";
  hub.summary = "2026-06-27 07:00 KST cutoff advanced the live hub through the latest completed Group D, E and F finales available before the run.";
  hub.sourceNote = "FIFA schedule/results and standings remained the official reference at the 2026-06-27 07:00 KST cutoff. Guardian live reports were used only for scorer order, lineup rotation context, cards, standout stats and knockout-clinching details where FIFA's richer match pages were not directly pinned.";
  hub.featuredMatchId = "group-e-ecu-ger-2026-06-25";

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
    id: "group-e-ecu-ger-2026-06-25",
    type: "match",
    status: "final",
    phaseLabel: "Group E final",
    competition: "FIFA World Cup 2026",
    teamA: "ecuador",
    teamB: "germany",
    score: "Ecuador 2-1 Germany",
    dateLabel: "2026-06-26 KST",
    localTimeLabel: "2026-06-25 local",
    venue: "New York New Jersey Stadium",
    city: "New York / New Jersey",
    headline: "Ecuador storm back against Germany and book a knockout place",
    recap: "Germany scored in the second minute through Leroy Sane, but Ecuador replied quickly through Angulo and found the late winner through Gonzalo Plata to seal a historic last-32 berth.",
    scorers: ["Leroy Sane 2'", "Jose Angulo 9'", "Gonzalo Plata 77'"],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Germany had already secured first place but lost their final group match",
      "Ecuador advanced with the comeback win and eliminated some third-place hopefuls",
      "Guardian report described the winner as a well-worked corner routine finish"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=Ecuador+Germany+2026+World+Cup+highlights",
    source: sourceEcuadorGermany,
    detailSource: sourceStandings,
    modelPick: { teamA: 29, draw: 23, teamB: 48 },
    highlightVideos: [
      {
        title: "Ecuador vs Germany highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Ecuador+Germany+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertMatch({
    id: "group-d-usa-tur-2026-06-26",
    type: "match",
    status: "final",
    phaseLabel: "Group D final",
    competition: "FIFA World Cup 2026",
    teamA: "usa",
    teamB: "turkiye",
    score: "USA 2-3 Turkiye",
    dateLabel: "2026-06-27 KST",
    localTimeLabel: "2026-06-26 local",
    venue: "official FIFA schedule slot",
    city: "USA host venue",
    headline: "Turkiye spoil the USA's perfect finish, but the hosts still win Group D",
    recap: "A rotated US side led twice through Auston Trusty and Sebastian Berhalter contributions, yet Turkiye took their chances and handed Mauricio Pochettino's team a narrow defeat without denying first place.",
    scorers: ["Auston Trusty", "Sebastian Berhalter"],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Guardian coverage said the USA had already qualified and still topped Group D",
      "Berhalter supplied a goal and an assist in the trusted report",
      "Christian Pulisic and Sergino Dest were used as second-half game changers"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=USA+Turkiye+2026+World+Cup+highlights",
    source: sourceUsaTurkiye,
    detailSource: sourceStandings,
    modelPick: { teamA: 51, draw: 24, teamB: 25 },
    highlightVideos: [
      {
        title: "USA vs Turkiye highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=USA+Turkiye+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertMatch({
    id: "group-d-par-aus-2026-06-26",
    type: "match",
    status: "final",
    phaseLabel: "Group D final",
    competition: "FIFA World Cup 2026",
    teamA: "paraguay",
    teamB: "australia",
    score: "Paraguay 0-0 Australia",
    dateLabel: "2026-06-27 KST",
    localTimeLabel: "2026-06-26 local",
    venue: "San Francisco Bay Area Stadium",
    city: "San Francisco Bay Area",
    headline: "Australia hold Paraguay and take second place in Group D",
    recap: "The Socceroos changed shape after the USA defeat, Patrick Beach preserved the clean sheet, and a disciplined 0-0 was enough to send Australia through with Paraguay likely following as a best third-placed side.",
    scorers: [],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Guardian report said Australia finished second while Paraguay stayed in the best-third-place race",
      "Aiden O'Neill was highlighted as player of the match in trusted coverage",
      "Jordy Bos repeatedly created the best Australian openings from right-back"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=Paraguay+Australia+2026+World+Cup+highlights",
    source: sourceAustraliaParaguay,
    detailSource: sourceStandings,
    modelPick: { teamA: 31, draw: 30, teamB: 39 },
    highlightVideos: [
      {
        title: "Paraguay vs Australia highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Paraguay+Australia+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertMatch({
    id: "group-f-jpn-swe-2026-06-25",
    type: "match",
    status: "final",
    phaseLabel: "Group F final",
    competition: "FIFA World Cup 2026",
    teamA: "japan",
    teamB: "sweden",
    score: "Japan 1-1 Sweden",
    dateLabel: "2026-06-26 KST",
    localTimeLabel: "2026-06-25 local",
    venue: "Dallas Stadium",
    city: "Dallas",
    headline: "Japan and Sweden both advance after a tense draw in Dallas",
    recap: "Daizen Maeda put Japan ahead with a flowing move, Anthony Elanga answered five minutes later, and Zion Suzuki's late saves protected a draw that sent both teams into the knockout bracket.",
    scorers: ["Daizen Maeda 56'", "Anthony Elanga 61'"],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Guardian coverage said Japan advanced as Group F runners-up",
      "Sweden progressed from third place after surviving late pressure",
      "Netherlands finished first in the group after beating Tunisia"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=Japan+Sweden+2026+World+Cup+highlights",
    source: sourceJapanSweden,
    detailSource: sourceStandings,
    modelPick: { teamA: 40, draw: 29, teamB: 31 },
    highlightVideos: [
      {
        title: "Japan vs Sweden highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Japan+Sweden+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertSectionItem("matches", {
    id: "group-e-ecu-ger-2026-06-25",
    type: "match",
    status: "final",
    phaseLabel: "Group E final",
    competition: "FIFA World Cup 2026",
    teamA: "ecuador",
    teamB: "germany",
    dateLabel: "2026-06-26 KST",
    score: "2-1",
    headline: "Ecuador vs Germany",
    summary: "Angulo and Plata flipped the match and sent Ecuador into the knockout round.",
    source: sourceEcuadorGermany
  });

  upsertSectionItem("matches", {
    id: "group-d-usa-tur-2026-06-26",
    type: "match",
    status: "final",
    phaseLabel: "Group D final",
    competition: "FIFA World Cup 2026",
    teamA: "usa",
    teamB: "turkiye",
    dateLabel: "2026-06-27 KST",
    score: "2-3",
    headline: "USA vs Turkiye",
    summary: "The USA lost the match but still closed Group D in first place.",
    source: sourceUsaTurkiye
  });

  upsertSectionItem("matches", {
    id: "group-d-par-aus-2026-06-26",
    type: "match",
    status: "final",
    phaseLabel: "Group D final",
    competition: "FIFA World Cup 2026",
    teamA: "paraguay",
    teamB: "australia",
    dateLabel: "2026-06-27 KST",
    score: "0-0",
    headline: "Paraguay vs Australia",
    summary: "Australia's clean sheet was enough for second place and a last-32 ticket.",
    source: sourceAustraliaParaguay
  });

  upsertSectionItem("matches", {
    id: "group-f-jpn-swe-2026-06-25",
    type: "match",
    status: "final",
    phaseLabel: "Group F final",
    competition: "FIFA World Cup 2026",
    teamA: "japan",
    teamB: "sweden",
    dateLabel: "2026-06-26 KST",
    score: "1-1",
    headline: "Japan vs Sweden",
    summary: "Maeda and Elanga traded goals before both sides held onto qualification.",
    source: sourceJapanSweden
  });

  upsertVideo({
    id: "video-ecu-ger-candidate",
    type: "video",
    headline: "Ecuador vs Germany highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=Ecuador+Germany+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Ecuador+Germany+2026+World+Cup+highlights",
      checkedAt: "2026-06-27",
      reliability: "curated"
    }
  });

  upsertVideo({
    id: "video-usa-tur-candidate",
    type: "video",
    headline: "USA vs Turkiye highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=USA+Turkiye+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=USA+Turkiye+2026+World+Cup+highlights",
      checkedAt: "2026-06-27",
      reliability: "curated"
    }
  });

  upsertVideo({
    id: "video-par-aus-candidate",
    type: "video",
    headline: "Paraguay vs Australia highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=Paraguay+Australia+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Paraguay+Australia+2026+World+Cup+highlights",
      checkedAt: "2026-06-27",
      reliability: "curated"
    }
  });

  upsertVideo({
    id: "video-jpn-swe-candidate",
    type: "video",
    headline: "Japan vs Sweden highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=Japan+Sweden+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Japan+Sweden+2026+World+Cup+highlights",
      checkedAt: "2026-06-27",
      reliability: "curated"
    }
  });

  if (hub.archive) {
    hub.archive.officialResultsCheckedAt = "2026-06-27";
    hub.archive.source = sourceSchedule;
  }
})();

(function extendDailyMatchHubJune27() {
  const data = window?.WORLD_CUP_DATA;
  const hub = data?.dailyMatchHub;
  if (!hub) return;

  const sourceSchedule = {
    label: "FIFA schedule/results",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-27",
    reliability: "official"
  };

  const sourceStandings = {
    label: "FIFA standings",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
    checkedAt: "2026-06-27",
    reliability: "official"
  };

  const sourceUsaTurkiye = {
    label: "Guardian USA 2-3 Turkiye report",
    url: "https://www.theguardian.com/football/2026/jun/26/usmnt-turkey-momentum",
    checkedAt: "2026-06-27",
    reliability: "trusted"
  };

  const sourceAustraliaParaguay = {
    label: "Guardian Paraguay 0-0 Australia live report",
    url: "https://www.theguardian.com/football/live/2026/jun/26/fifa-world-cup-2026-live-paraguay-v-australia-socceroos-updates-par-vs-aus-group-d-match-score-latest",
    checkedAt: "2026-06-27",
    reliability: "trusted"
  };

  const sourceEcuadorGermany = {
    label: "Guardian Ecuador 2-1 Germany live report",
    url: "https://www.theguardian.com/football/live/2026/jun/25/germany-v-ecuador-world-cup-2026-live",
    checkedAt: "2026-06-27",
    reliability: "trusted"
  };

  const sourceJapanSweden = {
    label: "Guardian Japan 1-1 Sweden live report",
    url: "https://www.theguardian.com/football/live/2026/jun/25/japan-v-sweden-world-cup-2026-live",
    checkedAt: "2026-06-27",
    reliability: "trusted"
  };

  hub.updatedAt = "2026-06-27";
  hub.summary = "2026-06-27 07:00 KST cutoff advanced the live hub through the latest completed Group D, E and F finales available before the run.";
  hub.sourceNote = "FIFA schedule/results and standings remained the official reference at the 2026-06-27 07:00 KST cutoff. Guardian live reports were used only for scorer order, lineup rotation context, cards, standout stats and knockout-clinching details where FIFA's richer match pages were not directly pinned.";
  hub.featuredMatchId = "group-e-ecu-ger-2026-06-25";

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
    id: "group-e-ecu-ger-2026-06-25",
    type: "match",
    status: "final",
    phaseLabel: "Group E final",
    competition: "FIFA World Cup 2026",
    teamA: "ecuador",
    teamB: "germany",
    score: "Ecuador 2-1 Germany",
    dateLabel: "2026-06-26 KST",
    localTimeLabel: "2026-06-25 local",
    venue: "New York New Jersey Stadium",
    city: "New York / New Jersey",
    headline: "Ecuador storm back against Germany and book a knockout place",
    recap: "Germany scored in the second minute through Leroy Sane, but Ecuador replied quickly through Angulo and found the late winner through Gonzalo Plata to seal a historic last-32 berth.",
    scorers: ["Leroy Sane 2'", "Jose Angulo 9'", "Gonzalo Plata 77'"],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Germany had already secured first place but lost their final group match",
      "Ecuador advanced with the comeback win and eliminated some third-place hopefuls",
      "Guardian report described the winner as a well-worked corner routine finish"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=Ecuador+Germany+2026+World+Cup+highlights",
    source: sourceEcuadorGermany,
    detailSource: sourceStandings,
    modelPick: { teamA: 29, draw: 23, teamB: 48 },
    highlightVideos: [
      {
        title: "Ecuador vs Germany highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Ecuador+Germany+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertMatch({
    id: "group-d-usa-tur-2026-06-26",
    type: "match",
    status: "final",
    phaseLabel: "Group D final",
    competition: "FIFA World Cup 2026",
    teamA: "usa",
    teamB: "turkiye",
    score: "USA 2-3 Turkiye",
    dateLabel: "2026-06-27 KST",
    localTimeLabel: "2026-06-26 local",
    venue: "official FIFA schedule slot",
    city: "USA host venue",
    headline: "Turkiye spoil the USA's perfect finish, but the hosts still win Group D",
    recap: "A rotated US side led twice through Auston Trusty and Sebastian Berhalter contributions, yet Turkiye took their chances and handed Mauricio Pochettino's team a narrow defeat without denying first place.",
    scorers: ["Auston Trusty", "Sebastian Berhalter"],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Guardian coverage said the USA had already qualified and still topped Group D",
      "Berhalter supplied a goal and an assist in the trusted report",
      "Christian Pulisic and Sergino Dest were used as second-half game changers"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=USA+Turkiye+2026+World+Cup+highlights",
    source: sourceUsaTurkiye,
    detailSource: sourceStandings,
    modelPick: { teamA: 51, draw: 24, teamB: 25 },
    highlightVideos: [
      {
        title: "USA vs Turkiye highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=USA+Turkiye+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertMatch({
    id: "group-d-par-aus-2026-06-26",
    type: "match",
    status: "final",
    phaseLabel: "Group D final",
    competition: "FIFA World Cup 2026",
    teamA: "paraguay",
    teamB: "australia",
    score: "Paraguay 0-0 Australia",
    dateLabel: "2026-06-27 KST",
    localTimeLabel: "2026-06-26 local",
    venue: "San Francisco Bay Area Stadium",
    city: "San Francisco Bay Area",
    headline: "Australia hold Paraguay and take second place in Group D",
    recap: "The Socceroos changed shape after the USA defeat, Patrick Beach preserved the clean sheet, and a disciplined 0-0 was enough to send Australia through with Paraguay likely following as a best third-placed side.",
    scorers: [],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Guardian report said Australia finished second while Paraguay stayed in the best-third-place race",
      "Aiden O'Neill was highlighted as player of the match in trusted coverage",
      "Jordy Bos repeatedly created the best Australian openings from right-back"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=Paraguay+Australia+2026+World+Cup+highlights",
    source: sourceAustraliaParaguay,
    detailSource: sourceStandings,
    modelPick: { teamA: 31, draw: 30, teamB: 39 },
    highlightVideos: [
      {
        title: "Paraguay vs Australia highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Paraguay+Australia+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertMatch({
    id: "group-f-jpn-swe-2026-06-25",
    type: "match",
    status: "final",
    phaseLabel: "Group F final",
    competition: "FIFA World Cup 2026",
    teamA: "japan",
    teamB: "sweden",
    score: "Japan 1-1 Sweden",
    dateLabel: "2026-06-26 KST",
    localTimeLabel: "2026-06-25 local",
    venue: "Dallas Stadium",
    city: "Dallas",
    headline: "Japan and Sweden both advance after a tense draw in Dallas",
    recap: "Daizen Maeda put Japan ahead with a flowing move, Anthony Elanga answered five minutes later, and Zion Suzuki's late saves protected a draw that sent both teams into the knockout bracket.",
    scorers: ["Daizen Maeda 56'", "Anthony Elanga 61'"],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Guardian coverage said Japan advanced as Group F runners-up",
      "Sweden progressed from third place after surviving late pressure",
      "Netherlands finished first in the group after beating Tunisia"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=Japan+Sweden+2026+World+Cup+highlights",
    source: sourceJapanSweden,
    detailSource: sourceStandings,
    modelPick: { teamA: 40, draw: 29, teamB: 31 },
    highlightVideos: [
      {
        title: "Japan vs Sweden highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Japan+Sweden+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertSectionItem("matches", {
    id: "group-e-ecu-ger-2026-06-25",
    type: "match",
    status: "final",
    phaseLabel: "Group E final",
    competition: "FIFA World Cup 2026",
    teamA: "ecuador",
    teamB: "germany",
    dateLabel: "2026-06-26 KST",
    score: "2-1",
    headline: "Ecuador vs Germany",
    summary: "Angulo and Plata flipped the match and sent Ecuador into the knockout round.",
    source: sourceEcuadorGermany
  });

  upsertSectionItem("matches", {
    id: "group-d-usa-tur-2026-06-26",
    type: "match",
    status: "final",
    phaseLabel: "Group D final",
    competition: "FIFA World Cup 2026",
    teamA: "usa",
    teamB: "turkiye",
    dateLabel: "2026-06-27 KST",
    score: "2-3",
    headline: "USA vs Turkiye",
    summary: "The USA lost the match but still closed Group D in first place.",
    source: sourceUsaTurkiye
  });

  upsertSectionItem("matches", {
    id: "group-d-par-aus-2026-06-26",
    type: "match",
    status: "final",
    phaseLabel: "Group D final",
    competition: "FIFA World Cup 2026",
    teamA: "paraguay",
    teamB: "australia",
    dateLabel: "2026-06-27 KST",
    score: "0-0",
    headline: "Paraguay vs Australia",
    summary: "Australia's clean sheet was enough for second place and a last-32 ticket.",
    source: sourceAustraliaParaguay
  });

  upsertSectionItem("matches", {
    id: "group-f-jpn-swe-2026-06-25",
    type: "match",
    status: "final",
    phaseLabel: "Group F final",
    competition: "FIFA World Cup 2026",
    teamA: "japan",
    teamB: "sweden",
    dateLabel: "2026-06-26 KST",
    score: "1-1",
    headline: "Japan vs Sweden",
    summary: "Maeda and Elanga traded goals before both sides held onto qualification.",
    source: sourceJapanSweden
  });

  upsertVideo({
    id: "video-ecu-ger-candidate",
    type: "video",
    headline: "Ecuador vs Germany highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=Ecuador+Germany+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Ecuador+Germany+2026+World+Cup+highlights",
      checkedAt: "2026-06-27",
      reliability: "curated"
    }
  });

  upsertVideo({
    id: "video-usa-tur-candidate",
    type: "video",
    headline: "USA vs Turkiye highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=USA+Turkiye+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=USA+Turkiye+2026+World+Cup+highlights",
      checkedAt: "2026-06-27",
      reliability: "curated"
    }
  });

  upsertVideo({
    id: "video-par-aus-candidate",
    type: "video",
    headline: "Paraguay vs Australia highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=Paraguay+Australia+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Paraguay+Australia+2026+World+Cup+highlights",
      checkedAt: "2026-06-27",
      reliability: "curated"
    }
  });

  upsertVideo({
    id: "video-jpn-swe-candidate",
    type: "video",
    headline: "Japan vs Sweden highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=Japan+Sweden+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Japan+Sweden+2026+World+Cup+highlights",
      checkedAt: "2026-06-27",
      reliability: "curated"
    }
  });

  if (hub.archive) {
    hub.archive.officialResultsCheckedAt = "2026-06-27";
    hub.archive.source = sourceSchedule;
  }
})();

(function finalizeDailyMatchHubJune18() {
  const data = window.WORLD_CUP_DATA;
  const hub = data?.dailyMatchHub;
  if (!hub) return;

  hub.updatedAt = "2026-06-18";
  hub.summary = "Cutoff kept at 2026-06-18 07:00 KST. Official FIFA results/standings were rechecked and the latest completed matches before the cutoff were merged with trusted match reports.";
  hub.sourceNote = "FIFA schedule/results and standings remain the official reference. Guardian match reports and live blogs were used only for scorers, lineup context, substitutions, and headline stats before the 07:00 KST automation cutoff.";
  hub.featuredMatchId = "group-l-eng-cro-2026-06-17";

  if (hub.archive) {
    hub.archive.officialResultsCheckedAt = "2026-06-18";
    hub.archive.source = {
      label: "FIFA schedule/results",
      url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
      checkedAt: "2026-06-18",
      reliability: "official"
    };
  }
})();

(function extendDailyMatchHubJune18() {
  const data = window.WORLD_CUP_DATA;
  const hub = data?.dailyMatchHub;
  if (!hub) return;

  const sourceSchedule = {
    label: "FIFA schedule/results",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-18",
    reliability: "official"
  };

  const sourceStandings = {
    label: "FIFA standings",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
    checkedAt: "2026-06-18",
    reliability: "official"
  };

  const sourceEngland = {
    label: "Guardian England v Croatia report",
    url: "https://www.theguardian.com/football/2026/jun/17/england-croatia-world-cup-2026-group-l-match-report",
    checkedAt: "2026-06-18",
    reliability: "trusted"
  };

  const sourcePortugal = {
    label: "Guardian Portugal v DR Congo report",
    url: "https://www.theguardian.com/football/2026/jun/17/portugal-dr-congo-world-cup-2026-group-k-match-report",
    checkedAt: "2026-06-18",
    reliability: "trusted"
  };

  const sourceArgentina = {
    label: "Guardian Argentina v Algeria report",
    url: "https://www.theguardian.com/football/2026/jun/16/argentina-algeria-world-cup-group-j-match-report",
    checkedAt: "2026-06-18",
    reliability: "trusted"
  };

  const sourceIraq = {
    label: "Guardian Iraq v Norway live report",
    url: "https://www.theguardian.com/football/live/2026/jun/16/iraq-v-norway-world-cup-2026-live",
    checkedAt: "2026-06-18",
    reliability: "trusted"
  };

  hub.updatedAt = "2026-06-18";
  hub.summary = "Cutoff kept at 2026-06-18 07:00 KST. Official FIFA results/standings were rechecked and the latest completed matches before the cutoff were merged with trusted match reports.";
  hub.sourceNote = "FIFA schedule/results and standings remain the official reference. Guardian match reports and live blogs were used only for scorers, lineup context, substitutions, and headline stats before the 07:00 KST automation cutoff.";
  hub.featuredMatchId = "group-l-eng-cro-2026-06-17";

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
    id: "group-l-eng-cro-2026-06-17",
    type: "match",
    status: "final",
    phaseLabel: "Group L",
    competition: "FIFA World Cup 2026",
    teamA: "england",
    teamB: "croatia",
    score: "England 4-2 Croatia",
    dateLabel: "2026-06-18 KST",
    localTimeLabel: "2026-06-17 Dallas local",
    venue: "Dallas Stadium",
    city: "Dallas",
    headline: "England survive a wide-open first half and pull away after the break",
    recap: "Harry Kane scored twice, but Croatia replied through Martin Baturina and Petar Musa before half-time. Jude Bellingham and Marcus Rashford finished the job in the second half.",
    scorers: ["Harry Kane (2)", "Martin Baturina", "Petar Musa", "Jude Bellingham", "Marcus Rashford"],
    notes: ["Half-time score was 2-2", "Guardian report flagged England's defensive gaps despite the win", "Official result cross-checked against FIFA results and standings pages"],
    highlightUrl: "https://www.youtube.com/results?search_query=England+Croatia+2026+World+Cup+highlights",
    source: sourceEngland,
    detailSource: sourceStandings,
    modelPick: { teamA: 57, draw: 22, teamB: 21 },
    highlightVideos: [
      {
        title: "England v Croatia highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=England+Croatia+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertMatch({
    id: "group-k-por-cod-2026-06-17",
    type: "match",
    status: "final",
    phaseLabel: "Group K",
    competition: "FIFA World Cup 2026",
    teamA: "portugal",
    teamB: "dr-congo",
    score: "Portugal 1-1 DR Congo",
    dateLabel: "2026-06-18 KST",
    localTimeLabel: "2026-06-17 Houston local",
    venue: "Houston Stadium",
    city: "Houston",
    headline: "DR Congo take a historic point off Portugal",
    recap: "Joao Neves put Portugal ahead in the sixth minute, but Yoane Wissa's stoppage-time header before the break earned DR Congo their first World Cup point since returning to the finals.",
    scorers: ["Joao Neves 6'", "Yoane Wissa 45+5'"],
    notes: ["Guardian report highlighted Portugal's lack of fluency around Cristiano Ronaldo", "DR Congo source reliability kept at trusted pending official FIFA match report page", "Official result cross-checked against FIFA results and standings pages"],
    highlightUrl: "https://www.youtube.com/results?search_query=Portugal+DR+Congo+2026+World+Cup+highlights",
    source: sourcePortugal,
    detailSource: sourceSchedule,
    modelPick: { teamA: 61, draw: 23, teamB: 16 },
    highlightVideos: [
      {
        title: "Portugal v DR Congo highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Portugal+DR+Congo+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertMatch({
    id: "group-j-arg-alg-2026-06-16",
    type: "match",
    status: "final",
    phaseLabel: "Group J",
    competition: "FIFA World Cup 2026",
    teamA: "argentina",
    teamB: "algeria",
    score: "Argentina 3-0 Algeria",
    dateLabel: "2026-06-17 KST",
    localTimeLabel: "2026-06-16 Kansas City local",
    venue: "Kansas City Stadium",
    city: "Kansas City",
    headline: "Messi hat-trick powers Argentina through their opener",
    recap: "Lionel Messi scored all three goals in Argentina's opening win and matched Miroslav Klose's all-time World Cup scoring record.",
    scorers: ["Lionel Messi 17'", "Lionel Messi 60'", "Lionel Messi 76'"],
    notes: ["200th Argentina cap for Messi per Guardian report", "Algeria's first finals appearance since 2014", "Official result cross-checked against FIFA results and standings pages"],
    highlightUrl: "https://www.youtube.com/results?search_query=Argentina+Algeria+2026+World+Cup+highlights",
    source: sourceArgentina,
    detailSource: sourceStandings,
    modelPick: { teamA: 69, draw: 19, teamB: 12 },
    highlightVideos: [
      {
        title: "Argentina v Algeria highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Argentina+Algeria+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertMatch({
    id: "group-i-ira-nor-2026-06-16",
    type: "match",
    status: "final",
    phaseLabel: "Group I",
    competition: "FIFA World Cup 2026",
    teamA: "iraq",
    teamB: "norway",
    score: "Iraq 1-4 Norway",
    dateLabel: "2026-06-17 KST",
    localTimeLabel: "2026-06-16 Boston local",
    venue: "Boston Stadium",
    city: "Foxborough",
    headline: "Haaland's debut double puts Norway on top of Iraq",
    recap: "Aymen Hussein equalised before half-time, but Erling Haaland restored Norway's lead and the Europeans added a Leo Ostigard header plus a late own goal.",
    scorers: ["Erling Haaland 29'", "Aymen Hussein 39'", "Erling Haaland 45+1'", "Leo Ostigard 76'", "Iraq own goal 90+6'"],
    notes: ["Guardian live blog recorded the final as 4-1", "Iraq created multiple late first-half chances despite the scoreline", "Official result cross-checked against FIFA results and standings pages"],
    highlightUrl: "https://www.youtube.com/results?search_query=Iraq+Norway+2026+World+Cup+highlights",
    source: sourceIraq,
    detailSource: sourceSchedule,
    modelPick: { teamA: 17, draw: 21, teamB: 62 },
    highlightVideos: [
      {
        title: "Iraq v Norway highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Iraq+Norway+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertSectionItem("matches", {
    id: "group-l-eng-cro-2026-06-17",
    type: "match",
    status: "final",
    phaseLabel: "Group L final",
    competition: "FIFA World Cup 2026",
    teamA: "england",
    teamB: "croatia",
    dateLabel: "2026-06-18 KST",
    score: "4-2",
    headline: "England vs Croatia",
    summary: "Kane scored twice before Bellingham and Rashford finished a chaotic opener.",
    source: sourceEngland
  });

  upsertSectionItem("matches", {
    id: "group-k-por-cod-2026-06-17",
    type: "match",
    status: "final",
    phaseLabel: "Group K final",
    competition: "FIFA World Cup 2026",
    teamA: "portugal",
    teamB: "dr-congo",
    dateLabel: "2026-06-18 KST",
    score: "1-1",
    headline: "Portugal vs DR Congo",
    summary: "Wissa's stoppage-time equaliser gave DR Congo a historic first point.",
    source: sourcePortugal
  });

  upsertSectionItem("matches", {
    id: "group-j-arg-alg-2026-06-16",
    type: "match",
    status: "final",
    phaseLabel: "Group J final",
    competition: "FIFA World Cup 2026",
    teamA: "argentina",
    teamB: "algeria",
    dateLabel: "2026-06-17 KST",
    score: "3-0",
    headline: "Argentina vs Algeria",
    summary: "Messi's hat-trick drew him level with the all-time World Cup scoring record.",
    source: sourceArgentina
  });

  upsertSectionItem("matches", {
    id: "group-i-ira-nor-2026-06-16",
    type: "match",
    status: "final",
    phaseLabel: "Group I final",
    competition: "FIFA World Cup 2026",
    teamA: "iraq",
    teamB: "norway",
    dateLabel: "2026-06-17 KST",
    score: "1-4",
    headline: "Iraq vs Norway",
    summary: "Haaland struck twice and Norway finished strongly after Iraq's equaliser.",
    source: sourceIraq
  });

  upsertVideo({
    id: "video-eng-cro-candidate",
    type: "video",
    headline: "England vs Croatia highlights candidate",
    summary: "Official or broadcaster upload not pinned at cutoff, so a YouTube candidate search is stored.",
    url: "https://www.youtube.com/results?search_query=England+Croatia+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=England+Croatia+2026+World+Cup+highlights",
      checkedAt: "2026-06-18",
      reliability: "curated"
    }
  });

  upsertVideo({
    id: "video-por-cod-candidate",
    type: "video",
    headline: "Portugal vs DR Congo highlights candidate",
    summary: "Stored as a candidate link until a stable official highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=Portugal+DR+Congo+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Portugal+DR+Congo+2026+World+Cup+highlights",
      checkedAt: "2026-06-18",
      reliability: "curated"
    }
  });

  upsertVideo({
    id: "video-arg-alg-candidate",
    type: "video",
    headline: "Argentina vs Algeria highlights candidate",
    summary: "Stored as a candidate link until a stable official highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=Argentina+Algeria+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Argentina+Algeria+2026+World+Cup+highlights",
      checkedAt: "2026-06-18",
      reliability: "curated"
    }
  });

  if (hub.archive) {
    hub.archive.officialResultsCheckedAt = "2026-06-18";
    hub.archive.source = sourceSchedule;
  }
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

  hub.updatedAt = "2026-06-18";
  hub.summary = "Cutoff kept at 2026-06-18 07:00 KST. Official FIFA results/standings were rechecked and the latest completed matches before the cutoff were merged with trusted match reports.";
  hub.sourceNote = "FIFA schedule/results and standings remain the official reference. Guardian match reports and live blogs were used only for scorers, lineup context, substitutions, and headline stats before the 07:00 KST automation cutoff.";
  hub.featuredMatchId = "group-l-eng-cro-2026-06-17";

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
    hub.archive.officialResultsCheckedAt = "2026-06-18";
    hub.archive.source = {
      label: "FIFA schedule/results",
      url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
      checkedAt: "2026-06-18",
      reliability: "official"
    };
  }
})();

(function extendDailyMatchHubJune19() {
  const data = window.WORLD_CUP_DATA;
  const hub = data?.dailyMatchHub;
  if (!hub) return;

  const sourceSchedule = {
    label: "FIFA schedule/results",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-19",
    reliability: "official"
  };

  const sourceStandings = {
    label: "FIFA standings",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
    checkedAt: "2026-06-19",
    reliability: "official"
  };

  const sourceMexicoKorea = {
    label: "Guardian Mexico v South Korea live report",
    url: "https://www.theguardian.com/football/live/2026/jun/19/fifa-world-cup-2026-live-mexico-v-south-korea-updates-mex-vs-kor-group-a-match-score-latest",
    checkedAt: "2026-06-19",
    reliability: "trusted"
  };

  const sourceCzechiaSouthAfrica = {
    label: "Guardian Czechia v South Africa live report",
    url: "https://www.theguardian.com/football/live/2026/jun/18/czechia-v-south-africa-world-cup-live",
    checkedAt: "2026-06-19",
    reliability: "trusted"
  };

  hub.updatedAt = "2026-06-19";
  hub.summary = "2026-06-19 07:00 KST cutoff advanced Group A through both second-matchday finals, keeping FIFA schedule/results and standings as the official reference.";
  hub.sourceNote = "FIFA schedule/results and standings remain the official reference. Guardian live reports were used only for scorer timing, lineup context, substitutions, cards, and late-match chances where the FIFA match report page was not yet pinned.";
  hub.featuredMatchId = "group-a-mex-kor-2026-06-18";

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
    id: "group-a-mex-kor-2026-06-18",
    type: "match",
    status: "final",
    phaseLabel: "Group A",
    competition: "FIFA World Cup 2026",
    teamA: "mexico",
    teamB: "korea",
    score: "Mexico 1-0 Korea Republic",
    dateLabel: "2026-06-19 KST",
    localTimeLabel: "2026-06-18 Guadalajara local",
    venue: "Guadalajara Stadium",
    city: "Guadalajara",
    headline: "Mexico clinch Group A with a narrow win over South Korea",
    recap: "Luis Romo punished a spilled catch in the 50th minute, and Raul Rangel preserved the result with a double save from Cho Gue-sung late on.",
    scorers: ["Luis Romo 50'"],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Guardian pre-match note said South Korea made one change, bringing in Kim Moon-hwan at left wing-back",
      "South Korea changed Son Heung-min and Lee Jae-sung for Hwang Hee-chan and Oh Hyeon-gyu in the 57th minute",
      "Lee Kang-in was booked early and Paik Seung-ho was booked after the hour"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=Mexico+South+Korea+2026+World+Cup+highlights",
    source: sourceMexicoKorea,
    detailSource: sourceStandings,
    modelPick: { teamA: 54, draw: 24, teamB: 22 },
    highlightVideos: [
      {
        title: "Mexico v South Korea highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Mexico+South+Korea+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertMatch({
    id: "group-a-cze-rsa-2026-06-18",
    type: "match",
    status: "final",
    phaseLabel: "Group A",
    competition: "FIFA World Cup 2026",
    teamA: "czechia",
    teamB: "south-africa",
    score: "Czechia 1-1 South Africa",
    dateLabel: "2026-06-19 KST",
    localTimeLabel: "2026-06-18 Atlanta local",
    venue: "Atlanta Stadium",
    city: "Atlanta",
    headline: "Mokoena's late penalty rescues South Africa against Czechia",
    recap: "Michal Sadilek put Czechia ahead inside five minutes, but Teboho Mokoena converted an 83rd-minute penalty after a handball decision on Pavel Sulc.",
    scorers: ["Michal Sadilek 5'", "Teboho Mokoena 83' (pen)"],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Guardian team news said Czechia switched to a 3-5-2 while South Africa moved to a 4-3-3",
      "Czechia introduced Zeleny and Sulc on 55', then Soucek and Provod on 66'",
      "Krejci was booked for flattening Maseko before the late penalty sequence"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=Czechia+South+Africa+2026+World+Cup+highlights",
    source: sourceCzechiaSouthAfrica,
    detailSource: sourceSchedule,
    modelPick: { teamA: 39, draw: 30, teamB: 31 },
    highlightVideos: [
      {
        title: "Czechia v South Africa highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Czechia+South+Africa+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertSectionItem("matches", {
    id: "group-a-mex-kor-2026-06-18",
    type: "match",
    status: "final",
    phaseLabel: "Group A final",
    competition: "FIFA World Cup 2026",
    teamA: "mexico",
    teamB: "korea",
    dateLabel: "2026-06-19 KST",
    score: "1-0",
    headline: "Mexico vs South Korea",
    summary: "Romo scored after a goalkeeping spill and Rangel saved Mexico late.",
    source: sourceMexicoKorea
  });

  upsertSectionItem("matches", {
    id: "group-a-cze-rsa-2026-06-18",
    type: "match",
    status: "final",
    phaseLabel: "Group A final",
    competition: "FIFA World Cup 2026",
    teamA: "czechia",
    teamB: "south-africa",
    dateLabel: "2026-06-19 KST",
    score: "1-1",
    headline: "Czechia vs South Africa",
    summary: "Sadilek struck early before Mokoena's late penalty kept both teams alive.",
    source: sourceCzechiaSouthAfrica
  });

  upsertVideo({
    id: "video-mex-kor-candidate",
    type: "video",
    headline: "Mexico vs South Korea highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=Mexico+South+Korea+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Mexico+South+Korea+2026+World+Cup+highlights",
      checkedAt: "2026-06-19",
      reliability: "curated"
    }
  });

  upsertVideo({
    id: "video-cze-rsa-candidate",
    type: "video",
    headline: "Czechia vs South Africa highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=Czechia+South+Africa+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Czechia+South+Africa+2026+World+Cup+highlights",
      checkedAt: "2026-06-19",
      reliability: "curated"
    }
  });

  if (hub.archive) {
    hub.archive.officialResultsCheckedAt = "2026-06-19";
    hub.archive.source = sourceSchedule;
  }
})();

(function extendDailyMatchHubJune20() {
  const data = window.WORLD_CUP_DATA;
  const hub = data?.dailyMatchHub;
  if (!hub) return;

  const sourceSchedule = {
    label: "FIFA schedule/results",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-20",
    reliability: "official"
  };

  const sourceStandings = {
    label: "FIFA standings",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
    checkedAt: "2026-06-20",
    reliability: "official"
  };

  const sourceCanadaQatar = {
    label: "Guardian Canada v Qatar match report",
    url: "https://www.theguardian.com/football/2026/jun/18/canada-qatar-world-cup-2026-group-b-match-report",
    checkedAt: "2026-06-20",
    reliability: "trusted"
  };

  const sourceUsaAustralia = {
    label: "Guardian USA v Australia match report",
    url: "https://www.theguardian.com/football/2026/jun/19/usa-australia-world-cup-2026-group-d-match-report",
    checkedAt: "2026-06-20",
    reliability: "trusted"
  };

  hub.updatedAt = "2026-06-20";
  hub.summary = "2026-06-20 07:00 KST cutoff advanced the scenario through Canada's 6-0 win over Qatar and the USA's 2-0 win over Australia, while later 2026-06-20 KST kickoffs were left for the next run.";
  hub.sourceNote = "FIFA schedule/results and standings remain the official reference. Guardian match reports and live blogs were used only for scorer order, cards, lineup context and the Ismael Kone injury aftermath where the FIFA match-report pages were not yet pinned.";
  hub.featuredMatchId = "group-d-usa-aus-2026-06-19";

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
    id: "group-b-can-qat-2026-06-18",
    type: "match",
    status: "final",
    phaseLabel: "Group B",
    competition: "FIFA World Cup 2026",
    teamA: "canada",
    teamB: "qatar",
    score: "Canada 6-0 Qatar",
    dateLabel: "2026-06-19 KST",
    localTimeLabel: "2026-06-18 15:00 local",
    venue: "Vancouver Stadium (BC Place)",
    city: "Vancouver",
    headline: "Canada overwhelm nine-man Qatar for a first men's World Cup win",
    recap: "Cyle Larin opened the scoring, Jonathan David hit a hat-trick, Nathan Saliba curled in a tribute free-kick after Ismael Kone's injury, and Qatar collapsed after two red cards.",
    scorers: ["Cyle Larin 16'", "Jonathan David 29'", "Jonathan David 45+3'", "Nathan Saliba 64'", "Mohammad Al-Mannai 75' (OG)", "Jonathan David 90+2'"],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Homam Ahmed was sent off on 33' for denying Tajon Buchanan a goalscoring opportunity",
      "Assim Madibo was sent off after VAR review following the tackle that caused Ismael Kone's leg injury",
      "Canada's first-ever men's World Cup win put the co-hosts on top of Group B on goal difference"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=Canada+Qatar+2026+World+Cup+highlights",
    source: sourceCanadaQatar,
    detailSource: sourceStandings,
    modelPick: { teamA: 48, draw: 28, teamB: 24 },
    highlightVideos: [
      {
        title: "Canada v Qatar highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Canada+Qatar+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertMatch({
    id: "group-d-usa-aus-2026-06-19",
    type: "match",
    status: "final",
    phaseLabel: "Group D",
    competition: "FIFA World Cup 2026",
    teamA: "usa",
    teamB: "australia",
    score: "USA 2-0 Australia",
    dateLabel: "2026-06-20 KST",
    localTimeLabel: "2026-06-19 12:00 local",
    venue: "Seattle Stadium",
    city: "Seattle",
    headline: "USA reach the knockout stage with a composed win over Australia",
    recap: "A Cameron Burgess own goal set the tone before Alex Freeman's finish was confirmed after a VAR review, giving the United States six points from two matches.",
    scorers: ["Cameron Burgess 11' (OG)", "Alex Freeman 43'"],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Christian Pulisic was unavailable for selection",
      "Australia's Jordan Bos and Alessandro Circati were booked in the first half, and the match finished with seven yellow cards",
      "The win secured the United States a knockout-round place with one group game to spare"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=USA+Australia+2026+World+Cup+highlights",
    source: sourceUsaAustralia,
    detailSource: sourceStandings,
    modelPick: { teamA: 56, draw: 24, teamB: 20 },
    highlightVideos: [
      {
        title: "USA v Australia highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=USA+Australia+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertSectionItem("matches", {
    id: "group-d-usa-aus-2026-06-19",
    type: "match",
    status: "final",
    phaseLabel: "Group D final",
    competition: "FIFA World Cup 2026",
    teamA: "usa",
    teamB: "australia",
    dateLabel: "2026-06-20 KST",
    score: "2-0",
    headline: "USA vs Australia",
    summary: "Burgess turned one in early and Freeman sealed a US knockout berth before half-time.",
    source: sourceUsaAustralia
  });

  upsertSectionItem("matches", {
    id: "group-b-can-qat-2026-06-18",
    type: "match",
    status: "final",
    phaseLabel: "Group B final",
    competition: "FIFA World Cup 2026",
    teamA: "canada",
    teamB: "qatar",
    dateLabel: "2026-06-19 KST",
    score: "6-0",
    headline: "Canada vs Qatar",
    summary: "David hit a hat-trick as Canada overwhelmed nine-man Qatar in Vancouver.",
    source: sourceCanadaQatar
  });

  upsertVideo({
    id: "video-usa-aus-candidate",
    type: "video",
    headline: "USA vs Australia highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=USA+Australia+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=USA+Australia+2026+World+Cup+highlights",
      checkedAt: "2026-06-20",
      reliability: "curated"
    }
  });

  upsertVideo({
    id: "video-can-qat-candidate",
    type: "video",
    headline: "Canada vs Qatar highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=Canada+Qatar+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Canada+Qatar+2026+World+Cup+highlights",
      checkedAt: "2026-06-20",
      reliability: "curated"
    }
  });

  if (hub.archive) {
    hub.archive.officialResultsCheckedAt = "2026-06-20";
    hub.archive.source = sourceSchedule;
  }
})();

(function extendDailyMatchHubJune21() {
  const data = window.WORLD_CUP_DATA;
  const hub = data?.dailyMatchHub;
  if (!hub) return;

  const sourceSchedule = {
    label: "FIFA schedule/results",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-21",
    reliability: "official"
  };

  const sourceStandings = {
    label: "FIFA standings",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
    checkedAt: "2026-06-21",
    reliability: "official"
  };

  const sourceScotlandMorocco = {
    label: "Guardian Scotland v Morocco match report",
    url: "https://www.theguardian.com/football/2026/jun/20/scotland-morocco-world-cup-match-report",
    checkedAt: "2026-06-21",
    reliability: "trusted"
  };

  const sourceBrazilHaiti = {
    label: "Guardian Brazil v Haiti live report",
    url: "https://www.theguardian.com/football/live/2026/jun/20/fifa-world-cup-2026-live-brazil-v-haiti-updates-bra-vs-hai-group-c-match-score-latest",
    checkedAt: "2026-06-21",
    reliability: "trusted"
  };

  const sourceTurkiyeParaguay = {
    label: "Guardian Turkiye v Paraguay live report",
    url: "https://www.theguardian.com/football/live/2026/jun/20/fifa-world-cup-2026-live-turkey-v-paraguay-updates-tur-vs-par-group-d-match-score-latest",
    checkedAt: "2026-06-21",
    reliability: "trusted"
  };

  hub.updatedAt = "2026-06-21";
  hub.summary = "2026-06-21 07:00 KST cutoff advanced the scenario through Morocco's win over Scotland, Brazil's win over Haiti and Paraguay's upset of Turkiye. Matches kicking off at or after the cutoff remain for the next run.";
  hub.sourceNote = "FIFA schedule/results and standings remain the official reference. Guardian reports and live blogs were used only for scorer order, disciplinary notes, injury context and standout match stats where the official match-report pages were not yet pinned.";
  hub.featuredMatchId = "group-c-sco-mar-2026-06-19";

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
    id: "group-c-sco-mar-2026-06-19",
    type: "match",
    status: "final",
    phaseLabel: "Group C",
    competition: "FIFA World Cup 2026",
    teamA: "scotland",
    teamB: "morocco",
    score: "Scotland 0-1 Morocco",
    dateLabel: "2026-06-20 KST",
    localTimeLabel: "2026-06-19 18:00 local",
    venue: "Boston Stadium",
    city: "Foxborough",
    headline: "Morocco land an early blow and leave Scotland's path hanging on the Brazil finale",
    recap: "Ismael Saibari scored after 71 seconds, Morocco stayed on the front foot for most of the first half, and Scotland's late pressure was not enough to earn a point.",
    scorers: ["Ismael Saibari 2'"],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Scotland had two second-half penalty appeals waved away",
      "Kieran Tierney went off in the second half, but Steve Clarke later described it as cramp",
      "Morocco moved to four points, while Scotland stayed on three before facing Brazil"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=Scotland+Morocco+2026+World+Cup+highlights",
    source: sourceScotlandMorocco,
    detailSource: sourceStandings,
    modelPick: { teamA: 31, draw: 28, teamB: 41 },
    highlightVideos: [
      {
        title: "Scotland v Morocco highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Scotland+Morocco+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertMatch({
    id: "group-c-bra-hai-2026-06-19",
    type: "match",
    status: "final",
    phaseLabel: "Group C",
    competition: "FIFA World Cup 2026",
    teamA: "brazil",
    teamB: "haiti",
    score: "Brazil 3-0 Haiti",
    dateLabel: "2026-06-20 KST",
    localTimeLabel: "2026-06-19 20:30 local",
    venue: "Philadelphia Stadium",
    city: "Philadelphia",
    headline: "Brazil do enough before half-time as Haiti fade after Raphinha's early injury",
    recap: "Matheus Cunha struck twice before Vinicius Junior added a stoppage-time third, giving Brazil a controlled but not especially fluent win over Haiti.",
    scorers: ["Matheus Cunha 18'", "Matheus Cunha 36'", "Vinicius Junior 45+2'"],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Raphinha went off early and was later reported as a doubt for Brazil's next match",
      "Brazil eased off in the second half after building the three-goal lead before the break",
      "The win moved Brazil level with Morocco on four points in Group C"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=Brazil+Haiti+2026+World+Cup+highlights",
    source: sourceBrazilHaiti,
    detailSource: sourceStandings,
    modelPick: { teamA: 72, draw: 18, teamB: 10 },
    highlightVideos: [
      {
        title: "Brazil v Haiti highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Brazil+Haiti+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertMatch({
    id: "group-d-tur-par-2026-06-19",
    type: "match",
    status: "final",
    phaseLabel: "Group D",
    competition: "FIFA World Cup 2026",
    teamA: "turkiye",
    teamB: "paraguay",
    score: "Turkiye 0-1 Paraguay",
    dateLabel: "2026-06-20 KST",
    localTimeLabel: "2026-06-19 20:00 local",
    venue: "San Francisco Bay Area Stadium",
    city: "Santa Clara",
    headline: "Paraguay survive with 10 men and send Turkiye out despite a shot avalanche",
    recap: "Matias Galarza scored after 65 seconds, Paraguay lost Miguel Almiron to a straight red under the new dissent rule, and Turkiye still could not find a way past the blockade.",
    scorers: ["Matias Galarza 2'"],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Paraguay played the closing stages with 10 men after Miguel Almiron's red card",
      "Turkiye dominated the ball and finished with 32 shots and 12 corners in the trusted report summary",
      "Turkiye were eliminated, while Paraguay stayed alive on three points ahead of the Australia match"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=Turkiye+Paraguay+2026+World+Cup+highlights",
    source: sourceTurkiyeParaguay,
    detailSource: sourceStandings,
    modelPick: { teamA: 45, draw: 30, teamB: 25 },
    highlightVideos: [
      {
        title: "Turkiye v Paraguay highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Turkiye+Paraguay+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertSectionItem("matches", {
    id: "group-c-sco-mar-2026-06-19",
    type: "match",
    status: "final",
    phaseLabel: "Group C final",
    competition: "FIFA World Cup 2026",
    teamA: "scotland",
    teamB: "morocco",
    dateLabel: "2026-06-20 KST",
    score: "0-1",
    headline: "Scotland vs Morocco",
    summary: "Saibari's 71-second strike held up as Morocco tightened the Group C race.",
    source: sourceScotlandMorocco
  });

  upsertSectionItem("matches", {
    id: "group-c-bra-hai-2026-06-19",
    type: "match",
    status: "final",
    phaseLabel: "Group C final",
    competition: "FIFA World Cup 2026",
    teamA: "brazil",
    teamB: "haiti",
    dateLabel: "2026-06-20 KST",
    score: "3-0",
    headline: "Brazil vs Haiti",
    summary: "Cunha's first-half brace and Vinicius's third gave Brazil a needed win.",
    source: sourceBrazilHaiti
  });

  upsertSectionItem("matches", {
    id: "group-d-tur-par-2026-06-19",
    type: "match",
    status: "final",
    phaseLabel: "Group D final",
    competition: "FIFA World Cup 2026",
    teamA: "turkiye",
    teamB: "paraguay",
    dateLabel: "2026-06-20 KST",
    score: "0-1",
    headline: "Turkiye vs Paraguay",
    summary: "Galarza scored early and Paraguay held on with 10 men to stay alive.",
    source: sourceTurkiyeParaguay
  });

  upsertVideo({
    id: "video-sco-mar-candidate",
    type: "video",
    headline: "Scotland vs Morocco highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=Scotland+Morocco+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Scotland+Morocco+2026+World+Cup+highlights",
      checkedAt: "2026-06-21",
      reliability: "curated"
    }
  });

  upsertVideo({
    id: "video-bra-hai-candidate",
    type: "video",
    headline: "Brazil vs Haiti highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=Brazil+Haiti+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Brazil+Haiti+2026+World+Cup+highlights",
      checkedAt: "2026-06-21",
      reliability: "curated"
    }
  });

  upsertVideo({
    id: "video-tur-par-candidate",
    type: "video",
    headline: "Turkiye vs Paraguay highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=Turkiye+Paraguay+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Turkiye+Paraguay+2026+World+Cup+highlights",
      checkedAt: "2026-06-21",
      reliability: "curated"
    }
  });

  if (hub.archive) {
    hub.archive.officialResultsCheckedAt = "2026-06-21";
    hub.archive.source = sourceSchedule;
  }
})();

(function extendDailyMatchHubJune26() {
  const data = window.WORLD_CUP_DATA;
  const hub = data?.dailyMatchHub;
  if (!hub) return;

  const sourceSchedule = {
    label: "FIFA schedule/results",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-26",
    reliability: "official"
  };

  const sourceStandings = {
    label: "FIFA standings",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
    checkedAt: "2026-06-26",
    reliability: "official"
  };

  const sourceSouthAfricaKorea = {
    label: "Guardian South Africa v South Korea live report",
    url: "https://www.theguardian.com/football/live/2026/jun/24/south-africa-v-south-korea-world-cup-2026-live",
    checkedAt: "2026-06-26",
    reliability: "trusted"
  };

  const sourceMexicoCzechia = {
    label: "Guardian Czechia v Mexico live report",
    url: "https://www.theguardian.com/football/live/2026/jun/24/czechia-v-mexico-world-cup-2026-live",
    checkedAt: "2026-06-26",
    reliability: "trusted"
  };

  hub.updatedAt = "2026-06-26";
  hub.summary = "2026-06-26 07:00 KST cutoff advanced Group A through the two final-matchday results, leaving later groups for the next run.";
  hub.sourceNote = "FIFA schedule/results and standings remain the official reference. Guardian live coverage was used only for lineup context, substitutions, disciplinary notes and standout match details where the official match-report pages were not yet pinned.";
  hub.featuredMatchId = "group-a-rsa-kor-2026-06-24";

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
    id: "group-a-rsa-kor-2026-06-24",
    type: "match",
    status: "final",
    phaseLabel: "Group A",
    competition: "FIFA World Cup 2026",
    teamA: "south-africa",
    teamB: "korea",
    score: "South Africa 1-0 South Korea",
    dateLabel: "2026-06-25 KST",
    localTimeLabel: "2026-06-24 19:00 local",
    venue: "Monterrey Stadium",
    city: "Monterrey",
    headline: "South Africa shut out South Korea and reach the knockout rounds for the first time",
    recap: "Thapelo Maseko scored in the 63rd minute, South Korea chased the game after Son Heung-min began on the bench, and Bafana Bafana held on to secure second place in Group A.",
    scorers: ["Thapelo Maseko 63'"],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Son Heung-min started on the bench in the trusted live report",
      "Cho Gue-sung was booked late as South Korea pushed for an equaliser",
      "South Korea finished with 3 points and a -1 goal difference and had to wait on the third-place table"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=South+Africa+South+Korea+2026+World+Cup+highlights",
    source: sourceSouthAfricaKorea,
    detailSource: sourceStandings,
    modelPick: { teamA: 26, draw: 30, teamB: 44 },
    highlightVideos: [
      {
        title: "South Africa v South Korea highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=South+Africa+South+Korea+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertMatch({
    id: "group-a-cze-mex-2026-06-24",
    type: "match",
    status: "final",
    phaseLabel: "Group A",
    competition: "FIFA World Cup 2026",
    teamA: "czechia",
    teamB: "mexico",
    score: "Czechia 0-3 Mexico",
    dateLabel: "2026-06-25 KST",
    localTimeLabel: "2026-06-24 19:00 local",
    venue: "Mexico City Stadium",
    city: "Mexico City",
    headline: "Mexico finish Group A perfect as Czechia fade out of the tournament",
    recap: "Mateo Chavez broke the game open, Julian Quinones doubled the lead, and Alvaro Fidalgo capped the night after Guillermo Ochoa's late cameo in Mexico City's 3-0 win.",
    scorers: ["Mateo Chavez 54'", "Julian Quinones 61'", "Alvaro Fidalgo 90+4'"],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Mexico closed Group A with 9 points, +6 goal difference and no goals conceded",
      "Guillermo Ochoa made his 154th Mexico appearance and helped start the final goal move",
      "Fidalgo's stoppage-time finish was his first international goal in the trusted live report"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=Czechia+Mexico+2026+World+Cup+highlights",
    source: sourceMexicoCzechia,
    detailSource: sourceStandings,
    modelPick: { teamA: 17, draw: 24, teamB: 59 },
    highlightVideos: [
      {
        title: "Czechia v Mexico highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Czechia+Mexico+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertSectionItem("matches", {
    id: "group-a-rsa-kor-2026-06-24",
    type: "match",
    status: "final",
    phaseLabel: "Group A final",
    competition: "FIFA World Cup 2026",
    teamA: "south-africa",
    teamB: "korea",
    dateLabel: "2026-06-25 KST",
    score: "1-0",
    headline: "South Africa vs South Korea",
    summary: "Maseko's strike sent South Africa through and left South Korea waiting on third-place math.",
    source: sourceSouthAfricaKorea
  });

  upsertSectionItem("matches", {
    id: "group-a-cze-mex-2026-06-24",
    type: "match",
    status: "final",
    phaseLabel: "Group A final",
    competition: "FIFA World Cup 2026",
    teamA: "czechia",
    teamB: "mexico",
    dateLabel: "2026-06-25 KST",
    score: "0-3",
    headline: "Czechia vs Mexico",
    summary: "Mexico completed a perfect group stage and kept a third straight clean sheet.",
    source: sourceMexicoCzechia
  });

  upsertVideo({
    id: "video-rsa-kor-candidate",
    type: "video",
    headline: "South Africa vs South Korea highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=South+Africa+South+Korea+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=South+Africa+South+Korea+2026+World+Cup+highlights",
      checkedAt: "2026-06-26",
      reliability: "curated"
    }
  });

  upsertVideo({
    id: "video-cze-mex-candidate",
    type: "video",
    headline: "Czechia vs Mexico highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=Czechia+Mexico+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Czechia+Mexico+2026+World+Cup+highlights",
      checkedAt: "2026-06-26",
      reliability: "curated"
    }
  });

  if (hub.archive) {
    hub.archive.officialResultsCheckedAt = "2026-06-26";
    hub.archive.source = sourceSchedule;
  }
})();

(function finalizeDailyMatchHubJune27() {
  const data = window?.WORLD_CUP_DATA;
  const hub = data?.dailyMatchHub;
  if (!hub) return;

  const sourceSchedule = {
    label: "FIFA schedule/results",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
    checkedAt: "2026-06-27",
    reliability: "official"
  };

  const sourceStandings = {
    label: "FIFA standings",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings",
    checkedAt: "2026-06-27",
    reliability: "official"
  };

  const sourceUsaTurkiye = {
    label: "Guardian USA 2-3 Turkiye report",
    url: "https://www.theguardian.com/football/2026/jun/26/usmnt-turkey-momentum",
    checkedAt: "2026-06-27",
    reliability: "trusted"
  };

  const sourceAustraliaParaguay = {
    label: "Guardian Paraguay 0-0 Australia live report",
    url: "https://www.theguardian.com/football/live/2026/jun/26/fifa-world-cup-2026-live-paraguay-v-australia-socceroos-updates-par-vs-aus-group-d-match-score-latest",
    checkedAt: "2026-06-27",
    reliability: "trusted"
  };

  const sourceEcuadorGermany = {
    label: "Guardian Ecuador 2-1 Germany live report",
    url: "https://www.theguardian.com/football/live/2026/jun/25/germany-v-ecuador-world-cup-2026-live",
    checkedAt: "2026-06-27",
    reliability: "trusted"
  };

  const sourceJapanSweden = {
    label: "Guardian Japan 1-1 Sweden live report",
    url: "https://www.theguardian.com/football/live/2026/jun/25/japan-v-sweden-world-cup-2026-live",
    checkedAt: "2026-06-27",
    reliability: "trusted"
  };

  hub.updatedAt = "2026-06-27";
  hub.summary = "2026-06-27 07:00 KST cutoff advanced the live hub through the latest completed Group D, E and F finales available before the run.";
  hub.sourceNote = "FIFA schedule/results and standings remained the official reference at the 2026-06-27 07:00 KST cutoff. Guardian live reports were used only for scorer order, lineup rotation context, cards, standout stats and knockout-clinching details where FIFA's richer match pages were not directly pinned.";
  hub.featuredMatchId = "group-e-ecu-ger-2026-06-25";

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
    id: "group-e-ecu-ger-2026-06-25",
    type: "match",
    status: "final",
    phaseLabel: "Group E final",
    competition: "FIFA World Cup 2026",
    teamA: "ecuador",
    teamB: "germany",
    score: "Ecuador 2-1 Germany",
    dateLabel: "2026-06-26 KST",
    localTimeLabel: "2026-06-25 local",
    venue: "New York New Jersey Stadium",
    city: "New York / New Jersey",
    headline: "Ecuador storm back against Germany and book a knockout place",
    recap: "Germany scored in the second minute through Leroy Sane, but Ecuador replied quickly through Angulo and found the late winner through Gonzalo Plata to seal a historic last-32 berth.",
    scorers: ["Leroy Sane 2'", "Jose Angulo 9'", "Gonzalo Plata 77'"],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Germany had already secured first place but lost their final group match",
      "Ecuador advanced with the comeback win and eliminated some third-place hopefuls",
      "Guardian report described the winner as a well-worked corner routine finish"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=Ecuador+Germany+2026+World+Cup+highlights",
    source: sourceEcuadorGermany,
    detailSource: sourceStandings,
    modelPick: { teamA: 29, draw: 23, teamB: 48 },
    highlightVideos: [
      {
        title: "Ecuador vs Germany highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Ecuador+Germany+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertMatch({
    id: "group-d-usa-tur-2026-06-26",
    type: "match",
    status: "final",
    phaseLabel: "Group D final",
    competition: "FIFA World Cup 2026",
    teamA: "usa",
    teamB: "turkiye",
    score: "USA 2-3 Turkiye",
    dateLabel: "2026-06-27 KST",
    localTimeLabel: "2026-06-26 local",
    venue: "official FIFA schedule slot",
    city: "USA host venue",
    headline: "Turkiye spoil the USA's perfect finish, but the hosts still win Group D",
    recap: "A rotated US side led twice through Auston Trusty and Sebastian Berhalter contributions, yet Turkiye took their chances and handed Mauricio Pochettino's team a narrow defeat without denying first place.",
    scorers: ["Auston Trusty", "Sebastian Berhalter"],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Guardian coverage said the USA had already qualified and still topped Group D",
      "Berhalter supplied a goal and an assist in the trusted report",
      "Christian Pulisic and Sergino Dest were used as second-half game changers"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=USA+Turkiye+2026+World+Cup+highlights",
    source: sourceUsaTurkiye,
    detailSource: sourceStandings,
    modelPick: { teamA: 51, draw: 24, teamB: 25 },
    highlightVideos: [
      {
        title: "USA vs Turkiye highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=USA+Turkiye+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertMatch({
    id: "group-d-par-aus-2026-06-26",
    type: "match",
    status: "final",
    phaseLabel: "Group D final",
    competition: "FIFA World Cup 2026",
    teamA: "paraguay",
    teamB: "australia",
    score: "Paraguay 0-0 Australia",
    dateLabel: "2026-06-27 KST",
    localTimeLabel: "2026-06-26 local",
    venue: "San Francisco Bay Area Stadium",
    city: "San Francisco Bay Area",
    headline: "Australia hold Paraguay and take second place in Group D",
    recap: "The Socceroos changed shape after the USA defeat, Patrick Beach preserved the clean sheet, and a disciplined 0-0 was enough to send Australia through with Paraguay likely following as a best third-placed side.",
    scorers: [],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Guardian report said Australia finished second while Paraguay stayed in the best-third-place race",
      "Aiden O'Neill was highlighted as player of the match in trusted coverage",
      "Jordy Bos repeatedly created the best Australian openings from right-back"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=Paraguay+Australia+2026+World+Cup+highlights",
    source: sourceAustraliaParaguay,
    detailSource: sourceStandings,
    modelPick: { teamA: 31, draw: 30, teamB: 39 },
    highlightVideos: [
      {
        title: "Paraguay vs Australia highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Paraguay+Australia+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertMatch({
    id: "group-f-jpn-swe-2026-06-25",
    type: "match",
    status: "final",
    phaseLabel: "Group F final",
    competition: "FIFA World Cup 2026",
    teamA: "japan",
    teamB: "sweden",
    score: "Japan 1-1 Sweden",
    dateLabel: "2026-06-26 KST",
    localTimeLabel: "2026-06-25 local",
    venue: "Dallas Stadium",
    city: "Dallas",
    headline: "Japan and Sweden both advance after a tense draw in Dallas",
    recap: "Daizen Maeda put Japan ahead with a flowing move, Anthony Elanga answered five minutes later, and Zion Suzuki's late saves protected a draw that sent both teams into the knockout bracket.",
    scorers: ["Daizen Maeda 56'", "Anthony Elanga 61'"],
    notes: [
      "Official result cross-checked against FIFA results and standings pages",
      "Guardian coverage said Japan advanced as Group F runners-up",
      "Sweden progressed from third place after surviving late pressure",
      "Netherlands finished first in the group after beating Tunisia"
    ],
    highlightUrl: "https://www.youtube.com/results?search_query=Japan+Sweden+2026+World+Cup+highlights",
    source: sourceJapanSweden,
    detailSource: sourceStandings,
    modelPick: { teamA: 40, draw: 29, teamB: 31 },
    highlightVideos: [
      {
        title: "Japan vs Sweden highlights",
        channel: "YouTube search",
        type: "highlight",
        url: "https://www.youtube.com/results?search_query=Japan+Sweden+2026+World+Cup+highlights",
        duration: "candidate",
        meta: "official upload candidate"
      }
    ]
  });

  upsertSectionItem("matches", {
    id: "group-e-ecu-ger-2026-06-25",
    type: "match",
    status: "final",
    phaseLabel: "Group E final",
    competition: "FIFA World Cup 2026",
    teamA: "ecuador",
    teamB: "germany",
    dateLabel: "2026-06-26 KST",
    score: "2-1",
    headline: "Ecuador vs Germany",
    summary: "Angulo and Plata flipped the match and sent Ecuador into the knockout round.",
    source: sourceEcuadorGermany
  });

  upsertSectionItem("matches", {
    id: "group-d-usa-tur-2026-06-26",
    type: "match",
    status: "final",
    phaseLabel: "Group D final",
    competition: "FIFA World Cup 2026",
    teamA: "usa",
    teamB: "turkiye",
    dateLabel: "2026-06-27 KST",
    score: "2-3",
    headline: "USA vs Turkiye",
    summary: "The USA lost the match but still closed Group D in first place.",
    source: sourceUsaTurkiye
  });

  upsertSectionItem("matches", {
    id: "group-d-par-aus-2026-06-26",
    type: "match",
    status: "final",
    phaseLabel: "Group D final",
    competition: "FIFA World Cup 2026",
    teamA: "paraguay",
    teamB: "australia",
    dateLabel: "2026-06-27 KST",
    score: "0-0",
    headline: "Paraguay vs Australia",
    summary: "Australia's clean sheet was enough for second place and a last-32 ticket.",
    source: sourceAustraliaParaguay
  });

  upsertSectionItem("matches", {
    id: "group-f-jpn-swe-2026-06-25",
    type: "match",
    status: "final",
    phaseLabel: "Group F final",
    competition: "FIFA World Cup 2026",
    teamA: "japan",
    teamB: "sweden",
    dateLabel: "2026-06-26 KST",
    score: "1-1",
    headline: "Japan vs Sweden",
    summary: "Maeda and Elanga traded goals before both sides held onto qualification.",
    source: sourceJapanSweden
  });

  upsertVideo({
    id: "video-ecu-ger-candidate",
    type: "video",
    headline: "Ecuador vs Germany highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=Ecuador+Germany+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Ecuador+Germany+2026+World+Cup+highlights",
      checkedAt: "2026-06-27",
      reliability: "curated"
    }
  });

  upsertVideo({
    id: "video-usa-tur-candidate",
    type: "video",
    headline: "USA vs Turkiye highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=USA+Turkiye+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=USA+Turkiye+2026+World+Cup+highlights",
      checkedAt: "2026-06-27",
      reliability: "curated"
    }
  });

  upsertVideo({
    id: "video-par-aus-candidate",
    type: "video",
    headline: "Paraguay vs Australia highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=Paraguay+Australia+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Paraguay+Australia+2026+World+Cup+highlights",
      checkedAt: "2026-06-27",
      reliability: "curated"
    }
  });

  upsertVideo({
    id: "video-jpn-swe-candidate",
    type: "video",
    headline: "Japan vs Sweden highlights candidate",
    summary: "Stored as a candidate link until a stable FIFA or broadcaster highlight URL is pinned.",
    url: "https://www.youtube.com/results?search_query=Japan+Sweden+2026+World+Cup+highlights",
    source: {
      label: "YouTube search",
      url: "https://www.youtube.com/results?search_query=Japan+Sweden+2026+World+Cup+highlights",
      checkedAt: "2026-06-27",
      reliability: "curated"
    }
  });

  if (hub.archive) {
    hub.archive.officialResultsCheckedAt = "2026-06-27";
    hub.archive.source = sourceSchedule;
  }
})();
