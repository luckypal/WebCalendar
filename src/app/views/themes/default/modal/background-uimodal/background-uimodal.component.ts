import { Component, OnInit } from '@angular/core';
import { UiService } from '../../../../../core/services/ui.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'kt-background-uimodal',
  templateUrl: './background-uimodal.component.html',
  styleUrls: ['./background-uimodal.component.scss']
})
export class BackgroundUIModalComponent implements OnInit {
  backgroundFile: File;

  constructor( 
    public uiService: UiService,
    private modalService: NgbModal
  ) {}

  onClose() {
    this.modalService.dismissAll();
  }

  ngOnInit() {
  }

  updateUI() {
    this.uiService.backgroundEvent.emit(true);
  }

  updateBackgroundFile($event) {
    
    var file = $event.srcElement.files[0];
    var reader = new FileReader();

    reader.addEventListener("load", () => {
      this.uiService.background.backFile = reader.result.toString();
      this.uiService.backgroundEvent.emit(true);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
    
  }
}
