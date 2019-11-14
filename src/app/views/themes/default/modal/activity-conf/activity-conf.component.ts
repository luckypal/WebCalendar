import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../../../../core/services/activity.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'kt-activity-conf',
  templateUrl: './activity-conf.component.html',
  styleUrls: ['./activity-conf.component.scss'],
})
export class ActivityConfComponent implements OnInit {

  constructor(
    public activityService: ActivityService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.modalService.dismissAll();
  }

  updateUI() {
    this.activityService.changeEvent.emit(true);
  }

  changeAllIcons() {
    this.activityService.configuration.forEach((config, index) => {
      config.type = this.activityService.default;
    });
    this.updateUI();
  }
}
