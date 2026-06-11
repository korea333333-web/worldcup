window.WORLD_CUP_DATA = {
  tournament: {
    name: "FIFA World Cup 2026",
    teams: 48,
    groups: 12,
    stage: "개막 전 리서치",
    updatedAt: "2026-06-08",
    formatNote: "12개 조 4팀. 각 조 1, 2위와 3위 중 상위 8팀이 32강에 진출합니다.",
    scenarioNote: "2026-06-08 기준 FIFA 공식 조 편성과 초반 조별리그 일정을 반영했습니다. 승률과 일부 전력 평가는 여전히 UI 검증용 시나리오입니다."
  },
  sources: [
    {
      id: "fifa-format",
      title: "FIFA 2026 조별리그와 32강 진출 규칙",
      publisher: "FIFA",
      url: "https://www.fifa.com/en/articles/groups-how-teams-qualify-tie-breakers",
      checkedAt: "2026-06-05",
      reliability: "official"
    },
    {
      id: "fifa-qualified",
      title: "FIFA 2026 본선 진출팀 목록",
      publisher: "FIFA",
      url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/world-cup-2026-who-has-qualified",
      checkedAt: "2026-06-05",
      reliability: "official"
    },
    {
      id: "fifa-draw-procedure",
      title: "FIFA 2026 최종 조 추첨 절차와 포트",
      publisher: "FIFA",
      url: "https://inside.fifa.com/media-releases/procedures-final-draw-world-cup-2026-revealed",
      checkedAt: "2026-06-05",
      reliability: "official"
    },
    {
      id: "fifa-group-a",
      title: "FIFA 월드컵 2026 A조 집중 분석",
      publisher: "FIFA",
      url: "https://www.fifa.com/ko/articles/group-a-focus-teams-fixtures-standings-ko",
      checkedAt: "2026-06-05",
      reliability: "official"
    },
    {
      id: "fifa-korea-profile",
      title: "대한민국 월드컵 2026 팀 프로필과 일정",
      publisher: "FIFA",
      url: "https://www.fifa.com/en/articles/korea-republic-team-profile-history",
      checkedAt: "2026-06-05",
      reliability: "official"
    },
    {
      id: "fifa-czechia-profile",
      title: "체코 월드컵 2026 팀 프로필과 일정",
      publisher: "FIFA",
      url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/czechia-team-profile-history",
      checkedAt: "2026-06-08",
      reliability: "official"
    },
    {
      id: "fifa-squads-confirmed",
      title: "FIFA 월드컵 2026 최종 엔트리 확정",
      publisher: "FIFA",
      url: "https://www.fifa.com/en/articles/fifa-world-cup-2026-squads-confirmed",
      checkedAt: "2026-06-08",
      reliability: "official"
    },
    {
      id: "lafc-son-profile",
      title: "손흥민 LAFC 공식 선수 프로필",
      publisher: "LAFC",
      url: "https://www.lafc.com/players/son-heung-min/",
      checkedAt: "2026-06-11",
      reliability: "official"
    },
    {
      id: "capology-son-salary",
      title: "손흥민 2026 연봉 추정",
      publisher: "Capology",
      url: "https://www.capology.com/player/heung-min-son-33793/",
      checkedAt: "2026-06-11",
      reliability: "estimate"
    },
    {
      id: "youtube-curated",
      title: "선수별 유튜브 영상은 큐레이션 링크로 시작",
      publisher: "YouTube",
      url: "https://www.youtube.com",
      checkedAt: "2026-06-08",
      reliability: "curated"
    }
  ],
  groups: [
    { id: "A", name: "Group A", teams: ["mexico", "south-africa", "korea", "czechia"] },
    { id: "B", name: "Group B", teams: ["canada", "bosnia", "qatar", "switzerland"] },
    { id: "C", name: "Group C", teams: ["brazil", "haiti", "morocco", "scotland"] },
    { id: "D", name: "Group D", teams: ["usa", "australia", "paraguay", "turkiye"] },
    { id: "E", name: "Group E", teams: ["ivory-coast", "ecuador", "germany", "curacao"] },
    { id: "F", name: "Group F", teams: ["netherlands", "japan", "sweden", "tunisia"] },
    { id: "G", name: "Group G", teams: ["belgium", "egypt", "iran", "new-zealand"] },
    { id: "H", name: "Group H", teams: ["spain", "cabo-verde", "saudi-arabia", "uruguay"] },
    { id: "I", name: "Group I", teams: ["france", "senegal", "iraq", "norway"] },
    { id: "J", name: "Group J", teams: ["argentina", "algeria", "austria", "jordan"] },
    { id: "K", name: "Group K", teams: ["portugal", "colombia", "uzbekistan", "dr-congo"] },
    { id: "L", name: "Group L", teams: ["england", "croatia", "ghana", "panama"] }
  ],
  teams: {
    "mexico": team("mexico", "멕시코", "Mexico", "mx", "CONCACAF", "하비에르 아기레", 15, "빠른 전환과 홈 이점이 강한 팀", "측면 압박", "라인 뒤 공간 관리", "Santiago Gimenez", "FW", "Feyenoord", 71, "Top 2"),
    "south-africa": team("south-africa", "남아공", "South Africa", "za", "CAF", "우고 브로스", 57, "개막전 분위기를 타면 까다로운 활동량 팀", "중원 압박", "득점 안정성", "Percy Tau", "FW", "Al Ahly", 42, "3rd race"),
    "korea": team("korea", "대한민국", "Korea Republic", "kr", "AFC", "홍명보", 23, "손흥민을 중심으로 전환과 침투가 강한 팀", "전방 결정력", "후방 빌드업 압박 대처", "Son Heung-min", "FW", "LAFC", 63, "3rd race", true),
    "norway": team("norway", "노르웨이", "Norway", "no", "UEFA", "스톨레 솔바켄", 33, "엘링 홀란의 박스 장악력이 모든 예측을 흔든다", "최전방 파괴력", "라인 간 수비", "Erling Haaland", "FW", "Manchester City", 67, "Top 2"),

    "canada": team("canada", "캐나다", "Canada", "ca", "CONCACAF", "제시 마시", 31, "속도와 전진성이 뚜렷한 공동 개최국", "풀백 전진", "중원 점유 안정성", "Alphonso Davies", "LB", "Bayern Munich", 58, "3rd race"),
    "japan": team("japan", "일본", "Japan", "jp", "AFC", "모리야스 하지메", 18, "조직적인 압박과 2선 퀄리티가 좋은 아시아 강호", "조직력", "피지컬 매치업", "Takefusa Kubo", "AM", "Real Sociedad", 68, "Top 2"),
    "ghana": team("ghana", "가나", "Ghana", "gh", "CAF", "카를루스 케이로스", 68, "개인 능력과 템포 변화가 있는 서아프리카 팀", "전환 속도", "수비 집중력", "Mohammed Kudus", "AM", "West Ham United", 39, "At risk"),
    "switzerland": team("switzerland", "스위스", "Switzerland", "ch", "UEFA", "무라트 야킨", 19, "토너먼트 운영 능력이 좋은 균형형 팀", "경기 관리", "측면 속도", "Granit Xhaka", "CM", "Bayer Leverkusen", 70, "Top 2"),

    "usa": team("usa", "미국", "United States", "us", "CONCACAF", "마우리시오 포체티노", 16, "젊은 코어와 홈 이점이 만나는 팀", "강한 활동량", "마무리 기복", "Christian Pulisic", "RW", "AC Milan", 74, "Top 2"),
    "australia": team("australia", "호주", "Australia", "au", "AFC", "토니 포포비치", 26, "세트피스와 피지컬 경합이 강한 실전형 팀", "공중볼", "창의성", "Mathew Ryan", "GK", "Roma", 49, "3rd race"),
    "curacao": team("curacao", "퀴라소", "Curacao", "cw", "CONCACAF", "딕 아드보카트", 82, "첫 본선의 에너지와 네덜란드계 자원이 흥미롭다", "동기부여", "대회 경험", "Leandro Bacuna", "MF", "Groningen", 28, "At risk"),
    "croatia": team("croatia", "크로아티아", "Croatia", "hr", "UEFA", "즐라트코 달리치", 10, "큰 경기에서 중원 운영이 빛나는 베테랑 팀", "중원 통제", "세대교체 속도", "Luka Modric", "CM", "Real Madrid", 76, "Top 2"),

    "spain": team("spain", "스페인", "Spain", "es", "UEFA", "루이스 데 라 푸엔테", 3, "점유와 압박, 젊은 윙어의 폭발력이 공존한다", "점유 압박", "역습 노출", "Lamine Yamal", "RW", "Barcelona", 84, "Top 2"),
    "jordan": team("jordan", "요르단", "Jordan", "jo", "AFC", "자말 셀라미", 62, "첫 본선에서 역습과 세트피스가 무기다", "역습", "상위권 압박 대처", "Mousa Al-Taamari", "RW", "Montpellier", 33, "At risk"),
    "morocco": team("morocco", "모로코", "Morocco", "ma", "CAF", "왈리드 레그라기", 12, "카타르 4강 경험을 바탕으로 수비와 전환이 탄탄하다", "전환 수비", "낮은 블록 공략", "Achraf Hakimi", "RB", "Paris Saint-Germain", 72, "Top 2"),
    "paraguay": team("paraguay", "파라과이", "Paraguay", "py", "CONMEBOL", "구스타보 알파로", 48, "거친 경합과 수비 조직으로 상대 리듬을 끊는다", "수비 밀도", "득점 루트", "Miguel Almiron", "AM", "Newcastle United", 44, "3rd race"),

    "argentina": team("argentina", "아르헨티나", "Argentina", "ar", "CONMEBOL", "리오넬 스칼로니", 1, "챔피언의 경기 운영과 메시의 영향력이 여전히 핵심", "경기 관리", "세대교체 부담", "Lionel Messi", "FW", "Inter Miami", 86, "Top 2"),
    "uzbekistan": team("uzbekistan", "우즈베키스탄", "Uzbekistan", "uz", "AFC", "스레치코 카타네츠", 52, "첫 본선에서 단단한 수비와 젊은 재능을 앞세운다", "수비 집중", "대회 경험", "Eldor Shomurodov", "FW", "Cagliari", 37, "At risk"),
    "sweden": team("sweden", "스웨덴", "Sweden", "se", "UEFA", "욘 달 토마손", 28, "전방 재능과 피지컬이 살아나면 위험하다", "박스 안 위협", "수비 전환", "Alexander Isak", "FW", "Newcastle United", 59, "3rd race"),
    "senegal": team("senegal", "세네갈", "Senegal", "sn", "CAF", "파프 티아우", 17, "강한 피지컬과 개인 전진 능력을 갖춘 아프리카 강호", "피지컬", "밀집 수비 공략", "Sadio Mane", "FW", "Al Nassr", 62, "Top 2"),

    "france": team("france", "프랑스", "France", "fr", "UEFA", "디디에 데샹", 2, "스쿼드 깊이와 음바페의 속도가 압도적이다", "전방 속도", "중원 조합", "Kylian Mbappe", "FW", "Real Madrid", 88, "Top 2"),
    "qatar": team("qatar", "카타르", "Qatar", "qa", "AFC", "마르케스 로페스", 34, "아시안컵 경험과 조직력이 강한 팀", "조직력", "강팀 상대 압박", "Akram Afif", "LW", "Al Sadd", 45, "3rd race"),
    "czechia": team("czechia", "체코", "Czechia", "cz", "UEFA", "미로슬라프 코우베크", 36, "피지컬과 세트피스가 안정적인 유럽 팀", "세트피스", "속도전", "Patrik Schick", "FW", "Bayer Leverkusen", 52, "3rd race"),
    "colombia": team("colombia", "콜롬비아", "Colombia", "co", "CONMEBOL", "네스토르 로렌소", 13, "기술과 강도가 함께 살아난 남미 다크호스", "2선 창의성", "수비 뒷공간", "Luis Diaz", "LW", "Liverpool", 73, "Top 2"),

    "england": team("england", "잉글랜드", "England", "gb-eng", "UEFA", "개러스 사우스게이트", 4, "벨링엄과 케인을 중심으로 우승권 전력이 탄탄하다", "중앙 퀄리티", "압박 회피", "Jude Bellingham", "AM", "Real Madrid", 82, "Top 2"),
    "panama": team("panama", "파나마", "Panama", "pa", "CONCACAF", "토마스 크리스티안센", 41, "조직적인 수비와 빠른 역습으로 버틴다", "조직력", "득점력", "Adalberto Carrasquilla", "CM", "Pumas", 40, "3rd race"),
    "tunisia": team("tunisia", "튀니지", "Tunisia", "tn", "CAF", "몽데르 케바이에르", 46, "타이트한 수비와 경기 흐름 제어가 장점", "수비 밀도", "창의성", "Hannibal Mejbri", "CM", "Burnley", 35, "At risk"),
    "turkiye": team("turkiye", "튀르키예", "Turkiye", "tr", "UEFA", "빈첸초 몬텔라", 27, "젊은 기술자들이 많아 경기 변수가 크다", "2선 기술", "수비 안정성", "Arda Guler", "AM", "Real Madrid", 55, "3rd race"),

    "brazil": team("brazil", "브라질", "Brazil", "br", "CONMEBOL", "카를로 안첼로티", 5, "개인 돌파와 전방 압박의 상한선이 높다", "개인 능력", "중원 밸런스", "Vinicius Junior", "LW", "Real Madrid", 80, "Top 2"),
    "haiti": team("haiti", "아이티", "Haiti", "ht", "CONCACAF", "세바스티앙 미녜", 83, "속도 있는 역습으로 이변을 노린다", "역습 속도", "수비 지속성", "Duckens Nazon", "FW", "Kayserispor", 26, "At risk"),
    "austria": team("austria", "오스트리아", "Austria", "at", "UEFA", "랄프 랑닉", 22, "강한 압박과 조직적인 전진이 특징", "압박 강도", "마무리", "Marcel Sabitzer", "CM", "Borussia Dortmund", 60, "3rd race"),
    "egypt": team("egypt", "이집트", "Egypt", "eg", "CAF", "호삼 하산", 32, "살라 중심의 역습과 결정력이 승부처", "전방 결정력", "수비 라인", "Mohamed Salah", "RW", "Liverpool", 57, "3rd race"),

    "portugal": team("portugal", "포르투갈", "Portugal", "pt", "UEFA", "로베르토 마르티네스", 6, "화려한 2선과 깊은 스쿼드가 강점", "공격 옵션", "수비 전환", "Bruno Fernandes", "AM", "Manchester United", 79, "Top 2"),
    "cabo-verde": team("cabo-verde", "카보베르데", "Cabo Verde", "cv", "CAF", "부비스타", 64, "첫 본선의 에너지와 피지컬을 앞세운다", "세트피스", "경험", "Ryan Mendes", "FW", "Kocaelispor", 31, "At risk"),
    "uruguay": team("uruguay", "우루과이", "Uruguay", "uy", "CONMEBOL", "마르셀로 비엘사", 11, "강한 압박과 직선적인 전개가 위협적이다", "압박", "체력 관리", "Federico Valverde", "CM", "Real Madrid", 75, "Top 2"),
    "saudi-arabia": team("saudi-arabia", "사우디아라비아", "Saudi Arabia", "sa", "AFC", "로베르토 만치니", 58, "강팀 상대로도 밀리지 않는 활동량이 있다", "활동량", "찬스 품질", "Salem Al-Dawsari", "LW", "Al Hilal", 38, "3rd race"),

    "netherlands": team("netherlands", "네덜란드", "Netherlands", "nl", "UEFA", "로날드 쿠만", 7, "수비 코어와 측면 전개가 안정적이다", "수비 퀄리티", "득점 집중도", "Virgil van Dijk", "CB", "Liverpool", 77, "Top 2"),
    "new-zealand": team("new-zealand", "뉴질랜드", "New Zealand", "nz", "OFC", "대런 베이즐리", 88, "오세아니아 대표로 세트피스와 조직력을 앞세운다", "공중볼", "상위권 경험", "Chris Wood", "FW", "Nottingham Forest", 30, "At risk"),
    "algeria": team("algeria", "알제리", "Algeria", "dz", "CAF", "블라디미르 페트코비치", 37, "기술 좋은 2선과 북아프리카 특유의 강도가 있다", "개인 기술", "수비 집중", "Riyad Mahrez", "RW", "Al Ahli", 53, "3rd race"),
    "bosnia": team("bosnia", "보스니아", "Bosnia and Herzegovina", "ba", "UEFA", "세르게이 바르바레즈", 43, "경험 있는 공격 자원을 활용하는 팀", "박스 안 결정력", "수비 속도", "Edin Dzeko", "FW", "Fenerbahce", 36, "At risk"),

    "belgium": team("belgium", "벨기에", "Belgium", "be", "UEFA", "루디 가르시아", 8, "데브라위너의 전진 패스와 세대교체가 공존한다", "찬스 창출", "수비 뒷공간", "Kevin De Bruyne", "AM", "Manchester City", 78, "Top 2"),
    "iraq": team("iraq", "이라크", "Iraq", "iq", "AFC", "그레이엄 아널드", 55, "긴 예선 여정을 통과한 단단한 팀", "집중력", "득점 루트", "Ali Al-Hamadi", "FW", "Ipswich Town", 32, "At risk"),
    "ecuador": team("ecuador", "에콰도르", "Ecuador", "ec", "CONMEBOL", "세바스티안 베카세세", 24, "운동능력과 전방 압박이 좋은 남미 팀", "피지컬", "경험 관리", "Moises Caicedo", "CM", "Chelsea", 61, "3rd race"),
    "scotland": team("scotland", "스코틀랜드", "Scotland", "gb-sct", "UEFA", "스티브 클라크", 39, "중원 에너지와 왼쪽 라인의 전개가 강점", "중원 에너지", "득점력", "Scott McTominay", "CM", "Napoli", 47, "3rd race"),

    "germany": team("germany", "독일", "Germany", "de", "UEFA", "율리안 나겔스만", 9, "젊은 공격진과 전술 유연성이 큰 우승권 팀", "전술 유연성", "수비 집중력", "Jamal Musiala", "AM", "Bayern Munich", 81, "Top 2"),
    "dr-congo": team("dr-congo", "콩고민주공화국", "DR Congo", "cd", "CAF", "세바스티앵 데사브르", 49, "강한 피지컬과 전방 속도로 이변을 노린다", "전환 속도", "경기 운영", "Yoane Wissa", "FW", "Brentford", 41, "3rd race"),
    "iran": team("iran", "이란", "IR Iran", "ir", "AFC", "아미르 갈레노에이", 20, "경험 많은 코어와 탄탄한 수비가 강점", "수비 조직", "템포 변화", "Mehdi Taremi", "FW", "Inter Milan", 56, "3rd race"),
    "ivory-coast": team("ivory-coast", "코트디부아르", "Cote d'Ivoire", "ci", "CAF", "에메르스 파에", 29, "피지컬과 공격 재능이 풍부한 아프리카 챔피언급 팀", "전방 피지컬", "수비 간격", "Sebastien Haller", "FW", "Borussia Dortmund", 54, "3rd race")
  },
  predictions: [
    prediction("mexico", "korea", 44, 27, 29, "ranking", "멕시코는 홈 대륙 이점, 한국은 손흥민 중심 전환이 변수입니다."),
    prediction("spain", "morocco", 48, 26, 26, "sample", "스페인의 점유 우위와 모로코의 전환 수비가 부딪히는 가정 시나리오입니다."),
    prediction("argentina", "senegal", 55, 23, 22, "sample", "아르헨티나의 경기 운영이 우세하지만 세네갈의 피지컬 전환이 위험합니다."),
    prediction("france", "colombia", 52, 24, 24, "sample", "프랑스의 스쿼드 깊이와 콜롬비아의 2선 창의성을 비교한 샘플입니다."),
    prediction("england", "turkiye", 57, 22, 21, "ranking", "잉글랜드의 중앙 퀄리티가 앞서지만 튀르키예의 젊은 2선이 변수입니다."),
    prediction("brazil", "egypt", 61, 21, 18, "sample", "브라질의 개인 돌파와 이집트의 살라 역습을 비교한 시나리오입니다."),
    prediction("portugal", "uruguay", 46, 26, 28, "sample", "포르투갈의 공격 옵션과 우루과이의 강한 압박이 팽팽한 매치업입니다."),
    prediction("germany", "iran", 59, 24, 17, "ranking", "독일의 전술 유연성과 이란의 수비 조직을 비교한 랭킹 기반 예시입니다.")
  ]
};

