import { Component, OnInit } from '@angular/core';
import { UiService } from '../../../../../core/services/ui.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'kt-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent implements OnInit {

  constructor(
    public uiService: UiService,
		private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.modalService.dismissAll();
  }

  updateUI() {
    this.uiService.monthEvent.emit(true);
  }

  onReset() {
    this.uiService.resetMonth();
    this.uiService.monthEvent.emit(true);
  }

  onCenterCalendar() {
    this.uiService.monthEvent.emit(true);
  }

}
