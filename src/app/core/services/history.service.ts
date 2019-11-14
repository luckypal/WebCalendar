import { Injectable, EventEmitter } from '@angular/core';
import { CalendarService } from './calendar.service';
import { ActivityService } from './activity.service';

export class History {
  calendar: string;
  activity: string;
}

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  histories: History[] = [];
  index: number = -1;
	changeEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private calendarService: CalendarService,
    private activityService: ActivityService
  ) { }

  pushHistory() {
    var calendar = this.calendarService.getData();
    var activity = this.activityService.getData();
    var data = {
      calendar: JSON.stringify(calendar),
      activity: JSON.stringify(activity)
    };

    this.index++;
    this.histories.splice(this.index, this.histories.length);
    this.histories.push(data);
    this.changeEvent.emit(true);
  }

  backHistory() {
    if (!this.isAbleToBack()) return;

    this.index--;
    var { calendar, activity } = this.histories[this.index];
    this.calendarService.setData(JSON.parse(calendar));
    this.activityService.setData(JSON.parse(activity));
    this.changeEvent.emit(true);
  }

  forwardHistory() {
    if (!this.isAbleToForward()) return;
    
    this.index++;
    var { calendar, activity } = this.histories[this.index];
    this.calendarService.setData(JSON.parse(calendar));
    this.activityService.setData(JSON.parse(activity));
    this.changeEvent.emit(true);
  }

  isAbleToBack() {
    return this.index > 0;
  }

  isAbleToForward() {
    return this.index < this.histories.length - 1;
  }
}
