// Angular
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { HistoryService } from '../../../../../core/services/history.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PublishModalComponent } from '../../modal/publish-modal/publish-modal.component';

@Component({
	selector: 'kt-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit, OnDestroy {
	subscription: Subscription;

	constructor(
		private historyService: HistoryService,
		private ref: ChangeDetectorRef,
		private modalService: NgbModal) { }

	ngOnInit() {
		this.subscription = this.historyService.changeEvent.subscribe(value => {
			this.ref.detectChanges();
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	getBtnUndoStyle() {
		return {
			opacity: this.historyService.isAbleToBack() ? 1 : 0.2
		}
	}

	getBtnRedoStyle() {
		return {
			opacity: this.historyService.isAbleToForward() ? 1 : 0.2
		}
	}

	onBtnUndo() {
		this.historyService.backHistory();
	}

	onBtnRedo() {
		this.historyService.forwardHistory();
	}

	onBtnPublish() {
		var event = new Event('click');
		document.getElementById("kt_scrolltop").dispatchEvent(event);

		this.modalService.open(PublishModalComponent, {
			size: 'lg'
		});
	}

	onBtnHelp() {

	}
}
