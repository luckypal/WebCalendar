import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UiService } from '../../../../../core/services/ui.service';
import { ActivityService } from '../../../../../core/services/activity.service';

@Component({
  selector: 'kt-activity-uimodal',
  templateUrl: './activity-uimodal.component.html',
  styleUrls: ['./activity-uimodal.component.scss']
})
export class ActivityUIModalComponent implements OnInit {

  constructor(
    public activityService: ActivityService,
    public uiService: UiService,
		public modalService: NgbModal) { }

  ngOnInit() {
  }

  onClose() {
    this.modalService.dismissAll();
  }

  updateUI() {
    this.uiService.activityEvent.emit(true);
  }

  onReset() {
    this.uiService.resetDay();
    this.uiService.activityEvent.emit(true);
  }
}
