// Angular
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
// Lodash
import { shuffle } from 'lodash';
// Services
import { LayoutConfigService } from '../../../core/_base/layout';
// Widgets model
import { SparklineChartOptions } from '../../../core/_base/metronic';
import { CalendarService, DayData } from '../../../core/services/calendar.service';
import { MonthService } from '../../../core/services/month.service';
import { DayService } from '../../../core/services/day.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EditDayActivityComponent } from '../../themes/default/modal/edit-day-activity/edit-day-activity.component';
import { Subscription } from 'rxjs';
import { ActivityService } from '../../../core/services/activity.service';
import { HistoryService } from '../../../core/services/history.service';
import { PublishService } from '../../../core/services/publish.service';

@Component({
	selector: 'kt-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
	calendarSubscription: Subscription;
	activitySubscription: Subscription;

	constructor(
		private layoutConfigService: LayoutConfigService,
		private calendarService: CalendarService,
		private activityService: ActivityService,
		private monthService: MonthService,
		private dayService: DayService,
		private historyService: HistoryService,
		private publishService: PublishService,
		private ref: ChangeDetectorRef,
		private modalService: NgbModal) {
	}

	ngOnInit(): void {
    this.calendarSubscription = this.calendarService.changeEvent.subscribe(value => {
      if (value) this.historyService.pushHistory();

			this.calendarService.conflitDays = this.calendarService.getConflitDays();
			
			this.ref.detectChanges();
		});
		
    this.activitySubscription = this.activityService.changeEvent.subscribe(value => {
			if (value) this.historyService.pushHistory();
			
			this.ref.detectChanges();
		});
		
		this.historyService.pushHistory();
	}

  ngOnDestroy() {
    this.calendarSubscription.unsubscribe();
    this.activitySubscription.unsubscribe();
	}
	
	onFixConflits() {
		var conflitDays = this.calendarService.getConflitDays();
		if (conflitDays.length == 0) return;

		var firstConflit: DayData = conflitDays [0];
		
		const modal: NgbModalRef = this.modalService.open(EditDayActivityComponent, {
			size: 'lg'
    });
    modal.componentInstance.month = firstConflit.month;
    modal.componentInstance.day = firstConflit.day;
	}
}
