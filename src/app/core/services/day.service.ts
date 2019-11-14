import { Injectable } from '@angular/core';
import DayNames from '../../../data/day.json';

@Injectable({
  providedIn: 'root'
})

export class DayService {

  //	dayNames: string[] = ["L", "M", "M", "J", "V", "S", "D"];
  holidayBackground: string[] = ["#fff", "#EEEEEE", "#EEEEEE"];
  holidayWarningBackground: string = "#FFCDD2";
  dayNames: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  constructor() {
    this.reset();
  }

  reset() {
  }

  //Get day of week. sunday: 0, saturday: 6
	dateOfDay(year, month, date) {
		return new Date(year, month, date).getDay();
  }

  getDayName(dayOfWeek) {
    return this.dayNames [dayOfWeek];
  }
  
  getHolidayName(year, month, day) {
    var dayName = this.getSpecialHolidayName(year, month, day + 1);
    if (dayName)
      return {dayName, holidayLvl: 2};
    else {
      var monthName = Object.keys(DayNames)[month];
      var isSunday = new Date(year, month, day + 1).getDay() == 0;
      return {dayName: DayNames[monthName][day][0], holidayLvl: isSunday ? 1 : 0};
    }
  }

  getSpecialHolidayName(year, month, day) {
    var n = new Date(year, month, day)
      , a = n.getFullYear()
      , i = new Date(a, 0, 1)
      , o = new Date(a, 4, 1)
      , s = new Date(a, 4, 8)
      , l = new Date(a, 6, 14)
      , c = new Date(a, 7, 15)
      , d = new Date(a, 10, 1)
      , u = new Date(a, 10, 11)
      , A = new Date(a, 11, 25)
      , f = a % 19
      , h = Math.floor(a / 100)
      , m = (h - Math.floor(h / 4) - Math.floor((8 * h + 13) / 25) + 19 * f + 15) % 30
      , p = m - Math.floor(m / 28) * (1 - Math.floor(m / 28) * Math.floor(29 / (m + 1)) * Math.floor((21 - f) / 11))
      , g = p - (1 * a + Math.floor(a / 4) + p + 2 - h + Math.floor(h / 4)) % 7
      , _ = 3 + Math.floor((g + 40) / 44)
      , v = g + 28 - 31 * Math.floor(_ / 4)
      , b = new Date(a, _ - 1, v + 1)
      , C = new Date(a, _ - 1, v + 39)
      , w = new Date(a, _ - 1, v + 50);
    return n.getTime() === i.getTime() ? "Jour de l'an" : n.getTime() === b.getTime() ? "L. de Pâcques" : n.getTime() === o.getTime() ? "Fête du Travail" : n.getTime() === s.getTime() ? "Victoire 1945" : n.getTime() === C.getTime() ? "Ascension" : n.getTime() === w.getTime() ? "L. de Pentecôte" : n.getTime() === l.getTime() ? "Fête nationale" : n.getTime() === c.getTime() ? "Assomption" : n.getTime() === d.getTime() ? "Toussaint" : n.getTime() === u.getTime() ? "Armistice" : n.getTime() === A.getTime() ? "Noël" : null
  }
}
