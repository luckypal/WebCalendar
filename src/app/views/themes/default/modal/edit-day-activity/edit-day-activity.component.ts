import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivityService } from '../../../../../core/services/activity.service';
import { CalendarService, DayData } from '../../../../../core/services/calendar.service';
import { DayService } from '../../../../../core/services/day.service';
import { MonthService } from '../../../../../core/services/month.service';

@Component({
  selector: 'kt-edit-day-activity',
  templateUrl: './edit-day-activity.component.html',
  styleUrls: ['./edit-day-activity.component.scss']
})
export class EditDayActivityComponent implements OnInit, OnDestroy {
  month: number = 0;
  day: number = 0;

  activities: {};

  isDelay: boolean = false;
  isCancel: boolean = false;

  delayDate: Date;

  constructor(
    public calendarService: CalendarService,
    public monthService: MonthService,
    public dayService: DayService,
    public activityService: ActivityService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.delayDate = new Date(this.calendarService.year, this.month, this.day + 1);
    var dayData: DayData = this.calendarService.dayData[this.month][this.day];
    
    if (dayData.conflitsProp == 1) this.isDelay = true;
    if (dayData.conflitsProp == 2) this.isCancel = true;
    this.activities = Object.assign({}, dayData.activities);
  }

  ngOnDestroy() {
  }

  onClose() {
    this.modalService.dismissAll();
  }

  isConflit() {
    var dayData = this.getDayData();
    return dayData.holidayLvl == 2
      && dayData.conflitsProp == 0
      && this.calendarService.isHasActiveActivity(dayData.activities);
  }

  getDayData(): DayData {
    return this.calendarService.dayData[this.month][this.day];
  }

  onChangeDelayCheck() {
    if (this.isDelay) this.isCancel = false;
  }

  onChangeCancelCheck() {
    if (this.isCancel) this.isDelay = false;
  }

  onBtnOk() {
    if (this.isDelay) {
      this.calendarService.dayData [this.month][this.day].conflitsProp = 1;
      
      var delayMonth = this.delayDate.getMonth();
      var delayDay = this.delayDate.getDate();

      var {activities} = this.calendarService.dayData [this.month] [this.day];
      Object.keys(activities).forEach((value, index) => {
        if (value)
          this.calendarService.dayData [delayMonth] [delayDay - 1].activities [index] = value;
      });
      this.calendarService.dayData [this.month] [this.day].activities = {};
    }
    else if (this.isCancel) this.calendarService.dayData [this.month][this.day].conflitsProp = 2;
    else {
      this.calendarService.dayData [this.month][this.day].conflitsProp = 0;
      this.calendarService.dayData [this.month][this.day].activities = this.activities;
    }
    
    this.calendarService.changeEvent.emit(true);
    this.modalService.dismissAll();
  }

  onSetWorking() {
    this.calendarService.dayData [this.month][this.day].conflitsProp = 3;
    
    this.calendarService.changeEvent.emit(true);
    this.modalService.dismissAll();
  }
}
