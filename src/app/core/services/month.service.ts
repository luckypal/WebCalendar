import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MonthService {

  monthNames: String[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  constructor() {
    this.reset();
  }

  reset() {
  }

  //Get day count in specific month
	daysInMonth(year, month) {
		return new Date(year, month + 1, 0).getDate();
	}
}
