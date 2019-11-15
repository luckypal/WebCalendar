// Angular
import { AfterViewInit, Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
// RxJS
import { Subscription } from 'rxjs';
// Layout
import { SubheaderService } from '../../../../../core/_base/layout';
import { Breadcrumb } from '../../../../../core/_base/layout/services/subheader.service';
import { CalendarService } from '../../../../../core/services/calendar.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MonthViewComponent } from '../../../../themes/default/modal/month-view/month-view.component';
import { DayModalComponent } from '../../../../themes/default/modal/day-modal/day-modal.component';
import { ActivityUIModalComponent } from '../../../../themes/default/modal/activity-uimodal/activity-uimodal.component';
import { BackgroundUIModalComponent } from '../../../../themes/default/modal/background-uimodal/background-uimodal.component';
import { TitleDisplayModalComponent } from '../../../../themes/default/modal/title-display-modal/title-display-modal.component';

@Component({
	selector: 'kt-subheader1',
	templateUrl: './subheader1.component.html',
	styleUrls: ['./subheader1.component.scss']
})
export class Subheader1Component implements OnInit, OnDestroy, AfterViewInit {
	// Public properties
	today: number = Date.now();
	title: string = '';
	desc: string = '';
	breadcrumbs: Breadcrumb[] = [];

	// Public properties
	public subscriptions: Subscription[] = [];
	public calendarSubscription: Subscription;

	/**
	 * Component constructor
	 *
	 * @param subheaderService: SubheaderService
	 */
	constructor(
		public subheaderService: SubheaderService,
		public calendarService: CalendarService,
		public modalService: NgbModal,
		public ref: ChangeDetectorRef) {
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
		this.calendarSubscription = this.calendarService.changeEvent.subscribe(value => {
			this.ref.detectChanges();
		});
	}

	/**
	 * After view init
	 */
	ngAfterViewInit(): void {
		this.subscriptions.push(this.subheaderService.title$.subscribe(bt => {
			// breadcrumbs title sometimes can be undefined
			if (bt) {
				Promise.resolve(null).then(() => {
					this.title = bt.title;
					this.desc = bt.desc;
				});
			}
		}));

		this.subscriptions.push(this.subheaderService.breadcrumbs$.subscribe(bc => {
			Promise.resolve(null).then(() => {
				this.breadcrumbs = bc;
			});
		}));
	}

	/**
	 * On destroy
	 */
	ngOnDestroy(): void {
		this.subscriptions.forEach(sb => sb.unsubscribe());
		this.calendarSubscription.unsubscribe();
	}

	onSetViewMode(viewMode) {
		this.calendarService.pageViewMode = viewMode;
		this.calendarService.changeEvent.emit(true);
	}

	onBtnMonthView() {
		this.modalService.open(MonthViewComponent, {
			size: 'lg'
		});
	}

	onBtnDayView() {
		this.modalService.open(DayModalComponent, {
			size: 'lg'
		});
	}

	onBtnActivityModal() {
		this.modalService.open(ActivityUIModalComponent, {
			size: 'lg'
		});
	}

	onBtnBackgroundModal() {
		this.modalService.open(BackgroundUIModalComponent, {
			size: 'lg'
		});
	}
	onBtnTitleDisplayModal() {
		this.modalService.open(TitleDisplayModalComponent, {
			size: 'lg'
		});
	}
}
