import { Component } from '@angular/core';
import { HttpService } from '@services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-se-list',
  templateUrl: './se-list.component.html',
  styleUrls: ['./se-list.component.scss']
})
export class SeListComponent {
  data: any;
  optSelected: string;
  searchQ: string;

  constructor(private httpService: HttpService, private router: Router) {
    this.optSelected = 'Team';
    this.searchQ = '';
    this.data = [];
  }

  searchData(searchTag) {
    if (searchTag.length < 1 || !searchTag) {
      this.data = [];
    } else {
      if (this.optSelected === 'Team') {
        const uniqueTeams = this.httpService.uniqueTeams;
        this.data = uniqueTeams.filter( game => game.toLowerCase().startsWith(searchTag));
      } else {
        const uniqueStadium = this.httpService.uniqueStadium;
        this.data = uniqueStadium.filter( game => game.toLowerCase().startsWith(searchTag));
      }
    }
  }

  showInfo(q: string) {
    const path = this.optSelected === 'Team' ? '/teams/' + q : '/stadiums/' + q;
    this.router.navigate([path]);
  }
}
