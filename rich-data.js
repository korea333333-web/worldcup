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
        player("Son Heung-min", "손흥민", "FW/LW", "LAFC", "대표 스타", "클럽에서는 왼쪽에서 안쪽으로 들어오는 득점 루트와 주장 리더십을 맡고, 대표팀에서는 전환 공격의 최종 마무리 역할을 합니다.", "대표팀에서는 공간 침투, 페널티 박스 결정력, 역습 상황의 첫 번째 목표점입니다.", "공격", { attack: 91, creation: 77, press: 72, defense: 45, form: 82 }, "Son_Heung-min"),
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
      "Son Heung-min": salary(10368750, 199399, "Capology 추정 / LAFC 공식 프로필", "medium", "2026-06-11"),
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

  function salary(annualUsd, weeklyUsd, source, confidence, updatedAt = "2026-06-03") {
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
      updatedAt
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

(function extendRichWorldCupDataJune18() {
  const data = window.WORLD_CUP_DATA;
  if (!data?.teams) return;

  const applyRecord = (teamId, patch) => {
    const team = data.teams[teamId];
    if (!team) return;
    Object.assign(team, patch);
  };

  applyRecord("england", {
    lastChecked: "2026-06-18",
    matchRecords: [
      {
        status: "played",
        matchLabel: "England Group L opener vs Croatia",
        score: "England 4-2 Croatia",
        startingXI: ["Jordan Pickford", "Reece James", "Ezri Konsa", "John Stones", "Myles Lewis-Skelly O'Reilly", "Elliot Anderson", "Declan Rice", "Noni Madueke", "Jude Bellingham", "Anthony Gordon", "Harry Kane"],
        substitutions: ["Bukayo Saka in", "Marcus Rashford in", "England bench impact turned the game after half-time"],
        stats: { shots: "trusted report summary", possession: "open match", xg: "not pinned at cutoff" },
        mom: "Jude Bellingham"
      }
    ]
  });

  applyRecord("croatia", {
    lastChecked: "2026-06-18",
    matchRecords: [
      {
        status: "played",
        matchLabel: "Croatia Group L opener vs England",
        score: "Croatia 2-4 England",
        startingXI: ["Dominik Livakovic", "Josip Sutalo", "Luka Vuskovic", "Josko Gvardiol", "Josip Stanisic", "Luka Modric", "Petar Sucic", "Ivan Perisic", "Mario Pasalic", "Martin Baturina", "Petar Musa"],
        substitutions: ["Croatia levelled to 2-2 before half-time", "Unable to contain England's second-half transition game"],
        stats: { shots: "trusted report summary", possession: "open match", xg: "not pinned at cutoff" },
        mom: "Martin Baturina"
      }
    ]
  });

  applyRecord("portugal", {
    lastChecked: "2026-06-18",
    matchRecords: [
      {
        status: "played",
        matchLabel: "Portugal Group K opener vs DR Congo",
        score: "Portugal 1-1 DR Congo",
        startingXI: ["Diogo Costa", "Joao Cancelo", "Tomas Araujo", "Renato Veiga", "Nuno Mendes", "Vitinha", "Joao Neves", "Bernardo Silva", "Bruno Fernandes", "Pedro Neto", "Cristiano Ronaldo"],
        substitutions: ["Francisco Conceicao in", "Rafael Leao in", "Portugal had an overhead Cancelo goal ruled out for offside"],
        stats: { shots: "trusted live blog summary", possession: "Portugal controlled possession", xg: "not pinned at cutoff" },
        mom: "Joao Neves"
      }
    ]
  });

  applyRecord("dr-congo", {
    lastChecked: "2026-06-18",
    matchRecords: [
      {
        status: "played",
        matchLabel: "DR Congo Group K opener vs Portugal",
        score: "DR Congo 1-1 Portugal",
        startingXI: ["Dimitry Bertaud Mpasi", "Aaron Wan-Bissaka", "Chancel Mbemba", "Axel Tuanzebe", "Batubinsika Kapaudi", "Arthur Masuaku", "Samuel Moutoussamy", "Noah Sadiki Mukau", "Edo Kayembe", "Cedric Bakambu", "Yoane Wissa"],
        substitutions: ["Edo Kayembe and Cedric Bakambu led counters", "Noah Sadiki replacement noted in second half", "Deep block and set-piece equaliser earned first point"],
        stats: { shots: "trusted live blog summary", possession: "less than Portugal", xg: "not pinned at cutoff" },
        mom: "Yoane Wissa"
      }
    ]
  });

  applyRecord("iraq", {
    lastChecked: "2026-06-18",
    matchRecords: [
      {
        status: "played",
        matchLabel: "Iraq Group I opener vs Norway",
        score: "Iraq 1-4 Norway",
        startingXI: ["Jalal Hassan", "Frans Putros Doski", "Rebin Sulaka Tahseen", "Munaf Hashim", "Hussein Ali", "Youssef Amyn Jasim", "Osama Rashid Ismail", "Montader Al-Ammari", "Bashar Resan Bayesh", "Ali Al-Hamadi", "Aymen Hussein"],
        substitutions: ["Ahmed Qasem in", "Saadoon added late width", "Iraq hit the post and created multiple late first-half chances"],
        stats: { shots: "trusted live blog summary", possession: "competitive despite scoreline", xg: "not pinned at cutoff" },
        mom: "Aymen Hussein"
      }
    ]
  });

  applyRecord("norway", {
    lastChecked: "2026-06-18",
    matchRecords: [
      {
        status: "played",
        matchLabel: "Norway Group I opener vs Iraq",
        score: "Norway 4-1 Iraq",
        startingXI: ["Orjan Nyland", "David Moller Wolfe", "Torbjorn Heggem", "Kristoffer Ajer", "Julian Ryerson", "Fredrik Aursnes", "Sander Berge", "Martin Odegaard", "Antonio Nusa", "Erling Haaland", "Alexander Sorloth"],
        substitutions: ["Leo Ostigard in and scored", "Kristian Thorstvedt involved in late scramble leading to own goal", "Haaland scored twice on World Cup debut"],
        stats: { shots: "trusted live blog summary", possession: "Norway ahead early, then under pressure", xg: "not pinned at cutoff" },
        mom: "Erling Haaland"
      }
    ]
  });
})();

(function extendRichWorldCupDataJune14() {
  const data = window.WORLD_CUP_DATA;
  if (!data?.teams) return;

  const applyRecord = (teamId, patch) => {
    const team = data.teams[teamId];
    if (!team) return;
    Object.assign(team, patch);
  };

  applyRecord("brazil", {
    lastChecked: "2026-06-14",
    matchRecords: [
      {
        status: "played",
        matchLabel: "브라질 조별리그 1차전 vs 모로코",
        score: "브라질 1-1 모로코",
        startingXI: ["Alisson Becker", "Gabriel Magalhaes", "Marquinhos", "Douglas Santos", "Roger Ibanez", "Raphinha", "Bruno Guimaraes", "Casemiro", "Igor Thiago", "Vinicius Junior", "Lucas Paqueta"],
        substitutions: ["45' Danilo in, Roger Ibanez out", "45' Fabinho in, Casemiro out", "61' Matheus Cunha in, Lucas Paqueta out", "62' Luiz Henrique in, Igor Thiago out", "80' Danilo Santos in, Bruno Guimaraes out"],
        stats: { shots: "12 / 유효 5", possession: "51.4%", xg: "ESPN 미제공" },
        mom: "Vinicius Junior"
      }
    ]
  });

  applyRecord("morocco", {
    lastChecked: "2026-06-14",
    matchRecords: [
      {
        status: "played",
        matchLabel: "모로코 조별리그 1차전 vs 브라질",
        score: "모로코 1-1 브라질",
        startingXI: ["Yassine Bounou", "Chadi Riad", "Issa Diop", "Noussair Mazraoui", "Achraf Hakimi", "Azzedine Ounahi", "Ayyoub Bouaddi", "Neil El Aynaoui", "Ismael Saibari", "Bilal El Khannouss", "Brahim Diaz"],
        substitutions: ["65' Samir El Mourabet in, Azzedine Ounahi out", "65' Chemsdine Talbi in, Brahim Diaz out", "80' Anass Salah-Eddine in, Noussair Mazraoui out", "80' Ayoube Amaimouni-Echghouyab in, Bilal El Khannouss out", "89' Soufiane Rahimi in, Ismael Saibari out"],
        stats: { shots: "14 / 유효 3", possession: "48.6%", xg: "ESPN 미제공" },
        mom: "Ismael Saibari"
      }
    ]
  });

  applyRecord("scotland", {
    lastChecked: "2026-06-14",
    matchRecords: [
      {
        status: "played",
        matchLabel: "스코틀랜드 조별리그 1차전 vs 아이티",
        score: "스코틀랜드 1-0 아이티",
        startingXI: ["Angus Gunn", "Jack Hendry", "Grant Hanley", "Andy Robertson", "Aaron Hickey", "Lewis Ferguson", "Scott McTominay", "John McGinn", "Ben Gannon-Doak", "Che Adams", "Lawrence Shankland"],
        substitutions: ["75' Ryan Christie in, Ben Gannon-Doak out", "75' Lyndon Dykes in, Che Adams out", "75' Nathan Patterson in, Aaron Hickey out", "83' Findlay Curtis in, John McGinn out", "83' Kenny McLean in, Lawrence Shankland out"],
        stats: { shots: "9 / 유효 2", possession: "46.2%", xg: "ESPN 미제공" },
        mom: "John McGinn"
      }
    ]
  });

  applyRecord("haiti", {
    lastChecked: "2026-06-14",
    matchRecords: [
      {
        status: "played",
        matchLabel: "아이티 조별리그 1차전 vs 스코틀랜드",
        score: "아이티 0-1 스코틀랜드",
        startingXI: ["Johny Placide", "Hannes Delcroix", "Ricardo Ade", "Martin Experience", "Carlens Arcus", "Jean-Ricner Bellegarde", "Danley Jean Jacques", "Ruben Providence", "Louicius Deedson", "Wilson Isidor", "Frantzdy Pierrot"],
        substitutions: ["61' Josue Casimir in, Louicius Deedson out", "76' Lenny Joseph in, Wilson Isidor out", "85' Yassin Fortune in, Ruben Providence out"],
        stats: { shots: "15 / 유효 2", possession: "53.8%", xg: "ESPN 미제공" },
        mom: "John McGinn"
      }
    ]
  });

  applyRecord("qatar", {
    lastChecked: "2026-06-14",
    matchRecords: [
      {
        status: "played",
        matchLabel: "카타르 조별리그 1차전 vs 스위스",
        score: "카타르 1-1 스위스",
        startingXI: ["Mahmoud Abunada", "Boualem Khoukhi", "Pedro Miguel", "Homam Ahmed", "Ayoub Al-Oui", "Assim Madibo", "Issa Laye", "Jassem Gaber", "Yusuf Abdurisag", "Akram Afif", "Edmilson Junior"],
        substitutions: ["60' Ahmed Fathy in, Ayoub Al Oui out", "60' Karim Boudiaf in, Jassem Gaber out", "60' Ahmed Alaa in, Yusuf Abdurisag out", "79' Mohammad Al Mannai in, Assim Madibo out", "88' Hassan Al Haydos in, Edmilson Junior out"],
        stats: { shots: "6 / 유효 3", possession: "32.0%", xg: "ESPN 미제공" },
        mom: "Homam Ahmed"
      }
    ]
  });

  applyRecord("switzerland", {
    lastChecked: "2026-06-14",
    matchRecords: [
      {
        status: "played",
        matchLabel: "스위스 조별리그 1차전 vs 카타르",
        score: "스위스 1-1 카타르",
        startingXI: ["Gregor Kobel", "Manuel Akanji", "Nico Elvedi", "Ricardo Rodriguez", "Denis Zakaria", "Granit Xhaka", "Remo Freuler", "Michel Aebischer", "Breel Embolo", "Ruben Vargas", "Dan Ndoye"],
        substitutions: ["65' Fabian Rieder in, Michel Aebischer out", "65' Johan Manzambi in, Dan Ndoye out", "79' Zeki Amdouni in, Ruben Vargas out", "89' Ardon Jashari in, Remo Freuler out", "89' Miro Muheim in, Ricardo Rodriguez out"],
        stats: { shots: "26 / 유효 7", possession: "68.0%", xg: "ESPN 미제공" },
        mom: "Breel Embolo"
      }
    ]
  });
})();

(function extendRichWorldCupDataJune20() {
  const data = window.WORLD_CUP_DATA;
  if (!data?.teams) return;

  const applyRecord = (teamId, patch) => {
    const team = data.teams[teamId];
    if (!team) return;
    Object.assign(team, patch);
  };

  applyRecord("canada", {
    lastChecked: "2026-06-20",
    matchRecords: [
      {
        status: "played",
        matchLabel: "Canada Group B second match vs Qatar",
        score: "Canada 6-0 Qatar",
        startingXI: [],
        substitutions: [
          "Nathan Saliba replaced the injured Ismael Kone and scored from a direct free-kick",
          "Alphonso Davies stayed on the bench despite being available after his hamstring issue",
          "Canada finished against nine-man Qatar after red cards to Homam Ahmed and Assim Madibo"
        ],
        stats: { shots: "trusted report summary", possession: "Canada pinned Qatar back for long stretches", xg: "not pinned at cutoff" },
        mom: "Jonathan David"
      }
    ]
  });

  applyRecord("qatar", {
    lastChecked: "2026-06-20",
    matchRecords: [
      {
        status: "played",
        matchLabel: "Qatar Group B second match vs Canada",
        score: "Qatar 0-6 Canada",
        startingXI: [],
        substitutions: [
          "Homam Ahmed saw a straight red for denying a goalscoring opportunity",
          "Assim Madibo was sent off after the tackle that injured Ismael Kone",
          "Akram Afif cleared one off the line before the scoreline got away"
        ],
        stats: { shots: "trusted report summary", possession: "Qatar were pinned back after the early Canada pressure", xg: "not pinned at cutoff" },
        mom: "Jonathan David"
      }
    ]
  });

  applyRecord("usa", {
    lastChecked: "2026-06-20",
    matchRecords: [
      {
        status: "played",
        matchLabel: "USA Group D second match vs Australia",
        score: "USA 2-0 Australia",
        startingXI: [],
        substitutions: [
          "Christian Pulisic was unavailable for selection",
          "Alex Freeman's finish was confirmed after a VAR review before half-time",
          "The USA saw out a physical second half and clinched a knockout-round place"
        ],
        stats: { shots: "trusted report summary", possession: "USA controlled the first half", xg: "not pinned at cutoff" },
        mom: "Alex Freeman"
      }
    ]
  });

  applyRecord("australia", {
    lastChecked: "2026-06-20",
    matchRecords: [
      {
        status: "played",
        matchLabel: "Australia Group D second match vs USA",
        score: "Australia 0-2 USA",
        startingXI: [],
        substitutions: [
          "Jordan Bos and Alessandro Circati were booked before half-time",
          "Australia improved after the break but could not overturn the two-goal deficit",
          "Seven yellow cards were shown across the match"
        ],
        stats: { shots: "trusted report summary", possession: "Australia chased the game for most of the afternoon", xg: "not pinned at cutoff" },
        mom: "Alex Freeman"
      }
    ]
  });
})();

(function extendRichWorldCupDataJune21() {
  const data = window.WORLD_CUP_DATA;
  if (!data?.teams) return;

  const applyRecord = (teamId, patch) => {
    const team = data.teams[teamId];
    if (!team) return;
    Object.assign(team, patch);
  };

  applyRecord("scotland", {
    lastChecked: "2026-06-21",
    matchRecords: [
      {
        status: "played",
        matchLabel: "Scotland Group C second match vs Morocco",
        score: "Scotland 0-1 Morocco",
        startingXI: [],
        substitutions: [
          "Kieran Tierney went off in the second half; Steve Clarke later described the issue as cramp",
          "Ben Gannon-Doak's introduction lifted Scotland during the late push",
          "Two Scotland penalty appeals were waved away in the second half"
        ],
        stats: { shots: "trusted report summary", possession: "Scotland grew into the second half after being overrun early", xg: "not pinned at cutoff" },
        mom: "Ismael Saibari"
      }
    ]
  });

  applyRecord("morocco", {
    lastChecked: "2026-06-21",
    matchRecords: [
      {
        status: "played",
        matchLabel: "Morocco Group C second match vs Scotland",
        score: "Morocco 1-0 Scotland",
        startingXI: [],
        substitutions: [
          "Ismael Saibari scored after 71 seconds",
          "Morocco created the better chances but did not add the second goal",
          "The win moved Morocco to four points before the Haiti match"
        ],
        stats: { shots: "trusted report summary", possession: "Morocco controlled most of the first half", xg: "not pinned at cutoff" },
        mom: "Ismael Saibari"
      }
    ]
  });

  applyRecord("brazil", {
    lastChecked: "2026-06-21",
    matchRecords: [
      {
        status: "played",
        matchLabel: "Brazil Group C second match vs Haiti",
        score: "Brazil 3-0 Haiti",
        startingXI: [],
        substitutions: [
          "Raphinha went off early and was later reported as a doubt for the next match",
          "Matheus Cunha scored twice before Vinicius Junior made it 3-0 in first-half stoppage time",
          "Brazil managed the game conservatively after the break"
        ],
        stats: { shots: "trusted report summary", possession: "Brazil controlled the ball but never fully convinced", xg: "not pinned at cutoff" },
        mom: "Matheus Cunha"
      }
    ]
  });

  applyRecord("haiti", {
    lastChecked: "2026-06-21",
    matchRecords: [
      {
        status: "played",
        matchLabel: "Haiti Group C second match vs Brazil",
        score: "Haiti 0-3 Brazil",
        startingXI: [],
        substitutions: [
          "Haiti trailed 3-0 by half-time and could not turn their second-half spirit into a comeback",
          "Jean-Ricner Bellegarde and the substitute forwards provided Haiti's best moments",
          "The defeat left Haiti on 0 points before meeting Morocco"
        ],
        stats: { shots: "trusted report summary", possession: "Haiti spent long stretches without the ball", xg: "not pinned at cutoff" },
        mom: "Matheus Cunha"
      }
    ]
  });

  applyRecord("turkiye", {
    lastChecked: "2026-06-21",
    matchRecords: [
      {
        status: "played",
        matchLabel: "Turkiye Group D second match vs Paraguay",
        score: "Turkiye 0-1 Paraguay",
        startingXI: [],
        substitutions: [
          "Turkiye conceded after 65 seconds and still could not score despite 32 shots",
          "Paraguay's Miguel Almiron was sent off late under the new mouth-covering dissent rule",
          "The defeat eliminated Turkiye before the final group match"
        ],
        stats: { shots: "32 / on target not pinned at cutoff", possession: "nearly 80% in the trusted report summary", xg: "not pinned at cutoff" },
        mom: "Matias Galarza"
      }
    ]
  });

  applyRecord("paraguay", {
    lastChecked: "2026-06-21",
    matchRecords: [
      {
        status: "played",
        matchLabel: "Paraguay Group D second match vs Turkiye",
        score: "Paraguay 1-0 Turkiye",
        startingXI: [],
        substitutions: [
          "Matias Galarza scored after 65 seconds",
          "Miguel Almiron was sent off, leaving Paraguay to defend with 10 men",
          "The win kept Paraguay alive on three points ahead of the Australia match"
        ],
        stats: { shots: "trusted report summary", possession: "Paraguay defended deep for most of the match", xg: "not pinned at cutoff" },
        mom: "Matias Galarza"
      }
    ]
  });
})();
