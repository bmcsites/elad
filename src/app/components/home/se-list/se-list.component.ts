import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService } from '@services/http.service';

@Component({
  selector: 'app-se-list',
  templateUrl: './se-list.component.html',
  styleUrls: ['./se-list.component.scss']
})
export class SeListComponent {
  data: any;
  @Output() valueChange = new EventEmitter();
  optSelected: string;
  constructor(private httpService: HttpService) {
    this.optSelected = 'Team';
  }

  searchData(searchTag) {
    if (searchTag === '' || !searchTag) {
      this.data = [];
    } else {
      this.httpService.getgames().subscribe((data: any[]) => {
        if (data) {
          if (this.optSelected === 'Team') {
            this.data = data.filter(team => team.away_team === searchTag || team.home_team === searchTag);
          } else {
            this.data = data.filter(team => team.stadium === searchTag);
          }
        }
        },
        err => {
          console.log('err:::', err);
        });
    }
  }

  showInfo(q) {
    this.valueChange.emit(q);
  }
}
