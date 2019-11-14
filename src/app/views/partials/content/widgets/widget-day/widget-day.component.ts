import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CalendarService, DayData } from '../../../../../core/services/calendar.service';
import { DayService } from '../../../../../core/services/day.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EditDayActivityComponent } from '../../../../../views/themes/default/modal/edit-day-activity/edit-day-activity.component';
import { Subscription } from 'rxjs';

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

  constructor(
    private calendarService: CalendarService,
    private dayService: DayService,
    private ref: ChangeDetectorRef,
		private modalService: NgbModal) { }

  ngOnInit() {
    this.dayData = this.calendarService.dayData[this.month][this.day];
    this.activities = Object.keys(this.dayData.activities).sort();
    
    this.subscription = this.calendarService.changeEvent.subscribe(value => {
      this.activities = Object.keys(this.dayData.activities).sort();
      this.ref.detectChanges();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getStyle() {
    if (this.dayData.holidayLvl == 2
      && this.dayData.conflitsProp == 0
      && this.calendarService.isHasActiveActivity(this.dayData.activities))
      return { backgroundColor: this.dayService.holidayWarningBackground };
    
    return { backgroundColor: this.dayService.holidayBackground [this.dayData.holidayLvl] };
  }

	onEditDay() {
		const modal: NgbModalRef = this.modalService.open(EditDayActivityComponent, {
			size: 'lg'
    });
    modal.componentInstance.month = this.month;
    modal.componentInstance.day = this.day;
	}
}
