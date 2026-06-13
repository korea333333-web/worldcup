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
