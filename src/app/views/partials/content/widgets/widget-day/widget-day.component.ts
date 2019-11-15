import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CalendarService, DayData } from '../../../../../core/services/calendar.service';
import { DayService } from '../../../../../core/services/day.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EditDayActivityComponent } from '../../../../../views/themes/default/modal/edit-day-activity/edit-day-activity.component';
import { Subscription } from 'rxjs';
import { UiService } from '../../../../../core/services/ui.service';

@Component({
  selector: 'kt-widget-day',
  templateUrl: './widget-day.component.html',
  styleUrls: ['./widget-day.component.scss']
})
export class WidgetDayComponent implements OnInit, OnDestroy {
  @Input() month: number;
  @Input() day: number;
  dayData: DayData = null;
  activities: string[] = [];
  
  subscription: Subscription;
  dayUiSubscription: Subscription;
  activityUiSubscription: Subscription;

  leftOffset = 15 + 30;

  constructor(
    private calendarService: CalendarService,
    private dayService: DayService,
    private uiService: UiService,
    private ref: ChangeDetectorRef,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.dayData = this.calendarService.dayData[this.month][this.day];
    this.activities = Object.keys(this.dayData.activities).sort();

    this.subscription = this.calendarService.changeEvent.subscribe(value => {
      this.activities = Object.keys(this.dayData.activities).sort();
      this.ref.detectChanges();
    });
    
    this.dayUiSubscription = this.uiService.dayEvent.subscribe(value => {
      this.ref.detectChanges();
    });
    
    this.activityUiSubscription = this.uiService.activityEvent.subscribe(value => {
      this.ref.detectChanges();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.dayUiSubscription.unsubscribe();
    this.activityUiSubscription.unsubscribe();
  }

  getWeekDay() {
    return this.dayService.getDayName(this.dayData.dayOfWeek).substr(0, this.uiService.day.dayLetterNumber);
  }

  getWeekNumber() {
    if (!this.uiService.day.isShowWeeklyNumber) return "";
    if (this.dayData.dayOfWeek != this.uiService.day.weeklyNumberOnDate) return "";
    return this.dayData.weekNumber + 1;
  }
  
  getDayName() {
    if (!this.uiService.day.isShowDayName) return "";
    if (this.uiService.day.isOnlyShowHoliday && this.dayData.holidayLvl != 2) return "";

    return this.dayData.dayName;
  }

  onEditDay() {
    const modal: NgbModalRef = this.modalService.open(EditDayActivityComponent, {
      size: 'lg'
    });
    modal.componentInstance.month = this.month;
    modal.componentInstance.day = this.day;
  }

  getContainerStyle() {
    var backColor = this.uiService.day.normalColor;

    if (this.dayData.holidayLvl == 1)
      backColor = this.uiService.day.sundayColor;
    if (this.dayData.holidayLvl == 2)
      backColor = this.uiService.day.holidayColor;

    if (this.dayData.holidayLvl == 2
      && this.dayData.conflitsProp == 0
      && this.calendarService.isHasActiveActivity(this.dayData.activities))
      backColor = this.dayService.holidayWarningBackground;

    return {
      backgroundColor: backColor,
      'border-bottom': this.uiService.day.isHorzBorder ? '1px solid #eee' : 'none'
    };
  }

  getDayNumberStyle() {
    return {
      'font-weight': this.uiService.day.isBoldDayNumber ? 'bold' : 'normal'
    }
  }

  getWeekDayStyle() {
    return {
      'font-weight': this.uiService.day.isDayBold ? 'bold' : 'normal'
    }
  }

  getWeekNumberStyle() {
    const left = this.leftOffset + this.uiService.day.positionWeeklyNumber * 1.5;
    return {
      'font-weight': this.uiService.day.isBoldWeeklyNumber ? 'bold' : 'normal',
      'left': `${left}px`
    };
  }

  getDayNameStyle() {
    return {
      'font-weight': this.uiService.day.isBoldDayName ? 'bold' : 'normal',
      'right': `${15 + 100 - this.uiService.day.positionDayName}px`
    };
  }

  getDelayedStyle() {
    return {
      'left': `${this.leftOffset + this.uiService.day.delayedPosition * 1.5}px`
    }
  }

  getCancelledStyle() {
    return {
      'left': `${this.leftOffset + this.uiService.day.canceledPosition * 1.5}px`
    }
  }

  getActivityStyle(activityIndex) {
    var left = 0;
    if (!this.uiService.activity.isPosSeparate)
      left = this.leftOffset + activityIndex * 25 + this.uiService.activity.positionOfAll * 1.5;
    else
      left = this.leftOffset + this.uiService.activity.positions [activityIndex] * 1.5;

    return {
      'left': `${left}px`
    }
  }
}
