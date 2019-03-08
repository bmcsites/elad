export interface GamesData {
  [index: number]: {
    away_team: string;
    home_team: string;
    date: string;
    group: string;
    result: string;
    round_number: number;
    stadium: string;
  };
  length: any;
}

export interface GameData {
  away_team: string;
  home_team: string;
  date: string;
  group: string;
  result: string;
  round_number: number;
  stadium: string;
}
