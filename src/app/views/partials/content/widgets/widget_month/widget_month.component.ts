// Angular
import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { CalendarService } from '../../../../../core/services/calendar.service';
import { MonthService } from '../../../../../core/services/month.service';
import { DayService } from '../../../../../core/services/day.service';
// Lodash
// import { shuffle } from 'lodash';
// Layout
// import { LayoutConfigService } from '../../../../../core/_base/layout';


@Component({
	selector: 'kt-widget_month',
	templateUrl: './widget_month.component.html',
	styleUrls: ['./widget_month.component.scss']
})
export class WidgetMonthComponent implements OnInit {
	// Public properties
	@Input() month: number;

	// @ContentChild('actionTemplate') actionTemplate: TemplateRef<any>;

	/**
	 * Component constructor
	 *
	 * @param layoutConfigService: LayoutConfigService
	 */
	constructor(
		private calendarService: CalendarService,
		private monthService: MonthService,
		private dayService: DayService) { }

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
	}
}
