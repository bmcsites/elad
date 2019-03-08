import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-se-info',
  templateUrl: './se-info.component.html',
  styleUrls: ['./se-info.component.scss']
})
export class SeInfoComponent {
  q: any;
  @ViewChild('statusModal') statusModal: ElementRef;
  modelWindow: NgbModalRef;

  constructor(private modalService: NgbModal) {
    this.q = undefined;
  }

  // open modal
  openModal(q) {
    this.q = q;
    this.modelWindow = this.modalService.open(this.statusModal, { backdrop : true, beforeDismiss: () => false });
  }

}
