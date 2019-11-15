import { Injectable, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { DayService } from './day.service';
import { MonthService } from './month.service';

export interface SaveOption {
	type: number;					//Image(Png): 0		PDF: 1
	title: string;
}

export interface DayData {
	month: number;
	weekNumber: number;
	day: number;
	dayOfWeek: number;
	dayName: string;
	holidayLvl: number;		//Special Holiday: 2, Sunday: 1, Normal: 0
	activities: {};
	conflitsProp: number;	//Nothing: 0, isDelayed: 1, isCancelled: 2, anyway work: 3
}

@Injectable({
	providedIn: 'root'
})

export class CalendarService {
	saveOptions: SaveOption[];

	year: number;
	dayData: DayData[][] = [];
	pageViewMode: number = 0;		//Portrait-1: 0, Portrait-2: 1,	Landscape-2: 2

	changeEvent: EventEmitter<boolean> = new EventEmitter();
	conflitDays: DayData[] = [];

	constructor(
		public monthService: MonthService,
		public dayService: DayService
	) {
		this.saveOptions = [];
		this.saveOptions.push({ type: 0, title: "Image [PNG]" });
		this.saveOptions.push({ type: 1, title: "PDF" });

		this.reset();
	}

	reset() {
		this.year = new Date().getFullYear();
		var weekNumber = 0;

		for (var month = 0; month < this.monthService.monthNames.length; month++) {
			var dayNums = this.monthService.daysInMonth(this.year, month);
			var monthData: DayData[] = [];

			for (var i = 0; i < dayNums; i++) {
				var dayOfWeek = this.dayService.dateOfDay(this.year, month, i);
				var { dayName, holidayLvl } = this.dayService.getHolidayName(this.year, month, i);

				monthData.push({
					month: month,
					weekNumber: weekNumber,
					day: i,
					dayOfWeek,
					dayName,
					holidayLvl,
					activities: {},
					conflitsProp: 0,
				});

				if (dayOfWeek == 5)
					weekNumber ++;
			}
			this.dayData.push(monthData);
		}
	}

	getData() {
		return {
			year: this.year,
			dayData: this.dayData,
			pageViewMode: this.pageViewMode
		}
	}

	setData(data) {
		this.year = data.year;
		this.dayData = data.dayData;
		this.pageViewMode = data.pageViewMode;
		this.changeEvent.emit(false);
	}

	addActivity(startDate: Date, lastDate: Date, currentActivity: number, currentFrequence: number) {
		var calcTime = startDate.getTime();
		var lastTime = lastDate.getTime();

		while (calcTime <= lastTime) {
			var date = new Date(calcTime);
			var month = date.getMonth();
			var day = date.getDate() - 1;

			var dayData = this.dayData[month][day];
			dayData.activities[currentActivity] = true;

			calcTime += (currentFrequence + 1) * 7 * 24 * 60 * 60 * 1000;
		}

		this.changeEvent.emit(true);
	}

	getConflitDays() {
		var conflitDays = [];

		for (var month = 0; month < this.dayData.length; month++)
			for (var day = 0; day < this.dayData[month].length; day++) {
				var dayData = this.dayData[month][day];
				if (dayData.holidayLvl == 2
					&& dayData.conflitsProp == 0
					&& this.isHasActiveActivity(dayData.activities)) {
					conflitDays.push(dayData);
				}
			}

		return conflitDays;
	}

	isHasActiveActivity(activities) {
		var isActive = false;
		Object.keys(activities).forEach((key, index) => {
			if (activities[key]) isActive = true;
		});
		return isActive;
	}

	getActivityCount(activityIndex) {
		var activityCount = 0;

		for (var month = 0; month < this.dayData.length; month++)
			for (var day = 0; day < this.dayData[month].length; day++) {
				var dayData = this.dayData[month][day];
				if (dayData.activities [activityIndex])
					activityCount ++;
			}
		
		return activityCount;
	}
}
