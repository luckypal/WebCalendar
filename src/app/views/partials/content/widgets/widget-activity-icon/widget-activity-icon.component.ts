import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivityService } from '../../../../../core/services/activity.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'kt-widget-activity-icon',
  templateUrl: './widget-activity-icon.component.html',
  styleUrls: ['./widget-activity-icon.component.scss']
})
export class WidgetActivityIconComponent implements OnInit, OnDestroy {
  @Input() activityIndex: number;
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

  getStyle() {
    return {
      'color': this.getColor(),
    }
  }

  getIcon() {
    var { type } = this.activityService.configuration[this.activityIndex];
    return this.activityService.activityTypes[type].icon;
  }

  getColor() {
    return this.activityService.configuration[this.activityIndex].color;
  }

}
