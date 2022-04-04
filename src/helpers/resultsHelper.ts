function getStats(rawStats: any) {
  const teamStats = {
    points: rawStats.total_pontos,
    wins: rawStats.total_vitorias,
    ties: rawStats.total_empates,
    losses: rawStats.total_derrotas,
    goalsScored: rawStats.total_gols_marcados,
    goalsReceived: rawStats.total_gols_sofridos,
    goalsBalance: rawStats.total_gols_marcados - rawStats.total_gols_sofridos,
  };

  return teamStats;
}

type Partida = {
  mandante: any;
  visitante: any;
  pontuacao_geral_mandante: any;
  pontuacao_geral_visitante: any;
};

export function getRanking(data: any) {
  const lastRound = data.length - 1;

  const ranking = data[lastRound].partidas
    .flatMap((partida: Partida) => {
      const host = getStats(partida.pontuacao_geral_mandante);
      const visitor = getStats(partida.pontuacao_geral_visitante);

      return [
        { teamName: partida.mandante, data: host },
        { teamname: partida.visitante, data: visitor },
      ];
    })
    .sort((a: any, b: any) => b.data.points - a.data.points);

  return ranking;
}
