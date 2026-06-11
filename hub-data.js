(function extendWorldCupHubData() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  data.sources.push(
    {
      id: "fifa-opening-ceremony",
      title: "FIFA World Cup 2026 opening ceremony coverage",
      publisher: "FIFA",
      url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026",
      checkedAt: "2026-06-12",
      reliability: "official"
    },
    {
      id: "youtube-interviews-curated",
      title: "Curated interview and opening ceremony video candidates",
      publisher: "YouTube",
      url: "https://www.youtube.com",
      checkedAt: "2026-06-12",
      reliability: "curated"
    }
  );

  data.openingCeremony = {
    updatedAt: "2026-06-12",
    title: "개막식",
    sourceNote: "개막식은 기사 기반 요약을 먼저 넣고, 공식 또는 신뢰 가능한 영상이 나오면 썸네일과 링크를 보강합니다.",
    items: [
      {
        id: "opening-ceremony-summary",
        type: "event",
        categoryLabel: "개막식",
        headline: "개막식 출연자·무대 정리",
        summary: "출연자, 불린 노래, 특별 게스트, 주요 장면을 카드 단위로 정리합니다.",
        performer: "Opening ceremony coverage",
        songTitle: "Verified set list pending",
        thumbnailUrl: "https://img.youtube.com/vi/x8fQg4K8z2Q/hqdefault.jpg",
        thumbnailSource: "YouTube thumbnail",
        url: "https://www.youtube.com/results?search_query=FIFA+World+Cup+2026+opening+ceremony",
        source: {
          label: "FIFA",
          url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026",
          checkedAt: "2026-06-12",
          reliability: "official"
        },
        videoCandidates: [
          {
            title: "FIFA World Cup 2026 opening ceremony",
            url: "https://www.youtube.com/results?search_query=FIFA+World+Cup+2026+opening+ceremony"
          }
        ]
      }
    ]
  };

  data.statsCenter = {
    updatedAt: "2026-06-12",
    playerStats: [],
    teamStats: [],
    emptyState: "아직 공식 경기 데이터 없음"
  };
})();
