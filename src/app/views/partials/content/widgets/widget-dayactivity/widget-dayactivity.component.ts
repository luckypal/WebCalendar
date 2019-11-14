import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivityService } from '../../../../../core/services/activity.service';
import { Subscription } from 'rxjs';
import { DayData } from '../../../../../core/services/calendar.service';

@Component({
  selector: 'kt-widget-dayactivity',
  templateUrl: './widget-dayactivity.component.html',
  styleUrls: ['./widget-dayactivity.component.scss']
})
export class WidgetDayactivityComponent implements OnInit, OnDestroy {
  @Input() activityIndex: number;
  @Input() dayData: DayData;
  subscription: Subscription;

  constructor(
    private activityService: ActivityService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.subscription = this.activityService.changeEvent.subscribe(value => {
      this.ref.detectChanges();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isActive() {
    return this.dayData.activities [this.activityIndex]
      && this.activityService.configuration [this.activityIndex].isActive;
  }

  getStyle() {
    return {
      'margin-left': `${this.activityService.configuration [this.activityIndex].marginLeft}px`,
      'opacity': this.dayData.conflitsProp == 1 || this.dayData.conflitsProp == 2 ? 0.2 : 1
    }
  }
}
