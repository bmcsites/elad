import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeInfoComponent } from '@components/home/se-info/se-info.component';
import { GameData, GamesData } from '@shared/modules/game-data.inteface';
import { HttpService } from '@services/http.service';

@Component({
  selector: 'app-stadiums-list',
  templateUrl: './stadiums-list.component.html',
  styleUrls: ['./stadiums-list.component.scss']
})
export class StadiumsListComponent implements OnInit {
  name: string;
  data: GamesData;
  @ViewChild( 'seInfo' ) child: SeInfoComponent ;
  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name').toLowerCase();
    this.data = this.httpService.data.filter( game => game.stadium.toLowerCase() === this.name.toLowerCase());
  }

  gameClicked(e: GameData) {
    this.child.openModal(e);
  }
}
