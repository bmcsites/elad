import { Component, ViewChild } from '@angular/core';
import { SeInfoComponent } from '@components/home/se-info/se-info.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild( 'seInfo' ) child: SeInfoComponent ;

  constructor() { }

  gameClicked(e) {
    this.child.openModal(e);
  }
}
