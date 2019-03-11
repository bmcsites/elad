import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeInfoComponent } from '@components/home/se-info/se-info.component';
import { GameData, GamesData } from '@shared/modules/game-data.inteface';
import { HttpService } from '@services/http.service';

@Component({
  selector: 'app-teams-game-list',
  templateUrl: './teams-game-list.component.html',
  styleUrls: ['./teams-game-list.component.scss']
})
export class TeamsGameListComponent implements OnInit {
  name: string;
  data: GamesData;
  @ViewChild( 'seInfo' ) child: SeInfoComponent ;
  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name').toLowerCase();
    this.data = this.httpService.data.filter( game => game.away_team.toLowerCase().startsWith(this.name) || game.home_team.toLowerCase().startsWith(this.name));
  }

  gameClicked(e: GameData) {
    this.child.openModal(e);
  }

}
