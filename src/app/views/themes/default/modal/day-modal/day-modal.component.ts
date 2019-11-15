import { Component, OnInit } from '@angular/core';
import { UiService } from '../../../../../core/services/ui.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DayService } from '../../../../../core/services/day.service';

@Component({
  selector: 'kt-day-modal',
  templateUrl: './day-modal.component.html',
  styleUrls: ['./day-modal.component.scss']
})
export class DayModalComponent implements OnInit {

  constructor(
    public dayService: DayService,
    public uiService: UiService,
		private modalService: NgbModal) { }

  ngOnInit() {
  }

  onClose() {
    this.modalService.dismissAll();
  }

  updateUI() {
    this.uiService.dayEvent.emit(true);
  }

  onReset() {
    this.uiService.resetDay();
    this.uiService.dayEvent.emit(true);
  }
}
