import { Injectable } from '@angular/core';
import { CalendarService } from './calendar.service';

@Injectable({
  providedIn: 'root'
})
export class PublishService {

  pdfFormat: string = "a4";
  pdfUnit: string = "mm";

  a4Width: number = 210;
  a4Height: number = 297;

  constructor(
    private calendarService: CalendarService
  ) {
    window.addEventListener("resize", (e) => {
      var item = document.getElementsByClassName("kt-portlet").item(0);
      // console.log(item.clientWidth, item.clientHeight);
    });
  }

  orientation() {
    return this.calendarService.pageViewMode == 2 ? 'p' : 'l';
  }

  getPaperWidth() {
    return this.orientation() == 'p' ? this.a4Width : this.a4Height;
  }

  getPaperHeight() {
    return this.orientation() == 'p' ? this.a4Height : this.a4Width;
  }
}
