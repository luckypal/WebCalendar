import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import * as jsPDF from 'jspdf'
import jsPDF from 'jspdf';
import { ActivityService } from '../../../../../core/services/activity.service';
import { CalendarService } from '../../../../../core/services/calendar.service';
import { PublishService } from '../../../../../core/services/publish.service';

@Component({
  selector: 'kt-publish-modal',
  templateUrl: './publish-modal.component.html',
  styleUrls: ['./publish-modal.component.scss']
})
export class PublishModalComponent implements OnInit {
  calendarName: string = "test";
  publishType: number = 1;      //Image: 0, PDF: 1

  constructor(
    private activityService: ActivityService,
    private calendarService: CalendarService,
    private publishService: PublishService,
    private modalService: NgbModal) { }

  ngOnInit() {
  }

  onClose() {
    this.modalService.dismissAll();
  }

  onBtnGenerate() {
    if (!this.calendarName) {
      alert("Please input calendar name.");
      return;
    }

    var { pageViewMode } = this.calendarService;
    var printElements = [];

    if (pageViewMode == 0)
      printElements.push(document.getElementById("main-print-view"));
    else {
      printElements.push(document.getElementById("main-print-view-0"));
      printElements.push(document.getElementById("main-print-view-1"));
    }

    if (this.publishType == 0) {  //Image
      printElements.forEach((printElement, index) => {
        html2canvas(printElement).then(canvas => {
          canvas.toBlob(blobData => {
            var fileName = this.calendarName;
            if (printElements.length > 1)
              fileName = `${fileName}-${index + 1}`;
            this.downloadBlobData(fileName, blobData);
          }, "image/png", 10);
        });
      });
    } else { //PDF        
      var doc = new jsPDF({
        orientation: this.publishService.orientation(),
        unit: this.publishService.pdfUnit,
        format: this.publishService.pdfFormat
      });

      var pageCanvases = {};

      new Promise((resolve, reject) => {
        printElements.forEach(async (printElement, index) => {
          var canvas = await html2canvas(printElement)
          pageCanvases [index] = canvas;
          if (Object.keys(pageCanvases).length == printElements.length)
            resolve();
        });
      }).then(() => {
        for (var index = 0; index < printElements.length; index ++) {
          var canvas = pageCanvases [index];
          if (index == printElements.length - 1 && index != 0)
            doc.addPage("a4", this.publishService.orientation());

          doc.addImage(canvas, 'PNG', 0, 0, this.publishService.getPaperWidth(), this.publishService.getPaperHeight());
          doc.save(this.calendarName);
        }
      });
    }
  }

  downloadBlobData(filename, blobData) {
    if (window.navigator && window.navigator.msSaveOrOpenBlob) { //IE
      window.navigator.msSaveOrOpenBlob(blobData, filename);
    } else { // chrome
      const blob = new Blob([blobData], { type: "image/png" });
      const url = window.URL.createObjectURL(blob);
      // window.open(url);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
    }
  }
}
