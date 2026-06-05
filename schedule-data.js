(function addWorldCupSchedule() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  data.matchSchedule = {
    updatedAt: "2026-06-05",
    sourceNote: "FIFA 공식 일정 페이지를 기준으로 A조 실제 대진과 시간을 반영했고, 나머지 일부 하이라이트 경기는 앱 시나리오 일정으로 유지합니다.",
    sources: [
      {
        id: "fifa-schedule",
        title: "FIFA World Cup 2026 match schedule, fixtures and stadiums",
        url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
        checkedAt: "2026-06-05"
      },
      {
        id: "fifa-updated-schedule",
        title: "Updated FIFA World Cup 2026 match schedule reveals venues and kick-off times",
        url: "https://vod.fifa.com/media-releases/updated-world-cup-2026-match-schedule-venues-kick-off-times-104-matches",
        checkedAt: "2026-06-05"
      }
    ],
    venues: [
      venue("mexico-city", "Mexico City Stadium", "멕시코시티", "멕시코", "UTC-6"),
      venue("guadalajara", "Guadalajara Stadium", "과달라하라", "멕시코", "UTC-6"),
      venue("monterrey", "Monterrey Stadium", "몬테레이", "멕시코", "UTC-6"),
      venue("toronto", "Toronto Stadium", "토론토", "캐나다", "UTC-4"),
      venue("vancouver", "Vancouver Stadium", "밴쿠버", "캐나다", "UTC-7"),
      venue("new-york-new-jersey", "New York New Jersey Stadium", "이스트러더퍼드", "미국", "UTC-4"),
      venue("los-angeles", "Los Angeles Stadium", "잉글우드", "미국", "UTC-7"),
      venue("dallas", "Dallas Stadium", "알링턴", "미국", "UTC-5"),
      venue("miami", "Miami Stadium", "마이애미", "미국", "UTC-4"),
      venue("atlanta", "Atlanta Stadium", "애틀랜타", "미국", "UTC-4"),
      venue("seattle", "Seattle Stadium", "시애틀", "미국", "UTC-7"),
      venue("houston", "Houston Stadium", "휴스턴", "미국", "UTC-5")
    ],
    matches: [
      match(1, "Group A", "2026-06-11", "13:00", "2026-06-12 04:00", "mexico-city", "mexico", "south-africa", "official", "개막전"),
      match(2, "Group A", "2026-06-11", "20:00", "2026-06-12 11:00", "guadalajara", "korea", "czechia", "official", "대한민국 조별리그 1차전"),
      match(3, "Group B", "2026-06-12", "15:00", "2026-06-13 04:00", "toronto", "canada", "japan", "scenario", "공동 개최국 경기"),
      match(4, "Group C", "2026-06-12", "18:00", "2026-06-13 10:00", "los-angeles", "usa", "australia", "scenario", "공동 개최국 경기"),
      match(5, "Group H", "2026-06-13", "16:00", "2026-06-14 06:00", "dallas", "brazil", "austria", "scenario", "브라질 전력 체크 경기"),
      match(6, "Group F", "2026-06-14", "15:00", "2026-06-15 04:00", "new-york-new-jersey", "france", "colombia", "scenario", "강팀 매치업"),
      match(7, "Group E", "2026-06-14", "18:00", "2026-06-15 07:00", "miami", "argentina", "senegal", "scenario", "챔피언 첫 관문"),
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
