import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { environment } from '../../../../../../environments/environment';
import { ActivityService } from '../../../../../core/services/activity.service';
import { CalendarService } from '../../../../../core/services/calendar.service';
import { UiService } from '../../../../../core/services/ui.service';
import { HistoryService } from '../../../../../core/services/history.service';

export interface Response {
  result?: number;
  data?: Object | any[] | any;
  message?: String;
}

@Component({
  selector: 'kt-save-modal',
  templateUrl: './save-modal.component.html',
  styleUrls: ['./save-modal.component.scss']
})
export class SaveModalComponent implements OnInit {
  calendarName = "";
  items: any = [];

  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private afAuth: AngularFireAuth,
    private activityService: ActivityService,
    private calendarService: CalendarService,
    private uiService: UiService,
    private historyService: HistoryService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    var userId = this.afAuth.auth.currentUser.uid;
    var url = `${environment.serverUrl}/getList/${userId}`;
    this.http.get(url).toPromise()
      .then((response: Response) => {
        if (response.result)
          this.items = response.data;
        this.ref.detectChanges();
      })
  }

  onClose() {
    this.modalService.dismissAll();
  }

  getData() {
    return {
      name: this.calendarName,
      data: {
        activity: this.activityService.getData(),
        calendar: this.calendarService.getData(),
        ui: this.uiService.getData()
      },
    }
  }

  onSave() {
    var userId = this.afAuth.auth.currentUser.uid;
    var url = `${environment.serverUrl}/insertData/${userId}`;
    var data = this.getData();

    this.http.post(url, data).toPromise()
      .then((response: Response) => {
        this.calendarName = "";
      });
  }

  onOpen(id) {
    var userId = this.afAuth.auth.currentUser.uid;
    var url = `${environment.serverUrl}/getItem/${userId}/${id}`;
    this.http.get(url).toPromise()
      .then((response: Response) => {
        var {data} = response;
        console.log(data);
        data = JSON.parse(data);
        const {activity, calendar, ui} = data;
        this.activityService.setData(activity);
        this.calendarService.setData(calendar);
        this.uiService.setData(ui);

        this.historyService.reset();
        this.modalService.dismissAll();
      })
  }

  onOverride(id) {
    if (!confirm("Do you want to override on this item?")) return;

    var userId = this.afAuth.auth.currentUser.uid;
    var url = `${environment.serverUrl}/updateData/${userId}/${id}`;
    var data = this.getData();

    this.http.post(url, data).toPromise()
      .then((response: Response) => {
      });
  }

  onRemove(id) {
    if (!confirm("Do you want to remove this item?")) return;
    
    var userId = this.afAuth.auth.currentUser.uid;
    var url = `${environment.serverUrl}/removeItem/${userId}/${id}`;
    this.http.get(url).toPromise()
      .then((response: Response) => {
        this.getList();
      })
  }
}
