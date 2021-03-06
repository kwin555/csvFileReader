import { Analyzer } from "../summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../inheritance/matchResult";

export class WinsAnalysis implements Analyzer {
  team: string;
  constructor(team: string) {
    this.team = team;
  }

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (
        match[2] === "Man United" &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games`;
  }
}
