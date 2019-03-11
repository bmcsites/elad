// Angular's
import { Injectable } from '@angular/core';
import {GetGamesProvider} from '@appRoot/get-games.provider';

@Injectable()
export class HttpService {
  name: string;
  data: any;
  uniqueTeams: any[];
  uniqueStadium: any[];

  constructor(private getGamesProvider: GetGamesProvider) {
    this.data = getGamesProvider.getGames();
    this.uniqueTeams = Array.from(new Set(this.data.map(game => game.away_team ).concat(this.data.map(game => game.home_team ))));
    this.uniqueStadium = Array.from(new Set(this.data.map(game => game.stadium )));
  }
}
