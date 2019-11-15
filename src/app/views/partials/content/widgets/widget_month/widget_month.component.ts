// Angular
import { Component, ContentChild, Input, OnInit, TemplateRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CalendarService } from '../../../../../core/services/calendar.service';
import { MonthService } from '../../../../../core/services/month.service';
import { DayService } from '../../../../../core/services/day.service';
import { UiService } from '../../../../../core/services/ui.service';
import { Subscription } from 'rxjs';
// Lodash
// import { shuffle } from 'lodash';
// Layout
// import { LayoutConfigService } from '../../../../../core/_base/layout';


@Component({
	selector: 'kt-widget_month',
	templateUrl: './widget_month.component.html',
	styleUrls: ['./widget_month.component.scss']
})
export class WidgetMonthComponent implements OnInit, OnDestroy {
	// Public properties
	@Input() month: number;
	
	subscription: Subscription;

	// @ContentChild('actionTemplate') actionTemplate: TemplateRef<any>;

	/**
	 * Component constructor
	 *
	 * @param layoutConfigService: LayoutConfigService
	 */
	constructor(
		public calendarService: CalendarService,
		public monthService: MonthService,
		private dayService: DayService,
		private uiService: UiService,
		private ref: ChangeDetectorRef) { }

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
		this.subscription = this.uiService.monthEvent.subscribe(() => {
			this.ref.detectChanges();
		})
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	getMonthContainerStyle() {
		var backColor = this.uiService.month.backColor;
		if (this.month % 2 == 1 && this.uiService.month.isBiBackColor)
			backColor = this.uiService.month.biBackColor;

		return {
			'background-color': backColor,
		};
	}

	getMonthTextStyle() {
		var txtColor = this.uiService.month.txtColor;
		if (this.month % 2 == 1 && this.uiService.month.isBiTxtColor)
			txtColor = this.uiService.month.biTxtColor;
			
		return {
			'color': txtColor,
			'font-family': this.uiService.month.fontFamily,
			'font-weight': this.uiService.month.isBold ? "bold": "normal"
		};
	}
}
