// Angular
import { AfterViewInit, Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
// RxJS
import { Subscription } from 'rxjs';
// Layout
import { SubheaderService } from '../../../../../core/_base/layout';
import { Breadcrumb } from '../../../../../core/_base/layout/services/subheader.service';
import { CalendarService } from '../../../../../core/services/calendar.service';

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

	// Private properties
	private subscriptions: Subscription[] = [];
	private calendarSubscription: Subscription;

	/**
	 * Component constructor
	 *
	 * @param subheaderService: SubheaderService
	 */
	constructor(
		public subheaderService: SubheaderService,
		private calendarService: CalendarService,
		private ref: ChangeDetectorRef) {
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
}
