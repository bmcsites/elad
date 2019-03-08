import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService } from '@services/http.service';
import { GameData, GamesData } from '@shared/modules/game-data.inteface';

@Component({
  selector: 'app-se-list',
  templateUrl: './se-list.component.html',
  styleUrls: ['./se-list.component.scss']
})
export class SeListComponent {
  data: GamesData;
  @Output() valueChange = new EventEmitter();
  optSelected: string;
  searchQ: string;

  constructor(private httpService: HttpService) {
    this.optSelected = 'Team';
    this.searchQ = '';
  }

  searchData(searchTag) {
    if (searchTag.length < 2 || !searchTag) {
      this.data = [];
    } else {
      this.httpService.getGames().subscribe((data: any[]) => {
          if (data) {
            if (this.optSelected === 'Team') {
                this.data = data.filter( game => game.away_team.toLowerCase().startsWith(searchTag) || game.home_team.toLowerCase().startsWith(searchTag));
            } else {
                this.data = data.filter( game => game.stadium.toLowerCase().startsWith(searchTag));
            }
          }
        },
        err => {
          console.log('err:::', err);
        });
    }
  }

  showInfo(q: GameData) {
    this.valueChange.emit(q);
  }
}
