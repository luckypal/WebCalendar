import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivityService } from '../../../../../core/services/activity.service';
import { CalendarService } from '../../../../../core/services/calendar.service';

@Component({
  selector: 'kt-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {

	startDate: Date;
  lastDate: Date;
  currentActivity = -1;
  currentFrequence = 0;
  
  constructor(
    public calendarService: CalendarService,
    public activityService: ActivityService,
		private modalService: NgbModal) { }

  ngOnInit() {
    this.startDate = new Date(this.calendarService.year, 0, 1);
    this.lastDate = new Date(this.calendarService.year, 11, 31);
  }

  onAddActivity() {
    if (!this.startDate 
      || !this.lastDate 
      || this.currentActivity == -1) {
        alert("Please fill the properties.");
        return;
      }
    
    this.calendarService.addActivity(this.startDate, this.lastDate, this.currentActivity, this.currentFrequence);
    this.modalService.dismissAll();
  }

  onClose() {
    this.modalService.dismissAll();
  }

  getIcon() {
    if (this.currentActivity == -1) return null;
    var type = this.activityService.configuration [this.currentActivity].type;
    return this.activityService.activityTypes [type].icon;
  }

  getColor() {
    if (this.currentActivity == -1) return null;
    return this.activityService.configuration [this.currentActivity].color;
  }
}
