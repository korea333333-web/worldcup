(function enrichWorldCupData() {
  const data = window.WORLD_CUP_DATA;
  if (!data) return;

  const commonSources = ["fifa-qualified", "youtube-curated"];

  const richTeams = {
    korea: {
      styleTags: ["전환 공격", "측면 침투", "센터백 빌드업", "왼발 플레이메이킹"],
      watchMatch: "vs 체코",
      dataStatus: "선수단 리서치 초안",
      lastChecked: "2026-06-05",
      ratings: { attack: 78, midfield: 74, defense: 76, speed: 82, experience: 73 },
      roundOdds: odds([63, 34, 14, 6, 3, 1], [78, 46, 22, 10, 5, 2], [55, 28, 10, 4, 2, 1], "한국 팬 기대와 모델 전망을 분리한 샘플입니다."),
      tacticalNotes: [
        "손흥민의 뒷공간 침투와 이강인의 전진 패스가 연결될 때 공격 효율이 크게 올라갑니다.",
        "김민재가 센터백 라인을 안정시키지만, 강한 압박을 받을 때 후방 전개 선택지가 중요합니다.",
        "황희찬과 오현규/조규성의 박스 안 움직임이 2차 득점 루트를 만듭니다."
      ],
      players: [
        player("Son Heung-min", "손흥민", "FW/LW", "Tottenham Hotspur", "대표 스타", "클럽에서는 왼쪽에서 안쪽으로 들어오는 득점 루트와 주장 리더십을 맡고, 대표팀에서는 전환 공격의 최종 마무리 역할을 합니다.", "대표팀에서는 공간 침투, 페널티 박스 결정력, 역습 상황의 첫 번째 목표점입니다.", "공격", { attack: 91, creation: 77, press: 72, defense: 45, form: 82 }, "Son_Heung-min"),
        player("Lee Kang-in", "이강인", "AM/RW", "Paris Saint-Germain", "창의성 핵심", "클럽에서는 좁은 공간 탈압박, 왼발 전진 패스, 세트피스 옵션으로 공격 템포를 바꾸는 역할을 합니다.", "대표팀에서는 손흥민에게 찬스를 공급하고, 낮은 수비 블록을 풀어내는 플레이메이커입니다.", "중원", { attack: 76, creation: 88, press: 70, defense: 48, form: 79 }, "Lee_Kang-in"),
        player("Kim Min-jae", "김민재", "CB", "Bayern Munich", "수비 코어", "클럽에서는 높은 라인의 커버, 대인 수비, 전진 패스의 출발점 역할을 맡습니다.", "대표팀에서는 수비 라인의 기준점이며 상대 역습을 끊는 가장 중요한 선수입니다.", "수비", { attack: 42, creation: 55, press: 74, defense: 91, form: 78 }, "Kim_Min-jae"),
        player("Hwang Hee-chan", "황희찬", "LW/FW", "Wolverhampton Wanderers", "직선 돌파", "클럽에서는 박스 침투와 강한 압박, 빠른 전환 상황에서 득점 찬스를 만드는 역할입니다.", "대표팀에서는 손흥민 반대편에서 뒷공간을 흔들고 2차 득점 루트를 만듭니다.", "공격", { attack: 79, creation: 62, press: 83, defense: 48, form: 74 }, "Hwang_Hee-chan"),
        player("Hwang In-beom", "황인범", "CM", "Feyenoord", "중원 연결", "클럽에서는 빌드업 연결, 압박 회피, 중거리 패스 선택지를 제공하는 미드필더입니다.", "대표팀에서는 수비와 공격 사이를 연결하고 템포를 정리하는 역할입니다.", "중원", { attack: 62, creation: 78, press: 76, defense: 66, form: 73 }, "Hwang_In-beom"),
        player("Cho Gue-sung", "조규성", "FW", "Midtjylland", "박스 타깃", "클럽에서는 공중볼 경합과 박스 안 마무리, 전방 버티기 역할을 맡습니다.", "대표팀에서는 상대 센터백을 묶고 2선 침투 공간을 만드는 타깃입니다.", "공격", { attack: 71, creation: 48, press: 67, defense: 42, form: 65 }, "Cho_Gue-sung"),
        player("Oh Hyeon-gyu", "오현규", "FW", "Genk", "교체 카드", "클럽에서는 피지컬과 박스 움직임으로 후반 승부수를 제공하는 공격수입니다.", "대표팀에서는 경기 막판 제공권과 압박 강도를 높이는 카드입니다.", "공격", { attack: 68, creation: 44, press: 72, defense: 40, form: 66 }, "Oh_Hyeon-gyu")
      ],
      videos: [
        video("대한민국 공격 전환 하이라이트", "Korea Republic transition highlights", "highlight", "korea football transition highlights"),
        video("손흥민 대표팀 골 모음", "Son Heung-min national team goals", "highlight", "Son Heung-min Korea goals"),
        video("이강인 전술 분석", "Lee Kang-in tactical analysis", "tactical", "Lee Kang-in tactical analysis")
      ]
    },
    brazil: {
      styleTags: ["개인 돌파", "측면 1대1", "전방 압박", "스쿼드 깊이"],
      watchMatch: "vs 오스트리아",
      dataStatus: "강팀 확장 리포트",
      lastChecked: "2026-06-03",
      ratings: { attack: 92, midfield: 84, defense: 83, speed: 91, experience: 86 },
      roundOdds: odds([91, 74, 54, 35, 22, 13], [96, 84, 67, 47, 31, 20], [90, 71, 50, 32, 20, 12], "브라질은 팬 기대치가 모델보다 높은 강팀 샘플입니다."),
      tacticalNotes: [
        "비니시우스와 호드리구가 좌우/중앙을 오가며 수비 라인을 흔드는 구조가 가장 위협적입니다.",
        "브루노 기마랑이스와 파케타가 전진 패스와 압박 회피를 담당하면 공격 전환 속도가 살아납니다.",
        "알리송/에데르송, 마르키뉴스, 가브리엘 조합은 후방 안정성과 빌드업 선택지를 동시에 제공합니다."
      ],
      players: [
        player("Vinicius Junior", "비니시우스 주니오르", "LW", "Real Madrid", "대표 스타", "클럽에서는 왼쪽 1대1 돌파와 박스 침투로 경기 흐름을 깨는 에이스 역할입니다.", "대표팀에서는 가장 직접적인 찬스 생산자이며 상대 수비를 끌어당기는 핵심입니다.", "공격", { attack: 94, creation: 84, press: 70, defense: 38, form: 88 }, "Vin%C3%ADcius_J%C3%BAnior"),
        player("Rodrygo", "호드리구", "FW/RW", "Real Madrid", "연계형 공격수", "클럽에서는 중앙과 측면을 오가며 연계, 침투, 마무리를 모두 맡습니다.", "대표팀에서는 비니시우스 반대편 또는 중앙에서 수비 간격을 벌리는 역할입니다.", "공격", { attack: 86, creation: 80, press: 73, defense: 42, form: 81 }, "Rodrygo"),
        player("Raphinha", "하피냐", "RW", "Barcelona", "오른쪽 킥 옵션", "클럽에서는 오른쪽에서 안쪽으로 접는 왼발 슈팅과 크로스, 압박을 제공합니다.", "대표팀에서는 측면 폭과 세트피스 킥 옵션을 담당합니다.", "공격", { attack: 84, creation: 82, press: 78, defense: 46, form: 82 }, "Raphinha"),
        player("Bruno Guimaraes", "브루노 기마랑이스", "CM", "Newcastle United", "중원 엔진", "클럽에서는 압박 저항, 전진 패스, 볼 회수까지 맡는 중심 미드필더입니다.", "대표팀에서는 공격 재능이 많은 앞선에 공을 공급하는 연결축입니다.", "중원", { attack: 70, creation: 82, press: 82, defense: 74, form: 80 }, "Bruno_Guimar%C3%A3es"),
        player("Lucas Paqueta", "루카스 파케타", "AM/CM", "West Ham United", "창의성 연결", "클럽에서는 2선과 중원을 오가며 패스, 압박, 박스 침투를 섞습니다.", "대표팀에서는 공격진 사이를 연결하는 전술적 접착제입니다.", "중원", { attack: 76, creation: 84, press: 76, defense: 58, form: 76 }, "Lucas_Paquet%C3%A1"),
        player("Casemiro", "카세미루", "DM", "Manchester United", "수비 밸런서", "클럽에서는 수비형 미드필더로 경합, 세컨드볼, 라인 보호를 맡습니다.", "대표팀에서는 공격적인 풀백과 윙어 뒤 공간을 막아주는 경험 많은 균형추입니다.", "중원", { attack: 52, creation: 62, press: 72, defense: 84, form: 70 }, "Casemiro"),
        player("Marquinhos", "마르키뉴스", "CB", "Paris Saint-Germain", "수비 리더", "클럽에서는 후방 리더십과 전진 수비, 빌드업 첫 패스를 담당합니다.", "대표팀에서는 센터백 라인의 경험과 위치 선정을 책임집니다.", "수비", { attack: 43, creation: 58, press: 70, defense: 87, form: 78 }, "Marquinhos"),
        player("Gabriel Magalhaes", "가브리엘 마갈량이스", "CB", "Arsenal", "왼발 센터백", "클럽에서는 강한 대인 수비와 세트피스 위협, 왼발 빌드업을 제공합니다.", "대표팀에서는 피지컬 경합과 박스 수비를 강화하는 카드입니다.", "수비", { attack: 48, creation: 54, press: 71, defense: 88, form: 83 }, "Gabriel_Magalh%C3%A3es"),
        player("Alisson", "알리송", "GK", "Liverpool", "마지막 방패", "클럽에서는 1대1 선방, 빌드업 안정성, 수비 라인 뒤 공간 커버를 맡습니다.", "대표팀에서는 위험한 전환 상황을 막는 안정감의 기준입니다.", "골키퍼", { attack: 28, creation: 55, press: 40, defense: 90, form: 84 }, "Alisson_Becker"),
        player("Ederson", "에데르송", "GK", "Manchester City", "빌드업 골키퍼", "클럽에서는 긴 패스와 후방 빌드업으로 압박을 깨는 골키퍼입니다.", "대표팀에서는 상대 압박을 우회하는 전술 옵션입니다.", "골키퍼", { attack: 25, creation: 72, press: 35, defense: 86, form: 82 }, "Ederson_(footballer,_born_1993)")
      ],
      videos: [
        video("브라질 공격진 하이라이트", "Brazil attacking stars highlights", "highlight", "Brazil Vinicius Rodrygo Raphinha highlights"),
        video("비니시우스 전술 분석", "Vinicius Junior tactical analysis", "tactical", "Vinicius Junior tactical analysis"),
        video("브라질 베스트 11 분석", "Brazil best XI analysis", "tactical", "Brazil national team best XI analysis")
      ]
    },
    france: {
      styleTags: ["스피드", "스쿼드 깊이", "역습", "피지컬"],
      ratings: { attack: 93, midfield: 86, defense: 86, speed: 94, experience: 88 },
      watchMatch: "vs 콜롬비아",
      dataStatus: "강팀 확장 리포트",
      lastChecked: "2026-06-03",
      roundOdds: odds([92, 75, 56, 37, 24, 15], [95, 82, 63, 43, 29, 18], [91, 73, 53, 34, 21, 13], "프랑스 우승권 전망 샘플입니다."),
      tacticalNotes: ["음바페의 속도와 그리즈만의 연결 능력이 프랑스 공격의 핵심 축입니다."],
      players: [
        player("Kylian Mbappe", "킬리안 음바페", "FW/LW", "Real Madrid", "대표 스타", "클럽에서는 왼쪽과 중앙을 오가며 뒷공간 침투와 마무리를 담당합니다.", "대표팀에서는 가장 높은 파괴력을 가진 전환 공격의 중심입니다.", "공격", { attack: 96, creation: 82, press: 68, defense: 35, form: 89 }, "Kylian_Mbapp%C3%A9"),
        player("Ousmane Dembele", "우스만 뎀벨레", "RW/LW", "Paris Saint-Germain", "양발 돌파", "클럽에서는 양발 드리블과 컷백으로 수비를 흔듭니다.", "대표팀에서는 측면 1대1과 역습 속도를 더합니다.", "공격", { attack: 84, creation: 86, press: 69, defense: 40, form: 82 }, "Ousmane_Demb%C3%A9l%C3%A9"),
        player("Antoine Griezmann", "앙투안 그리즈만", "AM/FW", "Atletico Madrid", "전술 연결자", "클럽에서는 공격과 중원을 잇고 압박 방향을 잡습니다.", "대표팀에서는 공격 밸런스와 세트피스 품질을 담당합니다.", "중원", { attack: 78, creation: 88, press: 78, defense: 62, form: 80 }, "Antoine_Griezmann"),
        player("Aurelien Tchouameni", "오렐리앵 추아메니", "DM/CM", "Real Madrid", "중원 보호", "클럽에서는 중원 수비와 전진 패스의 균형을 맞춥니다.", "대표팀에서는 수비 라인 앞 공간을 지키는 핵심입니다.", "중원", { attack: 60, creation: 72, press: 78, defense: 83, form: 79 }, "Aur%C3%A9lien_Tchouam%C3%A9ni"),
        player("William Saliba", "윌리엄 살리바", "CB", "Arsenal", "후방 안정", "클럽에서는 침착한 대인 수비와 빌드업 안정성을 제공합니다.", "대표팀에서는 높은 라인에서 커버 범위를 책임집니다.", "수비", { attack: 38, creation: 60, press: 70, defense: 90, form: 86 }, "William_Saliba")
      ],
      videos: [video("프랑스 공격 전술 분석", "France attack tactical analysis", "tactical", "France Mbappe Griezmann tactical analysis")]
    },
    japan: {
      styleTags: ["조직 압박", "2선 기술", "빠른 패스", "측면 전개"],
      ratings: { attack: 78, midfield: 82, defense: 76, speed: 80, experience: 75 },
      watchMatch: "vs 스위스",
      dataStatus: "선수단 리서치 초안",
      lastChecked: "2026-06-03",
      roundOdds: odds([68, 39, 17, 7, 3, 1], [78, 48, 23, 10, 5, 2], [66, 36, 15, 6, 2, 1], "일본의 조직력과 아시아 강호 기대치를 반영한 샘플입니다."),
      tacticalNotes: ["구보와 미토마가 양쪽에서 개인 능력을 만들고, 엔도가 중원 균형을 잡습니다."],
      players: [
        player("Takefusa Kubo", "구보 다케후사", "AM/RW", "Real Sociedad", "창의성 핵심", "클럽에서는 오른쪽과 중앙을 오가며 찬스 메이킹을 맡습니다.", "대표팀에서는 낮은 블록을 깨는 전진 패스와 드리블의 중심입니다.", "중원", { attack: 78, creation: 86, press: 70, defense: 45, form: 80 }, "Takefusa_Kubo"),
        player("Kaoru Mitoma", "미토마 가오루", "LW", "Brighton & Hove Albion", "측면 돌파", "클럽에서는 왼쪽 1대1 돌파와 컷백으로 찬스를 만듭니다.", "대표팀에서는 가장 직접적인 측면 파괴 카드입니다.", "공격", { attack: 81, creation: 78, press: 68, defense: 44, form: 76 }, "Kaoru_Mitoma"),
        player("Wataru Endo", "엔도 와타루", "DM", "Liverpool", "중원 밸런스", "클럽에서는 볼 회수와 수비 라인 보호를 맡습니다.", "대표팀에서는 압박 이후 세컨드볼을 정리합니다.", "중원", { attack: 48, creation: 62, press: 82, defense: 80, form: 74 }, "Wataru_Endo"),
        player("Daichi Kamada", "가마다 다이치", "AM/CM", "Crystal Palace", "연결형 미드필더", "클럽에서는 2선 연결과 침투 타이밍을 담당합니다.", "대표팀에서는 공격 템포를 바꾸는 옵션입니다.", "중원", { attack: 70, creation: 78, press: 66, defense: 52, form: 72 }, "Daichi_Kamada"),
        player("Takehiro Tomiyasu", "도미야스 다케히로", "CB/RB", "Arsenal", "멀티 수비수", "클럽에서는 풀백과 센터백을 오가며 수비 안정성을 제공합니다.", "대표팀에서는 강팀 상대 수비 매치업의 핵심입니다.", "수비", { attack: 45, creation: 58, press: 68, defense: 84, form: 70 }, "Takehiro_Tomiyasu")
      ],
      videos: [video("일본 대표팀 전술 분석", "Japan national team tactical analysis", "tactical", "Japan national team tactical analysis")]
    },
    usa: {
      styleTags: ["활동량", "전방 압박", "젊은 코어", "측면 속도"],
      ratings: { attack: 78, midfield: 77, defense: 73, speed: 83, experience: 72 },
      watchMatch: "vs 독일",
      dataStatus: "선수단 리서치 초안",
      lastChecked: "2026-06-05",
      roundOdds: odds([74, 43, 19, 8, 4, 2], [84, 55, 27, 13, 6, 3], [70, 39, 16, 7, 3, 1], "개최국 기대치가 반영된 미국 전망 샘플입니다."),
      tacticalNotes: ["풀리식과 발로건이 공격의 깊이를 만들고, 맥케니와 무사가 중원 에너지를 공급합니다."],
      players: [
        player("Christian Pulisic", "크리스천 풀리식", "RW/LW", "AC Milan", "대표 스타", "클럽에서는 측면 돌파와 박스 안 마무리로 공격 포인트를 만듭니다.", "대표팀에서는 가장 믿을 수 있는 1대1 공격 옵션입니다.", "공격", { attack: 82, creation: 78, press: 72, defense: 45, form: 80 }, "Christian_Pulisic"),
        player("Folarin Balogun", "폴라린 발로건", "FW", "Monaco", "중앙 공격수", "클럽에서는 뒷공간 침투와 박스 안 마무리를 맡습니다.", "대표팀에서는 전방 깊이를 만드는 스트라이커입니다.", "공격", { attack: 76, creation: 54, press: 68, defense: 35, form: 72 }, "Folarin_Balogun"),
        player("Weston McKennie", "웨스턴 맥케니", "CM", "Juventus", "중원 박스 투 박스", "클럽에서는 활동량과 박스 침투, 경합으로 중원 에너지를 더합니다.", "대표팀에서는 공수 전환의 엔진입니다.", "중원", { attack: 68, creation: 66, press: 80, defense: 70, form: 75 }, "Weston_McKennie"),
        player("Yunus Musah", "유누스 무사", "CM", "AC Milan", "압박 회피", "클럽에서는 운반과 압박 회피로 중원 전진을 돕습니다.", "대표팀에서는 상대 압박을 풀어내는 볼 캐리어입니다.", "중원", { attack: 60, creation: 70, press: 75, defense: 64, form: 71 }, "Yunus_Musah"),
        player("Antonee Robinson", "앤토니 로빈슨", "LB", "Fulham", "왼쪽 전진", "클럽에서는 높은 활동량과 오버래핑으로 측면 폭을 만듭니다.", "대표팀에서는 왼쪽 빌드업과 크로스 루트입니다.", "수비", { attack: 62, creation: 65, press: 78, defense: 74, form: 77 }, "Antonee_Robinson")
      ],
      videos: [video("미국 대표팀 핵심 선수 분석", "USMNT key players analysis", "tactical", "USMNT Pulisic Balogun tactical analysis")]
    }
  };

  richTeams.korea.videos.unshift({
    title: "대한민국 vs 트리니다드토바고 하이라이트",
    channel: "KFATV 대한민국 축구 국가대표팀",
    type: "highlight",
    youtubeId: "LZAdpDpslcc",
    duration: "13:25",
    meta: "공식 채널 하이라이트"
  });

  Object.entries(richTeams).forEach(([teamId, rich]) => {
    if (!data.teams[teamId]) return;
    data.teams[teamId] = {
      ...data.teams[teamId],
      ...rich,
      sources: Array.from(new Set([...(data.teams[teamId].sources || []), ...commonSources])),
      players: rich.players,
      videos: rich.videos
    };
  });

  Object.values(data.teams).forEach((team) => {
    team.styleTags ||= ["조직력", "전환", "세트피스"];
    team.watchMatch ||= "조별 핵심 경기 업데이트 예정";
    team.dataStatus ||= "기본 리포트";
    team.lastChecked ||= data.tournament.updatedAt;
    team.ratings ||= {
      attack: clampRating(95 - team.rank + 18),
      midfield: clampRating(88 - team.rank + 18),
      defense: clampRating(84 - team.rank + 18),
      speed: clampRating(82 - team.rank + 18),
      experience: clampRating(80 - team.rank + 18)
    };
    team.tacticalNotes ||= [
      `${team.nameKo}의 세부 선수단 리포트는 리서치 확장 단계입니다.`,
      `현재는 대표 스타와 팀 스타일을 중심으로 표시합니다.`
    ];
    team.players = team.players.map((item) => ({
      ...item,
      nameKo: item.nameKo || item.name,
      clubRole: item.clubRole || item.role || "클럽 내 역할 업데이트 필요",
      nationalRole: item.nationalRole || item.summary || "대표팀 역할 업데이트 필요",
      category: item.category || "핵심",
      scouting: item.scouting || { attack: 60, creation: 60, press: 60, defense: 60, form: 60 },
      seasonStats: item.seasonStats || defaultSeasonStats(),
      salary: item.salary || defaultSalary(item),
      videos: item.videos || [
        video(`${item.name} highlights`, `${item.name} highlights`, "highlight", `${item.name} football highlights`)
      ]
    }));
    team.roundOdds ||= defaultOdds(team);
    team.matchRecords ||= defaultMatchRecords(team);
  });

  function player(name, nameKo, position, club, tag, clubRole, nationalRole, category, scouting, wikiSlug) {
    return {
      id: slug(name),
      name,
      nameKo,
      position,
      club,
      tag,
      clubRole,
      nationalRole,
      category,
      wikiSlug,
      summary: nationalRole,
      role: tag,
      scouting,
      seasonStats: defaultSeasonStats(),
      salary: estimatedSalary(name),
      videos: [
        video(`${name} highlights`, `${name} highlights`, "highlight", `${name} football highlights`),
        video(`${name} tactical analysis`, `${name} tactical analysis`, "tactical", `${name} tactical analysis football`)
      ]
    };
  }

  function defaultSeasonStats() {
    return {
      season: "2025-26 클럽 시즌",
      status: "실시간 성적 연동 전",
      apps: "업데이트",
      goals: "업데이트",
      assists: "업데이트",
      form: "최근 5경기 조사 필요"
    };
  }

  function estimatedSalary(name) {
    const salaryMap = {
      "Son Heung-min": salary(12000000, 230000, "Capology/언론 추정", "medium"),
      "Lee Kang-in": salary(4300000, 83000, "Capology/언론 추정", "low"),
      "Kim Min-jae": salary(12500000, 240000, "Capology/언론 추정", "medium"),
      "Hwang Hee-chan": salary(3900000, 75000, "Capology/언론 추정", "low"),
      "Vinicius Junior": salary(40000000, 770000, "Forbes/언론 추정", "medium"),
      "Rodrygo": salary(13000000, 250000, "Capology/언론 추정", "medium"),
      "Raphinha": salary(12500000, 240000, "Capology/언론 추정", "medium"),
      "Bruno Guimaraes": salary(8300000, 160000, "Capology/언론 추정", "low"),
      "Lucas Paqueta": salary(7800000, 150000, "Capology/언론 추정", "low"),
      "Casemiro": salary(18200000, 350000, "Capology/언론 추정", "medium"),
      "Kylian Mbappe": salary(70000000, 1350000, "Forbes/언론 추정", "medium"),
      "Ousmane Dembele": salary(18000000, 346000, "Capology/언론 추정", "low"),
      "Antoine Griezmann": salary(12500000, 240000, "Capology/언론 추정", "low"),
      "Christian Pulisic": salary(5200000, 100000, "Capology/언론 추정", "low"),
      "Takefusa Kubo": salary(3000000, 58000, "Capology/언론 추정", "low")
    };
    return salaryMap[name] || defaultSalary();
  }

  function salary(annualUsd, weeklyUsd, source, confidence) {
    const usdKrw = 1380;
    return {
      annualUsd,
      weeklyUsd,
      annualKrw: Math.round(annualUsd * usdKrw),
      exchangeRate: usdKrw,
      season: "2025-26",
      basis: "세전 추정",
      source,
      confidence,
      updatedAt: "2026-06-03"
    };
  }

  function defaultSalary() {
    return {
      annualUsd: null,
      weeklyUsd: null,
      annualKrw: null,
      exchangeRate: 1380,
      season: "2025-26",
      basis: "업데이트 필요",
      source: "추정 데이터 대기",
      confidence: "pending",
      updatedAt: "2026-06-03"
    };
  }

  function video(title, channel, type, query) {
    return {
      title,
      channel,
      type,
      language: "multi",
      query,
      url: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
      thumbnailMode: "generated"
    };
  }

  function odds(model, home, global, note) {
    return {
      model: oddsShape(model),
      home: oddsShape(home),
      global: oddsShape(global),
      note
    };
  }

  function oddsShape(values) {
    return {
      r32: values[0],
      r16: values[1],
      qf: values[2],
      sf: values[3],
      final: values[4],
      champion: values[5]
    };
  }

  function defaultOdds(team) {
    const base = Math.max(8, Math.min(94, team.advance || 40));
    const values = [
      base,
      Math.max(2, Math.round(base * 0.58)),
      Math.max(1, Math.round(base * 0.30)),
      Math.max(1, Math.round(base * 0.14)),
      Math.max(1, Math.round(base * 0.07)),
      Math.max(1, Math.round(base * 0.03))
    ];
    return odds(values, values.map((value) => Math.min(98, Math.round(value * 1.12))), values.map((value) => Math.max(1, Math.round(value * 0.92))), "샘플 전망입니다. 실제 여론/배당/모델 데이터로 교체 가능합니다.");
  }

  function defaultMatchRecords(team) {
    return [
      {
        status: "pending",
        matchLabel: `${team.nameKo} 조별 1차전`,
        score: "",
        startingXI: [],
        substitutions: [],
        stats: { shots: "", possession: "", xg: "" },
        mom: ""
      }
    ];
  }

  function slug(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  function clampRating(value) {
    return Math.max(30, Math.min(92, Math.round(value)));
  }
})();
