import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UiService } from '../../../../../core/services/ui.service';


@Component({
  selector: 'kt-title-display-modal',
  templateUrl: './title-display-modal.component.html',
  styleUrls: ['./title-display-modal.component.scss']
})

export class TitleDisplayModalComponent implements OnInit {

  constructor( 
    public uiService: UiService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {

  }
  onClose() {
    this.modalService.dismissAll();
  }

  updateUI() {
    this.uiService.titleEvent.emit(true);
  }

}
