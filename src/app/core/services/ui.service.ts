import { Injectable, EventEmitter } from '@angular/core';
import { ActivityService } from './activity.service';
import { position } from 'html2canvas/dist/types/css/property-descriptors/position';

export interface UIMonth {
  backColor: string;
  isBiBackColor: boolean;
  biBackColor: string;

  txtColor: string;
  isBiTxtColor: boolean;
  biTxtColor: string;

  isBold: boolean;

  fontFamily: string;

  sizeColumn: number;
  marginColumn: number;
  positionColumn: number;
}

export interface UIDay {
  isBoldDayNumber: boolean;
  
  dayLetterNumber: number;
  isDayBold: boolean;

  isShowWeeklyNumber: boolean;
  isBoldWeeklyNumber: boolean;
  weeklyNumberOnDate: number;
  positionWeeklyNumber: number;

  isShowDayName: boolean;
  isBoldDayName: boolean;
  isOnlyShowHoliday: boolean;
  positionDayName: number;

  delayedPosition: number;
  canceledPosition: number;

  sundayColor: string;
  holidayColor: string;
  normalColor: string;

  isHorzBorder: boolean;
  isVertBorder: boolean;
}

export interface UIActivity {
  positionOfAll: number;
  isPosSeparate: boolean;
  positions: number [];
}
export interface UIBackground {
  backFile: string;
  topHeaderHeight: number;

}
export interface UITitle {
  title: string;
  color: string;
  size: string;
}

@Injectable({
  providedIn: 'root'
})
export class UiService {
  fonts: string[];

  month: UIMonth;
  day: UIDay;
  activity: UIActivity;
  background: UIBackground;
  title: UITitle;

  monthEvent: EventEmitter<boolean> = new EventEmitter();
  dayEvent: EventEmitter<boolean> = new EventEmitter();
  activityEvent: EventEmitter<boolean> = new EventEmitter();
  backgroundEvent: EventEmitter<boolean> = new EventEmitter();
  titleEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private activityService: ActivityService
  ) {
    this.fonts = ["Arial", "Robot"];

    this.resetMonth();
    this.resetDay();
    this.resetActivity();
    this.resetBackground();
    this.resetTitle();
  }

  resetMonth() {
    this.month = {
      backColor: "#fd397a",
      isBiBackColor: true,
      biBackColor: "#444444",
      txtColor: "#ffffff",
      isBiTxtColor: false,
      biTxtColor: "#aaaaaa",
      isBold: true,
      fontFamily: this.fonts [0],
      sizeColumn: 100,
      marginColumn: 0,
      positionColumn: 0
    }
  }

  resetDay() {
    this.day = {
      isBoldDayNumber: false,
  
      dayLetterNumber: 3,
      isDayBold: false,

      isShowWeeklyNumber: false,
      isBoldWeeklyNumber: false,
      weeklyNumberOnDate: 0,
      positionWeeklyNumber: 50,

      isShowDayName: true,
      isBoldDayName: false,
      isOnlyShowHoliday: false,
      positionDayName: 100,

      delayedPosition: 30,
      canceledPosition: 30,

      sundayColor: "#eeeeee",
      holidayColor: "#fff8e8",
      normalColor: "#ffffff",

      isHorzBorder: true,
      isVertBorder: false,
    }
  }

  resetActivity() {
    var positions = [];
    for (var i = 0; i < this.activityService.count; i ++)
      positions.push(30 + i * 25 / 1.5);

    this.activity = {
      positionOfAll: 30,
      isPosSeparate: false,
      positions
    };
  }
  
  resetBackground() {
    this.background = {
      backFile: null,
      topHeaderHeight: 200,
    };
  }
  
  resetTitle() {
    this.title = {
      title: null,
      color: "#ff0000",
      size: "50",
    };
  }

	getData() {
		return {
			month: this.month,
      day: this.day,
      activity: this.activity,
      background: this.background,
      title: this.title,
		}
	}

	setData(data) {
		this.month = data.month;
		this.day = data.day;
    this.activity = data.activity;
    this.background = data.background;
    this.title = data.title;

		this.monthEvent.emit(false);
		this.dayEvent.emit(false);
		this.activityEvent.emit(false);
    this.backgroundEvent.emit(false);
    this.titleEvent.emit(false);
	}
}