function team(id, nameKo, nameEn, flagCode, confederation, coach, rank, summary, strength, weakness, playerName, position, club, advance, status, koreaFocus = false) {
  const playerId = `${id}-star`;
  return {
    id,
    nameKo,
    nameEn,
    flagCode,
    confederation,
    coach,
    rank,
    summary,
    strength,
    weakness,
    advance,
    status,
    koreaFocus,
    form: rank <= 10 ? "elite" : rank <= 30 ? "strong" : rank <= 55 ? "volatile" : "underdog",
    sources: [
      "fifa-qualified",
      "fifa-draw-procedure",
      "fifa-squads-confirmed",
      ...(id === "korea" ? ["lafc-son-profile", "capology-son-salary"] : []),
      "youtube-curated"
    ],
    players: [
      {
        id: playerId,
        name: playerName,
        position,
        club,
        role: roleFor(position),
        summary: `${nameKo} 전력의 핵심 축입니다. ${summary}`,
        videos: [
          {
            title: `${playerName} highlights`,
            channel: "YouTube search",
            type: "highlight",
            language: "multi",
            url: `https://www.youtube.com/results?search_query=${encodeURIComponent(playerName + " national team highlights")}`
          },
          {
            title: `${nameEn} tactical analysis`,
            channel: "YouTube search",
            type: "tactical",
            language: "multi",
            url: `https://www.youtube.com/results?search_query=${encodeURIComponent(nameEn + " football tactical analysis")}`
          }
        ]
      }
    ]
  };
}

function prediction(teamA, teamB, a, draw, b, sourceType, explanation) {
  return {
    id: `${teamA}-${teamB}`,
    teamA,
    teamB,
    teamAWin: a,
    draw,
    teamBWin: b,
    sourceType,
    confidence: sourceType === "ranking" ? "medium" : "low",
    updatedAt: "2026-06-08",
    explanation
  };
}

function roleFor(position) {
  if (["FW", "LW", "RW"].includes(position)) return "득점/전환의 핵심";
  if (["AM", "CM"].includes(position)) return "전개와 리듬 조율";
  if (["CB", "RB", "LB"].includes(position)) return "수비 안정과 빌드업";
  if (position === "GK") return "수비 라인의 마지막 기준점";
  return "대표팀 핵심 자원";
}
